# FE-Day5-Typescript

1. Interface
    ```sh
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
    ```
    
2. Show perkelanan func
    ```sh
    let person = new Perkenalan(123,"alfika",true);
    person.getShow();
    ```
    
3. Decorator
    ```sh
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
    ```
    
4. func only received array as input
    ```sh
    let tryArray = new Array <Number>();
    tryArray = [1,2,3,4]
    
    function arrayContainers(array:any){
        tryArray.concat(array);
    }

    let array = [5, 6, 7, 8];
    arrayContainers(array) ;
    console.log(tryArray);
    ```
    
output:
![image](https://user-images.githubusercontent.com/38674801/191964979-a632f39b-230f-4153-9ab6-d5fd0025f038.png)
