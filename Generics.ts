console.log("泛型");

// 泛型函数
function f1<T>(param: T): T {
    let aa: T;
    return aa;
}

console.log("------------------");

// 泛型类
class AA<T> {
    list: T[] = [];
    add(value: T){
        this.list.push(value);
    }
}
let aa = new AA<number>();
console.log("------------------");

// 泛型函数
interface Interface1 {
    <T>(value: T): T;
}
let int1: Interface1 = function<T> (value: T): T {
    return value;
}
console.log("------------------");