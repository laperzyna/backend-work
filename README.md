# backend-work

## Description
Internet retail, also known as e-commerce, is the largest sector of the electronics industry, having generated an estimated US$29 trillion in 2017 (Source: United Nations Conference on Trade and Development). E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to the prevalence of these platforms, developers should understand the fundamental architecture of e-commerce sites.
Your challenge is to build the back end for an e-commerce site. You’ll take a working Express.js API and configure it to use Sequelize to interact with a MySQL database.
Because this application won’t be deployed, you’ll also need to create a walkthrough video that demonstrates its functionality and all of the following acceptance criteria being met. You’ll need to submit a link to the video and add it to the README of your project.

## User Story
AS A manager at an internet retail company <br>
I WANT a back end for my e-commerce website that uses the latest technologies <br>
SO THAT my company can compete with other e-commerce companies
## Acceptance Criteria
GIVEN a functional Express.js API <br>
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file <br>
THEN I am able to connect to a database using Sequelize <br>
WHEN I enter schema and seed commands <br>
THEN a development database is created and is seeded with test data <br>
WHEN I enter the command to invoke the application <br>
THEN my server is started and the Sequelize models are synced to the MySQL database <br>
WHEN I open API GET routes in Insomnia Core for categories, products, or tags <br>
THEN the data for each of these routes is displayed in a formatted JSON <br>
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core <br>
THEN I am able to successfully create, update, and delete data in my database <br>

## What I Struggled With
This program doesn't work entirely as it should. For some reason the program is able to get every seed and render it through insomnia but the POST,PUT, & DELETE routes are being funky and I'm not sure why. Right now the only one that works is the 'tags' route. The 'category' route also works but when doing the POST route the 500 error is returned even though the category is read in successfully and is able to be put and deleted. The only routes that absolutely do not work are the product routes. I'm not sure how to fix these bugs but hopefully I can come back and figure it out.

## Screen Shots
<img width="1191" alt="Screen Shot 2022-08-12 at 3 59 05 PM" src="https://user-images.githubusercontent.com/90733086/184454794-7d92d37f-19a9-4791-909a-6cd0f <br>
<img width="1188" alt="Screen Shot 2022-08-12 at 3 58 45 PM" src="https://user-images.githubusercontent.com/90733086/184454811-c514a856-bd87-458e-8b5b-2842d5fd4c2e.png">
fc6e2cc.png"> <br>
<img width="1188" alt="Screen Shot 2022-08-12 at 3 58 31 PM" src="https://user-images.githubusercontent.com/90733086/184454838-aad9c9a9-c576-4b51-9e87-c993e6082e08.png">



## Video Link
https://user-images.githubusercontent.com/90733086/184454728-c7c5fdf2-c795-46de-871a-712f38111c44.mp4

