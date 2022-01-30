# A Unified Theory of Web Performance

- Page Load
- Post-Load interactions

## Page Load

### How browsers work

1. Retrieve and parse HTML to build the DOM
2. Load External Resources: JS and CSS
   - Parse CSS and build CSSOM
   - Execute JavaScript code
3. Render the page

Some things to remember:

- HTML + Client rendering: everything is blocked for users, meaning users can't interact with the page.
- FCP: First Contentful Paint — First content after the white screen
- TTI: Time To Interactive — The time it took to be able to interact with the page

The application loading time is proportional to the number and the size of the downloaded files, when the application is loaded.

### Strategies

- Removing unused code
- Compressing the code
- Compressing images
- Compressing fonts
- Route/code splitting
- Measuring performance

## Post-load interactions

WIP
