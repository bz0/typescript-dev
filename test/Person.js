"use strict";
exports.__esModule = true;
var assert = require("power-assert");
var Person_1 = require("../src/Person");
describe('PersonTest', function () {
    it('コンストラクタのテスト', function () {
        var person = new Person_1.Person(10, 'hiroyky');
        assert.equal(person.id, 10);
        assert.equal(person.name, 'hiroyky');
    });
});
