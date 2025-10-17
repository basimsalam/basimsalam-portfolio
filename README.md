
## 🧑‍💻 Basim Salam – Personal Portfolio

This is my personal portfolio website built with **React**, **Tailwind CSS**, and **Framer Motion**, showcasing my projects, skills, and experience.
It also includes a **contact form** powered by [Web3Forms](https://web3forms.com) to allow visitors to send me messages securely.

---

### 🚀 Live Demo

👉 [https://basimsalam-portfolio.vercel.app](https://basimsalam-portfolio.vercel.app)


## 🧱 Tech Stack

* ⚛️ **React (Vite)**
* 🎨 **Tailwind CSS**
* 🧩 **Framer Motion** (animations)
* ✉️ **Web3Forms API** (for email contact form)
* 🌐 **Vercel** (deployment ready)

---

## ✨ Features

✅ Responsive design – works on all screen sizes
✅ Animated scroll reveal sections
✅ Dynamic project and contact components
✅ Secure contact form using **Web3Forms API**
✅ Environment variable–based configuration (no exposed keys)



## ⚙️ Setup Instructions

### 1️⃣ Clone this repository

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create a `.env` file in the project root

Add your Web3Forms access key:

```
VITE_WEB3FORMS_ACCESS_KEY=your_real_access_key_here
```

> ⚠️ **Important:**
> Do **not** commit your `.env` file. Make sure `.env` is included in your `.gitignore` (it already is).

### 4️⃣ Run locally

```bash
npm run dev
```

Then open the link shown in your terminal (usually `http://localhost:5173`).

---

## ☁️ Deployment Guide

### 🟦 Vercel

1. Push your repo to GitHub.
2. Go to [Vercel](https://vercel.com) → **Import Project**.
3. Under **Environment Variables**, add:

   ```
   VITE_WEB3FORMS_ACCESS_KEY=your_real_access_key_here
   ```
4. Deploy 🎉

## 💌 Contact Form Configuration

This portfolio uses **Web3Forms** for sending emails directly from the frontend.

### To get your key:

1. Visit [https://web3forms.com](https://web3forms.com)
2. Click **“Get Started for Free”**
3. Enter your email → Copy your **Access Key**
4. Add it to your `.env` and hosting environment

That’s it! Your form will send emails to the address you registered with Web3Forms.

---

## 🧑‍🎨 Author

**Basim Salam**
📍 Riyadh, Saudi Arabia
📧 [basimnnas@gmail.com](mailto:basimnnas@gmail.com)
🌐 [LinkedIn](https://www.linkedin.com/in/basimsalam/) | [GitHub](https://github.com/basimsalam) | [Instagram](https://instagram.com/basim_salam)
