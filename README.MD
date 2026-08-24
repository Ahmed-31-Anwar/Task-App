# Task App

A simple full-stack task management application built with Python, Flask, HTML, CSS, JavaScript, SQLite, and Neon PostgreSQL.

---

## About the Project 

This project was developed as a practical introduction to full-stack web development, version control and deployment.

The application brings together a frontend, backend, and database to create a complete web application. The frontend is built using HTML, CSS, and JavaScript, while Python and Flask handle the backend logic. SQLite is used during local development, while Neon PostgreSQL is used as the persistent database for the deployed application.

The main focus of the project was to understand how these different technologies work together as one application rather than learning each component separately.

Alongside building the application, I also worked through a basic professional development workflow using Git and GitHub. This included creating and managing a repository, making commits, working with branches, pushing and pulling changes, creating Pull Requests, reviewing changes, and merging a feature back into the main branch.

The project was developed and tested locally using PyCharm, with GitHub used for version control and Vercel used for deployment. Neon PostgreSQL is used as the persistent database for the deployed application.

---

## Project Goals

The project was created with the following goals:
- Build a functional full-stack web application.
- Understand how the frontend, backend, and database work together.
- Learn how Flask is used to build the backend.
- Use SQLite for local development and Neon PostgreSQL for the deployed application.
- Organize the project using a clear folder structure
- Learn the basics of Git version control
- Understand how GitHub is used to manage the repository
- Practice working with branches and feature-based development.
- Understand how commits are used to track changes.
- Learn how Pull Requests are created and merged.
- Understand how changes are synchronized between the local project and GitHub.
- Integrate the GitHub repository with Vercel.
- Understand the GitHub to Vercel deployment workflow.
- Practise working with a deployment ready project.

---

## Features

The application provides a simple interface for managing tasks while demonstrating how a frontend, backend, and database can work together.

### Application Features
- Create and manage tasks through the web interface.
- Display task information within the application.
- Store task data using SQLite during local development and Neon PostgreSQL when deployed.
- Process application requests through Flask.
- Use JavaScript for frontend interactions.
- Run the application locally through Flask. 

### Development Workflow
The project also demonstrates the development process used to manage the application.

- Local development using PyCharm.
- Git repository and version control.
- GitHub remote repository 
- Commit based development.
- Feature branches
- Push and pull operations.
- Pull Requests.
- Pull Request review and merging.
- Synchronization between the local and remote repositories.
- GitHub and Vercel integration
- Deployment workflow through Vercel.


---

## Technology Stack

| Technology | Purpose                             |
|------------|-------------------------------------|
| Python     | Backend programming language        |
| Flask      | Web framework used for the backend  |
| HTML       | Structure of the web interface      |
| CSS        | Styling and layout of the interface |
| JavaScript | Frontend interactions and behaviour |
| SQLite     | Local development database          |
| Neon PostgreSQL | Persistent database for deployment |
| Git        | Version control                     |
| GitHub     | Remote repository and collaboration |
| PyCharm    | Development environment             |
| Vercel     | Deployment platform                 |


---

## Project Structure

The project is organized into separate files and directories so that the frontend, backend, database, and supporting files remain easy to manage.

**The main structure of the project is:**

```text
Task App/
│
├─ main.py
│
├─ static/
│   ├─ style.css
│   └─ script.js
│
├─ templates/
│   └─ Index.html
│ 
├─ instance/
│   └─ tasks.db
│ 
├─ .gitignore
│
└─ README.md
```

### File and Directory Breakdown

### main.py

The main Python file for the application. It contains the Flask application, backend routes, application logic, and the connection between the web interface and the database.

### templates/

Contains the HTML templates used by Flask to build the application's web pages.

### templates/index.html

The main HTML page displayed to the user. It provides the structure of the task management interface.


### static/

Contains the CSS and JavaScript files used by the frontend.

### static/style.css

Contains the styling and layout rules that control the appearance of the application.

### static/script.js

Contains the JavaScript used to handle frontend interactions and communicate with the backend when required.

### instance/

Contains application specific files and local data used by the project.

### instance/tasks.db

The local SQLite database used during development to store task information. The deployed application uses Neon PostgreSQL as its persistent database.

### .gitignore

Contains rules that tell Git which files and directories should not be included in version control.

### README.md

The main documentation file for the project. It explains the application's purpose, structure, setup process, development workflow, and deployment process.


---

## How the Application Works

The application is made up of three main parts:

### Frontend

The frontend is the part of the application that the user sees and interacts with.

HTML provides the structure of the webpage, CSS controls its appearance and layout, and JavaScript provides interactive behaviour.

### Backend

The backend is built using Python and Flask.

Flask receives requests from the frontend, processes the required application logic, communicates with the database when necessary, and returns the appropriate response.

### Database

SQLite is used to store task information

The database allows the application to keep task data available instead of relying only on temporary information within the browser.


### Application Flow

The basic flow of the application can be represented as:

```text
User
 │
 ▼
HTML / CSS / JavaScript
 │
 ▼
Flask Backend
 │
 ▼
SQLite Database
 │
 ▼
Flask Backend
 │
 ▼
Frontend
 │
 ▼
User
``` 

This flow shows how information moves between the user interface, Flask backend, and SQLite database before the response is returned to the user.

---

## Running the Application Locally

The project can be developed and tested locally using PyCharm and the Flask development server.

### Requirements

Before running the project locally, make sure Python, PyCharm, and Git are installed.

### Running Locally

Open the project in PyCharm, make sure the correct Python interpreter is selected, and run main.py.

If Flask is not installed, install it from the PyCharm terminal using:

```bash
pip install flask
```

Once the Flask server is running, open the local address shown in the terminal, usually http://localhost:5000.


### Deployment

The project is connected to GitHub and integrated with Vercel for deployment.

Changes pushed to the GitHub repository can be used as part of the Vercel deployment workflow, allowing the application to be managed through a connected development and deployment process.

The deployment configuration is maintained separately from the application code so that development and deployment remain organized.


---

## Git and GitHub Workflow

Git and GitHub were used to manage the project, track changes, and maintain the development workflow.

### Repository

The project is stored in a GitHub repository containing the application code, project files, and documentation.

### Commits

Changes made during development were recorded using Git commits, allowing the project history to be tracked and reviewed.

### Branches

Branches were used to separate development work from the main branch and provide a safer way to work on changes.

### Pull Requests

Pull Requests were used to review changes before merging them into the main branch.


### Basic Workflow

The development workflow follows a simple process:

1. Make changes to the project locally.
2. Check the changes using Git.
3. Create a Git commit to record the changes.
4. Push the changes to the GitHub repository.
5. Create a Pull Request when working through a separate branch.
6. Review and merge the Pull Request into the main branch.
7. Keep the local and remote repositories synchronized.


---

## Vercel Deployment

The project is integrated with Vercel to provide a deployment workflow connected to the GitHub repository.

### Deployment Workflow

The deployment process follows the connection between the local project, GitHub and Vercel.

1. Changes are developed and tested locally.
2. The updated code is committed using Git. 
3. Changes are pushed to the GitHub repository.
4. The GitHub repository is connected to Vercel.
5. Vercel uses the repository as part of the deployment workflow.
6. The application can then be accessed through its deployed environment.


---

## Complete Development Workflow

The complete workflow connects development, version control, collaboration, and deployment into one process.

### Workflow Overview
```text
Local Development
↓
GIT
↓
GitHub
↓
Pull Request
↓
Main Branch
↓
Vercel
↓
Deployed Application
```


This workflow demonstrates how the application moves from local development through version control and collaboration to deployment.


---

## Project Status

The application has been developed, tested locally, and prepared for deployment through the GitHub and Vercel workflow.


## Deployment and Version Control Summary

The project uses Git and GitHub for version control, while Vercel is integrated into the workflow for deployment.

This setup keeps development, source code management, and deployment connected while allowing changes to be tracked throughout the project lifecycle.

---

## Author

Muhammad Ahmed Anwar
Full-Stack Development Project


This project was created as a part of a practical learning and development process, with a focus on understanding full-stack development, Git, GitHub and modern deployment workflows.