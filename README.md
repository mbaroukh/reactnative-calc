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




