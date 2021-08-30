async function getslid_show(){
    const response = await axios.get("https://6102d7aa79ed680017482359.mockapi.io/slider");
    console.log(response)
    
    document.getElementById('slid_img1').setAttribute("src", response.data[0].imageUrl)
    document.getElementById('slid_text1').innerHTML = response.data[0].sliderText
    
    document.getElementById('slid_img2').setAttribute("src", response.data[1].imageUrl)
    document.getElementById('slid_text2').innerHTML = response.data[1].sliderText
    
    document.getElementById('slid_img3').setAttribute("src", response.data[2].imageUrl)
    document.getElementById('slid_text3').innerHTML = response.data[2].sliderText
    
    document.getElementById('slid_img4').setAttribute("src", response.data[3].imageUrl)
    document.getElementById('slid_text4').innerHTML = response.data[3].sliderText

}

const getProductDetails = async () => {
    try {
      const response = await axios.get("https://6102d7aa79ed680017482359.mockapi.io/productlist");
      console.log(response)
      document.getElementById("showall").innerHTML = response.data
        .map(
          (product) => 
            `
            <div class=" col-6 col-lg-4 col-xxl-3 mb-4">
                      <div class="card">
                      <img class="picAll card-img-top" src="${product.prdImageUrl}" alt="Card image cap">
                      <div class="card-body">
      <h6 class="card-title">${product.prdname}</h6>
      <br>
      <div class="row ">
      <div class="col-6 ">
      <p class="fs-5 text-danger">${product.prdPrice} THB</p>
      
      </div> 
      <div class="col-6 align-self-end">
     
      <button type="button" class="btn btn-secondary "  onclick="location.href= '/html/product_detail.html?id=${product.id}'";>ADD      </button>
      </div>   
      </div>  
     
    </div>  
  </div>
  </div>
          `
        )
        .join("");
    } catch (e) {
      console.log(e.message);
    }
  };
  getProductDetails();
  getslid_show();

