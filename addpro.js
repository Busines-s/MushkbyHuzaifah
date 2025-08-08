const premiumProducts = [
  { name: "Nostrademis 15% off 4500 ❌ ", price50ml: 3825, img: "img/premium/nostra.jpg", customSizes: true, description: "Limited time discount on premium Nostrademis. Strong, long-lasting fragrance.", lasting: "24 Hours" },
  { name: "Oud Aromatic", price3ml: 700, price6ml: 1200, price12ml: 2200, img: "img/premium/oudaro.jpeg", description: "Rich and woody oud with aromatic notes. A signature scent for special occasions.", lasting: "24 Hours" },
  { name: "Silk Musk", price3ml: 700, price6ml: 1150, price12ml: 2100, img: "img/premium/silkmusk.jpeg", description: "A soft and musky fragrance that lingers with elegance and charm.", lasting: "24 Hours" },
  { name: "Musk-ul-Hind S", price3ml: 750, price6ml: 1500, price12ml: 3000, img: "img/premium/muskulhind.jpg", description: "Strong traditional Indian musk with deep earthy tones.", lasting: "24 Hours" },
  { name: "Ameer-ul-Oud", price3ml: 270, price6ml: 550, price12ml: 1000, img: "img/premium/ameeruloud.png", description: "A rich and regal blend of oud. Fit for royalty.", lasting: "24 Hours" },
  { name: "Jannan", price3ml: 250, price6ml: 500, price12ml: 900, img: "img/premium/jannan.jpeg", description: "Sweet and floral blend. Perfect for daily wear.", lasting: "24 Hours" },
  { name: "Versache Pink", price3ml: 250, price6ml: 500, price12ml: 900, img: "img/premium/versace.jpeg", description: "Inspired by Versace’s pink edition. Youthful, vibrant, and elegant.", lasting: "24 Hours" },
  { name: "Oud-e-Junaid", price3ml: 260, price6ml: 520, price12ml: 950, img: "img/premium/oud-e-junaid.jpeg", description: "Classic Junaid oud with a hint of sweetness.", lasting: "24 Hours" },
  { name: "Purple Oud", price3ml: 300, price6ml: 600, price12ml: 1200, img: "img/premium/purpleoud.jpeg", description: "A powerful blend of oud with rich purple floral notes.", lasting: "24 Hours" },
  { name: "Musk-ul-Hind", price3ml: 450, price6ml: 900, price12ml: 1700, img: "img/premium/muskulhind.jpg", description: "Original Indian Musk. Deep, woody, and long-lasting.", lasting: "24 Hours" },
  { name: "Bombshell", price3ml: 230, price6ml: 450, price12ml: 850, img: "img/premium/bomshell.png", description: "Floral fruity fragrance. Inspired by Victoria’s Secret Bombshell.", lasting: "24 Hours" },
  { name: "Armani Mania", price3ml: 250, price6ml: 500, price12ml: 1000, img: "img/premium/armani.png", description: "Elegant and spicy fragrance with the charm of Armani.", lasting: "24 Hours" },
  { name: "Vanilla 28", price3ml: 300, price6ml: 600, price12ml: 1200, img: "img/premium/vanila.jpeg", description: "Warm vanilla notes, sweet and sensual.", lasting: "24 Hours" },
  { name: "Urba Pura", price3ml: 250, price6ml: 500, price12ml: 900, img: "img/premium/urbapura.png", description: "Fruity top notes with musky base. Fresh and uplifting.", lasting: "24 Hours" },
];
const classicProducts = [
  { name: "Husne Yousaf", price3ml: 160, price6ml: 330, price12ml: 600, img: "img/classic/husneyousaf.jpeg", description: "Classic floral scent inspired by timeless traditions.", lasting: "12 Hours" },
  { name: "Gucci Rush", price3ml: 160, price6ml: 330, price12ml: 600, img: "img/classic/gucchirash.jpeg", description: "Modern spicy floral blend inspired by Gucci Rush.", lasting: "12 Hours" },
  { name: "Ghulaf-e-Kaaba", price3ml: 160, price6ml: 330, price12ml: 600, img: "img/classic/Ghulaf-e-Kaaba.jpeg", description: "Spiritual aroma reminiscent of holy places.", lasting: "12 Hours" },
  { name: "Nostrademis (N)", price3ml: 160, price6ml: 330, price12ml: 600, img: "img/classic/nostrademis.png", description: "Everyday affordable version of the premium Nostrademis.", lasting: "12 Hours" },
  { name: "Formation", price3ml: 160, price6ml: 330, price12ml: 600, img: "img/classic/Formatia.png", description: "Fresh, clean fragrance for active lifestyle.", lasting: "12 Hours" },
  { name: "Sabaya", price3ml: 160, price6ml: 330, price12ml: 600, img: "img/classic/sabaya.jpeg", description: "Elegant floral and light. Very feminine.", lasting: "12 Hours" },
  { name: "Havoc", price3ml: 160, price6ml: 330, price12ml: 600, img: "img/classic/Havoe.png", description: "Classic men’s scent inspired by timeless western colognes.", lasting: "12 Hours" },
];
const casualProducts = [
  { name: "White Oud", price6ml: 330, img: "img/casual/whiteoud.jfif", customSizes: true, description: "Clean, smooth white oud for daily wear.", lasting: "6 Hours" },
  { name: "Dunhil Desire", price6ml: 330, img: "img/casual/dunhil.jfif", customSizes: true, description: "Popular masculine scent. Everyday sophistication.", lasting: "6 Hours" },
  { name: "Soft", price6ml: 330, img: "img/casual/soft.png", customSizes: true, description: "Light floral scent with a comforting feel.", lasting: "6 Hours" },
  { name: "Ghulaf-e-Kaaba", price6ml: 330, img: "img/casual/ghulaf.jfif", customSizes: true, description: "Same holy aroma with a casual feel.", lasting: "6 Hours" },
  { name: "Sabaya", price6ml: 330, img: "img/casual/sabaya.jfif", customSizes: true, description: "Casual version of the classic Sabaya. Soft and floral.", lasting: "6 Hours" },
];
const organicProducts = [
  
  { name: "Indian Khuss", price3ml: 2000, price6ml: 4000, price12ml: 8000, img: "img/organic/indianKhuss.jpg", description: "Classic floral scent inspired by timeless traditions.", lasting: "12 Hours" },
  { name: "Khuss Ali Ghar", price3ml: 4500, price6ml: 9000, price12ml: 18000, img: "img/organic/khussalighar.jpg", description: "Classic floral scent inspired by timeless traditions.", lasting: "12 Hours" },
  { name: "Khuss India up", price3ml: 3000, price6ml: 6000, price12ml: 12000, img: "img/organic/khussindiaup.jpg", description: "A unique blend of earthy and floral notes, reminiscent of an Indian garden after the rain.", lasting: "12 Hours" },

  { name: "Mushk-E-Hind", price3ml: 1750, price6ml: 3500, price12ml: 7000, img: "img/organic/Mushkehind.jpg", description: "A warm and inviting musk with a deep, spicy undertone, perfect for a lasting impression.", lasting: "12 Hours" },
  { name: "Oud Combodi", price3ml: 18750, price6ml: 37500, price12ml: 75000, img: "img/organic/oudcombodi.jpg", description: "A rich and exotic Cambodian oud, offering a complex woody aroma with a hint of sweetness.", lasting: "12 Hours" },
  { name: "Oud Hindi", price3ml: 31250, price6ml: 62500, price12ml: 125000, img: "img/organic/oudhindi.jpg", description: "A classic Indian oud, known for its strong, smoky, and resinous fragrance.", lasting: "12 Hours" },

  { name: "Oud Syoufii", price3ml: 31250, price6ml: 62500, price12ml: 125000, img: "img/organic/oudsyoufii.jpg", description: "A rare and sophisticated oud with a unique blend of leathery and floral notes.", lasting: "12 Hours" },
  { name: "Sandal", price3ml: 4500, price6ml: 9000, price12ml: 18000, img: "img/organic/sandal.jpg", description: "The timeless and soothing aroma of sandalwood, offering a creamy, woody, and calming scent.", lasting: "12 Hours" },
  { name: "Shamaamaa1", price3ml: 4000, price6ml: 8000, price12ml: 16000, img: "img/organic/shamaamaa1.jpg", description: "A harmonious blend of floral and spicy notes, creating a uniquely comforting and traditional fragrance.", lasting: "12 Hours" },

  { name: "Shamaamaa2", price3ml: 6000, price6ml: 12000, price12ml: 24000, img: "img/organic/shamaamaa2.jpg", description: "A complex and captivating fragrance, combining deep, earthy undertones with a bright, refreshing finish.", lasting: "12 Hours" },
  { name: "Shamaamaa3", price3ml: 1375, price6ml: 2750, price12ml: 5500, img: "img/organic/shamaamaa3.jpg", description: "A luxurious and intricate blend of rare spices and blossoms, exuding an air of elegance and mystery.", lasting: "12 Hours" }

  
];


function createProductCard(product) {
  let dropdownHTML = '';

  if (product.customSizes && product.price50ml) {
    dropdownHTML = `
      <select class="price-dropdown">
        <option value="${product.price50ml}">50ml - Rs ${product.price50ml}</option>
      </select>
    `;
  } else if (product.customSizes && product.price6ml) {
    dropdownHTML = `
      <select class="price-dropdown">
        <option value="${product.price6ml}">6ml - Rs ${product.price6ml}</option>
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
    <div class="product" onclick='showProductPopup(${JSON.stringify(product)})'>
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      ${dropdownHTML}
      <button onclick="event.stopPropagation(); redirectToOrderPageWithDropdown('${product.name}')">Order Now</button>
    </div>
  `;
}
function showProductPopup(product) {
  const dropdownHTML = product.customSizes && product.price50ml
    ? `<select class="popup-dropdown"><option>50ml - Rs ${product.price50ml}</option></select>`
    : product.customSizes && product.price6ml
    ? `<select class="popup-dropdown"><option>6ml - Rs ${product.price6ml}</option></select>`
    : `<select class="popup-dropdown">
        <option>3ml - Rs ${product.price3ml}</option>
        <option>6ml - Rs ${product.price6ml}</option>
        <option>12ml - Rs ${product.price12ml}</option>
      </select>`;

  document.getElementById("popupContainer").innerHTML = `
    <div class="popup-content">
      <span class="close-btn" onclick="closeProductPopup()">&times;</span>
      <img src="${product.img}" class="popup-img" alt="${product.name}">
      <h1 class="popup-title">${product.name}</h1>
      <p class="popup-description">${product.description}</p>
      <div class="product-details-lasting">
        Lasting: <span>${product.lasting}</span>
      </div>
      ${dropdownHTML}
      <button class="popup-order-btn" onclick="redirectToOrderPage('${product.name}', getSelectedPrice())">Order Now</button>
    </div>
  `;
  document.getElementById("popupBackground").style.display = "flex";
}

function getSelectedPrice() {
  return document.querySelector('.popup-dropdown')?.value || 0;
}

function closeProductPopup() {
  document.getElementById("popupBackground").style.display = "none";
}

// Existing functions stay same:
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
  const filteredOrganic = organicProducts.filter(p => p.name.toLowerCase().includes(query));

  document.getElementById("premiumList").innerHTML = filteredPremium.map(createProductCard).join("");
  document.getElementById("classicList").innerHTML = filteredClassic.map(createProductCard).join("");
  document.getElementById("casualList").innerHTML = filteredCasual.map(createProductCard).join("");
  document.getElementById("organicList").innerHTML = filteredOrganic.map(createProductCard).join("");
}

document.getElementById("searchInput").addEventListener("input", renderProducts);
renderProducts();


function redirectToOrderPage(productName, price) {
  const url = `order.html?product=${encodeURIComponent(productName)}&price=${price}`;
  window.location.href = url;
}
function redirectToOrderPageWithDropdown(productName) {
  const selectedPrice = event.target.parentElement.querySelector('.price-dropdown').value;
  redirectToOrderPage(productName, selectedPrice);
}


