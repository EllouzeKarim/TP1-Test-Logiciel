# Math Operations

This repository contains JavaScript functions for mathematical operations and their corresponding unit tests.

## Installation

To install this project, follow these steps:

1. Clone the repository to your local machine:

```git clone https://github.com/EllouzeKarim/TP1-Test-Logiciel```

2. Navigate to the project directory:


```cd TP1-Test-Logiciel```


3. Install dependencies:

```npm i```


## 2. Usage

### Addition Function

A function `add` has been implemented in the `math.js` file to calculate the sum of two integers.

### Running Tests

1. Created a folder named `test`.
2. Inside the `test` folder, created a file named `math.test.js`.
3. Installed Vitest and added the following scripts to the `package.json` file:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "test": "vitest"
} ```
4. Copied the provided code to test the add function.
5. Execute the test using the command:
``npm run test ``

## Activity 1: Transform Function

Implemented the `transform` function to convert a string to uppercase.

Wrote three unit test cases covering:

- An empty string.
- A string with lowercase characters.
- A string with special characters.

Used different assertions to verify if the `transform` function correctly returns the transformed string, ensuring coverage of various scenarios.

## Activity 2: Sorting Function

Implemented the `sort` function in JavaScript.

Wrote three test cases.

Used assertions to verify if the `sort` function correctly returns the sorted array.

Ensured test coverage for different scenarios, including already sorted arrays, reversed arrays, etc.

Also tested boundary cases and potential error situations, such as arrays with non-numeric elements.

## Price Range Function

Wrote test cases for the `isPriceInRange(price, min, max)` function, covering range limits and cases where the price is outside the range.

## Random User Fetch Function

Wrote a test using Vitest for the `fetchRandomUser()` function, ensuring asynchronous waiting for the resolution of the promise returned by the function and verifying that the returned data is a JSON object containing information about the user.
## Exercice

- Run `npm test`. It will show code coverage in the terminal. You can change a test or source code to see HMR in action.

