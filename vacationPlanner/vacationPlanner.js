// ask for user name and give and answer
var name = window.prompt("Hello, Please enter your name");
var greeting = document.getElementById("greeting");

greeting.innerHTML += ", " + name;

var enterDays = document.getElementById("enterDays");
enterDays.onclick = calculateDays;

//calculate the days and give a message
function calculateDays(){
    var daysInput = document.getElementById("days");
    var days = daysInput.value;

    var daysMessage = document.getElementById("daysMessage");
        if (days < 4){
            daysMessage.innerHTML = "short trips are always worth it!"
        }

        else if( days < 7 ){
            daysMessage.innerHTML = "Cool, you’ll be there for almost a week!";
        }

        else {
            daysMessage.innerHTML = "You’ll have plenty of time to relax and have fun!";
        }
        var hours = days * 24;
        var minutes = hours * 60;
        var second = minutes * 60;
        
        var hourMessage = document.getElementById("hoursMessage");
        var secondMessage = document.getElementById("secondMessage");
        var minuteMessage = document.getElementById("minuteMessage");
        
        var repeatPhrase = "That means you’ll be traveling for "
        
        hourMessage.innerHTML = repeatPhrase + hours + " hours";
        secondMessage.innerHTML = repeatPhrase + second + " second";
        minuteMessage.innerHTML = repeatPhrase + minutes + " minutes";

        var timingNext = document.getElementById("timingNext");
        timingNext.removeAttribute("hidden");

        timingNext.onclick = function(){
            document.getElementById("budgetSection").removeAttribute("hidden");
        }
        var enterBudget = document.getElementById("enterBudget");
        enterBudget.onclick = calculateBudget;
        
        function calculateBudget(){
            var tripBudget = document.getElementById("tripBudget");
            var inputBadget = tripBudget.value;
            var changeTotal = inputBadget * 25;
            var changePerDay = inputBadget / days;
            var exch10 = 10 * 25;
            var exc500 = 500 * 25;
        
        
            var tripExchangeMsg = document.getElementById("tripExchangeMsg");
            var dailyExchangeMSg = document.getElementById("dailyExchangeMSg");
            var exchange10Msg = document.getElementById("exchange10Msg");
            var exchange500Msg = document.getElementById("exchange500Msg");
        
            tripExchangeMsg.innerHTML = "that means you will need " + changeTotal + " for your trip";
            dailyExchangeMSg.innerHTML = "That means you can spend " + changePerDay + " per day";
            exchange10Msg.innerHTML = "You will need " + exch10 + " for a items that cost 10 dollars";
            exchange500Msg.innerHTML = "You will need " + exc500 +  " for a items that cost 500 dollar";

    }
}

var imagen = ["buenosaireobelisco.jpg", "Argentina-Iguazu-Falls-.jpg", "parque-talampaya.jpg", "Patagonia-Argentina.jpg" ]

var currentImage = 0;

setInterval(changeImagen, 3000)

function changeImagen(){
    currentImage++;
    if( currentImage > imagen.length - 1){
        currentImage = 0;
    }
    document.body.style.backgroundImage = "url(" + imagen[currentImage] + ")";
}


