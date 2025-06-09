# Modern Developer Portfolio Website Named as MYSELF

A stunning, interactive portfolio website built with modern web technologies featuring 3D animations, smooth transitions, and a contact form integration.

## 🚀 Tech Stack

- **Frontend:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS + Framer Motion
- **3D Graphics:** Three.js + React Three Fiber + Drei
- **Contact Form:** EmailJS
- **Icons:** Lucide React
- **Notifications:** Sonner
- **Animations:** Framer Motion + React Intersection Observer

## ✨ Features

- 🎨 **Interactive 3D Backgrounds** - Stunning Three.js animations
- 🌙 **Dark/Light Theme** - Toggle between themes
- 📱 **Fully Responsive** - Works on all devices
- ⚡ **Smooth Animations** - Framer Motion powered transitions
- 📧 **Contact Form** - Direct email integration with EmailJS
- 🎯 **Intersection Observer** - Animations trigger on scroll
- 🔥 **Modern Design** - Clean, professional interface

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 📧 EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Add your email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{subject}}`
   - `{{message}}`
4. Get your Service ID, Template ID, and Public Key
5. Add them to your `.env` file

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push



## 📁 Project Structure

```
├── src/
│   ├── components/         # React components
│   │   ├── sections/      # Page sections (Hero, About, Contact, etc.)
│   │   └── ui/            # Reusable UI components
│   ├── contexts/          # React contexts (Theme, etc.)
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions
│   ├── styles/            # CSS files
│   └── assets/            # Images, icons, etc.
├── public/                # Static assets
├── package.json
└── README.md
```

## 🎯 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Theme Colors
Update colors in `tailwind.config.js` or your CSS variables.

### 3D Backgrounds
Modify Three.js scenes in the components using React Three Fiber.

### Contact Form
Customize the contact form template in your EmailJS dashboard.

### Animations
Adjust Framer Motion animations in component files.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Three.js](https://threejs.org/) for 3D graphics
- [Framer Motion](https://www.framer.com/motion/) for animations
- [EmailJS](https://www.emailjs.com/) for contact form functionality
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) for React Three.js integration

## 📞 Contact

Your Name - [your.email@example.com](mailto:leelasurendravasamsetti@gmail.com)

Project Link: [https://github.com/yourusername/your-portfolio](https://github.com/surendra-vasamsetti/myself-portfolio.git)

Live Demo: [https://yourportfolio.vercel.app](https://yourportfolio.vercel.app)