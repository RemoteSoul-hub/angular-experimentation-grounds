"use strict";
exports.__esModule = true;
var A = /** @class */ (function () {
    function A(s, t) {
        this.s = s;
        this.t = t;
    }
    A.prototype.myFunc = function () {
        console.log("Implementing an interface " + this.s + " " + this.t);
    };
    return A;
}());
var o = new A(3, "Toto");
console.log(o.myFunc());
