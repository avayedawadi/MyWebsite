---
title: Embedded Pervasive Lab Research
date: "2024-02-17T22:40:32.169Z"
template: "post"
draft: false
slug: "example-article"
category: "Project"
tags:
    - "Project"
description: "The research I am doing to benchmark Redis on production containerized workloads. Testing workloads in a closed-loop fashion using Memtier"
socialImage: "/media/42-line-bible.jpg"
---

## Overview and Purpose
Much research and benchmarking of Redis does not properly consider necessary isolation and closed-loop testing. If there is not proper isolation that CPU workloads may interact with each other. We want to consider the impact of load on the CPU cache and power. Therefore, we must properly isolate NUMA CPUs and keep the testing client on separate CPUs. Isolating everything leads to proper data output.

## Technical Details
Intel SMT/Hyperthreading is turned off and the CPU has its frequency statically set to a certain value. We then use `numactl` to restrict Redis to only certain CPUs and ensure that no other programs can run on these CPUs. We can then test Redis with different schedulers and understand its latency under a variety of workloads. We can also run stress testers to see how Redis does with different load competing with the CPUs (this is still done in isolation so testing can be done properly).

# My Contribution
I have made a variety of strides into isolation and testing. I am currently also testing on Memcached (another key-value cache store). I also helped to modify a [Fibtest library](https://github.com/avayedawadi/fibtest-updated) for stress testing CPUs colocated with Redis. I made the library work with the updated Linux CPU groups hierarchy (cgroups v2). This was causing the original library to not work because the CPU could not properly govern itself.

## Technical Expertise Demonstrated
This research really forced me to dive deep into Linux kernel internals and understand how CPU scheduling and NUMA architecture actually work under the hood. I spent a lot of time figuring out how to properly isolate Redis using `numactl` and real-time scheduling with `chrt`, it's surprisingly tricky to get clean performance data when you have all these different processes competing for resources. The most interesting part was updating the Fibtest library to work with cgroups v2, which was causing all sorts of issues because the original code wasn't designed for the new Linux CPU groups hierarchy. I had to really understand how Linux manages processes and resources to get it working properly. The benchmarking methodology was probably the most important part - I had to design experiments that actually gave us meaningful data about how Redis performs under different loads, which meant eliminating all the confounding variables and making sure we could reproduce results consistently. It's been cool to see how hardware-level optimizations like CPU cache hierarchies actually impact application performance in real-world scenarios.

## Outputs
![memtier_output](/media/memtier_output.png)
- Above we can see the most interesting output I got from my research.
- I used chrt to use real time scheduling and colcated Fibtest and Redis on the same CPUs.
    - Doing this allowed me to see how an "production example" busy workload would affect Fibtest.
    - Fibtest is constantly destroying the CPU L1, L2, etc. caches which slows Redis down.
- We can see that the p50 latency is actually pretty reasonable at about 7.7msec. However, the 99th percentile latency is atrocious at 1003.5 msec. Such a difference is striking and shows the impact of a busy workload on Redis. 
- numactl was used to do isolation in this example.

## Future Work
I am currently working on reproducing the above examples on Memcached and on Docker containers. Doing so would allow us to truly understand how Redis performs on real production workloads and begin to build out applications for making Redis more resistant to busy workloads "destroying" its cache.