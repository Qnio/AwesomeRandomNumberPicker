
const myButton = document.querySelector('button');
const myInput = document.querySelector('input');
var randomNumberArray = [];

myButton.addEventListener(
    'click',
    function randomNumbers() {
        let randomNumberUnorderList = document.querySelector('ul');
        //clearing random numbers from array
        randomNumberArray = [];
        
        //clearing random number array each time when clicking button
        while(randomNumberUnorderList.firstChild){
            randomNumberUnorderList.removeChild(randomNumberUnorderList.firstChild);
        }

        //condition checking is input an valid number value
        if(typeof parseInt(myInput.value) !== 'number'){
            console.log('Is not a number!');
        } else {
            //loop generating random numbers from 1 to 46
            for (let i = 0; i < parseInt(myInput.value); i++){
                randomNumberArray.push( Math.floor(Math.random() * 45) + 1 );

                //create element li and add do ul
                let listItem = document.createElement('li');
                listItem.innerHTML = randomNumberArray[i];
                randomNumberUnorderList.appendChild(listItem);
            }
        }
        console.log(randomNumberArray);
        myInput.value = '';
	}
);

var select = document.querySelector('h1');

select.addEventListener(
    'click', 
    function(some){
        console.log(some);
    }
);


