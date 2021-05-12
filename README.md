# Polish Messages for React-Admin
[![Build](https://github.com/Tymek/ra-language-polish/actions/workflows/ci.yml/badge.svg)](https://github.com/Tymek/ra-language-polish/actions)

Polish messages for [react-admin](https://github.com/marmelab/react-admin), the frontend framework for building admin applications on top of REST/GraphQL services.

## Installation

```sh
npm install ra-language-polish
yarn add ra-language-polish
```

## Usage

```js
import polishMessages from 'ra-language-polish';

const messages = {
  'pl': polishMessages,
};

<Admin locale="pl" messages={messages}>
  ...
</Admin>
```

## License

This translation is licensed under the MIT License.
