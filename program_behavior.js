//Name: Vlad O.
//Date: 11/14/2022
//File: program_behaviors.js
//File desc: cycles through the dataset using the index, which is controlled by the buttons
//Displays the values respective to their parent attribute, also provides a display of additional facts

//get access to our buttons
let previous = document.getElementById("previous");
let next = document.getElementById("next");

//the index of the current object shown on the web page
let index = 0;

//Displays number of elements
let numGames = `${gamesData.length}`;
let description = document.querySelector(`#left-column p`).innerText;
document.getElementById('num-games').innerHTML = numGames;

//Average Total Time Info
function avgTimeTotal() {
    let averageTimeArray = []
    for (let i = 0; i < gamesData.length; i++) {
        let averageTime = gamesData[i].Length["All PlayStyles"].Average;
        averageTimeArray.push(averageTime);
    }
    let total = 0;
    for(let i = 0; i < averageTimeArray.length; i++) {
        total += averageTimeArray[i];
    }
    let average = total / averageTimeArray.length;
    document.getElementById('average-total').innerHTML = `The total average of playtime 
    for all games is ${Math.floor(average)} hours`
}

//Longest Average Play time info
let timeArray = []
function longestTotal() {
    for (let i = 0; i < gamesData.length; i++) {
        let time = gamesData[i].Length["All PlayStyles"].Average;
        timeArray.push(time);
    }
    function getMaxOfArray(numArray) {
        return Math.max.apply(null, numArray);
    }
    getMaxOfArray(timeArray);
    let maxValue = getMaxOfArray(timeArray);
    let maxIndex = timeArray.indexOf(maxValue);
    let gameTitle = gamesData[maxIndex].Title;
    let roundedTitle = Math.floor(timeArray[maxIndex]);
    document.getElementById('longest-playtime').innerHTML = `The game with the longest average playtime is ${gameTitle} with 
        ${roundedTitle} hours`
}

//High and Low Prices
let priceArray = [];
let twoPrices = [];
function lowHighPrice() {
    for (let i = 0; i < gamesData.length; i++) {
        let price = gamesData[i].Metrics["Used Price"];
        priceArray.push(price);
    }
    let highPrice = function getMaxPrice(array) {
        return Math.max.apply(null, array);
    }
    let lowPrice = function getMinPrice(array) {
        return Math.min.apply(null, array);
    }
    twoPrices.push(highPrice(priceArray), lowPrice(priceArray));
    document.getElementById('high-low_price').innerHTML = `The highest price of a game in this dataset is $${twoPrices[0]} and the lowest is $${twoPrices[1]}`
}


//All games created by Nintendo
nintendoArray = [];
function nintendoGames() {
    for (let i = 0; i < gamesData.length; i++) {
        if (gamesData[i].Metadata.Publishers == 'Nintendo') {
            nintendoArray.push(gamesData[i].Metadata.Publishers);
        }
    }
    let numOfGames = nintendoArray.length;
    document.getElementById('nintendo-games').innerHTML = `There are ${numOfGames} games made by Nintendo in this dataset`;
}

//Call the info functions
avgTimeTotal();
longestTotal();
lowHighPrice();
nintendoGames();

//Displays game data according to the index
function gameData() {
    //Game Title
    let gameTitle = gamesData[index].Title;
    document.getElementById('game-title').innerHTML = `${gameTitle}`;
    //Publisher Title
    let publisherTitle = gamesData[index].Metadata.Publishers;
    document.getElementById('publisher-title').innerHTML = `${publisherTitle}`;
    if (publisherTitle.length <= 0) {
        document.getElementById('publisher-title').innerHTML = `Not Available`;
    }
    //Average Play-through Time
    let averageAmount = gamesData[index].Length['All PlayStyles'].Average;
    let averageTime = Math.round(averageAmount);
    document.getElementById('average').innerHTML = `${averageTime} hours`;
    if (averageTime <= 0) {
        document.getElementById('average').innerHTML = `Not available`;
    }
    //Max Players
    let maxPlayers = gamesData[index].Features["Max Players"];
    document.getElementById('max-players').innerHTML = `${maxPlayers}`;
    //Genre
    let genreType = gamesData[index].Metadata.Genres;
    document.getElementById('genre').innerHTML = `${genreType}`;
    //Release (Year)
    let releaseYear = gamesData[index].Release.Year;
    document.getElementById('released').innerHTML = `${releaseYear}`;
    //Price (Used)
    let priceIndex = gamesData[index].Metrics["Used Price"];
    document.getElementById('price').innerHTML = `$${priceIndex}`;
}

gameData();


//responds to clicks of the "previous" button
previous.onclick = function(event) {
    if (index > 0) {
        index--;
    } else {
        alert("There aren't any previous ones!");
        index[0];
    }

    //access and display each value according to the index
    display();

    gameData();

    //make sure that index is never less than zero...
}

//responds to clicks of the "next" button
next.onclick = function(event) {
    index++;

    //make sure that index is never greater than
    //array.length - 1

    display();

    gameData();

}

//shows the current record in the array of records
//at the position within the index variable
function display()
{
    console.log("Next index is " + index);
}










