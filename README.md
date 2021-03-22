# @codingsans/billingo-client

Promise based Billingo.hu client for Node.JS and Browser written in Typescript from [CodingSans](https://codingsans.com)

## Supported Billingo API versions

| Client Version | API Version | API Docs                                                                      |
| -------------- | ----------- | ----------------------------------------------------------------------------- |
| 1.2.2          | V3.0.7      | [API Documentation](https://app.swaggerhub.com/apis/Billingo/Billingo/3.0.7)  |
| 1.3.1          | V3.0.13     | [API Documentation](https://app.swaggerhub.com/apis/Billingo/Billingo/3.0.13) |

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
  apiKey: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
});
```

Using javascript

```js
const createBillingoClient = require('@codingsans/billingo-client').createBillingoClient;

const client = createBillingoClient({
  apiKey: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
});
```

## Available functions

### Document

```ts
client.documents.list({ ...query });
client.documents.create({ ...document });
client.documents.get(1);
client.documents.delete(1);
client.documents.archive(1);
client.documents.cancel(1);
client.documents.copy(1);
client.documents.createFromProforma(1);
client.documents.createModificationDocument(1);
client.documents.download(1);
client.documents.onlineSzamla(1);
client.documents.listPaymentHistory(1);
client.documents.updatePaymentHistory(1, [...paymentHistory]);
client.documents.deletePaymentHistory(1);
client.documents.printPos(1, size);
client.documents.publicUrl(1);
client.documents.send(1, { emails: ['example@example.com'] });
```

### Document Block

```ts
client.documentBlocks.list({ ...query });
```

### Partners

```ts
client.partners.list({ ...query });
client.partners.create({ ...partner });
client.partners.get(1);
client.partners.update(1, { ...partner });
client.partners.delete(1);
```

### Products

```ts
client.products.list({ ...query });
client.products.create({ ...product });
client.products.get(1);
client.products.update(1, { ...product });
client.products.delete(1);
```

### Back Accounts

```ts
client.bankAccounts.list({ ...query });
client.bankAccounts.create({ ...bankAccount });
client.bankAccounts.get(1);
client.bankAccounts.update(1, { ...bankAccount });
client.bankAccounts.delete(1);
```

### Currencies

```ts
client.currencies.getConversionRate({ ...query });
```

### Organization

```ts
client.organization.get();
```

### Spendings

```ts
client.spendings.list({ ...query });
client.spendings.create({ ...spending });
client.spendings.get(1);
client.spendings.update(1, { ...spending });
client.spendings.delete(1);
```

### Utils

```ts
client.utils.getIdFromLegacy(999);
client.utils.checkTaxNumber('my_taxnumber');
```

## License

[MIT](LICENSE)
