console.log("hello"); // js is connected to html
//let $name = $("input-name") //$("<input type='text' id='name' name='name'><input type='submit' id='submit' value='Submit'>"); //user input stored as const $name
//console.log($name);





class Tomagachi {
    constructor (nameProp){
        this.name = nameProp;
        this.age = 0;
        //$("#displayAge").text(this.age);
        this.hunger = 10; //gives hunger a start of 10
        // $("#displayHunger").text(this.hunger);
        this.sleep = 10;
        // $("#displayEnergy").text(this.sleep);
        this.boredom = 10; 
        $("#displayStrength").text(this.boredom);
        
    }

    
    //main 
    main(event){
            console.log("game starting");
            //this.getOlder();
            //console.log(this);
            this.getOlder();
            console.log(this.age);
            this.getSleep();
            this.getHunger();
            this.getBoring();
            this.endGame();
            console.log(this.hunger);
            // if(this.hunger === 0 || this.sleep === 0 || this.boredom ===0){
            //     console.log("Pet is dead");
            // }
        }
        

    
    //AGE METHODS
    getOld=()=>{ //arrow function sets the value of this
        //console.log("hi");
       // this.addAge()
        this.age++;
        $("#displayAge").text(this.age);
    }
    getOlder(){ // Add 1 to age every 30 seconds
        setInterval(this.getOld, 3000 /*30 seconds*/)
        this.getOld();
    }

    //HUNGER METHODS
    getHungry=()=>{
        this.hunger--;
       // $("#displayHunger").text(this.hunger);
        $("#hungerBar").val(this.hunger);
    }
    getHunger(){ // decrease 1 to hunger every 45 seconds
        setInterval(this.getHungry, 10000 /*30 seconds*/)
    }
    increaseHunger(){
        console.log(newCharacter.hunger);
        newCharacter.hunger++;
        //$("#displayHunger").text(newCharacter.hunger);
        $("#hungerBar").val(newCharacter.hunger);
        console.log(newCharacter.hunger);
    }

    //Sleep METHODS
    getSleepy=()=>{
        this.sleep--;
        $("#displayEnergy").text(this.sleep);
       // console.log(this);
        // return this.age;
    }
    
    getSleep(){ // decrease 1 to hunger every 45 seconds
        setInterval(this.getSleepy, 3000 /*30 seconds*/)
    }

    //BORED METHODS
    getBored=()=>{
        this.boredom--;
        $("#displayStrength").text(this.boredom);
      //  console.log(this);
        // return this.age;
    }
    
    getBoring(){ // decrease 1 to hunger every 45 seconds
        setInterval(this.getBored, 3000 /*30 seconds*/)
    }

    //DEATH IFS
    endGame(){
        if(this.hunger === 0 || this.entertained === 0 || this.rest === 0){
            $("body").text("YOUR GROOT DIED! refresh page to restart!");
        }
    }
    
    

    // const test = "monkeys";
// $("#displayAge").text(test);


    //ON CLICK BUTTONS ADD METHODS
        //add 1 to metric
    // addHunger(){
    //     $("#Eat").on("click", this.hunger++);
    //     $("#hunger").text($);
    // }

    
    //sayHello() {console.log("Hello")}

    
// METHODS
//     timer
//         FOR every minute add 1 to age
//             subtract 1 from hunger, sleep and boredom
}

// const test = "monkeys";
// $("#displayAge").text(test);

let newCharacter = null; //globalization of object thats going to be created, if not object returns as not create


function getInput(){
    let $newName = $("#input-name").val();
    newCharacter = new Tomagachi($newName);
    console.log($newName);
    newCharacter.main();
    $("#Eat").on("click", newCharacter.increaseHunger);
}
 //creation of object 

$("#btn-start").on("click", getInput)
 //on click run function getInput

