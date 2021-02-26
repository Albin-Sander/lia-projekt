# lia-projekt

# To start the server

First make sure that you have both the node.js and mysql path variables.
Then you need to start the server locally on your machine.
In your terminal navigate to the "database" directorty, which can be found inside the "src" folder, and then run these commands
 - node create_database.js
 - node create_tables.js

You should now have a mysql database called "dummy_db" with 2 tables named "rooms" and "users" respectively.
If you already have a database called "dummy_db" you can either drop that database or rename the database in the mysql query.


## Functionality

To make full use of the app you need to login with any of the saved users and their respective login credentials.
You can find these credentials in the "create_tables.js" file, look for "User_name" and "User_password"

