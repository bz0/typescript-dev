"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var $ = require("jquery");
var person = new Person_1.Person(1, "yoko");
$(function () {
    $('body').html('彼は' + person.name + 'です。');
});
//# sourceMappingURL=main.js.map