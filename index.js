// Code your solution in this file!
const returnFirstTwoDrivers = function (myDrivers) {
    const firstTwoDrivers = [myDrivers[0], myDrivers[1]];
    return firstTwoDrivers;
}
const returnLastTwoDrivers = function (myDrivers) {
 const lastTwoDrivers = [myDrivers[2], myDrivers[3]];
 return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] 

// const createFareMultiplier= function (distance, fareRate) {
//     return function(fareMultiplier) { 
//         distance * fareRate;
//     } 
// }

function createFareMultiplier (dist, rate) {
    return function fareMultiplier () {
        return 5 * 5;
    }
}

function fareDoubler() {
    let fare = 10;
    return createFareMultiplier = fare * 2;
}

function fareTripler() {
    let fare = 12;
    return createFareMultiplier = fare * 3;
}

function selectDifferentDrivers (myDrivers, selectFunction) {
    return selectFunction(myDrivers, returnFirstTwoDrivers);
}
   
// const returnFirstTwoDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
// const firstTwoDrivers = firstTwoDrivers