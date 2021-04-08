console.log("hello"); // js is connected to html
//let $name = $("input-name") //$("<input type='text' id='name' name='name'><input type='submit' id='submit' value='Submit'>"); //user input stored as const $name
//console.log($name);





class Tomagachi {
    constructor (nameProp){
        this.name = nameProp;
        this.age = 0;
        $("#displayAge").text(this.age);
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
        console.log(this.name);

    }
    
    // INCREMENTATION METHODS
    intervalTimer(methodToRun,interval){
        setInterval( methodToRun, interval) //1000 = 1 second
    }
    
    subtractMetric(metric){ // method to add values 
        metric = metric - 1;
    }
    //METHOD TO ADD METRICS AND UPDATE DOM
    // updateDom(metric, htmlMetric){
    //     metric++;
    //     $(htmlMetric).text(metric);   
    // }
    
    getOlder(){ // Add 1 to age every 30 seconds
        this.intervalTimer(this.age++, 30000 /*30 seconds*/)
    }

    getHunger(){ // decrease 1 to hunger every 45 seconds
        this.intervalTimer(this.subtractMetric(this.hunger), 45000 /*45 seconds*/)
    }

    getSleepy(){ // decrease 1 to hunger every 45 seconds
        this.intervalTimer(this.subtractMetric(this.sleep), 50000 /*50 seconds*/)
    }

    getBored(){ // decrease 1 to hunger every 45 seconds
        this.intervalTimer(this.subtractMetric(this.boredom), 25000 /*25 seconds*/)
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

function getInput(){
    let newName = $("#input-name").val();
    const character = new Tomagachi(newName);
    //console.log(newName);
    character.main();
}
 //creation of object 
$("#btn-start").on("click", getInput) //on click run function getInput

