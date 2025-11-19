# InventoryHub
Live - https://inventory-hub-nine.vercel.app/

A modern, full-featured e-commerce inventory management application built with Next.js 16, React 19, and TypeScript. Features a beautiful UI with dark/light theme support, product browsing, shopping cart, and checkout functionality.

## 🚀 Features

- **Product Catalog**
  - Browse products with pagination
  - Search products by name or description
  - Filter products by category
  - Sort products by name or price (ascending/descending)
  - Product detail pages with full information

- **Shopping Cart**
  - Add/remove items from cart
  - Update item quantities
  - Persistent cart storage (localStorage)
  - Real-time cart total calculation
  - Cart page with item management

- **User Interface**
  - Modern, responsive design
  - Dark/Light theme support
  - Smooth animations and transitions
  - Large, accessible product cards
  - Interactive hover effects
  - Mobile-friendly layout

- **Technical Features**
  - Server-side rendering with Next.js App Router
  - TypeScript for type safety
  - RESTful API routes
  - Debounced search functionality
  - Optimized performance

## 🛠️ Tech Stack

- **Framework**: [Next.js 16.0.3](https://nextjs.org/)
- **React**: 19.2.0
- **TypeScript**: ^5
- **Styling**: [Tailwind CSS 4.1.9](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Handling**: React Hook Form + Zod
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd InventoryHub
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
InventoryHub/
├── app/
│   ├── api/              # API routes
│   │   └── products/     # Product API endpoints
│   ├── cart/             # Cart page
│   ├── checkout/         # Checkout page
│   ├── context/          # React contexts (Cart)
│   ├── hooks/            # Custom React hooks
│   ├── products/         # Product pages
│   ├── services/         # API service layer
│   └── types/            # TypeScript type definitions
├── components/
│   ├── pages/            # Page components
│   └── ui/               # Reusable UI components
├── lib/                  # Utility functions
├── mocks/                # Mock data
└── public/               # Static assets
```

## 🎨 Key Components

### Pages
- **IntroPage**: Landing page with hero section and featured products
- **ProductsPage**: Product listing with search, filter, and sort
- **ProductDetailsPage**: Individual product detail view
- **CartPage**: Shopping cart management
- **CheckoutPage**: Checkout process

### Features
- **ProductCard**: Large, interactive product cards with hover effects
- **SearchBar**: Debounced search input
- **FilterSelect**: Category filtering dropdown
- **SortSelect**: Product sorting options
- **Pagination**: Page navigation for product lists
- **Header**: Navigation header with cart icon and theme toggle

## 🔌 API Routes

### GET `/api/products`
Fetch products with optional query parameters:
- `query`: Search term
- `category`: Filter by category
- `page`: Page number
- `limit`: Items per page
- `sort`: Sort option (name-asc, name-desc, price-asc, price-desc)

### GET `/api/products/[id]`
Fetch a single product by ID

## 🎯 Product Categories

- Electronics
- Clothing
- Home & Garden
- Sports
- Books
- Health & Beauty

## 💾 Data Storage

- **Cart**: Stored in browser localStorage for persistence
- **Products**: Currently using mock data from `mocks/data.ts`

## 🎨 Theming

The application supports both dark and light themes. Users can toggle between themes using the theme switcher in the header. Theme preference is saved in localStorage.

## 🚧 Future Enhancements

- [ ] User authentication
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Payment integration
- [ ] Order history
- [ ] Admin dashboard
- [ ] Database integration
- [ ] Image upload for products
- [ ] Product recommendations
- [ ] Email notifications

## 📝 License

This project is private and proprietary.

## 👨‍💻 Development

### Adding New Products

Edit `mocks/data.ts` to add or modify products:

```typescript
{
  id: '28',
  name: 'Product Name',
  description: 'Product description',
  price: 99.99,
  category: 'Electronics',
  stock: 50,
  image: '/product-image.jpg',
  rating: 4.5,
  reviews: 100,
}
```

### Customizing Styles

Styles are managed through Tailwind CSS. Global styles can be found in:
- `app/globals.css`
- `styles/globals.css`

### Adding New Features

1. Create components in `components/` directory
2. Add page routes in `app/` directory
3. Define types in `app/types/`
4. Add API routes in `app/api/` if needed

## 🤝 Contributing

This is a private project. For contributions, please contact the project maintainer.

## 📧 Support

For issues or questions, please open an issue in the repository or contact the development team.

---

Built with ❤️ using Next.js and React




