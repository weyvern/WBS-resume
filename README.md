# HTML5 / CSS3 Resume template

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A basic HTML 5/CSS 3 one-page template for Resumes.

# Themes

Two themes are defined on [styles.css](https://github.com/weyvern/WBS-resume/blob/master/styles.css)

```css
.dark {
  --primary: #2d3748;
  --secondary: #e2e8f0;
  --secondary-hover: #cbd5e0;
  --info: #a56c16;
  --info-hover: #935a05;
  --success: #48bb78;
}
.light {
  --primary: #e2e8f0;
  --secondary: #2d3748;
  --secondary-hover: #1a202c;
  --info: #744210;
  --info-hover: #56300a;
  --success: #38a169;
}
```

By default, dark theme is loaded. User selection is stored in local storage as per defined on [app.js](https://github.com/weyvern/WBS-resume/blob/master/app.js)
