# themer-prototypes

This repository contains early prototyping and experimental work for adding a Card theming feature. That work is now part of the builder/cardhost app found in the [Cardstack mono-repo](https://github.com/cardstack/cardstack), and this repo is now deprecated.

The goal was to get a sense of which browser-based code editors would be helpful for us when adding a theming option to the Card Builder.
The outcome will be the creation of a new, separate package that integrates with the Cardstack ecosystem.
At that point, this repository will be archived.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm or yarn)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd themer-frontend`
* `yarn install` or `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `yarn lint:hbs`
* `yarn lint:js`
* `yarn lint:js -- --fix`

(use `npm run <command>` if you don't use yarn)

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

```sh
AWS_PROFILE="ember-deploy" ember deploy production
```

This will use the access keys following normal AWS resolution.
See config in `deploy.js` for the destination.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
