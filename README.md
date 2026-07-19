# Sharabat

A modern e-commerce storefront for a sock brand, built with Nuxt 4, Vue 3, and Tailwind CSS. This project demonstrates a full front-end shopping experience — product browsing, filtering, cart management, and a multi-step checkout flow — with a lightweight Nuxt server API backing the product catalog.

> **Status:** Front-end demo / portfolio project. Authentication and payment are currently simulated (see [Known Limitations](#known-limitations) below) rather than wired to a live backend.

## Features

- **Product catalog** — server-rendered product listing with filtering by category, price range, color, and size
- **Product detail pages** — image gallery, size/color selection, stock status
- **Cart** — add/update/remove items, persistent across page reloads via `localStorage`, slide-out cart drawer
- **Checkout** — 3-step flow (shipping → delivery method → payment)
- **Theming** — light/dark mode with no flash-of-wrong-theme on load (theme resolved synchronously before first paint)
- **Toast notifications** for user feedback (add to cart, errors, etc.)
- **Account, login, signup, about, and contact pages**

## Tech Stack

- [Nuxt 4](https://nuxt.com/) / [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)
- [Pinia](https://pinia.vuejs.org/) for state management (cart store)
- [Nuxt UI](https://ui.nuxt.com/) + [Tailwind CSS 4](https://tailwindcss.com/) for UI and styling
- [@nuxtjs/color-mode](https://color-mode.nuxtjs.org/) for theme switching
- TypeScript throughout, with shared domain types (`Product`, `CartItem`, `User`, `Order`)
- Nuxt server routes (`server/api`) serving product data

## Project Structure

```
app/
  pages/          route-level pages (home, products, cart, checkout, account, ...)
  components/
    cart/         cart drawer and related UI
    product/      product card and listing UI
    layout/       navbar and page chrome
    ui/           shared UI primitives (toasts, etc.)
  stores/         Pinia stores (cart)
  plugins/        cart persistence plugin
  types/          shared TypeScript interfaces
composables/      useToast
server/
  api/            product listing and detail endpoints
data/
  products.ts     static product catalog used by the API
```

## Getting Started

Install dependencies:

```bash
pnpm install
```

Start the dev server at `http://localhost:3000`:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
pnpm preview
```

## Known Limitations

This project focuses on the storefront UI/UX and front-end architecture rather than a production backend. A few areas are intentionally stubbed:

- **Checkout** simulates payment processing (no live Stripe integration yet, though `stripe` is included as a dependency for future work).
- **Login / signup** are UI-only and do not persist real user sessions.
- **Orders** are not persisted — the `Order` type is defined but not yet backed by storage.

These are the natural next steps for turning this into a fully functional store.
