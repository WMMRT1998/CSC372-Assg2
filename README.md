# CSC372-Assg2
Assignment 2 - Campus Event Guide
# Campus Event Guide

## Project Description

This website helps UNCG students discover events and activities.
It includes a homepage with upcoming event cards and a separate
featured-event page with more detailed information.

I included my wedding as a personal addition to the project.
The wedding is a real event, but its presentation as an event
open to UNCG students is fictional for this assignment. It was just 
easier to talk about in detail and make the featured event page 
more detailed.

## Layout Decisions

I used CSS Grid for the upcoming events because it lets me
organize cards into columns and give certain cards more space.
The first event and wedding cards span two columns on larger
screens.

The featured-event page also uses Grid. Its main content spans
two of three columns, while the sidebar occupies the remaining
column.

I used Flexbox for the navigation, related event cards, and
footer links. Flexbox arranges these items horizontally, and
the related cards and footer links can wrap when space is limited.

I kept the header sticky so visitors can access navigation while
scrolling. Both pages share a stylesheet, header design, and
footer to keep their appearance consistent.

## Responsive Design

The site uses two breakpoints:

- At 900px and below, the homepage event grid changes to two columns.
- At 600px and below, the homepage event grid changes to one column.
  The wider cards have their column spans reset.
- At 600px and below, the featured-event layout also changes to
  one column, placing the sidebar below the main content.

I kept a chrome browser linked to the index file open on my second monitor. Every change i made, would be followed by saving and refreshing the page to see if it did what i was wanting. During development, the wedding card's two-column span prevented the mobile grid from displaying as one column. Resetting both
wide cards to grid-column: auto fixed the problem.

## Semantic HTML

- <header> groups the site banner and primary navigation.
- <nav> identifies the main navigation links.
- <main> identifies the primary content of each page.
- <section> groups related content, such as upcoming events.
- <article> represents an individual event card.
- <footer> contains copyright, contact information, and useful links.


## Sources and Credits

- Campus event information: I got this info from an email from UNCG 
Campus Activities and Programs sent on 9/17
- Campus banner image: (https://www.uncg.edu/uncategorized/welcome-home-spartans-2/)
- Campus event images: Got from that same email