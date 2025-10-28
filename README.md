# College Club Portal

A full-stack web application designed for college students to discover, explore, and register for various clubs available on campus. Includes an admin panel for managing registrations.



## 🌟 Features

* **Club Discovery:** Browse a list of all college clubs with brief descriptions and images.
* **Detailed View:** Click on a club to view its full details, including origin date, detailed description, past events, and event images.
* **Student Registration:** Students can register for clubs via an integrated form.
* **Admin Dashboard:** Secure login for administrators to view all student registrations across all clubs.
* **Data Management:** Uses MongoDB to store club information and student registrations.
* **Separate Views:** Clear distinction between the public student portal and the protected admin area.

---

## 💻 Tech Stack

* **Backend:** Java, Spring Boot, Spring Data MongoDB, Spring Security
* **Frontend:** React.js, HTML, CSS (using CSS Modules), Axios
* **Database:** MongoDB
* **Build Tools:** Maven (Backend), Node.js/npm (Frontend)

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

* **Java Development Kit (JDK):** Version 17 or higher.
* **Apache Maven:** For building the backend.
* **Node.js and npm:** For building and running the frontend.
* **MongoDB:** A running instance (local installation or MongoDB Atlas).
* **Git:** For cloning the repository.

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

```bash
git clone [https://github.com/PrasannaPichu/college-club-portal.git]
(https://github.com/PrasannaPichu/college-club-portal.git)
cd college-club-portal


2. Backend Setup (clubportal-api)
Navigate:

Bash

cd clubportal-api
Configure Database:

Open src/main/resources/application.properties.

Ensure the spring.data.mongodb.uri points to your MongoDB instance (e.g., mongodb://localhost:27017/clubdb).

Ensure server.port=8081 (or your chosen port).

Build & Run:

Bash

mvn spring-boot:run
The backend server should start on http://localhost:8081. The first time it runs, it will create a default admin user (admin/admin123).

3. Frontend Setup (client)
Navigate: Open a new terminal and go to the client directory:

Bash

cd ../client 
(Make sure you are back in the main clubportal folder first if needed)

Install Dependencies:

Bash

npm install
Configure API URL:

Open src/services/api.js.

Verify that the baseURL matches your backend port (e.g., http://localhost:8081/api).

Run the Frontend:

Bash

npm start
The React application will open automatically in your browser at http://localhost:3000.

4. Database Setup (Optional Data)
To see clubs on the homepage, you need to add data to your MongoDB database.

Use MongoDB Compass or the MongoDB Shell.

Connect to your database (e.g., clubdb).

Create a collection named clubs.

Import the sample data from a clubs.json file (refer to project setup documentation or create your own club documents).

📖 Usage
Student View: Access http://localhost:3000 to browse clubs and register.

Admin Login: Click the "Login" button, select the "Admin" tab, and use the credentials:

Username: admin

Password: admin123

Admin Dashboard: After successful login, you will be redirected to /admin/dashboard to view all registrations.

✨ Contributing
Contributions are welcome! Please feel free to fork the repository, make changes, and submit a pull request.

