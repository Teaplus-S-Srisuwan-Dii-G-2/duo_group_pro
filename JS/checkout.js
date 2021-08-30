function set_value(){
var price = localStorage.getItem('totalprice')
document.getElementById('checkout').innerHTML =`Confirm Payment: ${price} USD`

document.getElementById('p_get_price').innerHTML =`I authorise Jersay Shop to charge my card for a total amount of ${price} USD`

document.getElementById('total_price1').innerHTML=price
document.getElementById('total_price2').innerHTML=price
}

function checkout(){
    
    alert("transaction completed. you have been pay  "+localStorage.getItem('totalprice')+"  USD");
    location.href='/html/index.html';
}