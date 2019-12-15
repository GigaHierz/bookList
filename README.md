# BookList

This Project was done for the application process at SpreadShirt. 
Only dependency tests work.

Function updateBook() doesnt work, for more detail see comments in booksService.

Function getBook() dosen't work with The Kite Runner, because there is a letter in the id.

Added `const cors = require('cors')`  and `app.use(cors())` into server.js of backend.

```javascrip
const app = require('express')();
const morgan = require('morgan');
const matchSorter = require('match-sorter').default;
const cors = require('cors')

const books = require('./books');

const shuffle = list => [...list].sort(() => Math.random() - 0.5);

app.use(morgan('tiny'));
app.use(cors()) 
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.17.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
