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

A week or so later, I received a tracking link to see the delivery status of my watch. The link redirected me to a noticeably outdated website reminiscent of the early 2000s – a stark contrast to Apple's renowned emphasis on design and user experience. The page contained an array of tracking details such as package location, weight, and anticipated delivery date – all standard information. However, it also contained a link to "manage the delivery," which merely directed me to a DHL tracking page, Apple's chosen courier. A deeper inspection of the page's source code unveiled a subtle concern: the postcode of the delivery address was readily accessible within the source code. This triggered a mild alarm, as access to the provided link could empower one to manipulate and oversee package delivery. DHL and most couriers require you to verify your postcode to access and edit the delivery details of a package, to stop anyone who stumbles across the link from being able to change the delivery details. However, with the link provided by Apple, you had all the information required to change and manage the delivery of the package. This was a slight red flag, but I didn't think much of it at the time. Oh well, the link is surely a randomly generated hash or something right, so impossible for people to stumble across? Wrong.

The logistics system employed by Apple for tracking utilized the most rudimentary approach imaginable – auto-incrementing integers. This design flaw meant that knowledge of a package's tracking number could be exploited by incrementing the number by a mere 1, thereby revealing the tracking data of the subsequent package. This vulnerability, combined with strategically gathered page data, exposed a significant security gap. By systematically iterating through the tracking IDs, one could amass the requisite information to potentially reroute or intercept thousands of packages. Notably, the package weight's visibility on the page even enabled the targeting of valuable shipments, for example a laptop or Mac sent in for repair.

<img src="/assets/example-tracking.jpg">

This posed a very real security risk to Apple customers. If a malicious actor were to discover this vulnerability, they could easily target packages containing expensive items, and divert them to their own address, using the information provided. . Given the incremental nature of tracking IDs, my estimation placed the number of daily dispatched packages at nearly a thousand, and the vulnerability had persisted for several years. Consequently, hundreds of thousands of packages might have been dispatched under the shadow of this prevalent vulnerability.

# Reporting the Vulnerability

Upon unearthing my discovery, the logical course of action was to promptly report it. However, this process proved more challenging than anticipated. The Product Security Team appeared to struggle in comprehending the mechanics of the flaw. After a month, they declared the vulnerability "resolved" and sought my verification. To my dismay, no actual changes had been completed, and the vulnerability persisted. Once again, I described the intricacies of the vulnerability, which finally resulted in their understanding. A few months later, I received confirmation that the vulnerability had indeed been rectified, and upon my verification, the fix was validated.

I was not awarded a bounty for this vulnerability, however, I am credited on the [Apple web security acknowledgement page (under May)](https://support.apple.com/en-gb/HT213636), which is something I guess.

