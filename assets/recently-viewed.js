const RECENTLY_VIEWED_KEY =
  'shopify_recently_viewed';

function getRecentlyViewed() {

  return JSON.parse(
    localStorage.getItem(
      RECENTLY_VIEWED_KEY
    )
  ) || [];
}

function saveRecentlyViewed(products) {

  localStorage.setItem(
    RECENTLY_VIEWED_KEY,
    JSON.stringify(products)
  );
}

function trackProduct() {

  const productScript =
    document.getElementById(
      'recently-viewed-product-data'
    );

  if (!productScript) return;

  const product =
    JSON.parse(productScript.textContent);

  let products = getRecentlyViewed();

  // Remove duplicate
  products = products.filter(
    p => p.handle !== product.handle
  );

  // Add latest product
  products.unshift(product);

  // Limit products
  products = products.slice(0, 8);

  saveRecentlyViewed(products);
}

function renderRecentlyViewed() {

  const container =
    document.getElementById(
      'recently-viewed-products'
    );

  if (!container) return;

  let products = getRecentlyViewed();

  const currentProduct =
    JSON.parse(
      document.getElementById(
        'recently-viewed-product-data'
      ).textContent
    );

  // Exclude current product
  products = products.filter(
    p => p.handle !== currentProduct.handle
  );

  // Exclude unavailable
  products = products.filter(
    p => p.available
  );

  // Category-aware recommendations
  products = products.filter(
    p => p.type === currentProduct.type
  );

  if (!products.length) {

    container.innerHTML =
      '<p>No recently viewed products.</p>';

    return;
  }

  container.innerHTML =
    products.map(product => `

      <a
        href="${product.url}"
        class="recently-viewed-card"
      >

        <img
          src="${product.image}"
          alt="${product.title}"
        >

        <div class="recently-viewed-title">
          ${product.title}
        </div>

        <div class="recently-viewed-price">
          ₹${(product.price / 100).toFixed(2)}
        </div>

      </a>

    `).join('');
}

document.addEventListener(
  'DOMContentLoaded',
  function() {

    trackProduct();

    renderRecentlyViewed();

  }
);
