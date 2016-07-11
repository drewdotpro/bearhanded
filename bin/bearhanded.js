#!/usr/bin/env node
'use strict';
var minimist = require('minimist');
var argv = minimist(process.argv.slice(2));
var bearhanded = require("../lib");
if(argv._.length === 0){
    return bearhanded.info();
}
if(argv._.indexOf("install")){
    return bearhanded.install();
}