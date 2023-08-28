---
layout: post
title: Tweet Based Trading 
subtitle: Crypto + Twitter = Profit?
tags: [python, data]
hidden: false
---

We've all seen the tweets. Elon Musk mentions anything about Dogecoin, and the price goes up. Donald Trump tweets about anything, and the price goes down. But is there any truth to this? Can we use Twitter to trade crypto? Read on to find out.

<div style="margin: 0 auto; width: 70%;">
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Time is the ultimate currency</p>&mdash; Elon Musk (@elonmusk) <a href="https://twitter.com/elonmusk/status/1433713164546293767?ref_src=twsrc%5Etfw">September 3, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

> Edit: A moment of silence please for the ~~Twitter~~ X API. [Rest in peace](https://www.wired.co.uk/article/twitter-data-api-prices-out-nearly-everyone).


## The Data

To start with, we need to get some data. We need to get the price of the crypto we want to trade, and we need to get the tweets. For this article, I am only interested in [Elon Musk tweeting about Dogecoin](https://twitter.com/elonmusk/status/1485953263040188416), but this could be applied to any crypto and any Twitter account. I am using the following datasets, and I am only interested in 2021 data:
- [Dogecoin price data](https://www.kaggle.com/datasets/yamqwe/cryptocurrency-extra-data-dogecoin)
- [Elon Musk tweets](https://www.kaggle.com/datasets/ayhmrba/elon-musk-tweets-2010-2021)

Let's start off by doing some basic analysis on Elon's tweets, and creating a [word cloud](https://github.com/amueller/word_cloud).

<img src="../assets/wordcloud.png">

Do you see it? Just to the right of "tesla", we can see doge. This is what we are interested in. Let's do another word cloud, but this time we will only include tweets that contain doge.

<img src="../assets/doge-wordcloud.png">

As you've hopefully gathered by now, Elon likes to tweet about Dogecoin. But does the world care? Let's take a look at the price of Dogecoin over time, and when Elon tweets about it.

<img src="../assets/doge-tweets-price.png">

Hmm. That's not very useful. I think we need to zoom in a bit. Let's take a deeper look at a few examples.
<div style="margin: 0 auto; width: 70%;">
<blockquote
class="twitter-tweet"><p lang="en" dir="ltr">Working with Doge devs to improve system transaction efficiency. Potentially promising.</p>&mdash; Elon Musk (@elonmusk) <a href="https://twitter.com/elonmusk/status/1392974251011895300?ref_src=twsrc%5Etfw">May 13, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>
Let's take a look at this one. A big announcement from Elon, any guesses what happened to the price of Dogecoin?

<img src="../assets/13th-may-tweet.png">

Sure enough, the price went up. Over 20% in under 20 minutes in fact. Crazy! But is this a one-off? Not at all. In fact out of the 26 tweets (**not including replies**) that Elon Musk has ever sent containing "doge", 23 out of them have caused the price to go up, with an average price increase 15 minutes later of 7.24%! That's a pretty good return for 15 minutes of work.

The moral of the story, is if you want to make money, just follow Elon Musk on Twitter, and get ready to remortgage your house to buy Dogecoin.

**DISCLAIMER: NOT FINANCIAL ADVICE, DO NOT DO THIS**