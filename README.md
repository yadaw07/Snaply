<div align="center">

# 📸 Snaply

### Connect instantly. Share seamlessly.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Appwrite](https://img.shields.io/badge/Appwrite-Cloud-FD366E?style=flat-square&logo=appwrite&logoColor=white)](https://appwrite.io/)
[![TanStack Query](https://img.shields.io/badge/TanStack_Query-v5-FF4154?style=flat-square&logo=reactquery&logoColor=white)](https://tanstack.com/query)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://snaply-lime.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](./LICENSE)

**[Live Demo](https://snaply-lime.vercel.app/) · [Report a Bug](https://github.com/yadawprodev/Snaply/issues) · [Request a Feature](https://github.com/yadawprodev/Snaply/issues)**

</div>

---

## 📖 About the Project

Snaply is a modern, fast, and intuitive social media platform built for next-gen connection. Designed with a focus on a sleek user experience, Snaply lets users share moments, discover content, and interact with others — all in a clean, responsive interface.

Whether you're sharing your latest photo, exploring trending posts, or managing your profile, Snaply offers a smooth and delightful experience powered by a robust, scalable backend.

> Built as a full-stack passion project to demonstrate real-world application architecture, modern React patterns, and cloud-native backend integration.

---

## Live Demo

🔗 https://snaply-lime.vercel.app

---

## ✨ Key Features

- 🖼️ **Rich Media Sharing** — Upload and share photos with captions, tags, and location data
- ❤️ **Real-time Interactions** — Like, save, and engage with posts instantly
- 🔍 **Explore & Discover** — Browse trending posts and search for content and users
- 👤 **User Profiles** — Customizable profiles with bio, avatar, and post history
- 🔐 **Secure Authentication** — Email/password auth with protected routes and session management
- ♾️ **Infinite Scroll** — Seamless feed browsing with cursor-based pagination
- ✏️ **Full Post Management** — Create, edit, and delete your own posts
- 📱 **Fully Responsive** — Optimized for desktop, tablet, and mobile
- 🌑 **Dark Mode UI** — A polished dark-first design built with Tailwind CSS

---

## 🛠️ Tech Stack

| Layer                      | Technology                                    |
| -------------------------- | --------------------------------------------- |
| **Frontend**               | React 19, TypeScript, Tailwind CSS, shadcn/ui |
| **Routing**                | React Router v7                               |
| **State Management**       | Zustand                                       |
| **Server State / Caching** | TanStack Query (React Query v5)               |
| **Backend / BaaS**         | Appwrite Cloud (Auth, Database, Storage)      |
| **Form Handling**          | React Hook Form, Zod                          |
| **Notifications**          | Sonner                                        |
| **Deployment**             | Vercel                                        |

---

## 📸 Screenshots

---

## 📸 Screenshots

<table>
<tr>
<td align="center"><strong>Home Feed</strong></td>
<td align="center"><strong>Explore</strong></td>
</tr>
<tr>
<td><img src="https://raw.githubusercontent.com/yadawprodev/Snaply/main/public/assets/images/Home-feed.jpeg" alt="Home Feed" width="100%"></td>
<td><img src="https://raw.githubusercontent.com/yadawprodev/Snaply/main/public/assets/images/Explore.jpeg" alt="Explore" width="100%"></td>
</tr>

<tr>
<td align="center"><strong>Profile</strong></td>
<td align="center"><strong>Sign Up</strong></td>
</tr>
<tr>
<td><img src="https://raw.githubusercontent.com/yadawprodev/Snaply/main/public/assets/images/Profile.jpeg" alt="Profile" width="100%"></td>
<td><img src="https://raw.githubusercontent.com/yadawprodev/Snaply/main/public/assets/images/Sign-up.jpeg" alt="Sign Up" width="100%"></td>
</tr>
</table>
---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- An [Appwrite Cloud](https://cloud.appwrite.io/) account and project

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yadawprodev/Snaply.git
cd snaply
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

Create a `.env.local` file in the root of the project and add the following:

```env
VITE_APPWRITE_URL=https://fra.cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_STORAGE_ID=your_storage_bucket_id
VITE_APPWRITE_USER_COLLECTION_ID=your_user_collection_id
VITE_APPWRITE_POST_COLLECTION_ID=your_post_collection_id
VITE_APPWRITE_SAVES_COLLECTION_ID=your_saves_collection_id
```

> ⚠️ Never commit your `.env.local` file. It is already included in `.gitignore`.

4. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

---

## 🤝 Contributing

Contributions are welcome and appreciated! Here's how to get involved:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/your-feature-name`
3. **Commit** your changes: `git commit -m 'feat: add your feature'`
4. **Push** to your branch: `git push origin feature/your-feature-name`
5. **Open** a Pull Request

Please make sure your code follows the existing style and that all linting passes before submitting. For major changes, open an issue first to discuss what you'd like to change.

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](./LICENSE) for more information.

---

## 📬 Contact

**Yadiel Tesfaye** — yadawprodev@gmail.com

GitHub: [https://github.com/yadawprodev]

Project Link: [https://github.com/yadawprodev/Snaply]

---

<div align="center">
  <sub>Built by <a href="https://github.com/yadawprodev">Yadiel Tesfaye</a></sub>
</div>
