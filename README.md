# Typescript-React-Template

`master` branch integrate `TypeScript`, `ESlint`, `React`, `Redux` features.

## Lerna part

## create component

Using --yes to skip prompts

> lerna create @cddev/phoenix-builder --yes
>

Add phoenix-button dependency into phoenix

> lerna add @cddev/phoenix-button --scope=@cddev/phoenix
>

We are going to use React for the two UI components, let's add it as dev dependency first for local testing

>lerna add react --dev --scope '{@cddev/phoenix-button,@cddev/phoenix-text}'
>

And as a peer dependency using major latest version for consuming applications

> lerna add react --peer --scope '{@cddev/phoenix-button,@cddev/phoenix-text}'
>

We are also going to use an utility to toggle classes as needed on the components called "clsx"

> lerna add clsx --scope '{@cddev/phoenix-button,@cddev/phoenix-text}'
>

wire the phoenix-builder to our individual components
> lerna add @cddev/phoenix-builder --dev --scope '{@cddev/phoenix,@cddev/phoenix-button,@cddev/phoenix-text}'
>

### Compile the JS with Rollup

> lerna add rollup --scope=@cddev/phoenix-builder
>
> lerna add @babel/core --scope=@cddev/phoenix-builder
>
> lerna add @babel/preset-env --scope=@cddev/phoenix-builder
>
> lerna add @babel/preset-react --scope=@cddev/phoenix-builder
>
> lerna add @rollup/plugin-babel --scope=@cddev/phoenix-builder
>
> lerna add @rollup/plugin-node-resolve --scope=@cddev/phoenix-builder

We are going to use the Javascript API in rollup and produce 2 bundles:

1. CommonJS (CJS) for older clients.
2. ECMAScript Modules (ESM) for newer clients.

### Storybook

> npx -p @storybook/cli sb init --type react
>

delete top level stories.
