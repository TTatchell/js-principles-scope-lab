var customerName = 'bob';




function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    globalThis.bestCustomer = 'maybe bob';
}

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}

const leastFavoriteCustomer = 'john';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'medow';
}

console.log(changeLeastFavoriteCustomer());