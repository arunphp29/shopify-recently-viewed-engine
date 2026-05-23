# Setup Guide

## Installation

1. Copy assets
2. Copy section
3. Copy snippet
4. Load CSS + JS in theme.liquid
   
        Inside:
        layout/theme.liquid
        
        Before:
        
        </body>
        
        Add:
        
        {{ 'recently-viewed.css' | asset_url | stylesheet_tag }}
        
        {{ 'recently-viewed.js' | asset_url | script_tag }}


5. Add section in main-product.liquid
          sections/main-product.liquid
          
          Add:
          
          {% section 'recently-viewed-products' %}
          
          Place:
          
          below product info
          OR
          below recommendations

## Features

- Recently viewed tracking
- localStorage persistence
- Smart recommendations
- Exclude unavailable products
- Category-aware filtering
