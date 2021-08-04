console.log("类")

// 定义类
class AA {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string{
        return this.name;
    }

    setName(name: string) {
        this.name = name
    }

    run():void {
        console.log(`AA ${this.name}`);
    }
}

let aa = new AA("aa");
aa.run();
console.log(aa.getName());
console.log("---------------------");


// 继承
class BB extends AA{

    b: string;

    constructor(name: string) {
        super(name);
    }

    run():void {
        console.log(`BB ${this.name}`);
    }

    bb(){
        console.log(`BB ${this.b}`)
    }
}
let bb = new BB("bb");
bb.run()
console.log("---------------------");

// 类的修饰符
class CC {
    public p: string;
    protected t: string;
    private v: string;

    run():void {
        console.log(`CC ${this.v}`);
    }
}
class DD extends CC{

    cc(){
        console.log(`CC ${this.t}`);
    }
}
let cc = new CC();
cc.p = "cc";
cc.run();
let dd = new DD();
dd.cc();
console.log("---------------------");

// 静态属性和方法
class FF {
    static ff: string

    static run(){
        return FF.ff;
    }
}
FF.run();
console.log("---------------------");

// 多态
class GG {
    name: string;
    run(){}
}
class HH extends GG{
    run() {
        console.log(`HH ${this.name}`);
    }
}
let hh = new HH();
hh.run();
console.log("---------------------");

// 抽象类 抽象方法
abstract class II {
    name: string;
    abstract run();
    test(){console.log(`II ${this.name}`);}
}
class JJ extends II{
    run() {
        console.log(`JJ ${this.name}`);
    }
}
let jj = new JJ();
jj.run();
console.log("---------------------");


