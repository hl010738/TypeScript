console.log("装饰器");

// 装饰器的执行顺序
// 属性 > 方法 > 方法参数 > 类

function logClass(target: any){
    console.log("log class");

    return class extends target {
        aa: any = "bb";
        run() {
            console.log(aa);
        }
    }
}

// @ts-ignore
@logClass
class SS {
    public aa: string;
    constructor() {}
    run(){ console.log("aa"); }
}

let ss = new SS();
ss.run();
console.log("-----------------------");

// 方法装饰器 修改原来的方法
function functionDecorator(params:any) {
    return function (target: any, methodName: any, desc: any) {
        console.log(target);
        console.log(methodName);
        console.log(desc.value);

        // 保存当前的方法
        let oMethod = desc.value;
        desc.value = function (...args: any[]) {
            args = args.map((value) => {
                return String(value);
            });
            console.log(args);
            // 运行原本的方法
            oMethod.apply(this, args);
        }
    }
}

class AAA {
    public str: any | undefined;
    constructor() {}
    @functionDecorator("bbb")
    run(...params: any){
        console.log("run");
    }
}
new AAA().run(123);