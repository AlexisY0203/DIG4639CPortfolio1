# DIG4639CPortfolio1
Portfolio 1 based off of Ex 5: Beginning to React Part 2 with our favorite TV show. I extended on this project to show more ways that information about a show can be used.
App.js has the variable showterms which is passed to each component. Then I used the same idea from Lab 5 with the different screens to show based off of state with buttons to choose
which screen the viewer wants to see. When the user clicks on a button to show the different screens, there will also be a button on the bottom to return back to the homepage.
Three Components:
ShortBio takes in data through variable showterms from App.js to give a short biography about my favorite show New Girl. This.props.data gives the information about the show including
title, main characters, number of seasons, and the year the show started. It also includes an image of the cast.
Post creates the base layout of each online post, image, or quote I want to show on the screen. It uses the title and content from the contentArray to put each data in header or paragraph
tags as well as with a button to add to the counter with the likes each post gets.
CreatePosts class then uses Post class to map each content in the contentArray. Each title and content pair are mapped each with their own like button.

Link to my GitHub pages: https://alexisy0203.github.io/DIG4639CPortfolio1/

