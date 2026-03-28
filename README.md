# FIBS Driving and Technical College Website

A modern, responsive, and professional website for FIBS Driving and Technical College built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

### Frontend
- **Modern UI/UX Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Interactive Components**: Hover effects, transitions, and micro-interactions
- **SEO Optimized**: Meta tags, sitemap, robots.txt, and structured data
- **Fast Loading**: Optimized images and lazy loading
- **Accessibility**: WCAG compliant with semantic HTML

### Pages
1. **Home Page**: Hero section, featured courses, testimonials, news preview
2. **About Page**: College history, vision & mission, facilities, director's message
3. **Courses Page**: Department-wise course listings with search and filtering
4. **Online Application**: Complete application form with file upload
5. **Gallery Page**: Image grid with modal preview functionality
6. **News & Announcements**: Dynamic news feed with admin posting capability
7. **Contact Page**: Google Maps integration, contact form, location details

### Admin Dashboard
- **Authentication**: Secure login system
- **Course Management**: Add, edit, delete courses
- **Application Management**: View and manage student applications
- **Announcement Management**: Post and manage news/announcements
- **Gallery Management**: Upload and manage gallery images

### Backend
- **RESTful APIs**: Complete CRUD operations for all entities
- **Database Integration**: PostgreSQL with Sequelize ORM
- **File Upload**: Secure file handling for applications and gallery
- **Form Validation**: Client-side and server-side validation
- **Error Handling**: Comprehensive error handling and user feedback

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Backend
- **Runtime**: Node.js
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Authentication**: bcryptjs, jsonwebtoken
- **File Upload**: Multer

## 📋 Prerequisites

- Node.js 18+ 
- PostgreSQL 12+
- npm or yarn

## 🚀 Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd fibs-college
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env.local` file with your configuration:
```env
# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=fibs_college

# NextAuth Configuration
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000

# File Upload Configuration
UPLOAD_DIR=public/uploads
```

4. **Set up the database**
```bash
# Create database in PostgreSQL
createdb fibs_college

# The application will automatically sync tables on first run
```

5. **Run the development server**
```bash
npm run dev
```

6. **Open your browser**
```
http://localhost:3000
```

## 🔐 Admin Access

**Default Credentials:**
- Username: `admin`
- Password: `admin123`

**Access URL:** `http://localhost:3000/admin`

## 📱 API Endpoints

### Courses
- `GET /api/courses` - Get all courses
- `POST /api/courses` - Create new course
- `GET /api/courses/[id]` - Get single course
- `PUT /api/courses/[id]` - Update course
- `DELETE /api/courses/[id]` - Delete course

### Applications
- `GET /api/applications` - Get all applications
- `POST /api/applications` - Create new application
- `GET /api/applications/[id]` - Get single application
- `PUT /api/applications/[id]` - Update application status
- `DELETE /api/applications/[id]` - Delete application

### Announcements
- `GET /api/announcements` - Get all announcements
- `POST /api/announcements` - Create new announcement
- `GET /api/announcements/[id]` - Get single announcement
- `PUT /api/announcements/[id]` - Update announcement
- `DELETE /api/announcements/[id]` - Delete announcement

### Gallery
- `GET /api/gallery` - Get all gallery images
- `POST /api/gallery` - Upload new image
- `GET /api/gallery/[id]` - Get single image
- `PUT /api/gallery/[id]` - Update image
- `DELETE /api/gallery/[id]` - Delete image

### Contact
- `POST /api/contact` - Submit contact form

## 🎨 Customization

### Colors
The primary color scheme uses blue (`#3B82F6`) as the main brand color. You can customize colors in `tailwind.config.js`.

### Typography
The project uses the Geist font family. You can modify font settings in the layout file.

### Images
Replace placeholder images with actual college photos in the `public/images/` directory.

## 🚀 Deployment

### Environment Setup
1. Set up production database
2. Configure environment variables
3. Build the application: `npm run build`
4. Start production server: `npm start`

### Recommended Platforms
- **Vercel**: Easiest deployment for Next.js apps
- **Netlify**: Static site hosting with serverless functions
- **AWS**: Full cloud deployment
- **DigitalOcean**: Affordable cloud hosting

## 🔧 Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📊 Performance

The website is optimized for:
- **Core Web Vitals**: LCP, FID, CLS
- **Mobile Performance**: Responsive design and touch-friendly
- **SEO**: Semantic HTML and structured data
- **Speed**: Lazy loading and optimized assets

## 📞 Support

For support and questions:
- Email: info@fibscollege.ac.ke
- Phone: +254 700 123 456
- Address: Along Thika Road, Next to Garden City Mall, Nairobi, Kenya

---

**FIBS Driving and Technical College** - Empowering Futures Through Quality Education
