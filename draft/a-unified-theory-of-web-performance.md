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
- TTI: Time To Interactive — The point at which layout has stabilized, key webfonts are visible, and the main thread is available enough to handle user input

The application loading time is proportional to the number and the size of the downloaded files, when the application is loaded.

### Strategies

- Removing unused code
- Compressing the code
- Compressing images
- Compressing fonts
- Route/code splitting
- Measuring performance

### Metrics & Measuring

- Not all sites and visitors are the same: Web performance is a distribution
  - A static blog may need no JavaScript whatsoever whereas a graphics editor uses quite a lot of it.
  - A 4G visitor may deal with only 50ms of latency and a 2G user could suffer through an entire second per round trip.
- When thinking about distribution:
  - Mobile connection: 2G, 3G, 4G, 5G
  - Country/location
  - Mobile phone: iPhone 5, Samsung, etc
- Not all metrics are equally important
  - Common metrics: TTI, FID, LCP, TBT, CLS, Speed Index, custom metrics
  - For Netflix TV UI, key input responsiveness, memory usage and TTI are more critical, and for Wikipedia, first/last visual changes and CPU time spent metrics are more important.

## Post-load interactions

WIP
