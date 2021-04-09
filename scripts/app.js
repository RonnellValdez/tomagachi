class Tomagachi {
    constructor (nameProp){
        this.name = nameProp;
        this.age = 0;
        this.hunger = 10; 
        this.sleep = 10;
        this.boredom = 10; 
    }

    
    //main 
    main(event){
            console.log("game starting");
            this.introChange();
            this.getOlder();
            console.log(this.age);
            this.getSleep();
            this.getHunger();
            this.getBoring();
            this.endGame();
        }
  
    //INTRO MANIPULATION
    introChange(){
        $("#intro").text(this.name);
    }
         
    //AGE METHODS
    getOld=()=>{ //arrow function sets the value of this
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
        setInterval(this.getHungry, 45000)
    }
    increaseHunger(){
        newCharacter.hunger++;
        if(newCharacter.hunger > 10){ //accomadate for when value goes above 10
            newCharacter.hunger = 10;
        }
        $("#hungerBar").val(newCharacter.hunger);
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
        newCharacter.sleep++;
        if(newCharacter.sleep > 10){ //accomadate for when value goes above 10
            newCharacter.sleep = 10;
        }
        $("#energyBar").val(newCharacter.sleep);
    }

    //BORED METHODS
    getBored=()=>{
        this.boredom--;
        this.endGame();
        $("#boredomBar").val(this.boredom);
    }
    
    getBoring(){ // 
        setInterval(this.getBored, 30000 /*30 seconds*/)
    }
    
    increaseBoredom(){
        newCharacter.boredom++;
        if(newCharacter.boredom > 10){ //accomadate for when value goes above 10
            newCharacter.boredom = 10;
        }
        $("#boredomBar").val(newCharacter.boredom);
    }

    //DEATH IF
    endGame(){
        if(this.hunger === 0 || this.boredom === 0 || this.sleep === 0){
            $("body").text("YOU KILLED THE HUTT! refresh page to restart!");
            console.log("Game Over");
        }
    }
}

let newCharacter = null; //globalization of object thats going to be created, if not object returns as not create

function animate(){ // function to create animation that will make image opaque -- will tie to sleep button
    let div = $("#avatar");
        div.animate({opacity: '0.4'}, "slow");
        div.animate({opacity: '1'}, "slow");
}

function getInput(){
    let $newName = $("#input-name").val();
    newCharacter = new Tomagachi($newName); //new character value is now set to the value from class
    console.log($newName);
    newCharacter.main(); 
    $("#Eat").on("click", newCharacter.increaseHunger);
    $("#Sleep").on("click", newCharacter.increaseSleep);
    $("#Play").on("click", newCharacter.increaseBoredom);
    $("#Sleep").on("click", animate);
}

$("#btn-start").on("click", getInput)
 //on click run function getInput

