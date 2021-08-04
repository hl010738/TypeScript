console.log("接口")

interface Interface1 {
    name1: string;
    name2: string;
}
function f1(param: Interface1) {}
let param1: Interface1 = {
    name1: "aaa",
    name2: "bbb"
};
f1(param1);
console.log("----------------------");

// 函数类型接口
interface Interface2 {
    (key: string, value: string): string;
}
let a: Interface2 = function (key: string, value: string): string{
    return "";
}
console.log(a("key", "value"));
console.log("----------------------");

// 可索引接口 数组 对象
interface Interface3 {
    [index: number]: string;
}
let arr: Interface3 = ["aaa", "bbb"];
console.log(arr[0]);

interface Interface4 {
    [index: string]: string;
}
let arr2: Interface4 = {name: "aaa"};

// Class 类型接口
interface Interface5 {
    name: string;
    run(): string;
}
class AA implements Interface5{
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    run(): string {
        return this.name;
    }
}

// 接口继承
interface Interface6 {
    test();
}
interface Interface7 extends Interface6{
    run();
}
class BB implements Interface7{
    run() {}
    test() {}
}





















