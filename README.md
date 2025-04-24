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

🔍 4. Test GTM events in the browser
Open Developer Tools (F12) > Console tab, and try the following:

![landing_page](https://github.com/user-attachments/assets/9643ae6b-df72-4b67-b470-8056c4481cfb)

✅ Test custom event:
Click the “Request Demo” button.


// You should see this object in the console if you log dataLayer
```js
window.dataLayer.at(-1) 
// Should return something like: { event: "request_demo_clicked" }
```
✅ Test page view event:
If you navigate between pages (add another page if needed), check that:

```js
window.dataLayer.at(-1) 
// Should return something like: { event: "page_view", page_path: "/about" }
```
![before_after_click](https://github.com/user-attachments/assets/e15a6312-9866-4d48-8b8e-8f9dcbbe6398)


## 📝 Notes

- Replace `GTM-XXXXXXX` in `index.js` with your actual GTM container ID.
- This app uses a minimal setup for demonstration purposes and can be extended as needed.

---

Built for educational and testing use with Google Tag Manager.

---

Assisted by ChaptGPT and validated by Steven Petrov 04/24/2025
