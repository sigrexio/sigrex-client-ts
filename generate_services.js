const fs = require('fs');
const path = require('path');

const spec = JSON.parse(fs.readFileSync('sigrex_patched.json', 'utf8'));

const groups = {
  exchanges: {
    prefix: '/api/v2/exchange',
    className: 'ExchangesService',
    fileName: 'exchanges.ts'
  },
  llmSessions: {
    prefix: '/api/v2/strategy/llm-session',
    className: 'LlmSessionsService',
    fileName: 'llmSessions.ts'
  },
  llmReactions: {
    prefix: '/api/v2/strategy/reaction/llm',
    className: 'LlmReactionsService',
    fileName: 'llmReactions.ts'
  },
  codeReactions: {
    prefix: '/api/v2/strategy/reaction/code',
    className: 'CodeReactionsService',
    fileName: 'codeReactions.ts'
  },
  codeStrategies: {
    prefix: '/api/v2/strategy/code',
    className: 'CodeStrategiesService',
    fileName: 'codeStrategies.ts'
  },
  cexBots: {
    prefix: '/api/v2/bot/signal/cex',
    className: 'CexBotsService',
    fileName: 'cexBots.ts'
  },
  predictionBots: {
    prefix: '/api/v2/bot/signal/prediction',
    className: 'PredictionBotsService',
    fileName: 'predictionBots.ts'
  },
  dexBots: {
    prefix: '/api/v2/bot/signal/dex',
    className: 'DexBotsService',
    fileName: 'dexBots.ts'
  },
  botWebhooks: {
    prefix: '/api/v2/webhook/bot',
    className: 'BotWebhooksService',
    fileName: 'botWebhooks.ts'
  },
  dataWebhooks: {
    prefix: '/api/v2/webhook/data',
    className: 'DataWebhooksService',
    fileName: 'dataWebhooks.ts'
  },
  exchangeApiKeys: {
    prefix: '/api/v2/api/exchange',
    className: 'ExchangeApiKeysService',
    fileName: 'exchangeApiKeys.ts'
  },
  llmApiKeys: {
    prefix: '/api/v2/api/llm',
    className: 'LlmApiKeysService',
    fileName: 'llmApiKeys.ts'
  },
  predictionApiKeys: {
    prefix: '/api/v2/api/prediction',
    className: 'PredictionApiKeysService',
    fileName: 'predictionApiKeys.ts'
  }
};

// Ensure services directory exists
const servicesDir = path.join(__dirname, 'src', 'services');
if (!fs.existsSync(servicesDir)) {
  fs.mkdirSync(servicesDir, { recursive: true });
}

// Map each path to its group
const pathsByGroup = {};
for (const key of Object.keys(groups)) {
  pathsByGroup[key] = [];
}

const allPaths = Object.keys(spec.paths);

// Sort paths by length descending to match the most specific prefix first
const sortedGroupKeys = Object.keys(groups).sort((a, b) => groups[b].prefix.length - groups[a].prefix.length);

for (const apiPath of allPaths) {
  let matched = false;
  for (const groupKey of sortedGroupKeys) {
    if (apiPath.startsWith(groups[groupKey].prefix)) {
      pathsByGroup[groupKey].push(apiPath);
      matched = true;
      break;
    }
  }
  if (!matched) {
    console.warn(`Unmapped path: ${apiPath}`);
  }
}

// Generate code for each group
for (const [groupKey, group] of Object.entries(groups)) {
  const groupPaths = pathsByGroup[groupKey];
  const methodsCode = [];

  for (const apiPath of groupPaths) {
    const pathObj = spec.paths[apiPath];
    const relativePath = apiPath.substring(group.prefix.length) || '/';

    for (const [httpMethod, opObj] of Object.entries(pathObj)) {
      if (['get', 'post', 'put', 'delete', 'patch'].indexOf(httpMethod) === -1) continue;

      // Determine method name
      let methodName = '';
      if (relativePath === '/') {
        methodName = httpMethod === 'get' ? 'list' : 'create';
      } else if (relativePath === '/total' && httpMethod === 'get') {
        methodName = 'getTotal';
      } else if (relativePath === '/duplicate' && httpMethod === 'post') {
        methodName = 'duplicate';
      } else if (relativePath === '/{id}') {
        if (httpMethod === 'get') methodName = 'get';
        else if (httpMethod === 'put') methodName = 'update';
        else if (httpMethod === 'delete') methodName = 'delete';
      } else if (relativePath === '/{chainId}/{address}') {
        methodName = 'getByChainAndAddress';
      } else if (relativePath === '/factory/{chainId}/{exchangeId}') {
        methodName = 'getFactory';
      } else {
        // Construct dynamic method name
        // E.g., /folder/root -> getRootFolders
        // E.g., /{id}/reset -> reset
        // E.g., /folder/{id} -> getFolder/updateFolder/deleteFolder
        const parts = relativePath.split('/').filter(p => p);
        let prefixName = '';
        let suffixName = '';
        let hasIdParam = false;

        for (const part of parts) {
          if (part.startsWith('{') && part.endsWith('}')) {
            hasIdParam = true;
          } else {
            const camelPart = part.replace(/[-_]([a-z])/g, (_, g) => g.toUpperCase());
            const capitalized = camelPart.charAt(0).toUpperCase() + camelPart.slice(1);
            if (!prefixName) {
              prefixName = camelPart;
            } else {
              suffixName += capitalized;
            }
          }
        }

        if (parts[parts.length - 1].startsWith('{') && parts[parts.length - 1].endsWith('}')) {
          // Ends with an ID, like /folder/{id}
          if (httpMethod === 'get') methodName = 'get' + suffixName + prefixName.charAt(0).toUpperCase() + prefixName.slice(1);
          else if (httpMethod === 'put') methodName = 'update' + suffixName + prefixName.charAt(0).toUpperCase() + prefixName.slice(1);
          else if (httpMethod === 'delete') methodName = 'delete' + suffixName + prefixName.charAt(0).toUpperCase() + prefixName.slice(1);
        } else if (parts.length > 1 && parts[0].startsWith('{') && parts[0].endsWith('}')) {
          // Starts with ID, like /{id}/reset
          methodName = prefixName || suffixName;
        } else {
          // Standard path, like /folder/root or /cex
          if (httpMethod === 'get') {
            methodName = 'list' + prefixName.charAt(0).toUpperCase() + prefixName.slice(1) + suffixName;
          } else {
            methodName = httpMethod + prefixName.charAt(0).toUpperCase() + prefixName.slice(1) + suffixName;
          }
        }
      }

      // Format method name
      methodName = methodName.charAt(0).toLowerCase() + methodName.slice(1);

      // Extract path parameters
      const pathParams = [];
      const matches = apiPath.match(/\{([^}]+)\}/g);
      if (matches) {
        for (const match of matches) {
          pathParams.push(match.substring(1, match.length - 1));
        }
      }

      // Check if there is query parameters
      const hasQuery = opObj.parameters && opObj.parameters.some(p => p.in === 'query');
      // Check if there is requestBody
      const hasBody = !!opObj.requestBody;

      // Build method signature arguments
      const args = [];
      for (const param of pathParams) {
        args.push(`${param}: string | number`);
      }

      if (hasBody) {
        args.push(`body: NonNullable<paths['${apiPath}']['${httpMethod}']['requestBody']>['content']['application/json']`);
      }

      if (hasQuery) {
        // Query parameters are optional if they don't have required parameters
        const requiredQuery = opObj.parameters.filter(p => p.in === 'query' && p.required);
        const queryOptional = requiredQuery.length === 0 ? '?' : '';
        args.push(`queryParams${queryOptional}: paths['${apiPath}']['${httpMethod}']['parameters']['query']`);
      }

      // Construct path template literal
      // e.g., `/api/v2/exchange/dex/${chain}`
      const pathTemplate = apiPath.replace(/\{([^}]+)\}/g, '${$1}');

      // Return Type
      const has200 = opObj.responses['200'] && opObj.responses['200'].content && opObj.responses['200'].content['application/json'];
      const has201 = opObj.responses['201'] && opObj.responses['201'].content && opObj.responses['201'].content['application/json'];
      let returnType = 'any';
      if (has200) {
        returnType = `paths['${apiPath}']['${httpMethod}']['responses']['200']['content']['application/json']`;
      } else if (has201) {
        returnType = `paths['${apiPath}']['${httpMethod}']['responses']['201']['content']['application/json']`;
      }

      // Generate description
      const desc = opObj.summary || opObj.description || `Endpoint: ${httpMethod.toUpperCase()} ${apiPath}`;

      methodsCode.push(`
  /**
   * ${desc}
   */
  async ${methodName}(${args.join(', ')}): Promise<${returnType}> {
    return this.client.request<${returnType}>({
      method: '${httpMethod.toUpperCase()}',
      path: \`${pathTemplate}\`,
      ${hasBody ? 'body,' : ''}
      ${hasQuery ? 'queryParams,' : ''}
    });
  }
      `);
    }
  }

  const fileContent = `import { SigrexBaseClient } from '../client.js';
import { paths } from '../types.js';

export class ${group.className} {
  constructor(private client: SigrexBaseClient) {}
${methodsCode.join('\n')}
}
`;

  fs.writeFileSync(path.join(servicesDir, group.fileName), fileContent, 'utf8');
  console.log(`Generated service: ${group.className} -> ${group.fileName}`);
}
