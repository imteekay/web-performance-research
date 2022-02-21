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
