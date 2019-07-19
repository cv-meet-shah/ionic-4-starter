# Ionic 4 Starter

Ionic 4 Starter is a ionic based app for hybrid development of Android and iOS devices. It provides base architecture to get started with ionic. It has some more features along with ionic starter kit.

### Installation
Ionic-4-Starter requires [Node.js](https://nodejs.org/) v6+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd MadOnics500
$ npm install -d
$ ionic serve
```
### Builds
## Android
- To build for android devices you must have configured your OS with all the environments.

```
ionic cordova build android --prod
```
- APK will be generated to `platform/android/`

## iOS
- To build for iOS devices you must have configured your OS with all the environments.

```
ionic cordova build ios --prod
```
- IPA will be generated to `platform/ios/`

### Coding guidelines
## Functions (Methods)
- When you write an method you should always write comments explaining usage of the method. structure of comment should be:
```
  /**
   * Method to display Toast on the screen.
   * @optional @param title string value display as message.
   * @optional @param duration timeout value hide the toaster. Default is 2s.
   * @optional @param position string value to decide where to popup the toast.
   */
  presentToast(message: string = "", position: any = "top", duration: number = 2000) {
    //body
  }
```
- optional param should start with @optional @param {name} //Description
- If method is returning something should always have return Type.

### Plugins

Ionic-4-Starter is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md][PlDb] |
| Github | [plugins/github/README.md][PlGh] |
| Google Drive | [plugins/googledrive/README.md][PlGd] |
| OneDrive | [plugins/onedrive/README.md][PlOd] |
| Medium | [plugins/medium/README.md][PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |