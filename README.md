# AI Integration Engineer Portfolio

A modern, responsive personal portfolio website showcasing expertise in AI integration, full-stack development, and cutting-edge technologies.

## 🚀 Features

- **Modern Single-Page Design**: Smooth scrolling sections with seamless navigation
- **Animated UI**: Powered by Framer Motion for engaging user experience
- **Responsive Layout**: Fully optimized for desktop, tablet, and mobile devices
- **Dark Theme**: Professional dark mode design with cyan accent colors
- **Performance Optimized**: Built with Next.js 15 and React 19

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.4
- **UI Library**: React 19.1.0
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Font**: Geist Sans & Geist Mono

## 📋 Sections

1. **Hero**: Eye-catching introduction with professional tagline
2. **Projects**: Showcase of 3 featured projects with detailed descriptions
3. **Skills**: Organized technical expertise across 4 categories
4. **About**: Background story and value proposition
5. **Contact**: Professional links and resume download

## 🎨 Design Highlights

- **Color Scheme**: Dark background with cyan/blue accent colors
- **Typography**: Clean, modern fonts with excellent readability
- **Animations**: Subtle fade-ins, hover effects, and scroll-triggered animations
- **Icons**: Consistent iconography using Lucide icons
- **Layout**: Card-based design with gradient overlays

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd su-portofolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization

### Update Personal Information

1. **Contact Details**: Edit `src/components/Contact.tsx`

   - Update email, LinkedIn, and GitHub links
   - Add your resume PDF to `/public/resume.pdf`

2. **Projects**: Edit `src/components/Projects.tsx`

   - Update project descriptions, tech stacks, and links
   - Add your live demo and GitHub repository URLs

3. **Skills**: Edit `src/components/Skills.tsx`

   - Customize skill categories and individual skills

4. **About Section**: Edit `src/components/About.tsx`

   - Update your background story and highlights

5. **Hero Section**: Edit `src/components/Hero.tsx`
   - Customize your name, title, and tagline

### Styling

- **Colors**: Modify Tailwind classes in components (e.g., `cyan-500`, `blue-500`)
- **Fonts**: Update in `src/app/layout.tsx`
- **Global Styles**: Edit `src/app/globals.css`

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📦 Project Structure

```
su-portofolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with metadata
│   │   ├── page.tsx         # Main page component
│   │   └── globals.css      # Global styles
│   └── components/
│       ├── Header.tsx       # Navigation header
│       ├── Hero.tsx         # Hero section
│       ├── Projects.tsx     # Projects showcase
│       ├── Skills.tsx       # Technical skills
│       ├── About.tsx        # About section
│       └── Contact.tsx      # Contact & footer
├── public/                  # Static assets
└── package.json            # Dependencies
```

## 🎯 Key Features to Highlight

- **RAG Implementation**: Retrieval-Augmented Generation expertise
- **LLM Fine-Tuning**: Advanced AI model customization
- **Full-Stack Development**: Next.js, React, Python, FastAPI
- **Modern DevOps**: CI/CD with GitHub Actions
- **Mathematical Foundation**: B.Sc. in Math background

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

For questions or collaboration opportunities, reach out through the contact section on the website.
