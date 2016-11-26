# Fizz Buzz Challenge with Javascript
This is the classic Fizz Buzz challenge which coders get all the time. Read more about it (https://en.wikipedia.org/wiki/Fizz_buzz).

I created this as part of week 2 at the CraftAcademy Bootcamp (https://www.craftacademy.se). The idea of this project is to work with basic TDD with Karma to run both acceptance and unit tests and practise how to set it up with Travis and Coveralls. You can scaffold the boilerplate yourself (see below) and try it out. The idea is to create a working fizz buzz game with tests of suites of the entire code.

## Expected result
This version is very barebones. Basically I solved it with the minimun amount of code and effort to achieve the objectives of the assignment. You should end up with a basic form consisting of 2 input elements that takes a number and plays the fizz buzz game up to that number.

## JS Test Boilerplate 0.1 (WIP)
[![Build Status](https://travis-ci.org/CraftAcademy/karma-jquery-jasmine_boilerplate.svg?branch=master)](https://travis-ci.org/CraftAcademy/karma-jquery-jasmine_boilerplate)
[![Coverage Status](https://coveralls.io/repos/github/CraftAcademy/karma-jquery-jasmine_boilerplate/badge.svg?branch=master)](https://coveralls.io/github/CraftAcademy/karma-jquery-jasmine_boilerplate?branch=master)

####Dependencies
* [Jasmine](https://github.com/jasmine/jasmine)
* [Karma](https://github.com/karma-runner/karma)
  - [Karma Jasmine](https://github.com/karma-runner/karma-jasmine)
  - [Karma Jasmine JQuery](https://github.com/bessdsv/karma-jasmine-jquery)
  - [Karma Chrome Launcher](https://github.com/karma-runner/karma-chrome-launcher)
  - [Karma Coverage](https://github.com/karma-runner/karma-coverage)
  - [Karma Coveralls](https://github.com/caitp/karma-coveralls)
  - [Karma Spec Reporter](https://github.com/mlex/karma-spec-reporter)

####Services
* [Travis](https://travis-ci.org/) for Continuous Integration
* [Coveralls](https://coveralls.io/) for Test Coverage

####Set up
Fork or download this repo (using `git clone`) and modify the files to suite your testing needs.

You can also use SVN to download this repo to your new project folder. On OSX you can install SVN using Homebrew.
```
$ brew install subversion
```

Create a new folder and `cd` into it. Run the `svn export` command to download files.

```
$ svn export https://github.com/CraftAcademy/karma-jquery-jasmine_boilerplate/trunk . --force
```
Once downloaded, you need to install all dependencies. Run
```
$ npm install
```

####Usage
You can use this setup to test your units and your jQuery events. Place your JavaScript code in `assets/js/` folder and partials in `spec/fixtures/` folder.

Your specs need to be end with `_spec.js` (e.g. `fizz_buzz_spec.js`)

Run tests with
```
$ npm test

# or

$ karma start karma.conf.js
```

####Adding tests
I have included some basic specs and `js` code for you to examine. Basically you need to build up your test environment and tear it down afterwards.
You can have different setups by nesting your `describe` blocks/functions.

```javascript
# spec/my_spec.js
describe("Given my code", function () {

	beforeEach(function () {
		/* ... Set up your test ... */
	});

	afterEach(function () {
		/* ... Tear it down ... */
	});

	describe("When ...", function () {

		beforeEach(function () {
		  /* ... Context specific setup ... */
		});

		it("Then...", function () {
			expect(true).toEqual(true);
		});
	});
});
```


## Versioning
I use Github for versioning.

## Author
* **Rodrigo Muñoz** (https://github.com/rmzse) with initial boilerplate from (https://github.com/CraftAcademy).
