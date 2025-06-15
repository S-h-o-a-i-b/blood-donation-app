# 🩸 BloodBridge - Donation Platform



> A  blood donation management system built with React Vite

## ✨ Key Features
- Donor registration with validation
- Real-time blood request tracking
- Admin dashboard
- Responsive mobile-first design
- Secure data handling

## 🛠️ Tech Stack
| Category        | Technologies                 |
|-----------------|------------------------------|
| Framework       | React 18                     |
| Build Tool      | Vite                         |
| Styling         | Bootstrap 5.3.6 + Custom CSS |
| Routing         | React Router 6               |
| UI Components   | React Bootstrap              |

## 🎨 Design Team
<div align="center">

| Designer | ID | E-mail |
|----------|----|------|
|**Md. Shoaib** | 21701032 |shoaibcsecu@gmail.com|
|**Kazi Naiyem Hasan** | 21701010 | kazinaiyemcsecu@gmail.com |

</div>

</div>

## 📂 Project Structure
```bash
bloodbridge/
├── public/               # Static assets
│   ├── images/           # Global images
│   └── favicon.ico       # Site icon
│
├── src/
│   ├── assets/           # App assets
│   │   └── illustrations # Custom graphics
│   │
│   ├── components/       # Reusable components
│   │   ├── auth/         # Auth components
│   │   │   ├── LoginForm.jsx
│   │   │   └── SignupCard.jsx
│   │   │
│   │   ├── donor/        # Donor components
│   │   │   ├── DonorCard.jsx
│   │   │   └── BloodTypeTag.jsx
│   │   │
│   │   ├── ui/           # UI elements
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Alert.jsx
│   │   │
│   │   └── index.js      # Component exports
│   │
│   ├── contexts/         # State management
│   │   └── AuthContext.jsx
│   │
│   ├── hooks/            # Custom hooks
│   │   ├── useAuth.js
│   │   └── useForm.js
│   │
│   ├── pages/            # Application views
│   │   ├── auth/         # Auth pages
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   │
│   │   ├── donor/        # Donor pages
│   │   │   ├── Dashboard.jsx
│   │   │   └── Profile.jsx
│   │   │
│   │   ├── public/       # Public pages
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   └── Contact.jsx
│   │   │
│   │   └── request/      # Request pages
│   │       ├── Create.jsx
│   │       └── List.jsx
│   │
│   ├── styles/           # Global styles
│   │   ├── base/         # Base styles
│   │   │   ├── _reset.css
│   │   │   └── _typography.css
│   │   │
│   │   ├── components/   # Component styles
│   │   ├── pages/        # Page-specific styles
│   │   └── main.css      # Main style file
│   │
│   ├── utils/            # Utilities
│   │   ├── api.js        # API calls
│   │   └── validators.js # Form validation
│   │
│   ├── App.jsx           # Root component
│   └── main.jsx          # Entry point
│
├── .gitignore            # Git ignore rules
├── package.json          # Project dependencies
├── vite.config.js        # Build configuration
└── README.md             # Project documentation

</div>

## 📸 Screenshots
<div align="center">
  <img src="blood-donation-app/assets/screenshots/home.png" width="50% />
  <img src="blood-donation-app/assets/screenshots/donate.png" width="50%" /> 
  <img src="blood-donation-app/assets/screenshots/request.png" width="50%" />
   <img src="blood-donation-app/assets/screenshots/about.png" width="50%" />
</div>

## 🚀 Quick Start
```bash
# Clone repository
git clone https://github.com/yourrepo/bloodbridge.git

# Install dependencies
npm install

# Start development server
npm run dev

