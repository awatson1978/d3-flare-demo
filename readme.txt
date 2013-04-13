d3-flare-demo is a basic Meteor application which showcases D3 graphing functionality.


//-------------------------------------------------------------------------------------
// TODOS

- load flare.json into a record in a MongoDB collection on server first run
- pull the record from the MongoDB collection at page load
- display graphs using record from MongoDB collection
- add record edit/update page


//-------------------------------------------------------------------------------------
// METEOR DEPENDENCIES

insecure
preserve-inputs
less
accounts-ui
accounts-password
backbone


//-------------------------------------------------------------------------------------
// STYLE GUIDE
//
// Here are a few conventions I've been using when building this app.

1.  File Names
All filenames should be lower case, with whitespaces filled with dots.  Example:

page.guest.less
tag.filter.js
page.visualization.html


2.  Javascript Function Names
All function names should be camelCase.


3.  Style Class Names
CSS classes should be in back-bone-case.  When possible, syntax keywords should be selected and used to describe the layout.

<img class="dotted drop-zone with-rounded-corners" id="drop_zone" src="images/placeholder-240x240.gif" />


4.  Javascript Variables
All function names should be camelCase.


5.  Give custom names to objects instead of accepting default object names.
BAD:   menuItem3
GOOD:  fileOpenMenuItem

