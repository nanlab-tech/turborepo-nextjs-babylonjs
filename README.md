# Turborepo starter for Next.js app with Babylon.js scene

This serves as an introductory project for the integration of Babylon.js scenes within a Next.js application. 
The project is designed to employ a structured approach whereby all 3D logic is encapsulated within a dedicated package. 
This package, responsible for housing the 3D logic, exposes a well-defined API that is subsequently employed within the Next.js application. 

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `web`: [Next.js](https://nextjs.org/) app as web interface for Babylon.js scene
- `babylonjs-app`: package with classes and helpers representing your 3D app
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Install

Install dependencies:

```
pnpm install
```

### Build

To build all apps and packages, run the following command:

```
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm dev
```
