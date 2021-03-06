# Stuff Assignment

## Project structure

1. Core.
2. Modules.
3. Shared.

> Starting with **Core** folder, the core folder holds all the logic of the important functions that are related to everything that should be encapsulated and also to the mechanism of the project structure.

> **Modules** folder is the container of all the main components of the project, in another word we can say that modules folder represent the application screens.

> **Shared** folder is the container of everything that can be accessible from the main components, by this way we can create generic components and used them in any main component so it will be easy to use, maintain and debug.

## Class Diagram

```plantuml
left to right direction

class Users{
    -integer id
    -string email
    -string password
    -string c_password
}

class Meetings{
    -integer id
    -integer user_id
    -string appointment
}

Meetings --> Users
```

## Required Packages

> - React Navigation: used to create the navigation structure for the application, for installation <br/> > `yarn add @react-navigation/native` <br/> > `yarn add @react-navigation/stack` <br/> > `yarn add react-native-reanimated` <br/> > `yarn add react-native-screens` <br/> > `yarn add @react-native-community/masked-view` <br/> > `yarn add react-native-safe-area-context`
> - Redux: helps us with sharing the states between components and store global state for the application, for installation <br/> > `yarn add redux` -- Redux Core <br/> > `yarn add react-redux`
> - React Native Paper Ui: which is a **UI** component library, for installation <br/> > `yarn add react-native-paper`<br/> > `yarn add react-native-vector-icons`<br/> `react-native link react-native-vector-icons`
> - Prop Types: used to document the intended types of properties passed to components, for installation <br/> > `yarn add prop-types`
> - Alias links: used to give links an alias for better usage and to be more readable for users, for installation <br/> > `yarn add babel-plugin-module-resolver`
> - Reinforcements package: used for dealing with objects, also it gives you some methods like **merge, get**, for installation <br/> >`yarn add reinforcements`
> - Keyboard Aware Scroll View: this package is responsible for creating the scroll view if needed while typing inside text input, for installation <br/> > `yarn add react-native-keyboard-aware-scroll-view`
> - React Native Dates: used to deal with date range picker, for installation, <br/> > `yarn add react-native-dates`
> - Moment: JS date library for parsing, validating, manipulating, and formatting dates, for installation <br /> > `yarn add moment`
> - Moment-Timezone: additionally to the moment library, it's support time zone, for installation <br /> > `yarn add moment-timezone`
> - Date Time Picker: React Native Community for (Date & Time Picker component), for installation <br/> > `yarn add @react-native-community/datetimepicker`
> - Redux Thunk: used to perform async code when dipatching action creator, it's like a middleware between the reducer and the dispatch function of the redux, for installation <br/> > `yarn add redux-thunk`
> - Firebase: `yarn add firebase`
> - Redux Firestore & React Redux Firebase: these packages are designed specifically for redux and firebase in order to work together in a easy and good way, foe installation <br/> > `yarn add redux-firestore@0.5.7 react-redux-firebase@2.2.4`
