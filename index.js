function electrKV(units) {
    let bill = 0;

    if (units <= 100) {
        bill = units * 0.10;
    } else if (units <= 300) {
        bill = (100 * 0.10) + ((units - 100) * 0.15);
    } else {
        bill = (100 * 0.10) + (200 * 0.15) + ((units - 300) * 0.20);
    }

    return bill;
}
console.log(electrKV(100));
console.log(electrKV(200));
console.log(electrKV(300));
console.log(electrKV(400));
    
function calculateTip(amount, serviceLevel) {
    let tipPercentage;

    switch (serviceLevel) {
        case 'excellent':
            tipPercentage = 0.20;
            break;
        case 'good':
            tipPercentage = 0.15;
            break;
        case 'average':
            tipPercentage = 0.10;
            break;
        case 'poor':
            tipPercentage = 0.05;
            break;
        default:
            tipPercentage = 0; 
    }

    return amount * tipPercentage;
}
console.log(calculateTip(100,'excellent'));
console.log(calculateTip(200,'good'));
console.log(calculateTip(300,'average'));
console.log(calculateTip(400,'poor'));

function calculateRentalPrice(days, carType) {
    let pricePerDay;

    switch (carType) {
        case 'economy':
            pricePerDay = 20;
            break;
        case 'luxury':
            pricePerDay = 120;
            break;
        case 'sedan':
            pricePerDay = 80;
            break;
        default:
            pricePerDay = 50;
    }
    return days * pricePerDay;
}
console.log(calculateRentalPrice(3,'economy'));
console.log(calculateRentalPrice(5,'luxury'));
console.log(calculateRentalPrice(7,'sedan'));

function applyDiscount(cartValue, isMember) {
    let discount = 0;

    if (cartValue >= 100) {
        discount += 0.05; 
    }

    if (isMember) {
        discount += 0.10; 
    }

    const totalDiscount = cartValue * discount;

    return totalDiscount;
}    
console.log(applyDiscount(100, true));
console.log(applyDiscount(200, false));
console.log(applyDiscount(300, true));  

function displayMessage() {
    const dropdown = document.getElementById("timeOfDay");
    const messageDisplay = document.getElementById("message");
    const selectedValue = dropdown.value;

    let message = "";

    switch (selectedValue) {
        case "Morning":
            message = "Xayrli tong!";
            break;
        case "Afternoon":
            message = "Xayrli kun!";
            break;
        case "Evening":
            message = "Xayrli kech!";
            break;
        default:
            message = "";
    }

    messageDisplay.textContent = message;
}