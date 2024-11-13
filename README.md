# Libro Master

## Introduction

**Libro Master** is Library Management System API.

## Project Description

**Libro Master** allows library members to borrow books and return to library via online and library staff to manage their books, memberships and borrowing activities.

### [Live Site](https://libro-master.vercel.app)

```base
https://libro-master.vercel.app
```

## Features

- **Borrowing System:**
  Users can borrow books from the library. The system tracks borrowed books, calculates due dates, and enables members to return books within the allowed timeframe.

- **Book Availability Checking:**
    Users can check the availability of books before placing a borrowing request, ensuring that the desired book is currently in stock..

- **Book Return:**
  Users can return borrowed books, and the system automatically calculates any overdue fees if books are returned after the due date.

- **Overdue Tracking:**
  Admins can view a list of overdue books along with details on overdue days and member information, helping the library efficiently manage overdue returns.

- **Book Management:**
  Admins can add, update, and delete book records. Each book entry includes the title, author, genre, published year, and available copies.

- **Error Handling:**
  The system includes robust error handling to provide clear messages for issues like invalid entries, unavailable books, or attempted double-checkouts.

- **Maintainable Codebase:**
  The codebase is clean, well-organized, and well-documented, following industry standards to ensure easy maintenance and future updates.

## Technology Stack

- TypeScript
- Node.js
- Express.js
- PostgreSQL
- Prisma ORM

## Installation Guideline

Follow the instructions given below to install and run the project locally.

### Prerequisites

- Node.js
- Code Editor (E.g. Visual Studio Code)

### Installation Steps

1. **Clone the Repository:**

   ```base
   git clone https://github.com/Rahad-Ullah/Libro-Master.git
   ```

2. **Open in a Code Editor:**
   Open the directory in a code editor like VS Code.
3. **Install Dependencies:**

   ```markdown
   npm install
   ```

4. **Run the project:**

   ```markdown
   npm run dev
   ```

### Configuration

1. Create a `.env` file in the root directory of the project.
2. Add these configuration variables in the `.env` file.
   Example:
   ```bash
    PORT=3000
    DATABASE_URL="your_database_url"
   ```

## Usage

Hit the APIs to get response from the server.

## Happy Coding 😎
