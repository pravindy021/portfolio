# Pravind Kumar Portfolio

A responsive, static portfolio for Pravind Kumar, an aspiring Data Scientist and Computer Science student.

## Features

- Dark and light themes with localStorage persistence
- Sticky responsive navigation and active section indicators
- Role-based project prioritization
- Project category filters
- Interactive project detail dialogs
- Experience, achievements and education sections
- Accessible contact form validation
- Responsive layouts for desktop, tablet and mobile
- Reduced-motion support and keyboard-accessible interactions

## Technologies

- Semantic HTML
- CSS
- Vanilla JavaScript

## Project Structure

```text
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   ├── projects/
│   ├── icons/
│   └── certificates/
├── resume/
├── favicon.svg
└── README.md
```

## Local Preview

From this directory, run:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages Deployment

1. Create a GitHub repository.
2. Upload or push the contents of this directory.
3. Open **Settings → Pages**.
4. Select the repository branch and the root folder.
5. Save and use the generated GitHub Pages URL.

All links and asset paths are relative and do not require a build step.

## Resume

The actual PDF resume was not present in the source workspace. Add a verified PDF at `resume/Pravind_Kumar_Resume.pdf`, then update the two download links in `index.html` to point to that path.
