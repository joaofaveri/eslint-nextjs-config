# JPAULO.dev Next.js ESLint Config

This package provides a standardized ESLint configuration tailored for projects using Next.js on JPAULO.dev. It aims to enforce consistent coding styles and best practices across your Next.js projects, helping to keep your codebase clean, readable, and maintainable.

## Features

- **Pre-configured ESLint rules**: This package comes with a set of pre-configured ESLint rules that are commonly used in Next.js projects, saving you the time and effort of setting up these rules manually.
- **Next.js specific rules**: In addition to the standard ESLint rules, this package includes rules that are specifically designed for Next.js, helping you to avoid common pitfalls and write more efficient Next.js code.
- **Easy to use**: Simply install the package and extend the configuration in your .eslintrc file. No additional setup required.

## What's Included?

- Standard config base;
- JSON plugin;
- Eslint Plugin Import
- Tailwindcss Prettier Plugin
- ESlint and Prettier


## Installation

You can install this package using npm:

```bash
npm install --save-dev @jpaulo.dev/eslint-nextjs-config
```

## Usage

After installation, you can add this to your ``.eslintrc`` file:

```json
{
  "extends": [
    "next/core-web-vitals",
    "@jpaulo.dev/eslint-nextjs-config",
  ]
}
```

This package include a Prettier plugin for Tailwind CSS that automatically sorts classes based on Tailwind CSS team recommended class order. Create your ``prettier.config.js`` file in root, then add the plugin to your Prettier config:

```js
module.exports = {
  plugins: [
    'prettier-plugin-import-sort',
    'prettier-plugin-organize-attributes',
    'prettier-plugin-organize-imports',
    // prettier-plugin-tailwindcss must be loaded last
    'prettier-plugin-tailwindcss',
    ],
  // path to your tailwind.config.ts file
  tailwindConfig: './tailwind.config.ts'
}
```

Now, ESLint will use the standardized configuration provided by this package when linting your Next.js code.

Happy coding!