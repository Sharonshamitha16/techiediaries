---
layout: bpost
title: "Vue 3 Router"
image: "images/content/vue.jpg"
excerpt: "In this article, we'll learn about the Vue 3 Router by example" 
tags : [javascript , vue , vuejs] 
---

The router is an important component for building SPAs or single page apps so just like any front-end library Vue has its own router.

With Vue 3, we have a new Vue Router that uses Vue 3, with many features similar to Vue 3, but there are a few differences from Vue 2. 

In this  tutorial, we'll introduce you to Vue Router for Vue 3, with example code. 

The Vue router enables you to create single pages apps with multiple views using the latest Vue 3 library.

## Step 1 -- Installing Vue 3 CLI and Creating a New App

Let's get started by installing the Vue 3 CLI. Head back to your terminal and run the following command:

```bash
$ npm install -g @vue/cli
```

Next, we can create a new Vue 3 project using the following command:

```bash
$ vue create vue3-router-app
```

You'll be prompted to pick a preset, choose the Vue 3 preset.

Next, navigate to your project's folder and run the development server as follows:

```bash
$ cd vue3-router-app
$ npm run serve
```

Next, go to [http://localhost:8080](http://localhost:8080) with your browser to see your Vue 3 app running.


## Step 2 -- Installing the Vue 3 Router 

Now that we have a new Vue 3 project, let's install the Vue 3 router using the following commands:

```bash
$ cd vue3-router-app
$ npm install vue-router
```

Next, create a `router` folder and an `index.js` file inside the `router` folder and add the following code inside the `router/index.js` file:

```js
import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
```

We first import the `createWebHistory`, `createRouter` methods from the `vue-router` package and our Vue 3 `Home` and `About` components. 

Next, we define a `routes` array, where we can add routes for each component.


A route has the following properties:

- Path: the URL path of the route.
- Name: An optional name for the route.
- Component: The component that will be loaded by the router when the route is visited.



Next, we create and export the router object, using the `createRouter` method by passing the `routes` array and an object returned from the `createWebHistory` method.

## Step 3 -- Importing our Vue 3 Router

Next, we need to import our router in the `main.js` file.

Open the `/src/main.js` file and update it as follows:

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' 

createApp(App).use(router).mount('#app')
```

We import the router, and then we use the router when creating our Vue 3 application. 

## Step 4 -- Adding the Router View and Navigation

The Vue Router provides two directives for adding a router view and navigation links:

- `<router-view />` - this marks where the component will be inserted by the router when a route is activated. 
- `<router-link>` - this is used to create navigation links instead of  `<a href>`. 


Open the `src/views/App.vue` file and update it as follows:

```html
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link>  
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>
```


We have seen how the Vue 3 router works by example, but you don't need to go throughout all these steps thanks to Vue CLI which enables you to automatically install and add Vue Router.

When you create a Vue project, simply ???Manually select features??? when prompted to select a preset then make sure to check ???Router??? when prompted to select the features needed for your project. This will instruct the CLI to install Vue Router inside your Vue 3 app and add the code we've seen before for creating and configuring a router instance. You simply need to add your routes inside the `routes` array. 

