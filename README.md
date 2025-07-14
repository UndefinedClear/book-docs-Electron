# book-docs-Electron

**book-docs-electron** is an open source project for creating, viewing, and organizing documentation in a GitBook-like format. Built with modern frontend technologies (React, TypeScript, Vite, TailwindCSS), it offers a fast and flexible platform for your documentation needs. (But like an app)

## Features

- Intuitive navigation through sections and chapters
- Responsive design for both mobile and desktop devices
- Table of contents and breadcrumbs support
- Easily extensible component architecture
- Fast development and build process with Vite

## Technologies Used

- **React** + **TypeScript**
- **Vite** — lightning-fast build tool
- **TailwindCSS** — utility-first CSS framework
- **ESLint** — code linting

## Showcase
![showcase1](<https://raw.githubusercontent.com/UndefinedClear/book-docs-Electron/refs/heads/main/Screenshots/screenshot1.png>)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/UndefinedClear/book-docs-Electron.git
   cd book-docs-Electron
   npm install
   cd ui
   npm install
   cd ..
   ```

2. **Start webserver:**
   ```bash
   root of project:
   sh dev.sh
   ```

3. **Open the ui app**
   ```bash
   cd ui/
   sh ui.sh

   <!-- If you on Arch => Press make it float or use fullscreen for better EXP!-->
   ```

4. **Or open in your browser:**
   ```
   http://localhost:8080
   ```

## Available Scripts

- `dev` — start the development server
- `build` — build the project for production
- `preview` — preview the production build
- `lint` — run code linting

## Project Structure

```
book-docs-opensource/
  ├── public/                # Static assets
  ├── src/
  │   ├── components/        # UI components
  │   ├── hooks/             # Custom hooks
  │   ├── lib/               # Utilities
  │   ├── pages/             # Application pages
  │   └── assets/            # Media resources
  ├── index.html
  ├── package.json
  └── ...
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request to discuss improvements or new features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
