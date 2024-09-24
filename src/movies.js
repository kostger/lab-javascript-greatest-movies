// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((movie)=>movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter((movie)=>movie.director === "Steven Spielberg" && movie.genre.includes('Drama')).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
   if(!moviesArray.length) return 0; 
   return parseFloat((moviesArray.reduce((acc,curr)=> {
    if(curr.score) return acc + curr.score;
    return acc;
   },0)/moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let count = 0;
    let sumRatings = (moviesArray.reduce((acc,curr)=>{
        if(curr.genre.includes("Drama")){
            count++; 
            return acc + curr.score;
        }
        return acc;
    },0));
    if(count)return parseFloat((sumRatings/count).toFixed(2));
    return 0;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return moviesArray.slice().sort((a,b)=> {
        if(a.year !== b.year)return a.year-b.year;
        return a.title.localeCompare(b.title)
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let newArr= (moviesArray.slice().sort((a,b)=>a.title.localeCompare(b.title))).map((movie)=>movie.title);
    if(newArr.length > 20) return newArr.slice(0,20);
    return newArr;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map((movie)=>({...movie,duration:hourToMinute(movie.duration)}))
    
}
function hourToMinute(str){
    let totalMinutes = 0;
    str.split(" ").forEach((char)=>{
        if(char.includes('h')){
            let hours = parseInt(char.replace('h', ''));
            totalMinutes += hours * 60;
        }
        if(char.includes('m')){
            let minutes = parseInt(char.replace('m', ''));
            totalMinutes += minutes;
        }
        
    })

    return totalMinutes;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    
}
