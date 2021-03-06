---
layout: post
title: "Getting Started with Ruby on Rails 5.1.4 and Angular 2+ (Currently Angular 4)"
image: "images/content/ruby-on-rails-5-angular-2.jpg"
excerpt: "Getting Started with Ruby on Rails 5.1.4 and Angular 2+ (Currently Angular 4)"
tags : [angular , ruby , rails] 
---

{% include image.html 
    img="images/content/ruby-on-rails-5-angular-2.jpg" 
    title="Getting Started with Ruby On Rails 5.x and Angular 2+ (currently Angular 4)" 
%}

## Introduction 

Throughout this tutorial we are going to learn, with a practical CRUD example, how to get **Angular 2+** (currently **Angular 4**) integrated into a **Ruby on Rails 5.x** (currently **Rails 5.1.4**) web application.

We are going to build, together and step by step, an **Angular 2+** with a **Rails 5.x** backend CRUD (Create Read Update and Delete) example application which demonstrates the essential concepts to integrate the two, client and server side, frameworks. 

This tutorial has some primary requirements you need to meet, which are:

* I assume you are comfortable with [Ruby on Rails](http://rubyonrails.org/) framework.
* I also assume you have some working experience with Angular 2+ (currently Angular 4).
* You have the **Ruby** language installed on your local development machine (you can use **RVM** or Ruby Version Manager to easily install it on your machine).
* You also have the **NodeJS** platform installed on your local machine.

Except for these requirements, you are good to go as we are going to cover everything you need to create a simple (or maybe not) web application with **Ruby on Rails** in the backend (or server side) and **Angular 2+** in the frontend (or the client side).

These are the points we are going to cover in this tutorial:

* How to install Ruby on **Rails 5.1.4**?
* How to create a **RoR 5.1.4** web application?
* **Ruby on Rails 5.1.4** API mode.
* How to install **Angular 2+** CLI?
* How to create an **Angular 2+** project or web app?
* How to integrate **Angular 2+** into **Ruby on Rails 5.1.4** web app?
* How to communicate between **Angular 2+** and **Ruby on Rails 5.1.4**?
* How to handle CORS issues for local development in **Angular 2+**?
* How to disable CORS headers for local development in **Ruby on Rails 5.1.4**?
* How to build an API backend with **Ruby on Rails 5**?
* How to create **Angular 2+** components?
* How to create **Angular 2+** providers or services? 
* How to add features such as routing and data binding in **Angular 2+**?
* How to work with **Angular 2+** observables and promises?
* How to integrate **Bootstrap 4** with **Angular 2+** to style the app's UI?
* How to work with forms?
* How to use *ActivatedRoute* to get route parameters in **Angular 2+**?

This article can be considered as a **Get started with Ruby on Rails 5 and Angular 2+** tutorial, saying that we are going to cover only some essential concepts in depth and other points will be just mentionned for the sake of giving you some path to start from, and in the same time saving you from the boring details.

Now lets get started by installing **Ruby on Rails 5.1.4**.

## Installing Ruby on Rails 5.1.4

You might find some problems installing RoR 5.1.4 since it's the newest and might require a new version of Ruby and some updated gems so i'm going to show you the complete process which I did follow after having some errors when installing RoR 5.1.4 on my local development machine.

First step you better have an updated version of RVM or Ruby Version Manager which is used to install different versions of Ruby on the same machine.

To install or update **RVM** and get the latest version of Ruby run the following command(s):

    curl -L https://get.rvm.io | bash -s stable --ruby

The ??? --ruby??? flag will install the latest stable version of Ruby.

Once this process is finished you can these commands to verify the installed versions of Ruby and **gem** package manager.

    ruby -v
    gem -v 

Now you are ready to install **Ruby on Rais 5.x** on the global gemset but better yet you can also create a project specific gemset and then install **RoR 5**.

    $ rvm use ruby-2.4.1@rails5.1.4 --create

Then use the **gem** manager to install the newest version of Rails.

    $ gem install rails
    $ rails -v

Congratulations! you have installed the latest stable version of **Ruby on Rails**. 

## Create a Ruby on Rails 5.x API Only App

Open your terminal on MAC or Linux or your command prompt on Windows system then run the following command to create a new API only Rails web application that uses a PosgtreSQL database system (or you can also use **MySQL** database if you prefer)

    $ rails new ruby5-angular2-app --api -T -d postgresql

Once that finishes, navigate inside the app's root folder then create the database     
    
    $ cd ruby5-angular2-app
    $ rails db:create    
    
## Creating Rails API Resources

lets create some resources named **Product**, **Order** and **Customer**:


    $ rails generate scaffold product name:string
    $ rails generate scaffold order reference:string
    $ rails generate scaffold customer name:string


Then migrate our database


    $ rails db:migrate


## Adding Data for Testing 

Let???s create a seed file **db/seeds.rb** and put some products, orders and customers in it so we can have some data to work with.


    Product.create!([
      { name: 'Product 001' },
      { name: 'Product 002' },
      { name: 'Product 003' },
      { name: 'Product 004' }
    ])
    Customer.create!([
      { name: 'Customer 001' },
      { name: 'Customer 002' },
      { name: 'Customer 003' },
      { name: 'Customer 004' }
    ])
    Order.create!([
      { reference: 'ORD001' },
      { reference: 'ORD002' },
      { reference: 'ORD003' },
      { reference: 'ORD004' },
      { reference: 'ORD005' }
    ])

Next run the following command to seed the database    


    $ rails db:seed    


Now we are ready to start the Rails server so go ahead and run the following command in your terminal or command prompt:


    $ rails server


You should be able to use your web browser to navigate to your newly created Rails app via **[http://localhost:3000](http://localhost:3000)**    

You can also test your endpoints with the web browser.

* [http://localhost:3000/products.json](http://localhost:3000/products.json) for products.
* [http://localhost:3000/customers.json](http://localhost:3000/customers.json) for customers.
* [http://localhost:3000/orders.json](http://localhost:3000/orders.json) for orders.

    
## Introduction to Angular 2+ (also Angular 4)

**Angular** is a framework for building web applications front-ends using **TypeScript**, actually you can use either **TypeScript**, **JavaScript** or **Google Dart** but the official and recommended language is **TypeScript**. **TypeScript** is a superset of **JavaScript** that adds classical OOP concepts (Like **Java** ,**C++** ,**SmallTalk** etc.) and strong types, since browsers only understand plain **JavaScript** so we need transpilers to compile **TypeScript** source code to **JavaScript**.   

An **Angular 2+** (currently **Angular 4**) project contains many files (configuration + source files) and has an opinionated directory structure (At least the project generated with the official **Angular** CLI) so it needs to have its own separate directory, preferably inside Rails's project directory.

## Installing the Angular 2+ CLI 

The **Angular 2+** CLI allows you to create an **Angular** project on the fly without the hassle of Webpack and TypeScript configuration. Before you can use it, it needs to be installed from **npm**
    
    $ npm install -g @angular/cli

Again this requires you to have **NodeJS** and **NPM** installed on your local development machine.

    
## Generating an Angular 2+ Project

Next navigate inside your working folder 

    $ cd ruby5-angular2-app

Then generate a new **Angular 2+** application

    $ ng new frontend

Once that finishes ,navigate inside your app then run **ng serve** to serve it locally with a live reload local development server.
    
    $ cd frontend
    $ ng serve

Using your web browser navigate to **[http://localhost:4200](http://localhost:4200)**

That's it, you are now ready to start developing your front-end app.

## Adding Bootstrap 4 

Open **src/index.html** then add **Bootstrap 4** files from CDN


    <head>
      <meta charset="utf-8">
      <title>Frontend</title>
      <base href="/">
    
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="icon" type="image/x-icon" href="favicon.ico">
      <link rel="icon" type="image/x-icon" href="favicon.ico">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    
    </head>
    <body>
      <app-root></app-root>
      <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        
    </body>


## Create Angular 2+ Providers/Services


Direct interaction with the remote API backend will take place in **providers** to encourage separation of concerns so lets create a provider or service that talks to our Rails backend which can be injected in our components via **DI** or **Dependency Injection**.

    ng g service api

Next you'll need to import it and add it to the list of providers in **app.module.ts**


    /*Other imports*/
    import { ApiService } from './api.service';
    //
    @NgModule({
      declarations: [
        AppComponent,
        ProductAddComponent,
        ProductListComponent,
        OrderAddComponent,
        CustomerAddComponent,
        OrderListComponent,
        CustomerListComponent
      ],
      imports: [
        BrowserModule
      ],
      providers: [ApiService],
      bootstrap: [AppComponent]
    })
    export class AppModule { }


Now lets add the code that talks to our **Rails** backend remote endpoints.

Open **src/app/api.service.ts** in your prefered code editor or IDE (I'm using **Visual Studio Code** which has the best **TypeScript** support among the other code IDEs) then add:


An import for *HttpClient* from *@angular/common/http*

    import { HttpClient } from '@angular/common/http';

Next declare a variable to hold the address of remote backend

    API_URL : string = "http://localhost:3000/";

Next inject *HttpClient* via component constructor:

    constructor(public http: HttpClient) { }

And finally add the CRUD methods:
      
      // read method    
      public get(path) {
          
          var endpoint = this.API_URL + path;
          return this.http.get(endpoint);
    
      }
    
      // create method 
      public post(path:string,body:any) {
          
          var endpoint = this.API_URL + path;
          return this.http.post(endpoint,body);
    
      }
      // delete method    
      public delete(path:string){
    
        var endpoint = this.API_URL + path;
        return this.http.delete(endpoint);
    
      }  
      // update method    
      public update(path:string, body:any){
        var endpoint = this.API_URL + path;
        return this.http.put(endpoint,body);
      }


Now with these methods we can communicate with our backend.      


## Create  Angular 2+ Components

Now it's time to create Angular components for creating and listing products, orders and customers.

Using the Angular CLI you can generate these components on the fly by running:

    ng g component product-add
    ng g component order-add
    ng g component customer-add
    
    ng g component product-list
    ng g component order-list
    ng g component customer-list

    

## Rails 5.x and Angular 2 Integration 


There are many different opinions about how to integrate Angular 2+ with Rails:
* Use Ruby on Rails asset pipline to serve Angular's assets (JavaScript and CSS bundles) with RoR views. For this we need to use a build system like **SystemJS** which was the first build system to be used with Angular but it's not recommended anymore by the Angular team.
* Create completely separate apps for front-end (An Angular 2+ SPA or Single Page Application) and back-end (Ruby on Rails API only app).


## Enable CORS Headers in Ruby on Rails 5.1.4


If you try to communicate with the Rails backend from the Angular app running on diffrent port, you are going to get **Not Allowed Access Error**:

    XMLHttpRequest cannot load http://localhost:3000/products?_page=1&_limit=10. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://127.0.0.1:4200' is therefore not allowed access. The response had HTTP status code 500.

So we need either to proxy the requests or enable **CORS** (Cross Origin Resource Sharing) in **RoR 5** app. 

To enable CORS in **Rails 5** follow these steps: 

* Uncomment **rack-cors** in the **Gemfile**
* Run bundle install 
* change **config/initializers/cors.rb** to look like:



        Rails.application.config.middleware.insert_before 0, Rack::Cors do
        allow do
            origins '*'
        
            resource '*',
            headers: :any,
            expose:  ['access-token', 'expiry', 'token-type', 'uid', 'client'],
            methods: [:get, :post, :put, :patch, :delete, :options, :head]
        end
        end


## Add Routing 

You first need to import and add *RouterModule* to app's module declarations

    import { RouterModule } from '@angular/router';
    import { ProductAddComponent } from './product-add/product-add.component';
    import { ProductListComponent } from './product-list/product-list.component';
    import { OrderAddComponent } from './order-add/order-add.component';
    import { CustomerAddComponent } from './customer-add/customer-add.component';
    import { OrderListComponent } from './order-list/order-list.component';
    import { CustomerListComponent } from './customer-list/customer-list.component';
    /*Other imports*/
    
    @NgModule({
      declarations: [
        AppComponent,
        ProductAddComponent,
        ProductListComponent,
        OrderAddComponent,
        CustomerAddComponent,
        OrderListComponent,
        CustomerListComponent
      ],    
      imports: [
        BrowserModule,
        RouterModule.forRoot([
          {
            path: 'products',
            component: ProductListComponent
          },
          {
            path: 'orders',
            component: OrderListComponent
          },
          {
            path: 'customers',
            component: CustomerListComponent
          },
          {
            path: 'products/add',
            component: ProductAddComponent
          },
          {
            path: 'products/add/:id',
            component: ProductAddComponent
          },          
          {
            path: 'orders/add',
            component: OrderAddComponent
          },
          {
            path: 'orders/add/:id',
            component: OrderAddComponent
          },          
          {
            path: 'customers/add',
            component: CustomerAddComponent
          },
          {
            path: 'customers/add/:id',
            component: CustomerAddComponent
          },          
        ]),
      ],
      providers: [ApiService],
      bootstrap: [AppComponent]
    })
    export class AppModule { }


Next we'll need to add the router outlet and links to our main app component. So open **src/app/app.component.html** then add :


    <div class="container">
      <div class="jumbotron">
        <h1>Demo</h1>
        <h2>Angular 2+ & Bootstrap 4 & Ruby on Rails 5.1.4 </h2>
      </div>
      <div class="panel panel-primary">
        <div class="panel-heading" style="background: greenyellow;">
    
            <a routerLink="/products">Products</a>
            <a routerLink="/orders">Orders</a>
            <a routerLink="/customers">Customers</a>
            <a routerLink="/products/add">Add Products</a>
            <a routerLink="/orders/add">Add Orders</a>
            <a routerLink="/customers/add">Add Customers</a>
            
        </div>
        <div class="panel-body">
          
            <router-outlet></router-outlet>
    
    
        </div>
      </div>
    </div>


## Adding Models 

Create a file **src/app/product.ts** then add the following code.


    export class Product{
        public id:number;
        public name:string;
    
    }


Create a file **src/app/order.ts** then add the following code.

    export class Order{
        public id:number;
        public reference:string;
    
    }


Create a file **src/app/customer.ts** then add the following code.

    export class Customer{
        public id:number;
        public name:string;
    
    }


## Working with Forms in Angular 2+?


Before you can use *ngModel* with forms in Angular 2+ to bind inputs to components's data variables you need to import the forms module in **src/app/app.module.ts** and add it to the list of *imports*

    import { FormsModule } from '@angular/forms';
      /* ... */ 
      
      imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        /* ... */


## Implementing the CRUD Methods in Components 

After adding routing and the API service lets implement the CRUD methods in our previously generated components.

Lets start with *ProductListComponent*

First open **src/app/product-list/product-list.component.html** then add an HTML table to list the products:


    <div class="panel panel-default" style="margin-top:10px;">
    <div class="panel-heading">
        Products
    </div>
    <div class="panel-body" style="position:relative">
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th>Actions</th>
                        <th *ngFor="let column of columns">
                            {{column}}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr *ngFor="let row of rows">
                        <button (click)="delete(row['id'])">delete</button> ||
                        <button (click)="update(row['id'])">update</button>
                        
                        <td *ngFor="let column of columns">
                            {{row[column]}}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

Next open **src/app/product-list/product-list.component.ts** then follow these steps:

* Import *Router*, *ApiService* and *Product*


        import { Router } from '@angular/router';
        import { ApiService } from '../api.service';
        import { Product } from '../product';

* Inject *Router* and *ApiService*


        constructor(public apiService: ApiService , public router : Router) {
        }

* Declare *columns* and *rows* variables which hold the name of the table columns and products data


        public columns = ['id','name'];
        public rows : Array<Product>; 
    
* Add the code to retrieve products in *ngOnInit* hook


        ngOnInit() {
            this.apiService.get("products").subscribe((data : Product[])=>{
            console.log(data);
            this.rows = data;
            });
        }

* Finally add the *delete* and *update* methods


        public delete(id:string){
        
            console.log("delete : " + id);
            var path = 'products/' + id;
            this.apiService.delete(path).subscribe((r)=>{
            
            this.rows = this.rows.filter((p,i)=>{
        
                if(Number(id) === p.id ) 
                {
                return false;
                }
                return true;
            },this.rows)
        
            });
        
        }
        public update(id:string){
            console.log("update : " + id );
            this.router.navigateByUrl('/products/add/' + id);
        }


The delete method sends an HTTP DELETE request to RoR 5 backend to delete the resource by its id then filter the *rows* array to remove the deleted product from the array without refreshing the page.

The update method simply navigates to **products/add/:id** with the *id* of the equivalent *row*.

Now lets see the implementation of *ProductAddComponent* which is used to add a new product or update an existing product if the *id* is passed to the route.

Open **src/app/product-add/product-add.component.html** then add a form:

        <form (ngSubmit)="onSubmit()">
        
            <div class="form-group">
                <label class="col-xs-4 control-label" for="">Product name: </label>
                <div class="col-xs-8">
                    <input type="text" style="width: 300px" class="form-control" required
                        [(ngModel)]="product.name" name="productName">
                </div>
                <div>
                <input type="submit" value="Create" />
                </div>        
            </div>
        </form>


Next open **src/app/product-add/product-add.component.ts** and follow these steps:


* Import *Product*, *ApiService* and *ActivatedRoute* 

*ActivateRoute* is used to get route parameters, in our case we get the *id* of the product to update.  


        import { Product } from '../product';
        import { ApiService } from '../api.service';
        import { ActivatedRoute } from '@angular/router';

* Inject *ApiService* and *ActivatedRoute* via constructor component 


        constructor(public apiService: ApiService , public acRoute : ActivatedRoute) { }
 
* Declare a variable to hold the product 


        public product : Product  = new Product();


* When the component is initialized check if the route has an *id* parameter, if yes send a request to get the product with that *id*


        ngOnInit() {
        
            this.acRoute.params.subscribe((data : any)=>{
            console.log(data.id);
            if(data && data.id){
                this.apiService.get("products/"+data.id).subscribe((data : Product)=>{
                this.product = data;
                });
            }
            else
            {
                this.product = new Product();
            }
            })
        }


* Finally create *onSubmit()* method 


        public onSubmit(){
            console.log("Adding a product: " + this.product.name);
            if(this.product.id){
            this.apiService.update("products/"+this.product.id,this.product).subscribe((r)=>{
                console.log(r);
                alert("Product updated !");
            })
            }
            else
            this.apiService.post("products",this.product).subscribe((r)=>{
            console.log(r);
            this.product = new Product();
            alert("Product added !");
            
            });
        }


This method checks of the product has an id if yes it sends a PUT request to update it, if not it sends a POST request to create it.

That's it, you can do the same with the other components which is left to the reader as an exercise.



## Conclusion 

In this tutorial, we have seen how to build a simple example CRUD application with **Ruby on Rails 5.1.4** in the back-end and **Angular 2+** (currently **Angular 4**) in the front-end. In the next tutorial in these series we are going to see how to implment JWT authentication to our web application. If you have any problem related to this tutorial feel free to drop  a comment below, I'll be more than happy to help you. Thanks for reading and see your in the next tutorial. 

