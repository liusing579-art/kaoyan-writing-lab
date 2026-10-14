import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const entriesDir = path.join(root, 'data', 'knowledge', 'entries');
const required = ['id', 'title', 'knowledge_type', 'status', 'evidence_level', 'source_refs', 'distilled_rule', 'validation_cases', 'review'];
const statuses = new Set(['draft', 'reviewing', 'verified', 'archived']);
const evidence = new Set(['source-backed', 'partially-validated', 'validated', 'inferred']);
const files = fs.readdirSync(entriesDir).filter((file) => file.endsWith('.json'));
const ids = new Set();
const errors = [];

for (const file of files) {
  const full = path.join(entriesDir, file);
  let item;
  try {
    item = JSON.parse(fs.readFileSync(full, 'utf8'));
  } catch (error) {
    errors.push(`${file}: invalid JSON (${error.message})`);
    continue;
  }
  for (const field of required) {
    if (!(field in item)) errors.push(`${file}: missing required field ${field}`);
  }
  if (item.id && ids.has(item.id)) errors.push(`${file}: duplicate id ${item.id}`);
  if (item.id) ids.add(item.id);
  if (item.status && !statuses.has(item.status)) errors.push(`${file}: invalid status ${item.status}`);
  if (item.evidence_level && !evidence.has(item.evidence_level)) errors.push(`${file}: invalid evidence_level ${item.evidence_level}`);
  if (!Array.isArray(item.source_refs) || item.source_refs.length === 0) errors.push(`${file}: source_refs must be a non-empty array`);
  if (!Array.isArray(item.validation_cases)) errors.push(`${file}: validation_cases must be an array`);
  if (item.validation_cases?.some((test) => !['pending', 'pass', 'revise', 'fail'].includes(test.result))) {
    errors.push(`${file}: validation case has an invalid result`);
  }
  if (item.status === 'verified') {
    const hasPass = item.validation_cases?.some((test) => test.result === 'pass');
    if (!hasPass || item.evidence_level !== 'validated') errors.push(`${file}: verified entries require validated evidence and at least one passing case`);
  }
}

if (files.length === 0) errors.push('No knowledge entry JSON files found');
if (errors.length) {
  console.error('Knowledge validation failed');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Knowledge validation passed: ${files.length} entries checked.`);
