interface BasicTypescript{
    id : number;
    nama: string;
    status : boolean;
}

class Perkenalan implements BasicTypescript{
    id : number;
    nama : string;
    status : boolean;

    constructor(id : number, nama : string, status : boolean) {
        this.id = id;
        this.nama = nama;
        this.status = status;
    }

    #show(){
        console.log(this.id);
        console.log(this.nama);
        console.log(this.status);
    }

    getShow(){
        return this.#show();
    }


}

//2.showConsole---------------------------------
let person = new Perkenalan(123,"alfika",true);
person.getShow();

//3.decorator-----------------------------------
function tryDecorator(message : any){
    return function(s :any){
        var pass = s;
        message(pass);
    }
}

function printDecoratorMessage(message : String){
    console.log(message);
}

var call = tryDecorator(printDecoratorMessage);
call("decorator sebuah class");


//4.array---------------------------------------
let tryArray = new Array <Number>();
tryArray = [1,2,3,4]
function arrayContainers(array:any){
    tryArray.push(array);
}

let array = [5, 6, 7, 8];
arrayContainers(array) ;
console.log(tryArray);
