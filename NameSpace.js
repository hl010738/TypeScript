console.log("命名空间");
var A;
(function (A) {
    class AA {
        run() { }
    }
    A.AA = AA;
})(A || (A = {}));
var B;
(function (B) {
    class AA {
        run() { }
    }
    B.AA = AA;
})(B || (B = {}));
let aaa = new A.AA();
let baa = new B.AA();
//# sourceMappingURL=NameSpace.js.map