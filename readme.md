
Todo_full_stack_app;
Todo_app is a daily usage app by which end consumers can create some list, usually the kind of data, or short notes they might miss. 
So to archive this functionality, Todo_app comes in handy in which by registering on the Todo app user can create read update or delete (CRUD)o/p. Easily the tech stack used to create this app is MERN stack, after logging in to the system user can add or perform CRUD on the todo’s that he created, 
For the database, we are using MongoDB atlas.
This app also has an admin section route which helps to count the no of users present in our database and delete the unwanted users.

The relationship between the todo’s and the user is obtained by JWT middleware, and at the time of storing the password in DB, the password is hashed to a 32-bit hex value with help of bcrypt library.

File structure used for backend part;
We have used the MVC folder structure to maintain all our files at the backend, which have models, Route and RouterController folders, and an index.js file to run the application at the local system.

The final API after deploying is obtained https://wide-eyed-tam-duck.cyclic.app/  , which has different endpoints, 
“/” home page method:-get, res:-{success:true,msg:”welcome”}
“/user/login”  method:-post,  res:- login success or login failure ;
“/user/register” method:-post, res{“msg”:”register user success”}
“/alltodo” method:-post  access token and  admin authentication is necessary res:-all todo;
“/single user”  method:-get, the access token is necessary which is provided by JWT;
“/addtodo”: method post,:- post todo on database res:- added success;
“/del/:id” method delete:- id is required from params , res:-deleted success;
“/update/:id” method patch:- access token is required res:-updated success;
“/toggle/:id” method patch, to toggle the status of todo, res:-{msg:” success”}


For forgot password:-;
“/forgotpassword”: method is patch, email, new_password, and security field is necessary; res{“msg”: “toggled”}

Admin side Routes:- ;
‘/admin/get’ method get, to get all the users present in database;
‘/admin/del/:id’, method delete, to del a specific todo, res:- {msg:”success deleted”}
‘/admin/update/:id’ method patch, to update a specific route, res:- {msg:”updated_success”}

 
All require dependencies are as following:-
Express npm i express
Nodemon, npm install nodemon
Dotenv npm install dotenv
Mongoose, npm install mongoose;
Cors, npm i cors
Bcrypt, npm install bcrypt;
Jsonwebtoken, npm install jsonwebtoken;

After installing the project you can create and configure your own .env files wich should have all the required variables like salrounds,for hashing;
Secret key variable for jwt,
Mongodb url by which you can access your database;
And the local port no on which your app is going to run;


Some examples:-;
:-http://localhost/8080/user/register;
it ‘ll ask for name,email, password security key, 
For registering you on database;
http://localhost/8080/user/login it’ll ask for email and password;

On the home page you can see some examples of todo’s and check out all the CRUD o/p users can perform on them;
 
For the frontend part, we have user react-redux, react-router-dom,chakra-ui, chakra-icons,react-redux, thunks,Axios and type-writer effect library

The project is fully responsive for tablet large screens and medium screens l
You can check the deployed link of the project at :- https://todo-fullstack-ten.vercel.app/

For any further clarification, you can contact at manish63singh@gmail.com 




