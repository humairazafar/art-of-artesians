# Project Name 
## Arts and Crafts of Artesians
### Background
Arts and Crafts of Artesians is a storefront App for a small microecomonic projects to generate income for female artesioans living in Pakistan's rural communities. This app will launch their products to the world. 

### Description
The app will showcase the work of individual artesians. Visitors/users will be able to land on the main page to get inspire and click on handicrtafts to view different hand-crafted items.
Consumers/visitors will have the option purchase the product, they will also read a little bit about how their selected product was made, and will be able to click on the buy bitton. After clicking the buy button they will be taken to man handicraft page.  

 **Author:** Humaira Zafar 

**Link to Live Site:** 
#### coming soon!! 

## Project Summary
Art and Crafts of Artesian is a nonprofit organization set up to provide income opportunities to female artisans in the province of Sindh, and Baluchistan, Pakistan. The project was born put off the idea that rural communities are unable to send their children to school due lack of income and resources. After completing a community need assessment in 2014, a group of community development professional concluded that a second income in the household will tremendously improve the opportunities for the children to attend schools regularly. 

While the men in the community go out and work, women, perform the traditional household work and caring for the the children and elderly. All women in the community, however, posses the skill set to sew, embroider and create beautiful handcrafted pieces for families. These artifacts include embroidered dresses, bedding, table clothes, bags and purses, and multiple other objects. 

Art of Artesian’s goal is to provide income opportunity to these female artisans and bring economic stability and prosperity to these families. The program model for this project is based on evidence based research proving how economic stability impact the education, health and well-being of a household. The group of female artisans that supply crafts to the project live in rural and coastal communities in the Sindh-Balochistan region, they carved off time to create these products after finishing their chores, most sacrifices socializations and social events to create these products to bring in a second income to their family.  



## Technology Used
##### HTML5
##### CSS4
##### CSS Bulma
##### JavaScript 
##### Express


## Models

User Model:
Users:
 - username => String
 - password => String
 Handicraft Model
 -handicrafts name => String
 -Description => String
 -Price => String
 -Left(quantity) => String



## Route Map

| Method | Endpoint | Resource/View |
|--------|----------|---------------|
|GET| "/" | Provide an overview of the project |
|GET| "/handicrafts | Display all handicrafts (handicraft/index.ejs)|
|GET| "/handicrtafts/show handicraft1 | Render one handicrafts with description, price, etc.(handicraft/show.ejs)  
|GET| "/new" | Uses Form Submission to Create new handicraft |
|POST| "submit" | uses form submission to create new product. Render form to edit Sample (sample/new.ejs)|
WORK IN PROGRESS|PUT| "/sample/:id" | Uses Form Submission to edit Sample |
WORK IN PROGRESS|DELETE| "/sample/:id" | Delete a particular Sample |

## Challenges
#### Design Challenges:
1. Creating a better view page for all handicrafts/show. My goal is to show them in a card format.
2. Using better pictures and also utilizng them as a background.
3. I worked on creating a responsive design, it need more work. 
4. Entire app. can use a second more professional auditing for a better design and look. 
5. For better user expereinces, may be do a small scale user experiement to collect data on how to improve the app.
#### Functionality Challenges
1. Burger menus is not working, I have code written, the icon is showing as well, JS file toggle is interepting other functionalities. 
2. My goal is to provide the users/customers an opportunity to create their own products, this will change my products model completely, I will be working on implementing it. I will be using the new, create, edit and delete routes to implement this vision.
3. I want my cart to function. 

## Existing Bugs
1. Burger menu is not working.
