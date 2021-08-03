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






