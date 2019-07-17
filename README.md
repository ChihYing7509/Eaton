# Power Xpert Blue Development Challenge

##### Author : ChihYing Chang (Jill)
##### Date: Jul-16-2019

## 0. How to run the application

Before running the application, please make sure you have Angular(7.3.9 or above) and Node(10.16.0) installed.

Navigate to the project directory and install the necessary dependencies (note: the project is set up to be run with yarn):

```
cd Eaton
yarn
```

You can then run the project - this will launch the application in your browser:
```
yarn start
```

## 1. Task:

The Power Xpert Blue documentation site (pxblue.github.io) includes information about PX Blue and how to use it to build applications. This includes a resources page (pxblue.github.io/resources), which lists all of the materials that are available as part of PX Blue, including various NPM packages and code examples.

We would like you to design a better way to present the information on this resources page and build it using the PX Blue platform.
## 2. User Interface:

This is a responsive web application using Angular framework. There are three ideas of redesigning the resource page. First, to make the user Interface more scalable, which means to add new data won’t change the layout too much.  Secondly, to categorize the data and easy to search. For example, I put the materials in another list page with a search bar on the top, so users can quickly target the materials they are looking for.  Third, to show the information in different ways based on the request frequency. For example, developers usually click the repository and NPM links more instead of checking the status or update, so I present the repository and NPM links in a more obvious way but hidden the other with lower usage frequency sometimes.

1. [Home / Overview](https://ibb.co/9WddXwX)

In the Home page, it gives an overview of the resources, users can click the links to access the materials directly.  

2. [Side Navigation](https://ibb.co/qs2ppBH)

The side navigation shows the root directory of the library, it’s also another way to access the materials.   

3. [List of Materials](https://ibb.co/fpr3p7s)

The list page shows the whole materials for each category. 

4. [Search a Material](https://ibb.co/9p4yVw9)

Since the list may be getting longer, I put a search bar on the top to filter specific materials quickly. Users tap the cell to access the detail page.

5. [Details of a Material](https://ibb.co/XV7mLxn)

The detail page displays all the information about the material. For developer users, the repository links and NPM links are mostly what they are looking for, so I use ``` mat-card ``` to present them directly and use ``` mat-tab-group ``` to show the rest of information.


## 3. Milestones:

Read document and examples   2 hours

Design the User interface   2 hours

Implement side navigation   2 hours 

Implement the home page   1 hour

Implement the search bar page   3 hours 

Implement the detail page   3 hours 

Tweak layout to adapt to different devices   2 hours  


## 4. Technology Stack:

1. JavaScript ES6
2. Angular (7.3.9)
3. Bootstrap

## 5. Referance 
1. pxblue Side Navigation
https://github.com/pxblue/side-navigation
2. pxblue Search bar
https://github.com/pxblue/search-bar
3. https://www.thepolyglotdeveloper.com/2016/10/passing-complex-data-angular-2-router-nativescript/
4. https://stackoverflow.com/questions/45940965/angular-material-customize-tab
