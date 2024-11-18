---
title: Blossom
date: "2024-11-17T22:40:32.169Z"
template: "post"
draft: false
slug: "example-article"
category: "Project"
tags:
    - "Project"
description: "A continuation of my experiences building a research based web browser."
socialImage: "/media/42-line-bible.jpg"
---

## Overview and Purpose
I encourage you to go read my previous post on Blossom at the page about the Exploratory Web Browser. This is a continuation of that project.
I also encourage you to go to the Blossom website at https://www.blossom-app.com and watch the demo video there.
\
\
Since my last time writing about Blossom, we have had a couple pivots, some successes, and some setbacks. But all along it's been a great time.
My co-founder (Arjun) presented our project at a YC interview, and realized we needed a product that was more conventionally "useful" to a core
user group. We are both avid users of "Cursor" (a VSCode fork that uses LLMs to speed up development).
\
\
This led us to pivot our product into a sort of "Cursor for the web" that would allow you to take notes, ask questions, and explore the web. Additionally,
we realized the need for a lot of interoperability with files in order to be a total OS level solution for productivity overall. It is our belief that a larger
amount of context is better for the LLMs to work with, and that we can speed up research and development by having a more integrated system.
\
\
We are currently in a closed beta with a group of friends and family, and are getting great feedback. We have talked with VCs
such as Drive Capital and may consider re-applying for YC after getting more users. Please go to https://www.blossom-app.com to sign up
for the waitlist and get on closed beta!

## Technical Details
The website is built in Electron.js using JavaScript. We are using a React framework for the frontend, and Python/Flask for the backend. We 
built all the LLM & RAG pipelines ourselves on top of the OpenAI API. Additionally, we use Perplexity and Exa to allow for a greater featureset 
when exploring the web and doing research.

## Usage
![new_blossom](/media/new_blossom.png)
*The new version of Blossom currently in closed beta*


## Future Work
- Need to build out Windows and Linux support (currently only Mac)
- Fully launch app after closed beta feedback
- Build out a lot of the core functionality that we have in the demo video
- Get Blossom in the hands of more users!
