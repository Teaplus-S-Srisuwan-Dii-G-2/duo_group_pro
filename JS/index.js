function kenshi_yonezu() {
    let kenshi_Y = document.createElement('div')
    kenshi_Y.classList.add("row")
    let k_yonezu = document.createElement('div')
    k_yonezu.classList.add("col")
    kenshi_Y.appendChild(k_yonezu)

    //     <div class="col">
    //         <div class="card" style="width: 18rem;">
    //             <img src="./image/Pic_Product/1.jpg" class="card-img-top" alt="...">
    //             <div class="card-body">
    //                 <h5 class="card-title">Chelsea F.C. 2020/21 Stadium Home</h5>
    //                 <li class="card-text text-danger">$67.86</li>
    //                 <li class="price card-text text-muted">$67.86</li>
    //             </div>
    //         </div>
    //     </div>
    document.getElementById('showall').appendChild(kenshi_Y)


}

function getdataproduct_all() {
    axios.get("https://6102d7aa79ed680017482359.mockapi.io/productlist").then(res => {
        console.log(`res`, res.data)
    }).catch(err => {
        console.log(`err`, err)
    })

}
