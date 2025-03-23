
---

# **JFSD SDP Frontend**  

## **Overview**  
This project is the **frontend** of the JFSD SDP application, built using **React and Express.js**. It provides an interactive user interface for browsing artworks, managing purchases, and integrating payments via the **Paytm Payment Gateway**.  

## **Key Features**  
✅ **Responsive UI** – Built with **ReactJS** for a smooth user experience.  
✅ **Artwork Display** – Showcases various art pieces with filtering options.  
✅ **User Authentication** – Secure login and signup.  
✅ **Payment Integration** – Paytm payment gateway for transactions.  
✅ **State Management** – Uses **reducers** (without Redux) for efficient data handling.  

## **Tech Stack**  
- **ReactJS** – Frontend framework  
- **Express.js** – Backend integration (if applicable)  
- **CSS (in JS)** – Styling without separate CSS files  
- **Paytm Payment Gateway** – Secure transactions  
- **REST APIs** – Communicates with the **Spring Boot backend**  

## **Installation & Setup**  

1️⃣ **Clone the repository:**  
```sh
git clone https://github.com/GampaRishitha/jfsd_sdp_frontend.git
cd jfsd_sdp_frontend
```
2️⃣ **Install dependencies:**  
```sh
npm install
```
3️⃣ **Run the application:**  
```sh
npm start
```

## **Project Structure**  
📂 **jfsd_sdp_frontend**  
 ├── 📁 **src** → React components & logic  
 ├── 📁 **public** → Static assets  
 ├── 📄 **package.json** → Dependencies & scripts  
 ├── 📄 **README.md** → Project documentation  
 ├── 📄 **index.js** → Entry point  
 ├── 📄 **App.js** → Main React component  
 ├── 📄 **paymentIntegration.js** → Paytm payment logic  
 ├── 📁 **pages** → Includes **Home, Signup, Signin, ArtForms, Payments**  
 └── 📁 **reducers** → State management logic  

## **How It Works**  
- **Users can browse artworks** and filter by categories.  
- **Secure authentication system** for login and signup.  
- **Payment system** integrated via Paytm API.  
- **Dynamic navigation**, including a dropdown for **ArtForms** (Medieval, Ancient, Modern).  

## **Contribution**  
Contributions are welcome! You can:  
✅ Improve UI/UX.  
✅ Optimize API calls.  
✅ Enhance state management.  

## **License**  
This project is open-source and available under the **MIT License**.  

## **Contact**  
For queries or collaboration, reach out via **GitHub Issues** or email.  

🚀 **Happy Coding!**  

---
