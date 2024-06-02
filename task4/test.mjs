import { handler } from './index.mjs';
import { inspect } from 'util';

const event = {
  resource: '/test',
  path: '/test',
  httpMethod: 'GET',
  headers: {
    accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
    'accept-encoding': 'gzip, deflate, br, zstd',
    'accept-language': 'en-US,en;q=0.6',
    Host: 'pezdcwuve4.execute-api.us-east-1.amazonaws.com',
    priority: 'u=0, i',
    'sec-ch-ua': '"Brave";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Linux"',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'cross-site',
    'sec-fetch-user': '?1',
    'sec-gpc': '1',
    'upgrade-insecure-requests': '1',
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
    'X-Amzn-Trace-Id': 'Root=1-665a4b9e-72bf4b8465d6573309967fd5',
    'X-Forwarded-For': '167.0.209.237',
    'X-Forwarded-Port': '443',
    'X-Forwarded-Proto': 'https'
  },
  multiValueHeaders: {
    accept: [
      'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8'
    ],
    'accept-encoding': ['gzip, deflate, br, zstd'],
    'accept-language': ['en-US,en;q=0.6'],
    Host: ['pezdcwuve4.execute-api.us-east-1.amazonaws.com'],
    priority: ['u=0, i'],
    'sec-ch-ua': ['"Brave";v="125", "Chromium";v="125", "Not.A/Brand";v="24"'],
    'sec-ch-ua-mobile': ['?0'],
    'sec-ch-ua-platform': ['"Linux"'],
    'sec-fetch-dest': ['document'],
    'sec-fetch-mode': ['navigate'],
    'sec-fetch-site': ['cross-site'],
    'sec-fetch-user': ['?1'],
    'sec-gpc': ['1'],
    'upgrade-insecure-requests': ['1'],
    'User-Agent': [
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
    ],
    'X-Amzn-Trace-Id': ['Root=1-665a4b9e-72bf4b8465d6573309967fd5'],
    'X-Forwarded-For': ['167.0.209.237'],
    'X-Forwarded-Port': ['443'],
    'X-Forwarded-Proto': ['https']
  },
  queryStringParameters: null,
  multiValueQueryStringParameters: null,
  pathParameters: null,
  stageVariables: null,
  requestContext: {
    resourceId: 'ijbxy4',
    resourcePath: '/test',
    httpMethod: 'GET',
    extendedRequestId: 'YqDA0Hq8IAMEhhg=',
    requestTime: '31/May/2024:22:13:50 +0000',
    path: '/default/test',
    accountId: '669677260794',
    protocol: 'HTTP/1.1',
    stage: 'default',
    domainPrefix: 'pezdcwuve4',
    requestTimeEpoch: 1717193630558,
    requestId: '39c5b4bb-76a3-43b4-a401-3179efbc4ed4',
    identity: {
      cognitoIdentityPoolId: null,
      accountId: null,
      cognitoIdentityId: null,
      caller: null,
      sourceIp: '167.0.209.237',
      principalOrgId: null,
      accessKey: null,
      cognitoAuthenticationType: null,
      cognitoAuthenticationProvider: null,
      userArn: null,
      userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
      user: null
    },
    domainName: 'pezdcwuve4.execute-api.us-east-1.amazonaws.com',
    deploymentId: '2wtwvl',
    apiId: 'pezdcwuve4'
  },
  body: null,
  isBase64Encoded: false
};

//set enviroment variables
process.env.AWS_REGION = "us-east-1";
process.env.AWS_SECRET_DB = "mysqlbemaster";

const response = await handler(event);
console.log(inspect(response, { depth: null }));