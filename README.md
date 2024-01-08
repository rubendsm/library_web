# LDS Frontend Web

Este é o repositório para o LDS Frontend Web, um aplicativo web desenvolvido com React e Vite.js.

## Instalação

Antes de começar, certifique-se de ter o Node.js instalado em seu ambiente de desenvolvimento. Node 20.9.0

1. Instale as dependências:

```bash
cd LDS_FrontEnd_Web
npm install
```

2. Iniciar o desenvolvimento.

dev: Iniciar o ambiente de desenvolvimento usando o Vite.js.

```bash
npm run dev
```

3. Ver qualidade do código

```bash
npm run lint
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


## Licença

Este projeto é licenciado sob o Grupo 9 LDS.
