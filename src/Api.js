// Base URL
const base_url = "https://api.rawg.io/api/";

// Getting the date

const getCurrentMonth = ()=>{
    const month = new Date().getMonth() + 1;
    if(month<10){
        return `0${month}`
    }else{
        return month;

    }
};
// Getting the day

const getCurrentDay = ()=>{
    const day = new Date().getDate();
    if(day<10){
        return `0${day}`
    }else{
        return day
    }
};
// CurrentYear day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const LastYear = `${currentYear-1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear+1}-${currentMonth}-${currentDay}`

// Popular Games
const popular_games = `games?dates=${LastYear},${currentDate}&ordering=-rating&_size=10`;

export const PopularGamesURL = ()=>`${base_url}${popular_games}`
console.log(PopularGamesURL())