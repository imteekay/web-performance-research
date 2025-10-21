# Latency

## Chapter 1

- Latency is a performance metric that measures time delay in your system.
- Latency is the time delay between a cause and its observed effect.
- e.g. smart lightbulb: pressing the button to turn on the lights sent a message over the wireless network from the phone to a controller hub and then over a Bluetooth, to the light bulb itself.
- e.g. HTTP request: URL -> domain name system (DNS) lookup (local cache or a query to a remote DNS server) -> domain IP address -> data fetch -> external service (backend) -> database -> HTTP response -> browser page rendering
- [Comment] This is why it's important to undertand how the entire system works
  - See which parts of the system lifecycle has the bottleneck
  - Traces are especially useful in this context because they measure each component latency for the entire lifecycle
