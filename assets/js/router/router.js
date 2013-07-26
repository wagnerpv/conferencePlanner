/*jslint indent: 2, nomen: true, maxlen: 100, sloppy: true, vars: true, white: true, plusplus: true*/
/*global window, $, Backbone */

var app = app || {};
app.Router = Backbone.Router.extend({

  routes: {
    ""       : "main",
    "talks"   : "talks",
    "speaker" : "speaker"
  },

  initialize: function () {
    this.naviView = new app.navigationView();
  },

  main: function () {

  },

  talks: function () {

  },

  speaker: function () {

  }

});

app.router = new app.Router();
Backbone.history.start();
