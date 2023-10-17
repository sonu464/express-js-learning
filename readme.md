# Learn about express js

What is express js ?

- Express js is a package which is available on npm to create server, to install express :- npm i express
- With the help of express you can routing and management

Node vs express js ?

- without express you can run node js but without node js you can not run express
- With the help of express you can create the server. we use express due to easily understanding the code

Why express js ?

- Http is difficult to use, express make this easier.

ROUTING ?

- To create the routes is called routing like /about, /profile, /contact, /api/like/ielojsiopfjsf;lskdjf/asdf/ etc.

MIDDLEWARE ?

- Middleware is a type of function which is running before all routes.
- Basically we said that all the routes is running after middleware.
- Middleware usage :

  app.use(function (req, res, next) {

  console.log("Middleware Working!");

  next();

  });

REQUEST, RESPONSE AND NEXT ?

- Req : All data related to the user or given by user like ip address, location, device info.
- Res : There is an controls inside response from which you can send the response accourding to given request by user.
- Next : Basically next is just a push so that our request moves to the next thing which should be executed.

ROUTE PARAMETERS ?

- To make any route dynamic you can use : at the place where you want to make it dynamic, and to access there value use req.params

- /author/books/issued/sonu
- /author/books/issued/monu
- /author/books/issued/sunil
- /author/books/issued/summit

- /author/books/issued/:username ( req.params.username )

- Dynamic routing: Any route whose some part is same for sometime and some part is different.
- whenver you see anytime this type of pattern like /profile/:username here data or username is sent through browser by user so it is stored in " req " and the part username is called " parms " and than you can write it like that -> req.params.username <-

EXAMPLE -----------------

app.get("/profile/:username", function (req, res) {

res.send(`Hello from ${req.params.username}`);

});

TEMPLATE ENGINES ?

- There are many type of template engine like pug, handlebars, ejs, jade etc.
- Here we use ejs because it is similar to html.
- ye ek style of markup se convert keke apko html dete hai.
- ejs is template engine and ejs is html with superpower.

- To setup ejs there are some steps are :-

1. ejs install ( npm i ejs )
2. configure ejs ( app.set("view engine", "ejs") );
3. create folder whose name is "views" always
4. and in this views folder create ejs file
5. and use render rather than send

- At the time of render you need to write the name of file which is inside the views folder and does not use ejs in render function.

STATIC FILES ?

- To setup images, stylessheets, frontend js

- To setup static files follow these steps:

1. create a folder called public
2. create three folder inside it images, stylesheet, javascript
3. configure the express static in js file like index.js or script.js
4. understand the path

HTTP METHOD - GET AND POST ?

ERROR HANDLING ?

- just copy and paste it and create error.ejs file in views
  
  app.use(function errorHandler(err, req, res, next) {
  
  if (res.headersSent) {
  
    return next(err);
  
  }
  res.status(500);
  
  res.render("error", { error: err });
  
});
