const fs = require('fs');

const inputArg = process.argv[2];
if (!inputArg) {
  console.error('Usage: node patch_spec.js <openapi.json>');
  process.exit(1);
}

const spec = JSON.parse(fs.readFileSync(inputArg, 'utf8'));

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
