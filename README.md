# vue-typed-boilerplate

> A simple setup to build [vue](vuejs.org) application in [typescript](typescriptlang.org) with [vue-typed](https://github.com/budiadiono/vue-typed).


### Usage

1. This is a project template for [vue-cli](https://github.com/vuejs/vue-cli). Please install first if you don't have it yet.

	``` bash
	$ npm install -g vue-cli
	```

2. Execute command bellow, which is `my-project` is the name of your project. [vue-cli](https://github.com/vuejs/vue-cli) will creates a folder with this name for your new project.

	``` bash
	$ vue init vue-typed/vue-typed-boilerplate my-project
	```

3. Just go ahead and build!

	```
	$ cd my-project
	$ npm install
	$ npm start
	```


### What's Included

#### NPM Commands

- `npm run start` or `npm start`: **webpack** + **vue** + **vue-typed** with proper config for source maps & hot-reload.

- `npm run build`: a production build with `HTML`/`CSS`/`JS` minification. Generated files will be located under `dist` folder.

#### Start Coding

You'll put all your app code under `src` folder where the entry point file is `index.ts` (already created by this boilerplate). 

This boilerplate created 3 example application files for you:

- `index.html`: main page

- `src\index.ts`: app entry point 

- `src\container.ts`: example component 

For detailed explanation on how things work, consult the [docs](https://github.com/vue-typed/vue-typed) for **vue-typed**.


### Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `vue-cli`:

``` bash
vue init username/repo my-project
```