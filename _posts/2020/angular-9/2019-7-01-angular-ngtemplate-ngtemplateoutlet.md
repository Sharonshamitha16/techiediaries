---
layout: post
title: "Angular 10/9 ngTemplate & ngTemplateOutlet Example: Dynamic and Reusable Templates"
image: "images/content/angular.png"
excerpt: "In this tutorial, we'll see how to use ng-template and ngTemplateOutlet for creating dynamic and reusable template partials in Angular 10" 
date: 2020-08-04 
tags : [ angular, angular-10 ] 
---

In this tutorial, we'll see how to use `ng-template` and `ngTemplateOutlet` for creating dynamic and reusable template partials in Angular 10/9.

We'll see how to build a reusable component with an Angular 10 example using `<ng-template>` and we'll see what a template partial is.

We'll also see how to pass properties to our Angular 10 partial templates using the `let-` syntax.

Next, we'll see how to render a template partial using Angular `ngtemplateoutlet` in our Angular 10 example.


## Build Reusable Components With Angular `<ng-template>` 

In development, code reuse is essential for building complex apps. You can reuse  something if it's appropriatly decoupled from the rest of your code. Angular provides many components that make building reusable code possible, among them it's `<ng-template>`. 

## Angular 10 Example with `<ng-template>`

Let's see a quick Angular 10 example that makes use of `<ng-template>`.

`ng-template` allows you to declare template partials. If you are familiar with template engines like Handlebars, you may have used template partials before.

### What's an Template Partial?

A template partial refers to an Angular/HTML template that can be declared once and re-used in many places in your application. We can use template reference variables (`#reference`) to identify the template so we can reference it from other places.

## Rendering of a Template Partial with Angular `ngtemplateoutlet`

This is an example template:

```html
<ng-template #mytempate>  
  This is a partial template  
</ng-template>
```

You can render this template in your app using `ngtemplateoutlet`:

```html
<ng-template #myTemplateRef>  
  This is a partial template  
</ng-template>

<div *ngTemplateOutlet="myTemplateRef">
</div> 
``` 

## Passing Properties to Angular Partial Templates 

We can also pass properties to our template using the `let-` syntax. First, let's change our ngTemplate to accept a `message` property:

```html
<ng-template let-message="myMessage" #myTemplateRef>  
  {{message}}  
</ng-template>
```

Our template now is dynamic. It simply takes a message and renders it using interpolation.

In the same way, we can render the template using `ngTemplateOutlet` but this time we also need to pass a value for the message property. That's why we also need to use the `context` object which needs to contain the key-value pairs of all properties in your template:

```html
<div *ngTemplateOutlet="myTemplateRef; context:{message: 'This is a partial template'}">
</div> 
``` 

## Accessing Angular Template Partials in the DOM Using `ViewChild`

You can also access your template from the component class like you would access any DOM element using `ViewChild`: 

```ts
import { Component, AfterViewInit, ViewChild  } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements AfterViewInit{
  @ViewChild('myTemplateRef') myTemplate; 

  ngAfterViewInit(){
    console.log(this.myTemplate)
  }
}
```

## Conclusion

As a wrap-up, we've seen how to create template partials using `ngTemplate` and `ngTemplateOutlet` in a simple Angular 10 example.

We have leraned how to create a reusable component with an Angular 10 example using `<ng-template>` and seen what a template partial is.

We' learned to pass properties to our Angular 10 partial templates using the `let-` syntax and how to render a template partial using Angular `ngtemplateoutlet` in our Angular 10 example.