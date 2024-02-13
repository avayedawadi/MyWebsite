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