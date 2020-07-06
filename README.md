# billingo-client

Promise based Billingo client from [CodingSans](https://codingsans.com)

## Installation

Using npm:

```bash
$ npm install billingo-client
```

Using yarn

```bash
$ yarn add billingo-client
```

## Example

Using typescript

```ts
import { BillingoClient } from 'billingo-client';

const client = BillingoClient({
  apiKey: '3dafba72-bfa3-11ea-9bf0-0254eb6072a0',
});
```

Using javascript

```js
const BillingoClient = require('billingo-client').BillingoClient;

const client = BillingoClient({
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
