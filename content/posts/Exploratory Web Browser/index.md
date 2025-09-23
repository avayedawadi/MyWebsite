---
title: Exploratory Web Browser
date: "2024-02-18T22:40:32.169Z"
template: "post"
draft: false
slug: "example-article"
category: "Project"
tags:
    - "Project"
description: "A map based web browser that uses context and ML algorithms to to accelerate research and exploration by up to 35%."
socialImage: "/media/42-line-bible.jpg"
---

## Overview and Purpose
This is the project I am currently putting most of my time into. Along with one other student, I am building a new type of web browser that uses maps and flows to help direct exploration. It's meant as a secondary research tool that can then use context and ML to help determine where you should go next in your exploration. It also gives you a contextualized map of your history so you can see the tabs that were important to you.\
\
As part of the Idea To Prototype cohort of Fall 2023 we received a $500 grant from Georgia Tech to prototype our work and flesh it out.

## Technical Details
The website is built in Electron.js using JavaScript. We use p5.js to build out the map itself. Python and certain OpenAI apis are used to help create the ML and algorithmic aspects of the project.

## Technical Expertise Demonstrated
This project was really about rethinking how people explore the web, instead of just having a bunch of tabs, I wanted to create a spatial map that shows how different pages relate to each other. The p5.js graphics programming was challenging because I had to figure out how to make the map interactive and responsive while keeping the performance smooth. The ML integration was interesting because I had to design algorithms that could actually understand browsing patterns and suggest useful next steps, which meant working with OpenAI APIs and figuring out how to make the recommendations feel natural rather than robotic. Building the Electron app architecture was tricky because I needed to separate the visualization frontend from the ML processing backend while keeping everything communicating efficiently. The graph algorithms for representing web relationships were probably the most fun part, I had to think about how to visually represent complex browsing patterns in a way that actually helps users understand their exploration journey. Getting the Georgia Tech funding was cool because it validated that this was actually a useful research direction, and building something that works across different operating systems while feeling native was definitely a learning experience. 

## Usage
<a target="_blank" href="./media/web_browser_poster.pdf">Exploratory Web Browser Poster</a>
- This is our poster presentation for the slightly older version of the exploratory web browser
- The main difference is that we will no longer be using a radial tree to store history because it was a visually difficult method of working in
- Now, we will be using the below method of the map, but other features such as the lens and AI implementation will still be the same

![web_browser_map](/media/web_browser_map.png)
*The new version of the map we will use which is more concise and meant to emulate the NYC subway map in the way that it is easy to read and follow*


## Future Work
We have garnered interest in using our product through word of mouth and are now finishing and polishing up the application for a beta release.