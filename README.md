# reactnative-calc

This is my first attempt with ReactNative.
A really simple old-school calculator.

I'm not a "fullstack js" programmer.
Comming from Java world, it's hard to integrate new-age's javascript world.
Most of the time the hard part is about buggy tools, incompatible or deprecated libraries, multiples js specifications, ...
Needing a running nodejs to transpile javascript to javascript is not intuitive.

## This is not a real project

I's just a project to learn the basics of RN and Redux.
There is no custom native component.
I used only what's already available.

The project worked at least once on iOS but I did not test after each update on this plateform
so I can't tell for sure that it actually works.


## How to run

### Prerequisites

To run this app on ANDROID from LINUX you will need :
- [jdk 8](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
- [android sdk](http://developer.android.com/sdk/index.html#downloads). Download the "Get just the command line tools" part then follow instuction of the "SDK Readme.txt" file in the archive to install platform-tools.
- [nodejs](https://nodejs.org/en/download/current/)

### Preparation

* Create a script with
```bash
#!/bin/sh

export JAVA_HOME=[PATH_TO_JDK8]
export NODE_HOME=[PATH_TO_NODEJS]
export ANDROID_HOME=[PATH_TO_ANDROID_SDK]

export PATH=$NODE_HOME/bin:$PATH
```
ex :
```bash
#!/bin/sh

export JAVA_HOME=/home/mike/applis/java/jdk8
export NODE_HOME=/home/mike/applis/node/node-v6.0.0-linux-x64
export ANDROID_HOME=/home/mike/applis/android/sdk

export PATH=$NODE_HOME/bin:$PATH
```

and source it in your current terminal :
```bash
. ~/bin/nodeenv
```

(if the script has been put in ~/bin/nodeenv)

* install required node plugins :

```bash
npm install -g react-native-cli mocha
```

* checkout
```bash
git clone git@github.com:mbaroukh/reactnative-calc.git
```

* update dependencies

```bash
npm install
```
(200+ Mo to download to build a 7Mo app ...)

* start an emulator

You can create it with andoid utilities :
```bash
$ANDROID_HOME/tools/android avd &
```
Later, you will only need to launch the emulator
```bash
$ANDROID_HOME/tools/emulator -avd reactnative
```

* install application
```bash
react-native run-android
```

* start dev server
```bash
npm start
```

## What I've learned

### You have to hack React

I'm pretty sur that using React Native out of the box without a good knowledge of
what happened behind the scene will always force you to adapt your app to react Native
capabilities.
But to make a great app, you have to hack React to adapt React to your app.

### Speed

React native apps are fast because view are native components.
But there is another reason : the javascript thread managing the
application state is not the ui thread. As I understand, the ui thread
only take care of ui. So the application never seems laggy.


### [Redux](http://redux.js.org/index.html)

In this app, I uses Redux for state management.
There are some more like [Mobx](http://mobxjs.github.io/mobx/) or [Reflux](https://github.com/reflux/refluxjs).

Redux works nice because of React hability to update only what changed on the view.

I's easy to understand and to use.
Don't know what will happened when the application grows.

The biggest benefit is the ability to test reducers that are simple functions.
(ex : [keypress](blob/master/app/reducers/keypress.js))


### ES2015

Out of the box, ReactNative uses ES2015 via Babel.
For this, it use the npm package "babel-preset-react-native" as a dependency and the "react-native" preset.
But when you test (here with mocha), default configuration while use ES5.
When you wan't to use Babel for your tests, you need to create a [.babelrc](blob/master/.babelrc) which contains the same presets has RN.



## TODO

### keys sizes

keys sizes are computed base on screen width.
They should be computed base on parent width.

### look at [async flows](http://redux.js.org/docs/advanced/AsyncFlow.html) for redux

the actual app's actions are not time consuming so it's better as is.
but if there where, for instance, network requests, they couldn't run synchonously.

### look at [this syntax](https://corbt.com/posts/2016/03/16/detecting-orientation-in-react-native.html) for store actions

```javascript
export function appLayout():StoreAction {
```

I did not found any reference to it in redux docs.

}

