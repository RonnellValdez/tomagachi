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
       // $("#displayStrength").text(this.boredom);
        
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
        }
        

    
    //AGE METHODS
    getOld=()=>{ //arrow function sets the value of this
        //console.log("hi");
       // this.addAge()
        this.age++;
        $("#displayAge").text(this.age);
        if(this.age == 10){
            $("#avatar").attr("src", "https://static.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png/revision/latest?cb=20160910034237");
        }
    }
    getOlder(){ // Add 1 to age every 30 seconds
        setInterval(this.getOld, 3000 /*30 seconds*/)
        this.getOld();
    }

    //HUNGER METHODS
    getHungry=()=>{
        this.hunger--;
        this.endGame();
       // $("#displayHunger").text(this.hunger);
        $("#hungerBar").val(this.hunger);
    }
    getHunger(){ // decrease 1 to hunger every 45 seconds
        setInterval(this.getHungry, 10000 /*30 seconds*/)
    }
    increaseHunger(){
        //console.log(newCharacter.hunger);
        newCharacter.hunger++;
        //$("#displayHunger").text(newCharacter.hunger);
        $("#hungerBar").val(newCharacter.hunger);
       // console.log(newCharacter.hunger);
    }

    //Sleep METHODS
    getSleepy=()=>{
        this.sleep--;
        this.endGame();
        //$("#displayEnergy").text(this.sleep);
        $("#energyBar").val(this.sleep);
    }
    
    getSleep(){ // decrease 1 to hunger every 45 seconds
        setInterval(this.getSleepy, 10000 /*30 seconds*/)
    }
    increaseSleep(){
        //console.log(newCharacter.sleep);
        newCharacter.sleep++;
        //$("#displayHunger").text(newCharacter.hunger);
        $("#energyBar").val(newCharacter.sleep);
        //console.log(newCharacter.sleep);
    }

    //BORED METHODS
    getBored=()=>{
        this.boredom--;
        this.endGame();
        $("#strengthBar").val(this.boredom);
      //  console.log(this);
        // return this.age;
    }
    
    getBoring(){ // 
        setInterval(this.getBored, 30000 /*30 seconds*/)
    }
    
    increaseStrength(){
        //console.log(newCharacter.boredom);
        newCharacter.boredom++;
        //$("#displayHunger").text(newCharacter.hunger);
        $("#strengthBar").val(newCharacter.boredom);
        //console.log(newCharacter.boredom);
    }

    //DEATH IFS
    endGame(){
        if(this.hunger === 0 || this.boredom === 0 || this.sleep === 0){
            $("body").text("YOU KILLED YOUR PET! refresh page to restart!");
            console.log("Game Over");
        }
    }
}

// const test = "monkeys";
// $("#displayAge").text(test);

let newCharacter = null; //globalization of object thats going to be created, if not object returns as not create
function animate(){
    let div = $("#avatar");
        div.animate({opacity: '0.4'}, "slow");
        div.animate({opacity: '1'}, "slow");
}

function getInput(){
    let $newName = $("#input-name").val();
    newCharacter = new Tomagachi($newName);
    console.log($newName);
    newCharacter.main();
    $("#Eat").on("click", newCharacter.increaseHunger);
    $("#Sleep").on("click", newCharacter.increaseSleep);
    $("#Workout").on("click", newCharacter.increaseStrength);
    $("#Sleep").on("click", animate);
}
 //creation of object 

$("#btn-start").on("click", getInput)
 //on click run function getInput

