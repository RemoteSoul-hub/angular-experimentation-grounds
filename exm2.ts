// ways to declare a variable in typescript

// var [identifier]: [type-annotation] = value;
// var [identifier]: [type-annotation];
// var [identifier]: value;
// var [ident];

// let c: number = 10;
// let b: boolean = false;
// console.log(c+"and"+b);

// let d: number = 0x123; // hexadecimal x / o for octet
// console.log(d);


// let firstName: string = "Yahya";


/// ARRAYS
// let arr: string[] = ["TS", "JS"];
// let angArr: Array<string> = ["TS", "JS"];

// let ac: [number, string];

//const
// const ad=10;

// enum fruit 
// {
//     apple,
//     banana,
//     mango,
//     orange
// }
// let fruitName: string = fruit[2];
// console.log(fruitName);


// let arr: any[] = ["TS", false, 15]; ANY type

// function myfunc() {
//     for(var i=0; i<=2; i++) {
//         console.log("This is "+i)
//     }
// }
// myfunc();

// function product(x,y) 
// {
//     return x*y;
// }

// product(2,3);

//Anonymous function
// let w= function(x, y) {
//     return x*y;
// }
// console.log(w(4,6));

// let ex= (a) => {
// console.log(a);
// }

// ex(1);

// class myClass 
// {
//     j: number;
//     constructor(k: number)
//     {
//         this.j = k;
//     }
//     value() {
//         console.log("The number is "+this.j);
//         return ("The number is "+this.j);
//     }
// }
// let myObj = new myClass(6);
// console.log(myObj.value);

interface myIntegers 
{
    s:number;
    t:string;
    myFunc();
}