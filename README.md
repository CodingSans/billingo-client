# @codingsans/billingo-client

Promise based Billingo.hu client for Node.JS and Browser written in Typescript from [CodingSans](https://codingsans.com)

Please open issue if you miss something:
https://github.com/CodingSans/billingo-client/issues

## Supported Billingo API versions

| Client Version | API Version | API Docs                                                                      |
| -------------- | ----------- | ----------------------------------------------------------------------------- |
| 2.0.0          | V3.0.14     | [API Documentation](https://app.swaggerhub.com/apis/Billingo/Billingo/3.0.14) |
| 1.3.4 deprecated [V1 Docs](https://github.com/CodingSans/billingo-client/blob/master/README_V1.md) | V3.0.13     | [API Documentation](https://app.swaggerhub.com/apis/Billingo/Billingo/3.0.13) |
| 1.2.2 deprecated [V1 Docs](https://github.com/CodingSans/billingo-client/blob/master/README_V1.md)         | V3.0.7      | [API Documentation](https://app.swaggerhub.com/apis/Billingo/Billingo/3.0.7)  |

## Installation

Using npm:

```bash
$ npm install @codingsans/billingo-client
```

Using yarn

```bash
$ yarn add @codingsans/billingo-client
```

## Example

Using typescript

```ts
import { OpenAPI, DocumentService } from '@codingsans/billingo-client';

OpenAPI.HEADERS = {
  'X-API-KEY': 'db371188-f0ba-11ec-baa4-0254eb6072a0',
};

DocumentService.listDocument().then(res => console.log({res}))

```

## Available services

```
BankAccountService
CurrencyService
DocumentBlockService
DocumentExportService
DocumentService
OrganizationService
PartnerService
ProductService
SpendingService
UtilService
```


## License

[MIT](LICENSE)
