# Personal Portfolio Template

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. Perfect for developers, designers, and professionals to showcase their work.

## ✨ Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile
- **Easy Customization**: Simple to modify content and styling
- **Fast Performance**: Optimized with Vite and modern build tools
- **SEO Ready**: Meta tags and social media previews included
- **CV Request System**: Visitors can request your CV via email form (Serverless)

## 🚀 Quick Start

### 1. Fork & Clone
```bash
# Fork this repository first, then:
git clone https://github.com/YOUR_USERNAME/replitportfolio.git
cd replitportfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Email (Optional)
To enable CV request email notifications, create a `.env` file in the root directory:

```bash
# Email Configuration
# For Gmail, you'll need to use an App Password instead of your regular password
# Generate an App Password: https://myaccount.google.com/apppasswords
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

**Note**: If email is not configured, CV requests will still be logged to the console but no emails will be sent.

### 4. Start Development Server
```bash
npm run dev
```

Open [http://localhost:5000](http://localhost:5000) to see your portfolio!

## 🎨 Customization Guide

### Content Updates
- **Personal Info**: Update `client/src/components/hero.tsx` for your name, roles, and photo
- **Education**: Edit `client/src/components/education.tsx` with your schools and degrees
- **Experience**: Modify `client/src/components/experience.tsx` with your work history
- **Projects**: Update `client/src/components/projects.tsx` with your projects
- **Skills**: Customize `client/src/components/skills.tsx` with your technical skills
- **Certifications**: Edit `client/src/components/certifications.tsx` with your credentials
- **Contact**: Update `client/src/components/contact.tsx` with your contact info

### CV Request Configuration
- **Email Recipient**: Update the email address in `netlify/functions/request-cv.js` (line 47) to receive CV request notifications
- **Email Service**: Modify the email service configuration in `netlify/functions/request-cv.js` if using a different provider than Gmail

### Images & Assets
- Add your profile photo and project images to `client/public/`
- Update logos and icons as needed
- Replace the preview image for social media sharing

### Styling
- Colors and themes can be customized in `tailwind.config.ts`
- Component styling uses Tailwind CSS classes
- Animations and transitions can be modified in individual components

## 📦 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Backend**: Netlify Functions (Serverless)
- **Email**: Nodemailer for CV request notifications
- **Deployment**: Ready for Netlify (Free hosting)

## 🌐 Deployment

### Netlify (Recommended - FREE!)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist/public`
4. Add environment variables for email configuration:
   - `EMAIL_USER`: your-email@gmail.com
   - `EMAIL_PASS`: your-app-password
5. Deploy!

**Benefits of Netlify Functions:**
- ✅ **Completely FREE** (125,000 function calls/month)
- ✅ **No server costs**
- ✅ **Automatic scaling**
- ✅ **Global CDN**
- ✅ **SSL certificates included**

### Vercel
1. Import your repository to Vercel
2. Vercel will auto-detect the build settings
3. Add environment variables for email configuration if needed
4. Deploy!

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

This is primarily a template for personal portfolios. Feel free to:
- Fork and customize for your own use
- Report bugs or suggest improvements
- Share your customized version with the community

## 🙏 Acknowledgments

- Built with [shadcn/ui](https://ui.shadcn.com/) components
- Icons from [Lucide React](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

**Happy coding! 🎉** 