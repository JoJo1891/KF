# GONORD BY GOFID'

"Go Nord" is a digital platform for multi-boutique loyalty intended for the northern territories of Martinique.

The company MEDIAFID, under the impulse of CAP Nord, makes available its GoFid' Application which allows merchants to innovate by digitizing their classic loyalty program.

> ### 001 Project Structure

You will find at the root of the project 4 folders. The source code can be found in the _"src"_ directory.

Inside _"src"_ the project is divided into 7 sections.

- #### Api folder:

  In this folder you will find all the endpoints that are used to communicate with the backend.

  You can notice that there are several files, each of them separated by entity.

  In the _api.js and authApi.js_ you will find the axios instances config. In the _api.js_ you can find the axios instance that is used for request that does not need authentication. On the other hand, in the _authApi.js_ you find the axios instance that is used for request that needs authentication.

- #### Assets folder:

  Here you can find any file that lives alongside the source code of the app and that the app needs at runtime. These files includes images, fonts, icons, etc.

- #### Components folder:

  In this folder you will see the _custom components module_ where are located all the differents components that are along the project. This will let you split the UI into independent, reusable pieces, and think about each piece in isolation. All the components inside this folder are exported through the _index.js_ file.

- #### Navigation folder:

  In this folder we can find everything related to the navigation module, integrated with _@react-navigation_.

  In the _ScreensContainer.js_ file you can find all the imports and definitions of the project routes stack. Also in the same we can find different validations and functions that are executed in the life cycles of the component and app, for example: functions to validate authentication, permissions queries, etc.

  The _TabBarComponent.js_ file contains the TabBar of the application.

  This module is exported as AppNavigation and is the main wrapper of the application.

- #### Screens folder:

  The screens folder serves as the primary container for the application's individual screens or pages. It's crucial for organizing and managing the UI components.

  Each screen is usually represented by its own JavaScript file, adhering to the _.js_ extension. These files contain the code responsible for rendering the screen's UI elements and handling its logic.

  The file names typically reflect the screen's purpose, using descriptive names like _HomeScreen.js_, _LoginScreen.jsx_, _etc._

  This folder also contains a sub-folder named "tutorial". In this sub-folder you will find all those screens related to the tutorial tour or guide, that is displayed once a user interact with the app by first time.

- #### State folder:

  In this folder we can find all the application state configuration, made with the Redux Toolkit package in order to have an standard way to write Redux logic.

  Furthermore, there is also a folder named ExpoPushToken. This folde not belongs to redux configuration, but instead is where the notification subscription is made.

- #### Theme folder and StyleSheets inside screens and components:

  The theme folder contains individual JavaScript files representing styles for specific components or globally applied styles.

  In the most of the cases, every screen or components used to have an StyleSheet at the end of its _js_ file.

> ### 002 How to run the project

```
    -Step 1: before start building the project, please run yarn install.

    PD: ALWAYS USE YARN!
```

```
    -Step 2: run the command npx expo start.
```

```
    -Step 3: scan the qr code from the dev console or open from ExpoGo App.
```

> ### 003 Production Builds

```
    Before generating an AAB or IPA file the next line has to be paste and run in the terminal in order to allow some icons to display in the app or to avoid the font logs error.

    - rm -rf ./node_modules/expo/node_modules/expo-font/

    After runnig the last line of code, now the respective build of the app (AAB or IPA) can be generated.

    At first, be sure to have installed the EAS CLI that is the command-line app that you will use to interact with EAS services from the terminal. To install it, run the command

    - npm install -g eas-cli

    After configuring the EAS CLI and being logged into the expo account, finally run the next command

    - eas build

    Then follow the steps in order to get the new build.

    After the build has been generated, now you can upload the respective files to the digital stores.

```
