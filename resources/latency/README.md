# Latency

## Chapter 1

### Definition

- Latency is a performance metric that measures time delay in your system.
- Latency is the time delay between a cause and its observed effect.
- e.g. smart lightbulb: pressing the button to turn on the lights sent a message over the wireless network from the phone to a controller hub and then over Bluetooth, to the light bulb itself.
- e.g. HTTP request: URL -> domain name system (DNS) lookup (local cache or a query to a remote DNS server) -> domain IP address -> data fetch -> external service (backend) -> database -> HTTP response -> browser page rendering
- [Comment] This is why it's important to undertand how the entire system works
  - See which parts of the system lifecycle has the bottleneck
  - Traces are especially useful in this context because they measure each component latency for the entire lifecycle

### How is latency measured?

- Understand orders of magnitude of latency
  - e.g. Round-trip network latency from New York to London is 60 milliseconds (ms)
- Additional resource: [Napkin Math: Estimating System Performance](https://www.youtube.com/watch?v=IxkSlnrRFqc&t=1s)

![](images/001.png)

### Why does latency matter?

- User experience
  - High latency: users abandon slower services, convert at lower rates, and engage less frequently
  - Low latency: correlation with economic performance
  - Akamai report stated that a 100-millisecond latency increase for a website to load could result in a 7% decrease in conversion rates.
  - Google reported in 2006 that a 1-second increase in delay reduces engagement by 20%
  - The Akamai report states that with a load time of over 3 seconds, half of users essentially abandon your site

### Latency vs Throughput

- Latency: how quickly *one* task is executed? (time it takes)
- Throughput: how many tasks can be executed? (rate of production, quantity of tasks done)
  - Commonly related to bandwidth
  - Network Wi-Fi with a bandwidth of 54 megabits per second (Mbps): it means you can move data over the network at a (theoretical maximum) rate of 6.75 megabytes per second (MB/s)
- The example of washing clothes has this trade-off: do we want a quick washing/dying task (latency) or more loads of clothes washed/dyned (throughput)?

## Chapter 2

Chapter ideas:

- Designing with laws of latency in mind
- Thinking of latency as a distribution
- Discovering common sources of latency
- Understanding how latency compounds
- Measuring latency correctly

Principles

- Little’s law: relationship between latency (L), throughput (T), and concurrency (C)
  - C = TL “Concurrency is the product of throughput and latency.”
  - L = C / T
    - Latency increases when concurrency increases
    - Latency increases with concurrency because when many requests arrive at once, the system's resources become a bottleneck, causing them to pile up and wait for processing
    - They compete for shared resources like CPU, memory, and network bandwidth
- Amdahl’s law: answer how much can we speed up with parallelization?
  - A key takeaway from Amdahl’s law is that increasing parallelism does not automatically reduce latency, and even when it does, the benefits have diminishing returns.

Concepts

- Concurrency: events or operations that can occur at the same time
- Parallelism
  - Make me question: how much can we parallelize data requests on server?
- Latency
  - It's a distribution that can be viewed as an average value
  - This is why we use percentiles: p90, p95, p99
  - The overall service request is dependent on every single subrequest completing quickly
  - When you have to wait for everything, the reliability of your service is only as good as the reliability of your worst subrequest.
- CPU Cache Hierarchy
  - DRAM takes up to 100 nanoseconds
  - L1 cache: 200 KiB in size with access latency of 1–2 nanoseconds
  - last level cache (LLC): tens of MiB capacity and access latency of 10 nanoseconds or more
