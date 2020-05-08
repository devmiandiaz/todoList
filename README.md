## Simple Todo List
  Simple Todo List app made with React Native

## Features
  - Base template made with [React Native CLI](https://reactnative.dev/docs/0.60/getting-started)

## Clarifications
  - The project is made with the latest React API. It is using React Context just to allow the app to escalate in the future, even if the app is really simple, having a global state will allow us to add complexity in the future, different screens that manipulate the same state for example.
  - The input is being handled with a simple <TextInput /> and a React state, even if we could use third party libraries like [Formik](https://formik.org/docs/guides/react-native) in this case the implementation is more expensive than the benefits.
  - I chose this structure to keep the UI separated from the logic, which are being handle by React and the hooks respectively.
  - The AsyncStorage is being used to keep the todo list in memory once the user leaves/closes the app
  - The app was developed on IOS and tested on this platform, even if there should not be any problem, Android was not deeply tested.

## Getting started

  Clone the repo
  ```
  git clone https://github.com/devmiandiaz/todoList
  ```

  Move to the project folder and install the dependencies

  ```
  cd todoList
  yarn
  ```

  Run the project

  ### IOS
  ```
  yarn run ios
  ```

  ### Android
  ```
  yarn run android
  ```

  ### Troubleshooting

  If you have problems running the app on IOS:

  ```
  cd ios
  pod repo update && pod install
  ```
