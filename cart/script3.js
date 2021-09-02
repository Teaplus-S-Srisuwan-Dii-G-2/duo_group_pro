output = document.getElementById("output");
var dataJson = localStorage.getItem("dataproduct");
let obj = JSON.parse(dataJson);
var totalprice = 0;
var total = 0;


var totalPrice = 0;
var i = 0;
const getProductDetails = () => {
  try {
    document.getElementById("allProduct").innerHTML = obj
      .map(
        (product) =>
          ` 
          <div class="contentPrd row">
    
            <div class="col-4 "  id="prdImg">
              <img class="card-img-top" src="${product.prdImageUrl}">
            </div>
    
            <div class="col-8">
            <h2  id="prdPrice" style="color: red;">${
              product.prdPrice
            } THB</h2>
              <h3 id="prdName">${product.prdname}</h3>
              
              <div class="row">
                <div class="col-6">
                  <p>Size</p>
                  <select name="size" size="1" id="prdSize">
                    <option value="${product.prdSize}" selected>
                    ${product.prdSize}
                    </option>
                  </select>
                </div>
    
                <div class="col-6">
                  <p>Qty</p>
                  <input class="cart-quantity-input" type="number" value="1">
                </div>
              </div>
              <a href="/cart/page3.html" style="color: red; id="pRemove">Remove this item</a>
            </div>
          </div> 
       
        </div> 
        
      <div hidden>${totalPrice+=parseInt(product.prdPrice)}</div>
       
        `
      )
      .join("");
     
  console.log(totalPrice);

  } catch (e) {
    console.log(e.message);
  }
};
getProductDetails();

document.querySelector('.ttp').textContent=totalPrice;
document.querySelector('.ttp2').textContent=totalPrice;
document.querySelector('.ttp3').textContent=totalPrice;


document.getElementById('checkoutpay').addEventListener('click',()=>{
localStorage.setItem('totalprice',totalPrice)
})
