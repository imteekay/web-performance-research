# Writing

- Benchmarking is science, and you should treat it with the seriousness of a scientific endeavor.
  - Publish your benchmark publicly and provide instructions for others to test it.
- [Tachometer](https://github.com/Polymer/tachometer) is a really nice tool for benchmark
- Multiple browser testing
- take accurate measurements
  - performance.now() > Date.now()
- Reduce variables: same hardware, same browser comparison, local server
- Be aware of caching
  - JavaScript engines have JIT compilers, meaning that the first iteration can be different from the second iteration, which can be different from the third, etc.

## State of Web Performance August 2022

[Video](https://www.youtube.com/watch?v=DlG41ik4jKU&ab_channel=ThisDotMedia)

- How much should performance initiatives rely on platforms & frameworks vs. education of engineers on best practices and performance analysis?
  - education in web performance is a big issue
  - if you start measuring, you get more motivation. get incentives
  - most of the developers are just pushing new features out
  - first principles: html, css, js, how browsers rendering things
- browser be more agressive on third party libraries
