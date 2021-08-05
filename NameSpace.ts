console.log("命名空间");

namespace A {
    export class AA {
        run(){}
    }
}

namespace B {
    export class AA {
        run(){}
    }
}

let aaa = new A.AA();
let baa = new B.AA();