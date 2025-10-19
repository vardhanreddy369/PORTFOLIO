# 🌟 Sri Vardhan Reddy Gutta - Portfolio

A modern, animated portfolio website built with React, Framer Motion, and SCSS featuring glassmorphism design and smooth animations.

## ✨ Features

- 🎨 Modern glassmorphism UI design
- 🌊 Smooth animations with Framer Motion
- 📱 Fully responsive layout
- 🎯 Clean, minimalist design
- 🚀 Fast and optimized
- 💼 Sections: Hero, About, Skills, Projects, Resume, Contact

## 🛠️ Tech Stack

- **React** - UI framework
- **SCSS** - Styling with advanced features
- **Framer Motion** - Smooth animations
- **React Icons** - Icon library

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Add your resume PDF to `public/assets/Vardhan_Resume.pdf`

4. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Update Personal Information

- **Hero.jsx** - Update your name and title
- **About.jsx** - Edit your bio
- **Skills.jsx** - Add/remove skills
- **Projects.jsx** - Add your projects
- **Contact.jsx** - Update social links and email

### Theme Colors

Edit `src/styles/globals.scss`:
```scss
:root {
  --bg: #0e0e10;        // Background color
  --accent: #7f5af0;    // Accent color
  --text: #fffffe;      // Text color
  --subtext: #94a1b2;   // Secondary text
  --card-bg: rgba(255, 255, 255, 0.05); // Card background
}
```

## 🚀 Deployment

### Option 1: Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Build and deploy:
```bash
npm run build
vercel
```

3. Follow the prompts to complete deployment

### Option 2: GitHub Pages

1. Install gh-pages:
```bash
npm install gh-pages --save-dev
```

2. Update `package.json`:
```json
{
  "homepage": "https://vardhanreddy369.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

### Option 3: Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `build` folder to [Netlify Drop](https://app.netlify.com/drop)

Or connect your GitHub repo for automatic deployments.

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.jsx        # Landing section
│   ├── About.jsx       # About me section
│   ├── Skills.jsx      # Skills grid
│   ├── Projects.jsx    # Project cards
│   ├── Resume.jsx      # Resume download
│   └── Contact.jsx     # Contact & social links
├── styles/
│   ├── globals.scss    # Global styles & theme
│   └── components/
│       ├── _hero.scss
│       ├── _about.scss
│       ├── _skills.scss
│       ├── _projects.scss
│       ├── _resume.scss
│       └── _contact.scss
├── assets/             # Images, PDFs
├── App.jsx             # Main app component
└── index.js            # Entry point
```

## 🎯 Optional Enhancements

### Smooth Scrolling
```bash
npm install react-scroll
```

### Email Contact Form
```bash
npm install @emailjs/browser
```

### 3D Elements
```bash
npm install @react-three/fiber @react-three/drei three
```

## 📝 Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🤝 Connect

- 📧 Email: srivardhanreddygutta.us@gmail.com
- 💼 LinkedIn: [Sri Vardhan Reddy Gutta](https://linkedin.com/in/sri-vardhan-reddy-gutta)
- 🐙 GitHub: [@vardhanreddy369](https://github.com/vardhanreddy369)

---

Made with ❤️ by Sri Vardhan Reddy Gutta
