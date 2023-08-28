---
layout: post
title: Apple Security Vulnerability Discovery
subtitle: A bug bounty story, without the bounty.
tags: [cybersecurity]
---

# Introduction

In this article, I will be discussing a security vulnerability I discovered in a Delivery Logistic Application belonging to Apple Inc.

I came across this vulnerability while I was having to deal with a repair for my Apple Watch. For some reason, if you opt into an iOS Beta for the watch, there is no way of downgrading it. So when I was forced to downgrade my phone from the iOS Beta (due to banking software not working), I found myself with a watch that would refuse to pair with my phone. After a few hours of trying to fix it myself, Apple support told me to send it in for them to downgrade it for me.

# The Vulnerability
<img src="/assets/apple-receipt.jpg">

A week or so later, I received a tracking link to see the delivery status of my watch. The link took me to a very ugly and old-looking website, from the early 2000's perhaps. This was immediately surprising given how much Apple prides itself on their design and user experience. The website contained a bunch of tracking information, such as the current location of the package, the weight, the estimated delivery date, etc. Standard stuff. Crucially, it also contained a link to "manage the delivery", which was just a link to a DHL tracking page, Apple's chosen courier. By inspecting the source code of the page, it turned out that the Postcode of the delivery address was also being displayed in the source code. This was a slight red flag, as by accessing the link given by Apple, you had all the information required to change and manage the delivery of the package. Oh well, the link is probably a randomly generated hash or something right, and impossible to guess? Wrong.

It turns out that the logistic system Apple was using to provide tracking information generated links in the most basic possible way: auto-incrementing integers. This meant that if you knew the tracking number of a package, you could simply increment the number by 1 to get the tracking information of the next package. Combined with the data on the page if you knew where to look, this proved huge. By simply iterating through the tracking IDs, you could gather all the information required to possibly divert or intercept a package. Combined with the fact that the weight of the package was revealed on the page, you could even target packages that were likely to contain expensive items.

<img src="/assets/example-tracking.jpg">

This posed a very real security risk to Apple customers. If a malicious actor were to discover this vulnerability, they could easily target packages containing expensive items, and divert them to their own address, using the information provided. Based on the incremental nature of the tracking IDs, I estimated that there were close to a thousand packages being sent out every day and that the vulnerability had been present for several years. This meant that there were potentially hundreds of thousands of packages that had been sent out with this vulnerability present.

# Reporting the Vulnerability

Once I knew what I had discovered, the obvious thing to do was report it immediately. This proved more difficult than expected. The Product Security Team seemed to not understand how the flaw works, as a month after reporting they declared the vulnerability "fixed", and asked me to verify it. Literally nothing had changed, and the vulnerability was still present. I yet again explained how the vulnerability worked, and they finally understood. A few months later, I was informed that the vulnerability had been fixed, and after verifying it, confirmed the fact.

I was not awarded a bounty for this vulnerability, however, I am credited on the [Apple web security acknowledgement page (under May)](https://support.apple.com/en-gb/HT213636), which is something.

