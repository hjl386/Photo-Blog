#Han Jie's Blog 

##Overview

I recently "acquired", more like took from my brother, a Canon camera and have started to practice and get involved with photography. I have no professional background or any acadmic courses backing up my photography skills, or lack of, I and am fully self-thaught. Just like coding it started off with a lot of testing, trying different modes, different angles, etc. until I found a style I liked! I am still lacking A LOT, and my photos have no bigger significant meaning behind them, they are all simply pictures of moments I liked and wanted to 'save'. 

I wanted to share these photos and a little about why that moment was significant to encourage others to live in the moment. I noticed post-graduation I started to only live thinking about the future, the next bill, the next pay check, the next fun event, the next job, the next time I move, rather than thinking about the moment at hand. I would think about the next event and really get worked up on it but when the day would come I wouldn't do anything about it and just focus on the next one to come, a constant cycle. I wanted people to realize that there is nothing wrong with actually enjoying the moment and living it, taking it all in, and then taking the time to look back at it, remembering the past as much as you look forward to the future. 

Again these short stories, blogs, whatever I right, might just be the date and few words to describe what I/we/it was doing or can become full length essays that if I ever have to take another DANG humanities class then I can just copy and paste it from here and submit it. 

A lot of this is for myself, so I can remember the fun moments in my life, almost like Instagram or Facebook Photos, but without the burden of a popular social media platform! 

P.S. Let's see how consistent I will be with uploading new blogs. For the time being it will be a lot of #THROWBACK moments! 

##Technical Overview 

Heavy internal debate over using a framework REACT or building it up with Express.
I decided to go with Express for now, BECAUSE I am more fluent at it, I wanted to review it, being that I am better with it I can mold it to fit better, and I know more supporting features, such as how to connect my database to it. Time-efficiency and proficiency.
HBS - Handlebars for its dynamic page content. I can minimize repetitive pages this way. 
Mongodb - My database, I used it before and I like how easy it is to navigate through it and to edit the values stored in it. 
Dependencies and Developer Dependencies can be found in my package.json. I have not listed them here because I do not know which ones I will be using for sure yet! 
Bootstrap - For my CSS, most likely SASS or LESS unless I use a different template. There is one that I am looking at right now but I am leaning more towards building one ground up. 
ES6 over ES5 - I like it more, I hate prototypes, I love classes, I hate having to fully type things out, I love arrow functions. 

##Data Model 

The application will store Users, comments, dates, upvotes and downvotes. 
As for each individual blog I am either going to make a new page for each one or just update one dynamic page and store the blog information as well. 

An Example User: 
```javascript
{
    username: "Photography for Dummies",
    password: // A Salted Password Hash (Using Bcrypt),
    Email: contactMeForPhotos@gmail.com,
    Name: Han Jie Lee, // I might parse into First and Last name
    // Either I will embed or reference a comments schema
}
```

An Example Comment:
```javascript
{
    username: "Pro Pics",
    comment: "Great Photo!", 
    rating: +2 // The sum of upvotes and downvotes equals positive 2 indicating that there were more positive votes for it
}
```

##Wire Frame
Basic Pages Include: 
* Home Page - Includes a Register Button, Login Button, and the link to the About Page
* About Page - Basic page of information 
* User Profile Page - To edit certain bits of information 
* Blog Page - The page with the content and where comments can be added 
* Messaging Page - A chat function between users 

##Use Cases
1. As a non-registered user I can read the content on the about page and register as a user. 
2. As a registered user I can view my profile and edit certain aspects of it. 
3. As a registered user I can view blog content and leave comments on it, or contribute to an existing comment/thread. 
4. As a registered user I can up vote or down vote comments. 
5. As a registered user I can access the chat features. 
6. As an authorized user I can edit pages, remove, add, modify contents and comments. 
7. As an administrator I can remove every other user and change permissions of users, similarly to Drupal's setup. 

##Research Topics 
* Integrate User Authentitcation 
    * Incorporate Passport authentication, passport-remember-me 
* Create Plugins - to notify users about new content, aka. notifications 
* BootStrap - LESS or SASS

##[App.js File](app.js)

