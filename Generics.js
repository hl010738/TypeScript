console.log("泛型");
// 泛型函数
function f1(param) {
    var aa;
    return aa;
}
console.log("------------------");
// 泛型类
var AA = /** @class */ (function () {
    function AA() {
        this.list = [];
    }
    AA.prototype.add = function (value) {
        this.list.push(value);
    };
    return AA;
}());
var aa = new AA();
console.log("------------------");
var int1 = function (value) {
    return value;
};
console.log("------------------");
