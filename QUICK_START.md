# 🚀 Quick Start Guide

## ✅ Your Portfolio is Ready!

Your portfolio is now running at **http://localhost:3000**

## 📝 Next Steps

### 1. Add Your Resume
- Place your resume PDF in `public/assets/Gutta_SriVardhanReddy.pdf`
- Or update the path in `src/components/Resume.jsx`

### 2. Customize Content
- Update your projects in `src/components/Projects.jsx`
- Edit skills in `src/components/Skills.jsx`
- Modify about section in `src/components/About.jsx`
- Update contact links in `src/components/Contact.jsx`

### 3. Add Images (Optional)
- Place images in `src/assets/` or `public/assets/`
- Import and use them in your components

### 4. Test Responsiveness
- Open DevTools (F12 or Cmd+Option+I)
- Toggle device toolbar (Cmd+Shift+M)
- Test on different screen sizes

## 🎨 Style Customization

### Change Colors
Edit `src/styles/globals.scss`:
```scss
:root {
  --bg: #0e0e10;        // Your background
  --accent: #7f5af0;    // Your brand color
  --text: #fffffe;      // Main text
}
```

### Adjust Component Styles
Each component has its own SCSS file in `src/styles/components/`
- `_hero.scss` - Landing section
- `_about.scss` - About section
- `_skills.scss` - Skills grid
- `_projects.scss` - Project cards
- `_resume.scss` - Resume section
- `_contact.scss` - Contact section

## 🚀 Deploy Your Portfolio

### Vercel (Easiest)
```bash
npm run build
npm install -g vercel
vercel
```

### GitHub Pages
```bash
npm install gh-pages --save-dev
npm run deploy
```

## 🐛 Common Issues

### Port already in use
```bash
# Kill the process on port 3000
lsof -ti:3000 | xargs kill -9
npm start
```

### Module not found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
npm start
```

### Build errors
```bash
# Clear cache and rebuild
rm -rf node_modules/.cache
npm start
```

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Framer Motion](https://www.framer.com/motion/)
- [SCSS Guide](https://sass-lang.com/guide)

## 💡 Tips

1. **Use version control**: Initialize git if you haven't
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio setup"
   ```

2. **Test before deploying**:
   ```bash
   npm run build
   # Check the build folder works correctly
   ```

3. **Optimize images**: Use compressed images for faster loading

4. **Add analytics**: Consider Google Analytics or Vercel Analytics

## 🎯 Enhancement Ideas

- Add a smooth scroll library
- Implement dark/light theme toggle
- Add a blog section
- Include project live demos
- Add animation on scroll
- Implement form validation for contact

---

Need help? Check `DEPLOYMENT_GUIDE.md` for detailed instructions!
