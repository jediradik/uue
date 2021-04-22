const delivery = document.getElementById('delivery');
const showForm = document.querySelector('.show-form');
const deliveryPrice = document.getElementById('delivery-price');
const kmPrice = document.getElementById('km-price');
const addressDelivery = document.getElementById('address-delivery');
const branchDelivery = document.getElementById('branch-delivery');
const userName = document.getElementById('nameInput');
const sirName = document.getElementById('sirnameInput');
const fatherName = document.getElementById('fatherName');
const sendDate = document.getElementById('send-date');
const receivingDate = document.getElementById('receiving-date');
const distance = document.getElementById('distance');
const totalPrice = document.getElementById('total-price');

delivery.addEventListener('click', () => {
    showForm.classList.toggle('showed');
});

addressDelivery.addEventListener('click', () => {
    let price = 40;
    deliveryPrice.value = price;
});

branchDelivery.addEventListener('click', () => {
    let price = 20;
    deliveryPrice.value = price;
});



function params() {
    const urlParams = new URLSearchParams(window.location.search);
    const nameParam = urlParams.get('name');
    const sirnameParam = urlParams.get('sirname');
    const faherNameParam = urlParams.get('fathername');
    const sendDateParam = urlParams.get('senddate');
    const receiveDateParam = urlParams.get('receivingdate');
    const distanceParam = urlParams.get('distance');
    const deliveryParam = urlParams.get('delivery');
    const checkedOption = urlParams.get('radio-btn');
    const kmPriceParam = urlParams.get('kmprice');


    userName.value = nameParam;
    sirName.value = sirnameParam;
    fatherName.value = faherNameParam;
    sendDate.value = sendDateParam;
    receivingDate.value = receiveDateParam;
    distance.value = distanceParam;
    delivery.value = deliveryParam;
    kmPrice.value = kmPriceParam;

    if (checkedOption == "option1") {
        let price = 40;
        document.getElementById("address-delivery").checked = true;
        deliveryPrice.value = price;
    } else if (checkedOption == "option2") {
        let price = 20;
        document.getElementById("branch-delivery").checked = true;
        deliveryPrice.value = price;
    }

    let sum = kmPriceParam * distanceParam + +deliveryPrice.value;
    totalPrice.value = sum;
}

params();



