# RN-crypto-listing
Crypto listing app with react native and react-redux hooks

This project was built with react-native and coinmarketcap API

**Live app is here :** https://expo.io/@leksyib/Pengscores <br/>

Design credit: Soumitro Sobuj 💯🔥. https://dribbble.com/shots/7110310-Cryptocurreny-App-Exploration/


## Screenshots
<img src="https://github.com/codinger41/RN-crypto-listing/blob/master/crypto.gif" width="425"/>



[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

## :arrow_up: How to Setup

**Step 1:** git clone this repo:

**Step 2:** cd to the cloned repo:

**Step 3:** Install the Application with `yarn` or `npm i`

**Step 4:** Get an API client key from https://coinmarketcap.com/api/documentation/v1/#operation/getV1CryptocurrencyListingsLatest and insert it into `/src/utils/axios.ts` line 6.

## :arrow_forward: How to Run App

1. cd to the repo
2. Run Build for either OS
  * for iOS
    * run `expo start --ios`
  * for Android
    * run `expo start --android`

## :no_entry_sign: Standard Compliant

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
This project adheres to Standard.  Our CI enforces this, so we suggest you enable linting to keep your project compliant during development.

**To Lint on Commit**

This is implemented using [husky](https://github.com/typicode/husky). There is no additional setup needed.

**Bypass Lint**

If you have to bypass lint for a special commit that you will come back and clean (pushing something to a branch etc.) then you can bypass git hooks with adding `--no-verify` to your commit command.

**Understanding Linting Errors**

The linting rules are from JS prettier-standard.  [Regular JS errors can be found with descriptions here](http://eslint.org/docs/rules/), while [React errors and descriptions can be found here](https://github.com/yannickcr/eslint-plugin-react).

