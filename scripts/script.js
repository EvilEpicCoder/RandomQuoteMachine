var sliderContent = document.getElementsByClassName('content-container');
var quoteText = document.getElementsByClassName('quote');
var quoteAuthor = document.getElementsByClassName('author');
var i=1;
var prevQuote=0;
var maxQuotes=10;

function getRandomQuote(){
    prevQuote=i;
	i=Math.floor(Math.random() * (maxQuotes - 0)) + 0;
	if(prevQuote==i){
		getRandomQuote();
	}
	sliderContent[prevQuote].classList.add('hidden');
    sliderContent[prevQuote].classList.remove('visible');

    sliderContent[i].classList.remove('hidden');
    sliderContent[i].classList.add('visible');
    console.log(i);
}
function clickedButton(evt){
    if(evt.target.innerText==="Random Quote"){
        getRandomQuote();
    }else if(evt.target.innerText==="tweet"){
        window.open("https://twitter.com/intent/tweet?text="+"Check out my quote machine! \n "+quoteText[i].textContent+" "+'&mdash;'+quoteAuthor[i].textContent+"  \n https://github.com/serg-gavel/RandomQuoteMachine \n ",'_blank');
    }
}
function eventLoader(){
    getRandomQuote();
    document.addEventListener("click",clickedButton);
}
window.onload = eventLoader();
