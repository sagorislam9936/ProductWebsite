const totalAmount = document.getElementById("totalAmount");
const productPhoto = document.getElementById("productPhoto");
const productName = document.getElementById("productName");
const productId = document.getElementById("productId");

const productVideo = document.getElementById("productVideo");
const price = document.getElementById("price");
const stockAvi = document.getElementById("stockAvi");
const weight = document.getElementById("weight");
const description = document.getElementById("description");
const addToProduct = document.getElementById("addToProduct");
const selectUser = document.getElementById("selectUser");
const productList = document.getElementById("productList");
const logBtn = document.getElementById("logBtn");

logBtn.onclick = () => {
  document.location.href = "./login.html";
};

let Products = [];
let totalSaving = 0;
const addProductToList = () => {
  const nameOne = productName.value;
  const nameTwo = productId.value;
  const nameThree = productPhoto.value;
  const nameFour = productVideo.value;
  const nameFive = price.value;
  const nameSix = stockAvi.value;
  const nameSeven = weight.value;
  const nameEight = description.value;
  const nameNine = selectUser.value;
  if (
    nameOne !== "" &&
    nameTwo !== "" &&
    nameThree !== "" &&
    nameFour !== "" &&
    nameFive !== "" &&
    nameSix !== "" &&
    nameSeven !== "" &&
    nameEight !== "" &&
    nameNine !== ""
  ) {
    const newProduct = {
      namea: nameOne,
      nameb: nameTwo,
      namec: nameThree,
      named: nameFour,
      namee: nameFive,
      namef: nameSix,
      nameg: nameSeven,
      nameh: nameEight,
      namei: nameNine,
    };

    Products.push(newProduct);
    totalSaving = totalSaving + newProduct;
    productName.value = "";
    productId.value = "";
    productPhoto.value = "";
    productVideo.value = "";
    price.value = "";
    stockAvi.value = "";
    weight.value = "";
    description.value = "";
    selectUser.value = "";

    list();
    console.log(newProduct);
  }
};

const list = () => {
  productList.innerHTML = "";
  for (const product of Products) {
    const li = document.createElement("li");
    li.innerText = `Product name :${product.namea} 
    Product ID:${product.nameb}
    Product Photo:${product.namec} 
    Product Video:${product.named} 
   Product Price :${product.namee} 
    Product stockAvi: ${product.namef} 
    Product Weight :${product.nameg}
    Product Description :${product.nameh}
    Product Seller :${product.namei} `;

    productList.appendChild(li);
  }
};








addToProduct.onclick = addProductToList;
