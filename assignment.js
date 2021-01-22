

// kilometerToMeter

function kilometerToMeter(kilometer) {
    var meter = 1000;
    var meters = meter * kilometer;
    return meters;
}
var nMeters = kilometerToMeter(2);
console.log(nMeters);


/** we can make budgetCalculator in two ways:
Firstly: we can take the total price as input;
secondly: we can take the number of item as input;*/

// first way of budgetCalculator
function budgetCalculator(clock, phone, laptop) {
    var totalCost = clock + phone + laptop;
    return totalCost;
}
var fullCost = budgetCalculator(200, 300, 500);
console.log(fullCost);

// second way of budgetCalculator;
function budgetCalculate(numOfClock, numOfPhone, numOfLaptop) {
    var numOfClock;
    var priceOfClock = 100;
    var totalPriceOfClock = numOfClock * priceOfClock;

    var numOfPhone;
    var priceOfPhone = 200;
    var totalPriceOfPhone = numOfPhone * priceOfPhone;

    var numOfLaptop;
    var priceOfLaptop = 300;
    var totalPriceOfLaptop = numOfLaptop * priceOfLaptop;

    var totalPrice = totalPriceOfClock + totalPriceOfPhone + totalPriceOfLaptop;
    return totalPrice;
}
var allCost = budgetCalculate(5, 3, 5);
console.log(allCost);




// hotelCost

var night = 13;
function hotelCost(night) {
    taka = 0;
    if (night <= 10) {
        taka = night * 100;
    } else if (night <= 20) {
        var firstTenDays = 10 * 100;
        var remaining = night - 10;
        var secondTenDays = remaining * 80;
        taka = firstTenDays + secondTenDays;
    } else {
        firstTenDays = 10 * 100;
        secondTenDays = 10 * 80;
        var remaining = night - 20;
        var thirdTenDays = remaining * 50;
        taka = firstTenDays + secondTenDays + thirdTenDays;
    }
    return taka;
}
var totalTaka = hotelCost(13);
console.log(totalTaka);




// megaFriend.....
function megaFriend(friends) {
    var max = friends[0];
    for (var i = 0; i < friends.length; i++) {
        var element = friends[i];
        max = element;
    }
    return max;
}
var friends = ["Alim", "Selim", "Kolim", "Anisul", "Rahman", "Rofikul Islam"];
var largeName = megaFriend(friends);
console.log(largeName);





















