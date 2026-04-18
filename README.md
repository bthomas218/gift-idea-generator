# gift-idea-generator

Web app to generate personalized gift ideas based on user input.

## Motivation

Finding the perfect gift can be surprisingly difficult. People rarely say exactly what they want. This app was created to simplify that process by helping users discover thoughtful, personalized gift ideas based on the recipient’s interests, budget, and basic details.

---

## Features

- 🎯 Personalized gift recommendations based on user input
- 🔍 Dynamic filtering using interests and budget
- 🧠 Smart mapping of interests to product categories
- 🛒 Wishlist system using React Context
- 💾 Persistent wishlist (saved in localStorage)
- ⚡ Loading, empty, and error states for better UX
- 🖼️ Fallback images for incomplete API data

---

## Stack

![TypeScript](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)
![React](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=flat-square)
![Bun](http://img.shields.io/badge/Bun-000?logo=bun&logoColor=fff&style=flat-square)

Additional tools:

- React Context (state management)
- React Router (navigation)
- Bootstrap (UI styling)
- Platzi FakestoreAPI

---

## Quick Start

### 1. Clone the repo

```bash
git clone https://github.com/your-username/gift-idea-generator.git
cd gift-idea-generator
```

### 2. Insall dependcies

```bash
bun install
```

### 3. Run the development server

```bash
bun run dev
```

### 4. Open in browser

Navigate to http://localhost:3000

## Usage

1. Enter details about the person you’re buying a gift for:
   - Name
   - Age
   - Your Budget
   - Interests
2. Click Find Gifts
3. Browse recommended items: Results are automatically
   - filtered by intrest
   - limited by your budget
4. Save items to your wishlist
5. View and manage saved gifts on the wishlist page

## Architecture Overview

- Pages
  - `/ – Input` form
  - `/results` – Gift recommendations
  - `/wishlist` – Saved items
- State Management
  - Local state for form inputs
  - React Context for global wishlist state
- Data Flow
  - User input → category mapping → API fetch → filtering → UI rendering

## Challenges and Solutions

- Inconsistent API data
  - Implemented fallback images and error handling
- Duplicate results from multiple categories
  - Resolved using a Map keyed by product ID
- State sharing across pages
  - Solved using React Context

## Future Improvements

- Better recommendation algorithm (ranking by relevance)
- More granular filters (price range, categories)
- Backend integration for persistent user data
- Improved UI/animations

## Contributing

1. Fork the repo
2. Create a new branch
3. Make your changes
4. Submit a pull request
