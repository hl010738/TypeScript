console.log("数据类型");
// boolean
var flag = true;
// number
var num = 123;
// String
var str = "aaa";
// array
var array = [1, 2, 3];
var arr = ["aaa", "bbb", "ccc"];
var a = [1, 2, 3];
// tuple 元组类型
var arrr = ["aaa", 111, true];
// enum
var Flags;
(function (Flags) {
    Flags["aaa"] = "aaa";
    Flags["bbb"] = "bbb";
})(Flags || (Flags = {}));
var Flags1;
(function (Flags1) {
    Flags1[Flags1["aaa"] = 0] = "aaa";
    Flags1[Flags1["bbb"] = 1] = "bbb";
})(Flags1 || (Flags1 = {}));
var Flags2;
(function (Flags2) {
    Flags2[Flags2["aaa"] = 0] = "aaa";
    Flags2[Flags2["bbb"] = 4] = "bbb";
    Flags2[Flags2["ccc"] = 5] = "ccc";
})(Flags2 || (Flags2 = {}));
var flag2 = Flags.aaa;
// any 类型
var arg1 = 111;
arg1 = "aaa";
// null undefined
var arg2;
var arg3;
var arg4;
arg4 = 123;
// void
function f() {
    console.log();
}
// never 包含 null undefined
// 表示从不会出现的值
// 声明 never 类型只能被 never 赋值
var a1;
a1 = (function () {
    throw new Error("aaa");
})();
//# sourceMappingURL=DataType.js.map