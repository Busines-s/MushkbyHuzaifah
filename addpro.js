
const premiumProducts = [
  { name: "Nostrademis", price50ml: 4500, img: "img/premium/nostra.jpg", customSizes: true },
  { name: "Oud Aromatic", price3ml: 700, price6ml: 1200, price12ml: 2200, img: "img/premium/oudaro.jpeg" },
  { name: "Silk Musk", price3ml: 700, price6ml: 1150, price12ml: 2100, img: "img/premium/silkmusk.jpeg" },
  { name: "Musk-ul-Hind S", price3ml: 750, price6ml: 1500, price12ml: 3000, img: "img/premium/muskulhind.jpg" },
  { name: "Ameer-ul-Oud", price3ml: 270, price6ml: 550, price12ml: 1000, img: "img/premium/Ameer-ul-oud.jpeg" },
  { name: "Jannan", price3ml: 250, price6ml: 500, price12ml: 900, img: "img/premium/jannan.jpeg" },
  { name: "Versache Pink", price3ml: 250, price6ml: 500, price12ml: 900, img: "img/premium/versace.jpeg" },
  { name: "Oud-e-Junaid", price3ml: 260, price6ml: 520, price12ml: 950, img: "img/premium/oud-e-junaid.jpeg" },
  { name: "Purple Oud", price3ml: 300, price6ml: 600, price12ml: 1200, img: "img/premium/purpleoud.jpeg" },
  { name: "Musk-ul-Hind", price3ml: 450, price6ml: 900, price12ml: 1700, img: "img/premium/muskulhind.jpg" },
  { name: "Bombshell", price3ml: 230, price6ml: 450, price12ml: 850, img: "img/premium/bomshell.png" },
  { name: "Armani Mania", price3ml: 250, price6ml: 500, price12ml: 1000, img: "img/premium/armani.png" },
  { name: "Vanilla 28", price3ml: 300, price6ml: 600, price12ml: 1200, img: "img/premium/vanila.jpeg" },
  { name: "Urba Pura", price3ml: 250, price6ml: 500, price12ml: 900, img: "img/premium/urbapura.png" },
];
const classicProducts = [
  { name: "Husne Yousaf", price3ml: 160, price6ml: 330, price12ml: 600, img: "img/classic/husneyousaf.jpeg" },
  { name: "Gucci Rush", price3ml: 160, price6ml: 330, price12ml: 600, img: "img/classic/gucchirash.jpeg" },
  { name: "Ghulaf-e-Kaaba", price3ml: 160, price6ml: 330, price12ml: 600, img: "img/classic/Ghulaf-e-Kaaba.jpeg" },
  { name: "Nostrademis (N)", price3ml: 160, price6ml: 330, price12ml: 600, img: "img/classic/nostrademis.png" },
  { name: "Formation", price3ml: 160, price6ml: 330, price12ml: 600, img: "img/classic/Formatia.png" },
  { name: "Sabaya", price3ml: 160, price6ml: 330, price12ml: 600, img: "img/classic/sabaya.jpeg" },
  { name: "Havoc", price3ml: 160, price6ml: 330, price12ml: 600, img: "img/classic/Havoe.png" },
];
const casualProducts = [
  { name: "White Oud", price3ml: 160, price6ml: 330, price12ml: 600, img: "img/casual/whiteoud.jfif" },
  { name: "Dunhil Desire", price3ml: 160, price6ml: 330, price12ml: 600, img: "img/casual/dunhil.jfif" },
  { name: "Soft", price3ml: 160, price6ml: 330, price12ml: 600, img: "img/casual/soft.png" },
  { name: "Ghulaf-e-Kaaba", price3ml: 160, price6ml: 330, price12ml: 600, img: "img/casual/ghulaf.jfif" },
  { name: "Sabaya", price3ml: 160, price6ml: 330, price12ml: 600, img: "img/casual/sabaya.jfif" },
];


function createProductCard(product) {
  let dropdownHTML = '';

  if (product.customSizes) {
    dropdownHTML = `
      <select class="price-dropdown">
        <option value="${product.price50ml}">50ml - Rs ${product.price50ml}</option>
      </select>
    `;
  } else {
    dropdownHTML = `
      <select class="price-dropdown">
        <option value="${product.price3ml}">3ml - Rs ${product.price3ml}</option>
        <option value="${product.price6ml}">6ml - Rs ${product.price6ml}</option>
        <option value="${product.price12ml}">12ml - Rs ${product.price12ml}</option>
      </select>
    `;
  }

  return `
    <div class="product">
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      ${dropdownHTML}
      <button onclick="redirectToOrderPageWithDropdown('${product.name}')">Order Now</button>
    </div>
  `;
}

function redirectToOrderPage(productName, price) {
  const url = `order.html?product=${encodeURIComponent(productName)}&price=${price}`;
  window.location.href = url;
}
function redirectToOrderPageWithDropdown(productName) {
  const selectedPrice = event.target.parentElement.querySelector('.price-dropdown').value;
  redirectToOrderPage(productName, selectedPrice);
}



function renderProducts() {
  const query = document.getElementById("searchInput").value.toLowerCase();

  const filteredPremium = premiumProducts.filter(p => p.name.toLowerCase().includes(query));
  const filteredClassic = classicProducts.filter(p => p.name.toLowerCase().includes(query));
  const filteredCasual = casualProducts.filter(p => p.name.toLowerCase().includes(query));

  document.getElementById("premiumList").innerHTML = filteredPremium.map(createProductCard).join("");
  document.getElementById("classicList").innerHTML = filteredClassic.map(createProductCard).join("");
  document.getElementById("casualList").innerHTML = filteredCasual.map(createProductCard).join("");
}


document.getElementById("searchInput").addEventListener("input", renderProducts);

// Initial rendering
renderProducts();


