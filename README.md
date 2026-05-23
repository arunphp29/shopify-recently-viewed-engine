# Shopify Recently Viewed Products Engine

A lightweight personalization engine for Shopify themes that dynamically tracks customer browsing behavior and displays smart recently viewed product recommendations.
<br>
<strong>For More Detail check my <a href="https://www.linkedin.com/posts/arun-sharmadev_recently-viewed-products-system-for-shopify-ugcPost-7463462635246669824-rrnU/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABox1gsBoQ0sTWNME0hbr8qOwoj87ME6-BE">Linkedin Post</a></strong>

This project demonstrates:

* frontend architecture
* personalization systems
* browser storage logic
* ecommerce UX optimization
* dynamic rendering with Shopify Liquid + JavaScript

---

# 🚀 Features

    ✅ Recently viewed product tracking                  ✅ Persistent localStorage support
    ✅ Dynamic frontend rendering                        ✅ Exclude current product
    ✅ Exclude out-of-stock products                     ✅ Category-aware recommendations
    ✅ Mobile responsive layout                          ✅ Smart personalization logic
    ✅ Lightweight & theme-friendly architecture

---

# 🧠 Why This Project Matters

Recently viewed systems are one of the most common personalization features used in modern ecommerce stores.

This project shows how to build a scalable recommendation system directly inside a Shopify theme without external apps.

The architecture can later evolve into:

* AI recommendation systems
* browsing analytics
* customer personalization
* loyalty-based recommendations
* vendor-aware recommendations

---

# 🛠 Tech Stack

| Technology     | Purpose                     |
| -------------- | --------------------------- |
| Shopify Liquid | Product rendering           |
| JavaScript     | Tracking + rendering engine |
| localStorage   | Persistent browser storage  |
| CSS            | Responsive UI styling       |

---

# 📂 File Structure

```bash
shopify-recently-viewed-engine/

├── assets/
│   ├── recently-viewed.js
│   └── recently-viewed.css
│
├── sections/
│   └── recently-viewed-products.liquid
│
├── snippets/
│   └── recently-viewed-card.liquid
│
├── screenshots.png
│
├── docs/
│   └── setup.md
│
├── README.md
│
└── LICENSE
```

---

# 📁 File Overview

## assets/recently-viewed.js

Core personalization engine.

Handles:

* product tracking
* localStorage persistence
* recommendation filtering
* rendering logic
* exclude current product
* filter unavailable items
* generate recommendation UI

---

## assets/recently-viewed.css

Frontend styling for:

* recently viewed grid
* responsive cards
* hover effects
* mobile layout

---

## sections/recently-viewed-products.liquid

Main Shopify section responsible for:

* rendering wrapper HTML
* passing product JSON data
* mounting JS application

This section injects product data into JavaScript using Liquid.

---

## snippets/recently-viewed-card.liquid

Reusable product card structure for:

* image
* title
* pricing
* product links

---

## docs/setup.md

Installation guide and usage documentation.

---

# ⚡ Core Tracking Logic

```javascript
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
```

This stores viewed products inside browser localStorage to persist data between visits.

---



# 🚀 Installation Guide

## 1. Upload Files

Copy:

* assets
* sections
* snippets

into your Shopify theme.

---

## 2. Load CSS + JS

Inside:

```liquid
layout/theme.liquid
```

before:

```liquid
</body>
```

add:

```liquid
{{ 'recently-viewed.css' | asset_url | stylesheet_tag }}

{{ 'recently-viewed.js' | asset_url | script_tag }}
```

---

## 3. Add Section to Product Page

Inside:

```liquid
sections/main-product.liquid
```

add:

```liquid
{% section 'recently-viewed-products' %}
```

Recommended placement:

* below product info
* below recommendations
* above footer

---

# 📱 Responsive Support

The layout automatically adjusts for:

* desktop
* tablet
* mobile devices

Using responsive CSS grid logic.


---


# 📄 License

MIT License


