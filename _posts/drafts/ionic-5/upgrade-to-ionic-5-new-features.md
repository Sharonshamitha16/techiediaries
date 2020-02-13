# Upgrade to Ionic 5 and New Features

In this post, we'll learn how to upgrade an existing Ionic 4 project to the latest Ionic 5 version but before that let's see the new features brought with this version of Ionic.

## Ionic 5 New Features

This new release many new features such as:

- iOS 13 design updates, 
- a new API for creating custom animations, 
- revamped Ionicons, 
- updated Ionic colors, 
- full support for Ivy, Angular’s new renderer, 
- new starter designs, and more!

## Cloning and Setting up the Ionic 4 App 

We recommend updating to the latest Ionic 4 release (4.11.10) before updating to Ionic 5.

Open a new comman-line interface and clone the Ionic 4 app repository as follows:

```bash
git clone https://github.com/techiediaries/ionic-todo-app.git
```

Next, navigate to your project's folder and install the dependencies:

```bash
cd ionic-todo-app
npm i
```

Next, run the Ionic 4 app to verify that is working.

```bash
ionic serve -l
```


## Upgrading to Ionic 5

Let's get started by installing Ionic 5 CLI globally in our system:

```bash
npm i -g ionic
```

Next, update the `@ionic/angular` for this project:

```bash
npm i @ionic/angular@latest --save
```

Next, simply go to the [breaking changes document](https://github.com/ionic-team/ionic/blob/master/BREAKING.md) and see if there are any other changes that you need to make in your app.



## Running the Upgraded Ionic 5 App


Simply run the following command:

```bash
ionic serve 
```

Next, run in the Android or iOS device/simulator:

```bash
ionic run android
ionic run ios
```



