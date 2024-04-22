# Gitfolio

Gitfolio is a minimalist web project created by dyceszn that utilizes the GitHub API. It allows users to manage their GitHub repositories, including creating, modifying, and deleting repositories. This project was developed as part of the Altschool exam.

## Why Gitfolio?

Gitfolio aims to simplify the process of managing GitHub repositories by providing a clean and user-friendly interface. Whether you're a seasoned developer or just starting with GitHub, Gitfolio offers a straightforward solution for repository management tasks.

## Features

- **Create Repositories**: Easily create new repositories directly from the Gitfolio interface.
- **Modify Repositories**: Edit repository details such as name, description, visibility, and more.
- **Delete Repositories**: Remove repositories with a click, ensuring a clutter-free GitHub profile.
- **GitHub API Integration**: Gitfolio leverages the GitHub API to ensure seamless synchronization with your GitHub account.
- **Minimalist Design**: A clean and intuitive design makes Gitfolio easy to use for all users.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (usually comes with Node.js installation)
- Vscode
- Browser: Chrome

### Installation

Follow these steps to get Gitfolio up and running on your local machine:

1. Clone the repository:

   ```bash
   $ git clone <https://github.com/dyceszn/gitfolio.git>

   ```

2. Navigate into the project directory:

   ```bash
   $ cd gitfolio

   ```

3. Install dependencies:

   ```bash
   $ npm install
   $ npm install axios
   $ npm install react-router-dom
   ```

### Starting the Development Server

To run Gitfolio on your local machine, use the following command:

```bash
npm start
```

This will start the development server. Open [http://localhost:3000](http://localhost:3000/) in your browser to view Gitfolio.

## Usage

Once Gitfolio is running, follow these steps to manage your GitHub repositories:

1. **Login**: Authenticate with your GitHub account.
2. **Dashboard**: Access the dashboard to view a list of your repositories.
3. **Create**: Click on "Create" to add a new repository.
4. **Modify**: Edit existing repositories by clicking on the repository name.
5. **Delete**: Remove repositories by clicking on the delete icon.

## Folder Structure

Here's an overview of the project's folder structure:

```
gitfolio/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── api.js
│   ├── assets/
│   │   └── (Any assets like images, logos, etc.)
│   ├── components/
│   │   ├── styles/
│   │   │   ├── card.css
│   │   │   ├── header.css
│   │   │   └── footer.css
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── RepoCard.jsx
│   ├── pages/
│   │   ├── styles/
│   │   │   ├── home.css
│   │   │   ├── menu.css
│   │   │   ├── error.css
│   │   │   └── global.css
│   │   ├── Home.jsx
│   │   ├── Menu.jsx
│   │   └── Error.jsx
│   ├── App.js
│   ├── index.js
│   └── ...
└── ...

```

## Contributing

Gitfolio is an open-source project, and contributions are welcome! If you'd like to contribute, please follow these guidelines:

- Fork the repository.
- Create a new branch for your feature or bug fix: `git checkout -b feature-name`.
- Commit your changes: `git commit -am 'Add new feature'`.
- Push to the branch: `git push origin feature-name`.
- Submit a pull request.

## License

This project is licensed under the [MIT License](notion://www.notion.so/LICENSE).

## Acknowledgements

- Thank you to [GitHub](https://github.com/) for providing the API used in this project.
- Special thanks to [Altschoolafrica](https://www.altschool.com/) for the exam prompt that inspired Gitfolio.
