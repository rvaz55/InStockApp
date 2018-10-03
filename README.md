# InStock App
![App Layout](readme/InStockApp.pdf)

## Members
* Jocelyn Tse - Project Manager
* Raquel Azcue - Git Master
* Sendy Turcios
* Melissa Siddoway

## Main Objective 
Search engine for hard to find pantry items

## Summary
* InStock app allows users to search for hard to find pantry items and locate nearby stores where the item is available.  * InStock app allows stores to add items available at their store so that customers can then search for them and potentially come buy from them.

## User Groups 
* Customer in unfamiliar town wanting to find an item from back home
* Customer making a recipe that calls for a hard to find ingredient
* Customer searching for a more ethnic pantry item (hispanic, asian, indian, south african, etc.)
* Customer searching for a holistic medicine that isn’t found at the major grocery stores
* Store owner who might not have their own website and wants to attract more customers
* Store owner who wants to advertise their unique products
* Store owner wanting to connect with more customers by letting them know what products they sell

## Functionality

### Key features - customer 
* Search box that queries database for the item entered
* Results list that displays any matches found in the above query
* Map which displays the pings of the stores found in the query results list

### Key features - store owner 
* Sign up form to create store information
* Login page to access store’s profile page
* Store profile page that displays the store’s information
* Store profile page displays all of the items that have been entered by the store owner
* Ability to add store items to database
* Ability to update and/or delete store items or quantity number

## Technologies Needed
* Google Maps API
* React 
* Express  
* MySql
* Sequelize

## Sketch/Wireframe

### Overall Look and Feel
* Sleek, clean, not too busy
* Easy to navigate
* Use bootstrap template
### Fonts
* ?
### Color scheme
* ?

## Future Development
### Functionality - ADD AFTER MVP is complete

#### Key features - customer 
* Results list includes thumbnail picture of the item
* Add customer location when entering search item
* Display results list ordered from nearest to furthest
* Click on a store to get driving directions
* Click on a store to go to that store page and see all available items they sell
* Click on store phone number to automatically call store (mobile)
* Autofill feature in search box
* Search by category instead of entering item name
* Click on item from list and button letting you reserve the item in the store
* Email alerts when item comes in stock
* Text alerts when item is ready to be picked up
* Buy the item on the site and pick up in store
* Buy the item on the site and have delivered
* Connect to some kind of delivery service (instacart)
* Ratings feature - customer can rate the product
#### Key features - store owner 
* Ability to have customer purchase the item through the site
* Receive message when customer wants to reserve/hold an item to come pick up
* Ability to cancel account (DELETE method from stores table in database)
* Ability to edit store information originally entered when signing up (do from profile page and will trigger UPDATE function to stores table in database)
* FAQ section
* Tracking hits to each store and adding graph feature




