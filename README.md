# @bbon/formatter

[![](https://shields.io/npm/v/@bbon/formatter)](https://www.npmjs.com/package/@bbon/formatter) [![](https://shields.io/npm/dt/@bbon/formatter)](https://www.npmjs.com/package/@bbon/formatter) [![Build and tag](https://github.com/bbonkr/bbon-formatter/actions/workflows/build-and-tag.yml/badge.svg)](https://github.com/bbonkr/bbon-formatter/actions/workflows/build-and-tag.yml) [![publish NPM](https://github.com/bbonkr/bbon-formatter/actions/workflows/publish-npm.yml/badge.svg)](https://github.com/bbonkr/bbon-formatter/actions/workflows/publish-npm.yml)


값을 형식화된 문자열로 처리하기 위한 기능을 제공합니다.

## 설치 Installation

```sh
$ npm install @bbon/formatter
```

```sh
$ yarn add @bbon/formatter
```

## 사용 Usage

### numberWithDelimiter

구분자로 구분된 숫자를 출력합니다.

```typescript
import { StringFormatter } from '@bbon/formatter';

const formatter = new StringFormatter();
const numberValue = 1000;
const formattedValue = formatter.numberWithDelimiter(numberValue);

console.info(formattedValue); // '1,000'
```

### fileSize

파일 크기를 읽기 편하게 출력합니다.

```typescript
import { StringFormatter } from '@bbon/formatter';

const formatter = new StringFormatter();
const numberValue = 2.05 * 1024;
const formattedValue = formatter.fileSize(numberValue, formatter.formattedValue, ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB']);

console.info(formattedValue); // '2.05 KB'
```
