// Original concepts provided by Backbone Boilerplate project: https://github.com/tbranyen/backbone-boilerplate
require.config({
  // Initialize the application with the main application file
  deps: ["main"],

  baseUrl: "js",

  paths: {
    // Libraries
    jquery:    "libs/jquery.min",
    lodash:    "libs/lodash.min",
    backbone:  "libs/backbone.min",
    caroufredsel: "libs/caroufredsel",
    pretty_photo: "libs/prettyPhoto/js/jquery.prettyPhoto"
  },
  shim: {
    backbone: {
      deps: ["lodash", "jquery"],
      exports: "Backbone"
    },
    caroufredsel: {
      deps: ["jquery"],
      exports: "caroufredsel"
    },
    pretty_photo: {
      deps: ["jquery"],
      exports: "prettyPhoto"
    }
  }
});
