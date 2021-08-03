console.log("数据类型");

// boolean
let flag: boolean = true;

// number
let num: number = 123;

// String
let str: string = "aaa";

// array
let array: number[] = [1, 2, 3];
let arr: string[] = ["aaa", "bbb", "ccc"];
let a: Array<Number> = [1, 2, 3];

// tuple 元组类型
let arrr: [string, number, boolean] = ["aaa", 111, true];

// enum
enum Flags {aaa = "aaa", bbb = "bbb"}
enum Flags1 {aaa , bbb }
enum Flags2 {aaa , bbb =4, ccc }
let flag2: Flags = Flags.aaa;

// any 类型
let arg1: any = 111;
arg1 = "aaa";

// null undefined
let arg2: null;
let arg3: undefined;
let arg4: number | undefined | null;
arg4 = 123;

// void
function f(): void {
    console.log()
}

// never 包含 null undefined
// 表示从不会出现的值
// 声明 never 类型只能被 never 赋值
let a1: never;
a1 = (() => {
    throw new Error("aaa");
})()