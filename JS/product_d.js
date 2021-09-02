let searchParams = new URLSearchParams(window.location.search).get("id");
var re = "";
const getProductOneDetail = async () => {
  try {
    const response = await axios.get(
      "https://6102d7aa79ed680017482359.mockapi.io/productdetail"
    );
    let resulte = response.data.filter((data) => {
      return data.id == searchParams;
    });
    re = resulte;
    for (data of resulte) {
      ShowDetail(data, searchParams);
    }
  } catch (e) {
    console.log(e.message);
  }
};
getProductOneDetail();
function setlocal(data, size) {
  data[0].prdSize = size;
  const oldProductCart = JSON.parse(localStorage.getItem("dataproduct"));
  const newProductCart = data;
  if (oldProductCart == null || localStorage.getItem("dataproduct") == [null]) {
    let card = newProductCart;
    localStorage.setItem("dataproduct", JSON.stringify(card));   
  } else {
    let card = oldProductCart.concat(newProductCart);
    localStorage.setItem("dataproduct", JSON.stringify(card));
    
  }
  alert('Addproduct to Cart "Success"');
}
async function ShowDetail(data, searchParams) {
  let Size = "<option value=default selected> Please Select </option> ";
  function myFunction(item) {
    Size += `<option value="${item}" >
          ${item}
          </option> `;
  }
  await data.prdSize.map(myFunction);
  document.getElementById("prdImg").innerHTML = `<img class="pic_select card-img-top" src="${data.prdImageUrl}" alt="Card image cap">`;
  document.getElementById("prdName").innerHTML = data.prdname;
  document.getElementById("prdPrice").innerHTML = `${data.prdPrice} THB`;
  document.getElementById("prdSize").innerHTML = Size;
  document.getElementById("prdDetail").innerHTML = data.txtDetail;
  document.getElementById("AddtoBag").onclick = () => {
    let e = document.getElementById("prdSize").value;
    if (e != "default") {
      setlocal(re, e);
    } else {
      alert("Please Select Size !!!");
    }
  };
}