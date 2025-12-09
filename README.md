Javascript Exercises
====================

Summary
-------
This repository contains a small collection of JavaScript exercises focused on array methods and basic language features. Each exercise is provided as a standalone HTML page that loads a dedicated JavaScript file. The project includes a simple dark-themed layout and a repeating background image for visual style.

What you will find
------------------
- `index.html`: landing page with links to each exercise.
- `exercise1.html` … `exercise5.html`: individual pages for each exercise.
- `exercise1.js` … `exercise5.js`: the JavaScript code for each exercise.
- `styles.css`: shared styles for the site.
- `favicon.jpg`: favicon used across pages.

How to use
----------
1. Open `index.html` in a browser to see the list of exercises. Use the browser console (F12) to view the output of each exercise.
2. If you prefer to serve the files locally, use a simple static server. For example, with Python 3 run:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

Notes and small details
-----------------------
- The design uses a dark theme with green accents intended to match the included background artwork.
- Hovering over exercise cards plays a small sound; there is currently no UI to disable it. If you want that added, I can include a toggle to mute sounds for accessibility.
- There is a `script.js` file in the repository containing earlier combined examples; the active pages each load their own `exerciseX.js` files.
Notes
-----
- The site uses a dark theme with green accents to match the included background artwork.
- Hovering over exercise cards plays a short sound effect.
- There is a legacy `script.js` file with combined examples; each exercise page loads its own `exerciseX.js` file.

Contributing
------------
If you want to suggest changes or improvements, open an issue or submit a pull request. For small edits (styling, accessibility, or adding exercises) a short description of the change is sufficient.
