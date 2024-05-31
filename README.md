# React + TypeScript + Vite + libreria de tipado de datos

## Proyecto para consultar el clima 
-a traves de la consulta a una API, para las consultas se utiliza la libreria de axios para hacer el fetch de datos.

## Proyecto creado durante el curso React y TypesCript en la plataforma Udemy con el profesor Juan de la Torre

- El CSS se realizo aplicando los modulos permitiendo realizar los estilos por cada componente.

- para el tipado de los datos recuperados por la api, se utilizo la libreria de zod para crear el esquema y las validaciones de los datos.

- se utilizo los spinner para mostrar en pantalla cuando se esta realizando una consulta con los spinner que estan en el enlace https://tobiasahlin.com/spinkit/









This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
