# FireQuiz

A `React Native` interactive language `Quiz` game app that shows multiple-choice questions to help an English user learn German.

### How it works
![](https://github.com/sumit31raj/FireQuiz/blob/main/FireQuiz_Final.gif)

### System requirements

- Node
- npm OR yarn
- CocoaPods
- XCode
- AndroidStudio

For setting up the whole environment for react-native apps, check out [this](https://reactnative.dev/docs/environment-setup).

### Installation

Install the dependencies and devDependencies and start the server.
```sh
$ git clone https://github.com/sumit31raj/FireQuiz.git
$ cd FireQuiz
$ yarn
```

### Run Apps

Run iOS
```sh
$ npx pod-install ios
$ yarn ios
```
Run Android

- Open android emulator
- Run the following command
```sh
$ yarn android
```

`Note`: In case of any error while running the anroid verison of the app, build the app from the Android Studio and then run it on the emulator.

### Structure
```
src/
.
├── App.tsx
├── assets
│   ├── images
│   │   ├── flag.png
│   │   ├── flag@2x.png
│   │   └── flag@3x.png
│   └── index.ts
├── components
│   ├── AlertView.tsx
│   ├── Button.tsx
│   ├── FillBlank.tsx
│   ├── OptionView.tsx
│   ├── QuizQuestion.tsx
│   └── index.tsx
├── firebase
│   └── index.ts
├── hooks
│   └── useQuizesHook.ts
├── locales
│   ├── en.json
│   ├── index.ts
│   └── initI18n.ts
├── screens
│   ├── Home.tsx
│   └── index.tsx
├── theme
│   ├── Colors.ts
│   ├── Size.ts
│   └── index.ts
└── types
├── ImageType.d.ts
├── LocaleType.d.ts
└── Quize.d.ts

6 directories, 19 files
```

- `src/App.tsx`: It contains app level implemenations which should be used at once in whole application lifecycle like AppNavigation.
- `src/assets`: It contains all the icons with different resolution.
- `src/components`: It contains all the reusable smaller unit of UI known as component.
- `src/firebase`: It contains all firebase queries, which are helping to fetch data(questions and multiple choice answers) from firebase.
- `src/hooks`: It contains reusable custom hooks.
- `src/screens`: It contains all the app's screens.
- `src/theme`: It contains app's theme related files:
  - `Size.ts`: I have used `react-native-size-matters` which helps in scalling the size of UI elements depending upon the device sizes. So that UI looks consistent & pixel perfect on every device.
  - `Colors.ts` It contains all the colors used in the app.

### Development

- `Project Structure`: Used module wise directory structure as this makes code more readable.
- `Functional component`: It uses a functional component as it has better readability and performance than Class components.
- `Styling`: Used stylesheet to avoid the inline styles as those are getting created in every re-render.

### Improvements

- Unit test cases for utility functions.
- UI improvements.
- Redux/Context api can be used to replace custom hooks.
