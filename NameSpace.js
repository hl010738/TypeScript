console.log("命名空间");
var A;
(function (A) {
    var AA = /** @class */ (function () {
        function AA() {
        }
        AA.prototype.run = function () { };
        return AA;
    }());
    A.AA = AA;
})(A || (A = {}));
var B;
(function (B) {
    var AA = /** @class */ (function () {
        function AA() {
        }
        AA.prototype.run = function () { };
        return AA;
    }());
    B.AA = AA;
})(B || (B = {}));
var aaa = new A.AA();
var baa = new B.AA();
//# sourceMappingURL=NameSpace.js.map