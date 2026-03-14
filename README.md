# My Portfolio - Vite + React

Một portfolio cá nhân được xây dựng bằng React và Vite, với thiết kế hiện đại, hiệu ứng animation mượt mà và trải nghiệm người dùng tuyệt vời.

## 🛠 Tech Stack

- **Frontend Framework:** React 19.2.4
- **Build Tool:** Vite 8.0.0
- **Styling:** CSS3 (Custom CSS with animations)
- **Font:** Playfair Display (Google Fonts)
- **Icons:** Lucide React 0.577.0
- **Routing:** React Router DOM 6.30.3
- **UI Components:** Radix UI
- **Animation:** Framer Motion 12.36.0
- **Form Validation:** Zod 3.24.1
- **Notifications:** Sonner 1.7.1
- **Build System:** Vite with React plugin

## 🚀 Cách Chạy Dự Án

### Cài đặt Dependencies

```bash
npm install
```

### Chạy Development Server

```bash
npm run dev
```

Server sẽ chạy tại `http://localhost:5173/`

### Build Production

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

### Lint Code

```bash
npm run lint
```

## ✨ Danh Sách Tính Năng Đã Làm

### 📍 Routing

- ✅ React Router DOM v6 được cấu hình hoàn chỉnh
- ✅ Liên kết giữa các trang: Home, Resume, Skills, Projects, Contact
- ✅ Trang 404 (Not Found) cho các route không tồn tại
- ✅ Active link styling trong navigation

### 🍔 Navigation & Menu

- ✅ Desktop: Full horizontal navigation menu
- ✅ Tablet (768px - 1024px): Hamburger menu icon with dropdown list
- ✅ Mobile (< 768px): Hamburger menu icon with smooth transition
- ✅ Menu closes automatically after navigation
- ✅ Touch-friendly menu items with adequate spacing

### 🎨 Animation & Effects

- ✅ Fade-in/Slide-up animations khi load trang
- ✅ Bouncing animations cho các components
- ✅ Hover effects trên buttons và cards
- ✅ Smooth transitions trên tất cả interactive elements
- ✅ Cascading animations với delay

### 🔍 Filtering & Search

- ✅ Filter dự án theo category
- ✅ Search dự án theo từ khóa
- ✅ Real-time filter updates

### ✔️ Form Validation

- ✅ Validation email format
- ✅ Required field validation
- ✅ Min-length validation cho message
- ✅ Error messages hiển thị inline
- ✅ Input field highlighting khi có lỗi
- ✅ Form reset sau khi submit thành công

### 📄 Pages & Components

#### **Home Page**

- Welcome badge
- Hero section với thông tin cá nhân
- Call-to-action buttons
- Statistics cards (Projects, Experience, Satisfaction)
- Responsive design

#### **Resume Page**

- Timeline view cho work experience
- Education section
- Contact information cards
- Download PDF button
- Animate on scroll effects

#### **Skills Page**

- Organized by categories (Frontend, Backend, Tools, Soft Skills)
- Progress bars cho skill proficiency level
- Skill level indicators (Expert, Advanced, Intermediate)
- Hover effects with lift animation
- Page load animations (fade-in effect)
- Staggered category animations with delays
- Smooth skill card animations on load

#### **Projects Page**

- Project cards with images
- Category filtering
- Search functionality
- Project details (description, technologies)
- Links to projects

#### **Contact Page**

- Contact form với validation
- Social media links
- Loading state với spinner
- Success/Error notifications
- Form data persistence

### 🎯 UI/UX Features

- ✅ Responsive design (Mobile, Tablet, Desktop)
- ✅ Dark mode with gradient background
- ✅ Consistent color scheme (#00c2c2, #121212, #1c1c1c)
- ✅ Playfair Display font cho typography
- ✅ Smooth hover transitions
- ✅ Loading spinner animations
- ✅ Toast notifications (Sonner)
- ✅ Custom error messages

### � Responsive Design Optimization

**Website bắt buộc hiển thị tốt trên: Mobile < 768px, Tablet 768px-1024px**

#### Mobile (< 768px)

- ✅ Compact header với reduced padding (0.75rem 1.5rem)
- ✅ Navigation spacing optimized for touch (gap: 0.5rem)
- ✅ Typography scaling: 3rem → 1.75rem (headings)
- ✅ Single column layouts cho tất cả components
- ✅ Touch-friendly buttons với larger tap targets
- ✅ Optimized spacing và gaps cho mobile screens
- ✅ Form inputs 100% width trên mobile
- ✅ Project/skills grid: 1 column layout
- ✅ Footer: Single column layout

#### Tablet (768px - 1024px)

- ✅ Medium padding (0.75rem - 1.75rem)
- ✅ Navigation spacing balanced (gap: 1.25rem)
- ✅ Typography scaling: 3rem → 2rem (headings)
- ✅ 2-column grids cho projects và skills
- ✅ Container padding adjusted (1.75rem - 2rem)
- ✅ Resume timeline optimization
- ✅ Search/filter buttons responsive sizing

#### Desktop (≥ 1024px)

- ✅ Full padding (1rem - 4rem)
- ✅ Wide navigation spacing (gap: 2rem)
- ✅ Maximum typography sizes (3rem - 3.75rem)
- ✅ Multi-column layouts (2-3 columns)
- ✅ Optimal spacing cho professional appearance

**CSS Breakpoints:**

```css
/* Tablet & Desktop */
@media (min-width: 1024px) {
  /* Desktop */
  /* Full size, wider spacing, max typography */
}

@media (max-width: 1024px) {
  /* Tablet start adjusting */
  /* Medium padding, font reduction */
}

@media (max-width: 768px) {
  /* Mobile optimization */
  /* Compact padding, touch-friendly, single column */
}
```

**Key Files Updated:**

- `src/components/Header.css` - Responsive navigation
- `src/components/Footer.css` - Flexible footer layout
- `src/pages/Home.css` - Hero section responsive
- `src/pages/Resume.css` - Timeline optimization
- `src/pages/Projects.css` - Grid layout responsive
- `src/pages/Skills.css` - Category responsive
- `src/pages/Contact.css` - Form responsive

### �🔧 Developer Features

- ✅ Hot Module Replacement (HMR) với Vite
- ✅ ESLint configuration (0 errors)
- ✅ Component-based architecture
- ✅ Reusable CSS modules
- ✅ Clean code structure
- ✅ Centralized form constants (`src/constants.js`)
- ✅ Form validation messages extracted to constants
- ✅ Inline error handling (no alert popups)

## 📁 Folder Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Header.css
│   ├── Footer.jsx
│   ├── Footer.css
│   └── ScrollToTop.jsx
├── pages/
│   ├── Home.jsx / Home.css
│   ├── Resume.jsx / Resume.css
│   ├── Skills.jsx / Skills.css
│   ├── Projects.jsx / Projects.css
│   ├── Contact.jsx / Contact.css
│   └── NotFound.jsx
├── data/
│   ├── projects.json
│   └── skills.json
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## 🌟 Highlights

- 🎬 Smooth animations on every interaction
- 📱 Fully responsive design
- 🎨 Modern UI with gradient backgrounds
- ⚡ Fast performance with Vite
- 🔐 Form validation with Zod
- 🎯 SEO-friendly structure
- ♿ Accessible components

## 👨‍💻 Author

**Nông Vay Hội** - Full-Stack Developer
