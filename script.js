
// ---------- SHOP PAGE: SORT PRODUCTS ----------
const sortProducts = document.getElementById("sortProducts");
const productGrid = document.getElementById("productGrid");

if (sortProducts && productGrid) {
    sortProducts.addEventListener("change", function () {
        const products = Array.from(
            productGrid.querySelectorAll(".product-card")
        );

        if (sortProducts.value === "low") {
            products.sort((a, b) =>
                Number(a.dataset.price) - Number(b.dataset.price)
            );
        } else if (sortProducts.value === "high") {
            products.sort((a, b) =>
                Number(b.dataset.price) - Number(a.dataset.price)
            );
        }

        products.forEach(product => productGrid.appendChild(product));
    });
}

// ---------- ALL PRODUCT DETAILS ----------
const nzProducts = {
    // SHOP PAGE PRODUCTS
    earrings: {
        name: "Classic Gold Drops",
        price: "Rs. 1,800",
        image: "images/shop 1.jpg",
        description: "Elegant golden drop earrings for everyday wear and special occasions."
    },
    necklace: {
        name: "Everyday Gold Necklace",
        price: "Rs. 2,500",
        image: "images/shop 2.webp",
        description: "A graceful necklace for everyday outfits and special gatherings."
    },
    ring: {
        name: "Golden Glow Ring",
        price: "Rs. 1,500",
        image: "images/shop 3.jfif",
        description: "A simple and elegant ring for a beautiful everyday look."
    },
    mehfil: {
        name: "Mehfil Collection",
        price: "Rs. 2,200",
        image: "images/shop 4.webp",
        description: "A special jewellery design for celebrations and family occasions."
    },
    bracelet: {
        name: "Simple Charm Bracelet",
        price: "Rs. 1,900",
        image: "images/shop 5.jpg",
        description: "A delicate bracelet that adds a graceful touch to your style."
    },
    giftset: {
        name: "Golden Gift Set",
        price: "Rs. 2,800",
        image: "images/shop 6.jpg",
        description: "A lovely jewellery set for gifting and memorable occasions."
    },

    // EARRINGS COLLECTION: SIX DIFFERENT PRODUCTS
    earring1: {
        name: "Classic Gold Earrings",
        price: "Rs. 1,500",
        image: "images/1st earring pic.png",
        description: "Beautiful classic gold earrings for everyday wear."
    },
    earring2: {
        name: "Golden Glow Earrings",
        price: "Rs. 1,800",
        image: "images/seccond.jfif",
        description: "Elegant statement earrings for special occasions."
    },
    earring3: {
        name: "Delicate Gold Drops",
        price: "Rs. 1,200",
        image: "images/second.webp",
        description: "Delicate golden drop earrings with a timeless style."
    },
    earring4: {
        name: "Everyday Elegance",
        price: "Rs. 1,350",
        image: "images/third image.jfif",
        description: "Minimal golden earrings for everyday elegance."
    },
    earring5: {
        name: "Mehfil Earrings",
        price: "Rs. 2,000",
        image: "images/fourth.webp",
        description: "Beautiful party wear earrings for special occasions."
    },
    earring6: {
        name: "Golden Pearl Style",
        price: "Rs. 1,650",
        image: "images/fifth.webp",
        description: "Elegant earrings for a graceful and classic look."
    }
};

// ---------- DISPLAY SELECTED PRODUCT ----------
const nzParams = new URLSearchParams(window.location.search);
const nzId = nzParams.get("id");
const nzProduct = nzProducts[nzId];

const productImage = document.getElementById("productImage");
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productDescription = document.getElementById("productDescription");

if (nzProduct && productImage) {
    productImage.src = nzProduct.image;
    productImage.alt = nzProduct.name;

    if (productName) {
        productName.textContent = nzProduct.name;
    }

    if (productPrice) {
        productPrice.textContent = nzProduct.price;
    }

    if (productDescription) {
        productDescription.textContent = nzProduct.description;
    }

    document.title = nzProduct.name + " | Noor-e-Zar Jewelry";
}

// ---------- ADD TO BAG ----------
const addToCart = document.getElementById("addToCart");
const quantityInput = document.getElementById("quantity");
const cartMessage = document.getElementById("cartMessage");

if (addToCart && quantityInput && cartMessage) {
    addToCart.addEventListener("click", function () {
        const quantity = Number(quantityInput.value);

        if (!Number.isInteger(quantity) || quantity < 1 || quantity > 10) {
            cartMessage.textContent =
                "Please select a quantity between 1 and 10.";
            return;
        }

        const selectedName = nzProduct ? nzProduct.name : "Product";

        cartMessage.textContent = quantity === 1
            ? selectedName + " added to your bag!"
            : quantity + " items added to your bag!";
    });
}

// ---------- CONTACT FORM ----------
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        formMessage.textContent =
            "Thank you! Your form has been completed successfully.";

        contactForm.reset();
    });
}

// ---------- MOBILE NAVBAR ----------
const menuToggle = document.getElementById("menuToggle");
const navbarMenu = document.querySelector(".navbar nav");

if (menuToggle && navbarMenu) {
    menuToggle.addEventListener("click", function () {
        const isOpen = navbarMenu.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.textContent = isOpen ? "×" : "☰";
    });
}
