(function(){
    'use strict';
    var fs = require("fs");
    var colors = require("colors/safe");
    colors.enabled = true;
    //BearHanded
    module.exports = {
        info: function(){
            var header = fs.readFileSync('assets/header.txt', 'utf8');
            var logo = fs.readFileSync('assets/logo.txt', 'utf8');
            var pkg = fs.readFileSync('package.json', 'utf8');
            var packageInfo = JSON.parse(pkg);
            console.log(colors.red.bold(header));
            console.log(colors.gray.bold(logo));
            console.log();
            console.log();
            console.log();
            console.log(" " + packageInfo.description);
            console.log();
            console.log(" v" + packageInfo.version);
            console.log(" By " + packageInfo.author);
            console.log(" License: " + packageInfo.license);
            console.log();
            console.log(colors.bold(" Usage"));
            console.log(colors.bold(" ======"));
            console.log();
            console.log(colors.bold(" bearhanded install") + " - Skeleton App with Guided Install");
            console.log();
            console.log(colors.bold(" bearhanded update") + " - Update bearhanded code to be the latest and greatest (or repair something you broke)");
        }
    };
}());