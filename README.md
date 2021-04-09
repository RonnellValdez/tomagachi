# Tomagachi
/*

Description: This web app takes in the users name and creates a jabbagachi which has to be taken of in order for it to survive.

REQUIREMENTS FOR TOMAGACHI
    1. has to have a physical creature/thing on the screen
    2. has to have metrics (can be changed)
        hunger
        sleeping
        boredom
    3. must have an age
    4. interface has to have at least 3 buttons representing the metric and how to change it
        feed
        turn off lights
        play with pet
    5. must be able to name pet
    6. pet age will increase after x amount of time
    7. metrics will increase or decrease every x minutes
    8. pet should die if requirements go below or over a certain threshold
    9. pet should be animated when alive
    10. pet should evolve based on age
*/

1.Display image of tomagachi
    img src through url in html 

2.Get user input for name and store into js
    *ask for user input
    *once input is given, store that input into a value that can be called later
        -since this is going to be object based, a new object needs to be created, pass in the value for input as a name prop
            -must create a class with name, hunger, sleep, boredom and age
            -start values for hunger, sleep and boredom at 10
    
3.Start the main method (trigger the main method on click?)
    *in the main method
        -timer 
        -method for incrementing or decrementing the metrics
        -provide boundaries so that values don't go below 0 or above 10
        
4. tie this into html
    *create a display for all the metrics
        -progress bar for the hunger, boredom and sleep
        - display age as number
    *create buttons to increase the value of hunger, boredom and age
        -create a method withing the class that will on click increase the value of metric and return to the html
            -while doing this, update the progress bar so it displays the increase
5. create a death screen
    *if any of the values (excluding age) goes to 0 display pet is dead
6. animation and morphing
    *animation will be tied to the sleeping button
        -dim the image -- make it opaque when function for this is called
        -morphing will be evolution phase of the tomogachi -- at 10 years change the avatar image into something else
        
 ![alt tag](https://wireframe.cc/VrteB9 "wireframe for main")


