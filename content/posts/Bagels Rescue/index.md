---
title: Bagels Rescue (Bits of Good)
date: "2024-11-01T22:40:32.169Z"
template: "post"
draft: false
slug: "example-article"
category: "Project"
tags:
    - "Project"
description: "An online construction standards database made for Southface, an Atlanta based environmental non-profit. Website at southface.netlify.app"
socialImage: "/media/42-line-bible.jpg"
---

## Overview and Purpose
As an engineering manager for Bits of Good, I was tasked with leading a team of 5 to build a web app that manages food dropoff and pickup for Atlanta community food banks. The website can be found at [bagelsrescue.netlify.app](https://bagelsrescue.netlify.app). There is an admin page where Bagel Rescue can manage their inventory and schedule pickups and dropoffs as shifts. Then, volunteers can sign up for shifts and see all the pickups and dropoffs that they are responsible for.

## Technical Details
- Authentication is done using Firebase
- The frontend is built in React with Typescript (AND I AM ENFORCING TYPINGS)
- DB is done with MongoDB
- The whole project is containerized using Docker
- Next.js used for server side rendering
- TailwindCSS for styling
- Node.js for the backend

# My Contribution
This is the first semester creating Bagel Rescue, and I am the engineering manager for this semester. I am responsible for creating the system architecture, writing tickets for the developers, and handling deployment.
Essentially, the vision and development of the project is my own, and I am responsible for making sure the project gets done.

## Technical Expertise Demonstrated
Leading this project as engineering manager really taught me how to balance technical architecture with team management. I had to design the entire MERN stack system from scratch, thinking about how it would scale as more food banks joined the network. The TypeScript enforcement was something I was pretty strict about - I wanted to make sure we caught errors early rather than dealing with runtime issues later. Setting up the Docker containerization was tricky because I had to make sure both the development and production environments were consistent, and I spent a lot of time optimizing the MongoDB schema to handle the complex queries we needed for route management and volunteer scheduling. The Firebase authentication integration was interesting because I had to build custom role-based access control that worked for both admins and volunteers, and managing all the state across different user interfaces required me to really think through the data flow patterns.

## Usage
![route_creation](/media/route_creation_page.png)
_Ability to create routes for pickups and dropoffs_

![login_page](/media/login_page.png)
_Login page with Firebase functionality for authentication_

![analytics_page](/media/analytics_page.png)
_Analytics page for user statistics_

![route_dashboard](/media/route_dashboard.png)
_Dashboard to manage routes_

![shifts_dashboard](/media/shifts_dashboard.png)
_Dashboard to manage shifts_


## Future Work
Currently, the admin side of the website is done. However, there is still work to be done on the volunteer side of the website.