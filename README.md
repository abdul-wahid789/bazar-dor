# BazarDor

## Short Description
**BazarDor** is a modern, responsive web application designed to track and display the daily market prices of essential commodities in Bangladesh. The platform provides users with real-time insights into price fluctuations, category-based filtering, and market-specific pricing across different local bazars. It features secure authentication, interactive UI elements, and full support for Bengali localized formatting.

**Live Demo:** [Insert Your Deployed Vercel Link Here]

---

## Key Features

1. **Secure Authentication & Smart Routing**
   Implemented robust authentication using **Better Auth**, supporting Email/Password, Google, and GitHub logins. Includes a custom Next.js middleware proxy that protects specific routes (like `/product/[slug]`) and automatically redirects users back to their intended page (`callbackUrl`) after a successful login.

2. **Dynamic Price Ticker & Market Trends**
   Features an infinite-scrolling marquee in the navbar displaying live price updates. The home page dynamically highlights daily market trends, categorizing products into "আজ দাম বেড়েছে ▲" (Top Risers) and "আজ দাম কমেছে ▼" (Top Fallers).

3. **Advanced Sorting with Bengali Numerals**
   Includes a custom sorting feature allowing users to order category items by price (Low to High / High to Low). The sorting algorithm features custom utility functions designed to accurately parse and compute native Bengali numerals.

4. **Detailed Market Analytics (Protected)**
   Authenticated users gain access to comprehensive product detail pages showing minimum, maximum, and average prices, alongside a detailed breakdown of prices across various local markets.

5. **Modern, Responsive UI/UX**
   Built with a mobile-first approach ensuring perfect responsiveness across desktop, tablet, and mobile devices. Features beautiful skeleton loading states, smooth scrolling hero sections, custom Bengali 404 error pages, and interactive form validation using HeroUI.

6. **Profile Management**
   A dedicated user profile dashboard where authenticated users can view their current session details and update their personal information securely.

---

## Technologies Used

- **Framework:** Next.js (App Router)
- **Language:** TypeScript / JavaScript
- **Styling & UI:** Tailwind CSS, DaisyUI, HeroUI
- **Authentication:** Better Auth (Email/Password, Social Providers)
- **Icons:** React Icons (`react-icons`)
- **Notifications:** React Hot Toast / Custom Toast Utilities
- **Deployment:** Vercel

