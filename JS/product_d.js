let searchParams = new URLSearchParams(window.location.search).get("id");
var re = "";

const getProductOneDetail = async () => {
  console.log(searchParams);
  try {
    const response = await axios.get(
      "https://6102d7aa79ed680017482359.mockapi.io/productdetail"
    );
    let resulte = response.data.filter((data) => {
      return data.id == searchParams;
    });
    re = resulte;
    console.log(resulte);
    console.log("re", re);
    for (data of resulte) {
      ShowDetail(data, searchParams);
    }
  } catch (e) {
    console.log(e.message);
  }
};
getProductOneDetail();

async function setlocal(data) {
  const oldProductCart = await JSON.parse(localStorage.getItem("dataproduct"));
  const newProductCart = data;
  if (oldProductCart == null || localStorage.getItem("dataproduct") == [null]) {
    let card = newProductCart;
    localStorage.setItem("dataproduct", JSON.stringify(card));
    alert('addproduct "Success1"');
  } else {
    let card = oldProductCart.concat(newProductCart);
    localStorage.setItem("dataproduct", JSON.stringify(card));
    alert('addproduct "Success2"');
  }
}

async function ShowDetail(data, searchParams) {
  let divAll = document.getElementById("Detail");
  let divPic = document.createElement("div");

  //img
  divPic.classList.add("card");
  divPic.classList.add("col-lg-7");
  divPic.classList.add("col-xs-12");
  let imgPrd = document.createElement("img");
  imgPrd.setAttribute("src", data.prdImageUrl);
  imgPrd.classList.add("pic_select");
  imgPrd.setAttribute('width', '100%');
  imgPrd.setAttribute('height', 'auto');
  // imgPrd.classList.add("card-img-top");

  //product info
  divCon = document.createElement("div");
  divCon.classList.add("detail");
  divCon.classList.add("col-lg-4");
  divCon.classList.add("col-xs-12");

  //product name
  let prdName = document.createElement("h3");
  prdName.textContent = `${data.prdname}`; //product name

  //price
  let prdPrice = document.createElement("h2");
  prdPrice.classList.add("text-danger");
  let tPrice =`${data.prdPrice}  THB`;
  prdPrice.textContent = tPrice;

  //size
  let pSize = document.createElement("h5");
  pSize.classList.add("text-secondary");
  pSize.textContent = "Size";
  let optionSize = document.createElement("option");
  let selectSize = document.createElement("select");
  selectSize.classList.add("size")
  selectSize.setAttribute("name", "size");
  selectSize.setAttribute("size", "1");

  optionSize.setAttribute("value", "default");
  optionSize.classList.add("selected");
  optionSize.textContent = "Pleases Select";
  selectSize.appendChild(optionSize);
  data.prdSize.forEach((e)=>{
    let otp = []
    otp[e] = document.createElement('option')
    otp[e].setAttribute('value',e)
    otp[e].textContent=e
    selectSize.appendChild(otp[e])
    
  })

  //add to bag button
  let bttAddBag = document.createElement("button");
  bttAddBag.classList.add("btn");
  bttAddBag.classList.add("btn-dark");
  bttAddBag.classList.add("text-white");
  bttAddBag.classList.add("bagbut")
  bttAddBag.setAttribute("id", "addToBag");
  bttAddBag.textContent = "Add To Bag";
  bttAddBag.setAttribute("id", "myBtn");
  bttAddBag.addEventListener('click',(()=>{setlocal(re)}))

  //product detail
  let tPrdDetail = document.createElement("h4");
  tPrdDetail.textContent = "Product Details";
  let prePrdDetail = document.createElement("h5");
  prePrdDetail.textContent = data.txtDetail

  //show detail button
  let bttShowDetai = document.createElement("button");
  bttShowDetai.classList.add("btndetail");
  bttShowDetai.classList.add("btn");
  bttShowDetai.classList.add("btn-secondary");
  bttShowDetai.classList.add("text-dark");

  bttShowDetai.textContent = "Show More Details";

  divPic.appendChild(imgPrd);
  divAll.appendChild(divPic);
  divPic.appendChild(imgPrd);
  divAll.appendChild(divCon);
  divCon.appendChild(prdName);
  divCon.appendChild(prdPrice);
  divCon.appendChild(pSize);
  divCon.appendChild(selectSize);
  divCon.appendChild(bttAddBag);
  divCon.appendChild(tPrdDetail);
  divCon.appendChild(prePrdDetail)
  divCon.appendChild(bttShowDetai);
}