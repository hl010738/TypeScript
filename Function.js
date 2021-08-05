console.log("函数");
// 函数声明
function f1() {
    return "aaa";
}
// 匿名函数
var var2 = function () {
    return 123;
};
// 函数参数
function f2(name, age) {
    return "name: " + name + ", age: " + age;
}
f2("aaa", 20);
// 可选参数
// 可选参数必须放置在最后
function f3(name, age) {
}
f3("aaa");
// 默认参数
function f4(name, age) {
    if (age === void 0) { age = 20; }
}
// 剩余参数
function f5(a) {
    var result = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        result[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < result.length; i++) {
        a = a + result[i];
    }
    return a;
}
alert(f5(1, 2, 3, 4, 5));
function f6(a) {
    if (typeof a == "string") {
        return a;
    }
    else {
        return a;
    }
}
function f7(name, age) {
    if (age) {
        return "";
    }
    else {
        return "";
    }
}
// 箭头函数
var f8 = function () {
    alert();
};
//# sourceMappingURL=Function.js.map