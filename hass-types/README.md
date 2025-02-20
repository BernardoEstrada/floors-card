
To regenerate the types, clone the [Home Assistant frontend repository](https://github.com/home-assistant/frontend/tree/master)

then add the `tsconfig.types.json` file to the root of the repository with the following content:

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "incremental": false,
    "noEmit": false,
    "strict": false,
    "declaration": true,
    "emitDeclarationOnly": true,
    "declarationDir": "./types"
  },
  "include": [
    "./src/**/*.ts"
  ]
}
```

Install the dependencies:

```bash
yarn
```

Then run the following command:

```bash
yarn tsc -p tsconfig.types.json
```

Now you can copy the generated types from the `types` folder to the `hass-types` folder.

Then update `index.d.ts` file with the new types.
