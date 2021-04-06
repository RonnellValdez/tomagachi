console.log("hello"); // js is connected to html
let $name = "John" //$("<input type='text' id='name' name='name'><input type='submit' id='submit' value='Submit'>"); //user input stored as const $name
console.log($name);





class Tomagachi {
    constructor (nameProp){
        this.name = nameProp;
        this.age = 0;
        this.hunger = 10; //gives hunger a start of 10
        this.sleep = 10;
        this.boredom = 10; 
    }
// METHODS
//     timer
//         FOR every minute add 1 to age
//  
    // intervalTimer(methodToRun,interval){
    //     setInterval( function() {methodToRun}, interval) //1000 = 1 second
    // }
    
    intervalTimer(methodToRun,interval){
        setInterval( methodToRun, interval) //1000 = 1 second
    }
    

    sayHello() {console.log("Hello")}
    
// METHODS
//     timer
//         FOR every minute add 1 to age
//             subtract 1 from hunger, sleep and boredom
}

const jabba = new Tomagachi($name); //creation of object jabba

function func (){console.log("Hi")};
jabba.intervalTimer(jabba.sayHello,3000);
jabba.sayHello();