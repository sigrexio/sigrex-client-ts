const fs = require('fs');
const path = require('path');

const inputArg = process.argv[2];
let spec;
if (inputArg) {
  spec = JSON.parse(fs.readFileSync(inputArg, 'utf8'));
} else {
  const content = fs.readFileSync('C:\\Users\\kulio\\.gemini\\antigravity\\brain\\b4f9b288-f2ea-4808-8d1b-0ebcd8a3d02b\\.system_generated\\steps\\3\\content.md', 'utf8');
  const jsonStart = content.indexOf('{', content.indexOf('---'));
  const jsonStr = content.slice(jsonStart);
  spec = JSON.parse(jsonStr);
}

if (!spec.components) {
  spec.components = {};
}
if (!spec.components.schemas) {
  spec.components.schemas = {};
}

const schemas = spec.components.schemas;
const missingRefs = new Set();

function checkRefs(obj) {
  if (!obj || typeof obj !== 'object') return;
  if (Array.isArray(obj)) {
    obj.forEach(item => checkRefs(item));
    return;
  }
  for (const [key, val] of Object.entries(obj)) {
    if (key === '$ref') {
      if (val.startsWith('#/components/schemas/')) {
        const schemaName = val.substring('#/components/schemas/'.length);
        if (!schemas[schemaName]) {
          missingRefs.add(schemaName);
        }
      }
    } else {
      checkRefs(val);
    }
  }
}

checkRefs(spec);

console.log('Found ' + missingRefs.size + ' missing schemas. Patching them as stub objects...');

for (const schemaName of missingRefs) {
  schemas[schemaName] = {
    type: 'object',
    description: 'Stub schema for missing ref ' + schemaName,
    additionalProperties: true
  };
}

fs.writeFileSync('sigrex_patched.json', JSON.stringify(spec, null, 2), 'utf8');
console.log('Patched OpenAPI spec saved to sigrex_patched.json');
