var isSelected = false; // check if there's a rate selected.
var whichSelected; // is the obj selected

//Html components
const rateItems = document.querySelectorAll('.rating__item');
const submitBtn = document.querySelector('.component__submitbtn button');
const rateComponent = document.querySelector('.rating');
const submitComponent = document.querySelector('.component__submitbtn');
const submitedRate = document.querySelector('.component__submitedrate');
const imgComponent = document.querySelector('.component__imgcontainer');
const component = document.querySelector('.component');
const title = document.querySelector('.component__title');
const description = document.querySelector('.component__description');
const img = document.querySelector('#component__img');

function selectRating(item){
    if(isSelected){
        whichSelected.classList.remove('rating__item--selected');
    }
    item.target.classList.add('rating__item--selected');
    whichSelected = item.target;
    isSelected = true;
}

function sendRating(){
    if(isSelected){
        // class managing
        rateComponent.classList.add('component--hidden');
        submitBtn.classList.add('component--hidden');
        submitedRate.classList.remove('component--hidden');
        imgComponent.classList.add('component__img--centered');
        imgComponent.firstElementChild.classList.remove('component--circle');
        component.classList.add('component--textcentered');

        //text managing
        submitedRate.innerHTML = `<p>You selected ${whichSelected.innerHTML} out of 5.</p>`;
        title.textContent = "Thank you!";
        description.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";
    
        //Change image
        img.setAttribute('src',"images/illustration-thank-you.svg");
        img.setAttribute('alt','thank you');
    }else{
        rateItems.forEach(item => item.classList.add('rating__item--error'));
    }
}

rateItems.forEach(item => item.addEventListener('click', selectRating));
submitBtn.addEventListener('click', sendRating);