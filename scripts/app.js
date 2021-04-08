console.log("hello"); // js is connected to html
//let $name = $("input-name") //$("<input type='text' id='name' name='name'><input type='submit' id='submit' value='Submit'>"); //user input stored as const $name
//console.log($name);





class Tomagachi {
    constructor (nameProp){
        this.name = nameProp;
        this.age = 0;
        //$("#displayAge").text(this.age);
        this.hunger = 10; //gives hunger a start of 10
        $("#displayHunger").text(this.hunger);
        this.sleep = 10;
        $("#displayEnergy").text(this.sleep);
        this.boredom = 10; 
        $("#displayStrength").text(this.boredom);
        
    }

    
    //main 
    main(event){
        console.log("game starting");
        //this.getOlder();
        console.log(this);
        this.getOlder();
        console.log(this.age);

    }
    
    //METHOD TO ADD METRICS AND UPDATE DOM
    // updateDom(metric, htmlMetric){
    //     metric++;
    //     $(htmlMetric).text(metric);   
    // }

    //ADDING
    // addAge() {
    //     this.age++;
    //     console.log(this.age);
    // }

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
        $("#displayHunger").text(this.hunger);
        console.log(this);
        // return this.age;
    }
    getHunger(){ // decrease 1 to hunger every 45 seconds
        setInterval(this.getHungry, 3000 /*30 seconds*/)
    }

    //Sleep METHODS
    getSleepy=()=>{
        this.sleep--;
        $("#displayEnergy").text(this.sleep);
        console.log(this);
        // return this.age;
    }
    
    getSleep(){ // decrease 1 to hunger every 45 seconds
        setInterval(this.getSleepy, 3000 /*30 seconds*/)
    }

    //BORED METHODS
    getBored=()=>{
        this.boredom--;
        $("#displayStrength").text(this.boredom);
        console.log(this);
        // return this.age;
    }
    
    getBoring(){ // decrease 1 to hunger every 45 seconds
        setInterval(this.getBored, 3000 /*30 seconds*/)
    }

    //DEATH IFS
    death(metric){
        if(metric=0){
            console.log("pet has died"); //link to death screen
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

//let John; //= new Tomagachi("John");


function getInput(){
    let $newName = $("#input-name").val();
    let newCharacter = new Tomagachi($newName);
    console.log($newName);
    newCharacter.main();
    //John = newCharacter;
}
 //creation of object 
$("#btn-start").on("click", getInput) //on click run function getInput

