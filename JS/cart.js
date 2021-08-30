output = document.getElementById("output");
const dataJson = localStorage.getItem("dataproduct");
let obj = JSON.parse(dataJson);
var totalprice = 0
console.log(obj);
count(obj);

function count(myObj) {
  for (let x in myObj) {
    if (myObj[x]) {
    addtext(myObj[x], x);
    }
  }
  addpay();
}
function addpay() {
  //! กล่องที่ 2
  let divPay = document.createElement("div"); //กล่องที่ 2
  divPay.classList.add("col-2");
  let divPayContent = document.createElement("div");
  divPayContent.classList.add("card");
  let ulPay = document.createElement("ul");
  ulPay.classList.add("list-group");

  ulPay.classList.add("list-group-flush");

  let liPay = document.createElement("il");
  liPay.classList.add("list-group-item");
  let liPay2 = document.createElement("il");
  liPay2.classList.add("list-group-item");
  let liPay3 = document.createElement("il");
  liPay3.classList.add("list-group-item");
  let h3 = document.createElement("h3");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let buttonPay = document.createElement("button");
  buttonPay.setAttribute("type", "button");
  buttonPay.classList.add("btn");
  buttonPay.classList.add("btn-secondary");
  buttonPay.classList.add("btn-block");
  buttonPay.textContent = "Checkout";

  liPay.appendChild(h3);
  h3.textContent = "sunmary";
  liPay2.appendChild(p1);
  p1.textContent = "Subtotal";
  liPay3.appendChild(p2);
  p2.textContent = `total ${totalprice}`;

  let contentPay = document.querySelector(".pay");
  contentPay.appendChild(divPayContent);
  divPayContent.appendChild(ulPay);

  ulPay.appendChild(liPay);
  ulPay.appendChild(liPay2);
  ulPay.appendChild(liPay3);
  ulPay.appendChild(buttonPay);
}



async function addtext(data, x) {
  let quantity =[1,2,3,4,5,6,7,8,9,10]
  let qty=1
  let section = document.querySelector("aside"); // กล่องด้านนอก
  section.classList.add("row");
  let divAllContent = document.createElement("div");
  divAllContent.classList.add("row");

  let divAll = document.createElement("div"); // กล่องที่ 1
  divAll.classList.add("col-10");
  divAll.classList.add("mb-5");

  let divContent = document.createElement("div"); //กล่องที่ 1
  divContent.classList.add("col-10"); //กล่องที่ 1
  let divContentRow = document.createElement("div"); //ของที่อยู่ในกล่องที่ 1
  divContentRow.classList.add("row"); //กล่องย่อยที่อยู่ในกล่องที่ 1
  let divPicCol = document.createElement("div"); //รุปที่อยู่ในกล่องที่1
  divPicCol.classList.add("col-4"); //รุปที่อยู่ในกล่องที่1
  let divContentCol = document.createElement("div"); //ข้อความที่อยู่ในกล่องที่1
  divContentCol.classList.add("col-8"); //ข้อความที่อยู่ในกล่องที่1

  // เข้าไปอีกชั้นของกล่องที่ 1
  //! กล่องที่ 1
  let divselectqtyandsize = document.createElement("div");
  divselectqtyandsize.classList.add("row");
  let divselectSize = document.createElement("div");
  divselectSize.classList.add("col-6");
  let divselectQty = document.createElement("div");
  divselectQty.classList.add("col-6");

  let pSize = document.createElement("p");
  pSize.textContent = "Size";

  let pQty = document.createElement("p");
  pQty.textContent = "Qty";

  // ตัวเลือก Size
  let sizeDisplay = document.createElement("select");
  //   let prdSize = data.prdSize;
  let sizeOption = document.createElement("option");
  sizeOption.setAttribute("value", "defult");
  sizeDisplay.setAttribute("name", "size");
  sizeOption.textContent = "PLESE SELECTED";
  //  ตัวเลือก QTY

  let qtyDisplay = document.createElement("select");
  //   let prdSize = data.prdSize;
  qtyDisplay.setAttribute("name", "size");
  // <---------------------------------------------------------------------->
  quantity.forEach((e)=>{
    console.log(e)
    let opt =document.createElement('option')
    opt.setAttribute('value',e)
    opt.textContent=e
    qtyDisplay.appendChild(opt)
  })
// <---------------------------------------------------------------------------->
  let pRemove = document.createElement("a");
  pRemove.setAttribute("href","/html/cart.html")
  pRemove.textContent = "Remove this item";
  pRemove.style.color = "red";
  pRemove.addEventListener("click", () => {
    delete obj[x];
    localStorage.setItem("dataproduct", JSON.stringify(obj));
    console.log("", x);
    alert("re");
  });

  let selectSizeDiv = document.createElement("div");
  selectSizeDiv.classList.add("col-6");

  let selectQty = document.createElement("div");
  selectQty.classList.add("col-6");

  // รูปภาพ
  let pic = document.createElement("img");
  pic.classList.add("card-img-top");
  let imgname = data.prdImageUrl;
  pic.setAttribute("src", imgname);

  // เนื้อหา
  let headName = document.createElement("h3");
  let priceName = document.createElement("h2");
  let prdname = data.prdname;
  let prdPrice = parseInt(data.prdPrice);
  priceName.textContent = prdPrice + " THB";
  priceName.style.color = "red";
  headName.textContent = prdname;
  totalprice += prdPrice

  // จัดของใส่กล่อง
  // let section = document.querySelector("aside");
  let contentPrd = document.querySelector(".contentPrd");

  contentPrd.appendChild(divPicCol);
  divPicCol.appendChild(pic);
  contentPrd.appendChild(divContentCol);
  divContentCol.appendChild(headName);
  divContentCol.appendChild(priceName);
  divContentCol.appendChild(divselectqtyandsize);
  divselectqtyandsize.appendChild(divselectSize);
  divselectSize.appendChild(pSize);

  divselectSize.appendChild(sizeDisplay);
  sizeDisplay.appendChild(sizeOption);
  // sizeOption.appendChild(defultOption)
  divselectqtyandsize.appendChild(divselectQty);
  divselectQty.appendChild(pQty);

  divselectQty.appendChild(qtyDisplay);
  
  

  divContentCol.appendChild(pRemove);
  
}