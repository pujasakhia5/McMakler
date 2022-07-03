# McMakler- Test Automation Challenge

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)
## Project Insight

Project aims to test API and End to End automation testing of a [Heroku Application](https://admin-advertisement.herokuapp.com/advertisements). 

## Tech stack

    1. Webdriver io - Jasmine framework
    2. Integration with Supertest & Mocha for API front
    3. Chai is the assertion library
    4. Json-schema to validate APIs
    5. Mochaawesome reporter for API Execution
    6. Spec Reporter for Web Execution

## Steps to execute:
    1. `npm i`
    2. To execute web e2e tests: `npm run web-test`
    3. To execute api e2e tests: `npm run api-test`
## Packages used:
    1. `supertest`
    2. `faker`
    3. `Jasmine`
    4. `mocha`
    5. `chai`
    6. `mochawesome`
    7. `json-schema`
    8. `wdio-geckodriver-service`
    9. `xpath`

## Tree structure:
```
├── wdio.conf.js
├── README.md
├── package-lock.json
├── package.json
├── env.sample
├── Babel.config.js
├── .gitignore
└───test
    ├───data
    |   ├───validation.js
    ├───helper
    |   ├───elementUtil.js
    ├───pageobjects
    |   ├───advertisement.page.js
    |   ├───page.js
    ├───restapi
    |   ├───apiflow.js
    ├───service
    |   ├───apidata.js
    |   ├───dataservices.js
    └───specs
        ├───createflow.e2e.js
        ├───updateflow.e2e.js
```

## References:
[Webdriver.IO](https://webdriver.io/)
