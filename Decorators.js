var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log("装饰器");
// 装饰器的执行顺序
// 属性 > 方法 > 方法参数 > 类
function logClass(target) {
    console.log("log class");
    return class extends target {
        constructor() {
            super(...arguments);
            this.aa = "bb";
        }
        run() {
            console.log(aa);
        }
    };
}
// @ts-ignore
let SS = class SS {
    constructor() { }
    run() { console.log("aa"); }
};
SS = __decorate([
    logClass
], SS);
let ss = new SS();
ss.run();
console.log("-----------------------");
// 方法装饰器 修改原来的方法
function functionDecorator(params) {
    return function (target, methodName, desc) {
        console.log(target);
        console.log(methodName);
        console.log(desc.value);
        // 保存当前的方法
        let oMethod = desc.value;
        desc.value = function (...args) {
            args = args.map((value) => {
                return String(value);
            });
            console.log(args);
            // 运行原本的方法
            oMethod.apply(this, args);
        };
    };
}
class AAA {
    constructor() { }
    run(...params) {
        console.log("run");
    }
}
__decorate([
    functionDecorator("bbb")
], AAA.prototype, "run", null);
new AAA().run(123);
//# sourceMappingURL=Decorators.js.map