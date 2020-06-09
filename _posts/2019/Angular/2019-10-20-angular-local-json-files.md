---
layout: post
title: "3 Methods for Reading Local JSON Files in Angular 7/8"
image: "images/content/angular.png"
excerpt: "In this tutorial, we'll present you 3 ways to read local JSON files in your Angular 8 application with examples" 
tags : [angular, angular8, angular-9-ngfor-examples, angular-9-httpclient-examples]
---


In this tutorial, we'll present you with 3 ways to read local JSON files in your Angular 8 application with examples:

- Reading Local JSON Files Using [TypeScript 2.9+ `import` Statement](https://www.techiediaries.com/angular/upload-images-typescript-node-ionic-imports-decorators-async-await-formdata/),
- Reading Local JSON Files Using Angular `HttpClient`, 
- Reading Local JSON Files in Offline Angular Apps Using ES6+ `import` Statement

Let's see these methods by example.

## Method 1: Reading Local JSON Files Using TypeScript 2.9+ `import` Statement 

Angular 6.1+ supports TypeScript 2.9 which allows you to use the `import` statement to import local JSON files just like any TypeScript module. To enable this feature, you need to  add and set the `resolveJsonModule`  option to `true` in the `tsconfig.json` file under the `compilerOptions` key file. This is an example:

```ts
import { Component, OnInit } from '@angular/core';
import * as data from './data.json';

@Component({
  selector: 'app-root',
  template: `<ul>
	  <li *ngFor="let product of products">
	    {{product.name}} 
	  </li>
  </ul>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Example';

  products: any = (data as any).default;

  constructor(){}
  ngOnInit(){
    console.log(data);
  }
}
```

We use the `ngOnInit()` life-cycle method of [Angular `OnInit` interface](https://www.techiediaries.com/angular/unsubscribe-rxjs-subjects-ondestroy-oninit-changedetectorref/) to display the imported JSON file in the console.

This is a screenshot of the imported JSON file in the console:

![Import JSON in Angular and TypeScript](https://www.techiediaries.com/assets/images/angular-import-json-console.png)

This assumes, you have a `data.json` file in the `src/app` folder of your project with the following values:
 
```json
[
    {
        "id": 1,
        "name": "Licensed Frozen Hat",
        "description": "Incidunt et magni est ut.",
        "price": "170.00",
        "imageUrl": "https://source.unsplash.com/1600x900/?product",
        "quantity": 56840
    },
    {
        "id": 2,
        "name": "Rustic Concrete Chicken",
        "description": "Sint libero mollitia.",
        "price": "302.00",
        "imageUrl": "https://source.unsplash.com/1600x900/?product",
        "quantity": 9358
    },
    {
        "id": 3,
        "name": "Fantastic Metal Computer",
        "description": "In consequuntur cupiditate et unde minus.",
        "price": "279.00",
        "imageUrl": "https://source.unsplash.com/1600x900/?product",
        "quantity": 90316
    }
]
```

Please note that this supported only in Angular 6.1+ versions.

## Method 2: Reading Local JSON Files Using Angular `HttpClient` 

The second method that you can use to import JSON files in your Angular application is [Angular `HttpClient`](https://www.techiediaries.com/angular/angular-9-8-tutorial-by-example-rest-crud-apis-http-get-requests-with-httpclient/). Let's see this by example.

First, you need to import `HttpClientModule` in your app. Open the `src/app/app.module.ts` file and update it as follows:

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Next, move the previous `src/app/data.json` file to the `src/assets` folder. 

Next, open the `src/app/app.component.ts` file, import and inject `HttpClient` as follows:

```ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-root',
  template: `<ul>
	  <li *ngFor="let product of products">
	    {{product.name}} 
	  </li>
  </ul>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Example';
  products: any = [];

  constructor(private httpClient: HttpClient){}
  ngOnInit(){
    this.httpClient.get("assets/data.json").subscribe(data =>{
      console.log(data);
      this.products = data;
    })
  }
}
```

## Method 3:  Reading Local JSON Files in Offline Angular Apps Using ES6+ `import` Statement

If your Angular application goes offline, reading the JSON file with `HttpClient` will fail. In this case, we have one more method to import local JSON files using the [ES6+ import statement](https://www.techiediaries.com/es-modules-import-export-default/) which supports importing JSON files.

But first we need to add a typing file as follows:

```
declare module "*.json" {
  const value: any;
  export default value;
}
```
 
Add this inside a new file `json-typings.d.ts` file in the `src/app` folder.

Now, you can import JSON files just like TypeScript 2.9+.

```ts
import * as data from "data.json";
```

## Conclusion

In this article, we've seen three methods for importing and reading local JSON files in Angular 8 and TypeScript.  
