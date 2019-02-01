//set container
let container = document.getElementById('die-container');
let sum = 0;

//keeps track of the number of dice created
let count = 0;

//constructs the Die class 
class Die {
    constructor(value) {

        //sets value and calls the createDice and sets its roll
        this.value = value;
        this.createDie();
        this.div.innerHTML = this.roll();
        //attaches the dice div to the container
        container.appendChild(this.div);

        //click-button event to reroll the die that is clicked on
        this.div.addEventListener('click', () => {

            let inner = this.roll();
            console.log(inner);
            this.div.innerHTML = inner;

        });

        //click-button event to remove the die that is DBL-clicked on and decrement count
        this.div.addEventListener('dblclick', () => {

            this.div.remove();
            count--;

        });

    }

    //creates a Die
    createDie() {
        this.div = document.createElement('div');
        this.div.classList.add('dice');
    }

    //rolls the die and sets its value
    roll() {
        let randNum = Math.floor((Math.random() * 6) + 1);
        return randNum;
    }

}

//click button event for generating a new die with a new value
document.getElementById('die-button').addEventListener('click', () => {

    let newDie = new Die();
    count++;

});

//click-button event for summing all dice on page
document.getElementById('sum-button').addEventListener('click', () => {

    sum = 0;

    for (let i = 0; i < count; i++) {

        let innerV = this.document.getElementsByClassName('dice')[i].innerHTML;
        //changes the string to a number for addition
        sum += parseFloat(innerV);
    }

    alert(`Sum of all dice: ${sum}`);
});

//function for the roll button separate from class
function roll2() {
    let randNum = Math.floor((Math.random() * 6) + 1);
    return randNum;
}

//click-button event to reroll all the dice
document.getElementById('roll-button').addEventListener('click', () => {

    for (let i = 0; i < count; i++) {

        let inner = this.document.getElementsByClassName('dice')[i].innerHTML;
        inner = roll2();
        this.document.getElementsByClassName('dice')[i].innerHTML = inner;
        console.log(inner);

    }

});

