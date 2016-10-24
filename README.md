# vue-typed-boilerplate

> A simple setup typescript project for [vue-typed](https://github.com/budiadiono/vue-typed).

### Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

``` bash
$ npm install -g vue-cli
$ vue init budiadiono/vue-typed-boilerplate my-project
$ cd my-project
$ npm install
$ npm run dev
```

### Getting started

You'll put all your typescript source code under `src` folder where the main app code is on `index.ts` (already created by boilerplate). 
This boilerplate created example 2 files for you:

- `src\index.ts`: example main app 

- `src\container.ts`: example component 


### What's Included

- `npm run dev`: Webpack + `vue` + `vue-typed` with proper config for source maps & hot-reload.

- `npm run build`: Production build with HTML/CSS/JS minification. Generated files will be located under `dist` folder.

For detailed explanation on how things work, consult the [docs for vue-typed](https://github.com/budiadiono/vue-typed).

### Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `vue-cli`:

``` bash
vue init username/repo my-project
```