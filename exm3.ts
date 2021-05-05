import { myIntegers } from './exm2.ts';

class A implements myIntegers
{
    s:number;
    t:string;
    constructor(s: number, t: string) {
        this.s=s;
        this.t=t;
    }
    myFunc() 
    {
        console.log("Implementing an interface "+this.s+" "+this.t);
    }
}

let o = new A(3, "Toto");
console.log(o.myFunc());