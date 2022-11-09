# Polish Messages for React-Admin
[![Build](https://github.com/Tymek/ra-language-polish/actions/workflows/ci.yml/badge.svg)](https://github.com/Tymek/ra-language-polish/actions)

Polish messages for [react-admin](https://github.com/marmelab/react-admin), the frontend framework for building admin applications on top of REST/GraphQL services.

## Installation

```sh
npm install ra-language-polish
yarn add ra-language-polish
```

## Usage

As per [react-admin documentation](https://github.com/marmelab/react-admin/blob/93720aef8bd8342106fc0f718525012c30d4ff72/docs/TranslationSetup.md#changing-the-default-locale)

### Setting Up Translations

If you want to add or update translations, you'll have to provide your own `i18nProvider`.

Just like for the `dataProvider` and the `authProvider`, you can inject the `i18nProvider` to your react-admin app using the `<Admin i18nProvider>` prop:

```jsx
import { i18nProvider } from './i18nProvider';

const App = () => (
    <Admin 
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}
    >
        {/* ... */}
    </Admin>
);
```

In most cases, the `i18nProvider` will contain translations for both react-admin keys and your own keys.

### Changing The Default Locale

If you want to display the interface in another language than English by default, you have to set up an `i18nProvider` that provides the translation for all the keys used by react-admin. Fortunately, the react-admin community has already written translations for more than 40 locales. Check the [list of available locales](./TranslationLocales.md) to find the locale you're looking for.

For instance, to change the interface to Polish, install the `ra-language-polish` npm package, then use it in a custom `i18nProvider`, as follows:

```jsx
// in src/i18nProvider.js
import polyglotI18nProvider from 'ra-i18n-polyglot';
import pl from 'ra-language-polish';

export const i18nProvider = polyglotI18nProvider(() => pl, 'pl');
```

**Tip**: The `ra-i18n-polyglot` package allows to build an `i18nProvider` based on translation messages. It relies on [the Polyglot.js library](https://airbnb.io/polyglot.js/).
## License

This translation is licensed under the MIT License.
