# 100ActiveDays

An Express web application as a 1st challenge from mLab. The first project was an express app and
it was a framework based web app. It was bootstrapped. This is the 1st Express WebApp that is
purely written in HTML & CSS and JavaScript.

I need help with making the hours and minutes have the zero next to them when the number is less than 9.

##Clone the repository to your local machine

`$ git clone https://github.com/radlee/newExpressApp.git`

#Install node modules

`$ npm install`

##Start the Server

`$ node app.js`

##For easy restarts install nodemon

 `$ npm install nodemon`

`$ nodemon`

# database

In this web app I am usig mysql
##Get the 'Current' page preloaded with data by running '

This section assumes you have mysql installed in your system and know basic queries

Open another Terminal Ctr+Shift+T

`$ mysql -u root -p`

(Refer to app.js for mysql password)

Create a new Database if you do not have any

`>CREATE DATABASE <DATABASENAME>`

`>USE <DATABASENAME>`

Copy the full path of the file 'script.sql' by right-click on top of the file and select copy fullpath if on atom
or just copy the fullpath of this file and then run and run the source sql query for example, i cloned my repo to my Desktop

`>source + /home/user/Desktop/newExpressApp/script.sql`

#Fill up the 'current' table with data

If everything works correctly, the previous command ran without error then you should have created two tables that are empty
and to populate 1 table, 'current', you need to open another Terminal and cd to to the project folder and then to the SQL folder
where there is a javascript file that populates the 'current' table with 'hard-coded' data if that makes sense, and by that I mean
if there would have been a more creative way of doing this.

Refresh your browser!

If you have any problems please add an issue and mention me on it
