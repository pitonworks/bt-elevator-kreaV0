# BT Elevator - Modern Elevator Company Website

A modern, responsive website for an elevator manufacturing and electronics company that produces elevator control cards, drivers, software, and electronic systems.

## Tech Stack

- **Frontend**: Next.js 14 (App Router)
- **Database**: Supabase
- **Deployment**: Vercel
- **UI Framework**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Validation**: Zod

## Key Features

### 1. Homepage
   - Hero section with dynamic animations
   - Product categories showcase
   - Company statistics
   - Featured projects slider
   - Client testimonials
   - News/Blog section

### 2. Products Section
   - Elevator control systems
   - Electronic cards
   - Software solutions
   - Drivers and components
   - Detailed product pages with specifications

### 3. Services
   - Installation
   - Maintenance
   - Modernization
   - Consulting
   - Technical support

### 4. Technical Documentation
   - Product manuals
   - Technical specifications
   - Installation guides
   - Software documentation

### 5. Contact & Support
   - Contact form
   - Technical support request system
   - Office locations
   - Dealer network map

## Database Structure (Supabase)

```sql
-- Products
CREATE TABLE products (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  description TEXT,
  specifications JSONB,
  images TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Projects
CREATE TABLE projects (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  images TEXT[],
  completion_date DATE,
  location VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Technical Documents
CREATE TABLE technical_documents (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  file_url TEXT NOT NULL,
  product_id UUID REFERENCES products(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Support Requests
CREATE TABLE support_requests (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);
```

## Project Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file with your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Folder Structure

```
app/
├── (auth)/
│   ├── login/
│   └── register/
├── products/
├── services/
├── projects/
├── technical-docs/
├── contact/
└── support/
components/
├── ui/
├── layout/
└── sections/
lib/
├── supabase/
└── utils/
types/
```

## Development Workflow

1. Set up project structure and dependencies
2. Implement authentication with Supabase
3. Create reusable UI components
4. Develop main pages and features
5. Add animations and interactions
6. Implement contact and support forms
7. Add SEO optimization
8. Test responsiveness and performance
9. Deploy to Vercel

## Deployment

1. Connect repository to Vercel
2. Configure environment variables
3. Set up custom domain
4. Configure SSL certificate
5. Set up automatic deployments
#   b t - e l e v a t o r - k r e a V 0  
 