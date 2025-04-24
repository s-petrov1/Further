# Next.js GTM Demo

This is a minimal Next.js application demonstrating how to integrate **Google Tag Manager (GTM)**, track custom events, and monitor page views using route changes.

## 🔧 Features

- **Google Tag Manager Integration**:
  - GTM script injected properly using `next/script` for SSR compatibility.
  - `dataLayer` initialized correctly on load.

- **Custom Event Tracking**:
  - A `Request Demo` button on the homepage triggers a custom event (`request_demo_clicked`) that is pushed to the `dataLayer`.

- **Page View Tracking**:
  - Listens to Next.js router events.
  - On every route change, a `page_view` event is pushed to the `dataLayer`.

## 📁 Structure

- `pages/_app.js`: Loads global styles.
- `pages/index.js`: Main page with GTM setup, a button to trigger an event, and route change tracking logic.
- `styles/globals.css`: Basic styling.
- `next.config.js`: Standard config file.
- `package.json`: Lists required dependencies and scripts.

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open the app**:
   Visit [http://localhost:3000](http://localhost:3000)

## 📝 Notes

- Replace `GTM-XXXXXXX` in `index.js` with your actual GTM container ID.
- This app uses a minimal setup for demonstration purposes and can be extended as needed.

---

Built for educational and testing use with Google Tag Manager.

---

Assisted by ChaptGPT and validated by Steven Petrov 04/24/2025
