# Expo Constants.manifest iOS/Android Undefined Crash Bug

This repository demonstrates a bug encountered when using the Expo `Constants.manifest` property.  Accessing the `ios` or `android` keys within `Constants.manifest` can cause an unexpected crash if these keys are unexpectedly undefined. This typically happens due to configuration issues or incomplete build processes, making it challenging to pinpoint the error.

The `bug.js` file showcases the problematic code, while `bugSolution.js` offers a solution to gracefully handle the potential absence of these keys.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run the app using Expo Go or a similar Expo development tool.
4. Observe the app crashing when attempting to access the missing `ios` or `android` key in `Constants.manifest` (refer to `bug.js`).

## Solution

The `bugSolution.js` file demonstrates how to safely access the `ios` and `android` properties within `Constants.manifest` using optional chaining and nullish coalescing. This approach prevents crashes by gracefully handling the cases where these keys might be absent. 