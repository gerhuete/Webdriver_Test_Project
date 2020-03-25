# e2e tests for Login access. (uses Webdriver.io, runs on sync mode, uses Babel, outputs log error on the reporter)

### Includes

  - Verify input are empty
  - Verify that the input contains their respective values
  - Verify user was logged successfully
  
### Installation
```sh

$ git clone https://github.com/gerhuete/Webdriver_Test_Project.git
$ cd Webdriver_Test_Project/
$ npm install
$ ./node_modules/.bin/wdio wdio.conf.js --spec automationPractice.test.js

```