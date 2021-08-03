var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("类");
// 定义类
var AA = /** @class */ (function () {
    function AA(name) {
        this.name = name;
    }
    AA.prototype.getName = function () {
        return this.name;
    };
    AA.prototype.setName = function (name) {
        this.name = name;
    };
    AA.prototype.run = function () {
        console.log("AA " + this.name);
    };
    return AA;
}());
var aa = new AA("aa");
aa.run();
console.log(aa.getName());
console.log("---------------------");
// 继承
var BB = /** @class */ (function (_super) {
    __extends(BB, _super);
    function BB(name) {
        return _super.call(this, name) || this;
    }
    BB.prototype.run = function () {
        console.log("BB " + this.name);
    };
    BB.prototype.bb = function () {
        console.log("BB " + this.b);
    };
    return BB;
}(AA));
var bb = new BB("bb");
bb.run();
console.log("---------------------");
// 类的修饰符
var CC = /** @class */ (function () {
    function CC() {
    }
    CC.prototype.run = function () {
        console.log("CC " + this.v);
    };
    return CC;
}());
var DD = /** @class */ (function (_super) {
    __extends(DD, _super);
    function DD() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DD.prototype.cc = function () {
        console.log("CC " + this.t);
    };
    return DD;
}(CC));
var cc = new CC();
cc.p = "cc";
cc.run();
var dd = new DD();
dd.cc();
console.log("---------------------");
