---
layout: post
title: Genetic Algorithm for Blackjack
subtitle: How I used a genetic algorithm to learn how to play blackjack.
tags: [machine learning, cpp]
hidden: false
---

# Introduction

[Blackjack](https://en.wikipedia.org/wiki/Blackjack), a game that is simple to learn but difficult to master. The game is played with a standard 52 card deck, with the aim of the game being to get as close to 21 as possible without going over. The player is dealt two cards, and can then choose to hit (be dealt another card) or stand (keep the cards they have). Before the player plays, the dealer is dealt two cards, one face up and one face down. The player then plays, and if they go over 21, they lose. If they don't go over 21, the dealer plays. The dealer must hit if their score is less than 17, and must stand if their score is 17 or more. The player with the highest score wins.

Given the simplicity of the game, yet the difficulty in mastering it, I thought it would be a good candidate for a genetic algorithm. Read on to find out how I used a genetic algorithm to learn how to play blackjack.

*Note: This article refers to a simplified version of blackjack, where the player can only hit or stand, and the dealer must hit if their score is less than 17. Often there are other options, such as splitting, doubling down, and surrendering. These options are not considered in this article, yet would be interesting to explore in the future and relatively easy to implement.*

# Genetic Algorithm

[A genetic algorithm](https://en.wikipedia.org/wiki/Genetic_algorithm) is a type of evolutionary algorithm that is inspired by the process of natural selection. The algorithm starts with a population of individuals, each with their own set of genes. The algorithm then evaluates each individual, and selects the best individuals to reproduce. The algorithm then creates a new population of individuals by combining the genes of the selected individuals. This process is repeated until the algorithm converges on a solution. 

# Training the Algorithm

The first thing and most important thing we had to do was define our agent and how it would play the game. In blackjack, the face up card of the dealer is very important, as it gives the player an idea of what the dealer's score is, and therefore whether they should hit or stand. Whether the player has an ace or not is also important, as it can be used as a 1 or an 11. With this in mind our agent, what we are trying to improve, is shaped like the following:

![Agent Board](https://gcdnb.pbrd.co/images/ZNWzxqUtAO33.png?o=1)

The above is effectively a policy for the agent. The agent will use the dealer's face up card, as well as the two cards in it's hand and refer to the policy to decide what to do. 0 means stand, 1 means hit. If the agent hits, it will be dealt another card and then will refer back to the policy to decide again, until the game is over. To start with, this policy is randomly generated for the agent.

First the algorithm needs to create a population of agents. This is essentially a large number of agents all with a different randomly generated policy grid such as the one pictured above. Each agent will perform differently in the game, based on the rules defined in the policy. 

Now we need a way to evaluate each agent. To do this, we will have each agent play a large number of games of blackjack, and record the results. Effectively to do this we calculate how much money the agent has at the end of `N` games, betting £1 each game. The rules of blackjack define the winning payout to be 1:1, unless you get blackjack (Ace + 10), in which case the payout is 3:2. Losing the game results in your bet being lost, and drawing results in your bet being returned.

Now after we have tested each agent `N` times and got a score for each agent, we can select the best agents to reproduce. To do this, we will use a [tournament selection](https://en.wikipedia.org/wiki/Tournament_selection) method. The tournament selection works in the following way:

```
1. choose k (the tournament size) individuals from the population at random
2. choose the best individual from the tournament with probability p
3. choose the second best individual with probability p*(1-p)
4. choose the third best individual with probability p*((1-p)^2)
... and so on
```

Now we have selected the best agents, we can create a new population of agents. To do this, we will use a [crossover](https://en.wikipedia.org/wiki/Crossover_(genetic_algorithm)) method. I chose to use the uniform crossover method, which works in the following way:

```
for each gene in the policy grid, choose a random number either 0 or 1
 - if the number is 0 take the gene from the first parent
 - if the number is 1 take the gene from the second parent
```

This produces 1 child. I chose to produce 2 children from each pair of parents. Child number 2 is produced in the same way as child number 1, except the parents are swapped, so the first parent becomes the second parent and vice versa.

We repeat this process for all pairs of parents from our tournament selection, and we now have a new population of agents. We can now repeat the process of evaluating the agents, selecting the best agents, and creating a new population of agents. We repeat this process until we converge on a solution.

## Mutation

One thing we haven't considered yet is mutation. Mutation is the process of randomly changing the genes of an individual. This is important as it allows the algorithm to explore the search space more effectively. Without mutation, the algorithm would be stuck in a local minimum, and would not be able to find the global minimum.

Implementing mutation is simple. First we need to define a mutation chance. This is the probability that a gene will be mutated. Then for each gene in the policy grid, if the mutation chance is greater than a random number between 0 and 1, we will mutate the gene. To mutate the gene, we will simply set it randomly to either 0 or 1.

Mutation is a very important part of the algorithm, and without it the algorithm would not be able to find the optimal solution. However, it is important to note that too much mutation can be detrimental to the algorithm. If the mutation chance is too high, the algorithm will not be able to converge on a solution. This is because the algorithm will be mutating the genes too much, and will not be able to find a good solution. This is why it is important to define a good mutation chance.

# Technical Implementation
Coming soon...

# Results
Coming soon...
