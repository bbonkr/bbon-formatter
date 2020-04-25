# @bbon/formatter Package

값을 형식화된 문자열로 처리하기 위한 기능을 제공합니다.

## 설치 Installation

```sh
$ npm install @bbon/formatter
```

```sh
$ yarn add @bbon/formatter
```

## 사용 Usage

### Javascript

```javascript
const { StringFormatter } = require('@bbon/formatter');
const formatter = new StringFormatter();
const numberValue = 1000;
const formattedValue = formatter.NumberWithDelimiter(numberValue);

console.info(formattedValue); // '1,000'
```

### Typescript

```typescript
import { StringFormatter } from '@bbon/formatter';
const formatter = new StringFormatter();
const numberValue = 1000;
const formattedValue = formatter.NumberWithDelimiter(numberValue);

console.info(formattedValue); // '1,000'
```

## 테스트

```
$ npm run test
```

```
$ yarn test
```
