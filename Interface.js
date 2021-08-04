console.log("接口");
function f1(param) { }
var param1 = {
    name1: "aaa",
    name2: "bbb"
};
f1(param1);
console.log("----------------------");
var a = function (key, value) {
    return "";
};
console.log(a("key", "value"));
console.log("----------------------");
var arr = ["aaa", "bbb"];
console.log(arr[0]);
var arr2 = { name: "aaa" };
var AA = /** @class */ (function () {
    function AA(name) {
        this.name = name;
    }
    AA.prototype.run = function () {
        return this.name;
    };
    return AA;
}());
var BB = /** @class */ (function () {
    function BB() {
    }
    BB.prototype.run = function () { };
    BB.prototype.test = function () { };
    return BB;
}());
