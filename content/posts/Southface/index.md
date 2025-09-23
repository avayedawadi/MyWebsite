---
title: Southface Construction Database (Bits of Good)
date: "2023-12-17T22:40:32.169Z"
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
This is an online construction standards database made for Southface, an Atlanta based environmental non-profit. The website can be found at [southface.netlify.app](https://southface.netlify.app). Admins can add in building standards that are required for having an environmentally friendly building. Then builders and Southface TAs can create reports that include the standards they need for construction. This ensures proper construction of the buildings. A database stores all the standards in the backend and then the user can browse through these standards, create reports, and print out reports.

## Technical Details
Authentication is done using Salesforce and the MERN stack was used for this project. The database is a MongoDB database hosted on Microsoft Azure. The frontend is hosted on Netlify. React is used in the frontend and everything is containerized using Docker.

# My Contribution
This was a mutli-semester project and I was engineering manager for the last semester of this project. I helped to spearhead the Salesforce authentication and handled all the deployment. Additionally, I wrote tickets for a team of 5 developers who would then fix bugs and integrate features based on the tickets I wrote.

## Technical Expertise Demonstrated
This project was a great learning experience in enterprise development, the Salesforce integration was probably the trickiest part because I had to figure out how to handle all the OAuth flows and enterprise security requirements that Southface needed. Building the MERN stack from scratch taught me a lot about how to structure a full-stack application properly, especially when you're dealing with complex data relationships for construction standards. Managing the deployment across Azure and Netlify was interesting because I had to make sure everything worked together smoothly while keeping the costs reasonable for a non-profit. The MongoDB schema design was crucial because Southface needed to be able to search and filter through thousands of construction standards efficiently, so I spent a lot of time optimizing the indexing and query patterns. Leading the team as engineering manager was challenging but rewarding, I had to learn how to translate Southface's requirements into technical specifications that the developers could actually implement, and coordinating everyone's work across multiple semesters required a lot of planning and communication. The report generation feature was probably the most complex part technically because users needed to be able to create custom reports and export them as PDFs, which meant dealing with all the formatting and print optimization issues.

## Usage
![add_standards](/media/add_standards.png)
_Ability to add standards that then are added to MongoDB_

![create_reports](/media/create_reports.png)
_Ability to create reports that are saved in the database per user and can be printed or looked at in the future_

![database_example](/media/database_example.png)
_Example of filtering and searching through the database in the frontend_

![login_screen](/media/login_screen.png)
_Login screen that uses Salesforce in the backend to login_

## Future Work
Will work on an admin table that allows admins to control users that have access to the website. The current solution is to handle user provisioning in Salesforce (which is a perfectly fine solution in itself). 