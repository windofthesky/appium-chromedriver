"use strict";

var gulp = require('gulp'),
    boilerplate = require('appium-gulp-plugins').boilerplate.use(gulp),
    DEFAULTS = require('appium-gulp-plugins').boilerplate.DEFAULTS;

boilerplate({
  build: 'Appium Chromedriver',
  files: DEFAULTS.files.concat('bin/**/*.js'),
  jscs: false
});
