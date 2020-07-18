# @codingsans/billingo-client

Promise based Billingo.hu client for Node.JS and Browser written in Typescript from [CodingSans](https://codingsans.com)

## Supported Billingo API versions

- V3.0.7 [API Documentation](https://app.swaggerhub.com/apis/Billingo/Billingo/3.0.7)

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
import { createBillingoClient } from '@codingsans/billingo-client';

const client = createBillingoClient({
  apiKey: '3dafba72-bfa3-11ea-9bf0-0254eb6072a0',
});
```

Using javascript

```js
const createBillingoClient = require('@codingsans/billingo-client').createBillingoClient;

const client = createBillingoClient({
  apiKey: '3dafba72-bfa3-11ea-9bf0-0254eb6072a0',
});
```

## Available functions

### Document

```ts
client.documents.list();
client.documents.create({ ...document });
client.documents.get(1);
client.documents.cancel(1);
client.documents.createFromProforma(1);
client.documents.download(1);
client.documents.onlineSzamla(1);
client.documents.listPaymentHistory(1);
client.documents.updatePaymentHistory(1, [...paymentHistory]);
client.documents.deletePaymentHistory(1);
client.documents.send(1, { emails: ['example@example.com'] });
```

### Document Block

```ts
client.documentBlocks.list();
```

### Partners

```ts
client.partners.list();
client.partners.create({ ...partner });
client.partners.get(1);
client.partners.update(1, { ...partner });
client.partners.delete(1);
```

### Products

```ts
client.products.list();
client.products.create({ ...product });
client.products.get(1);
client.products.update(1, { ...product });
client.products.delete(1);
```

### Back Accounts

```ts
client.bankAccounts.list();
client.bankAccounts.create({ ...bankAccount });
client.bankAccounts.get(1);
client.bankAccounts.update(1, { ...bankAccount });
client.bankAccounts.delete(1);
```

### Currencies

```ts
client.currencies.getConversionRate(Currency.EUR, Currency.USD);
```

### Organization

```ts
client.organization.get();
```

### Utils

```ts
client.utils.getIdFromLegacy(999);
```

## License

[MIT](LICENSE)
