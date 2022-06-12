# HISScussions 🐍


## User Story

As a snake owner in the Richmond area, I want to join a forum where I can share my love for snakes and snake ownership with others in my city. I want to be able to post helpful links for my friends, access what they have posted, and allow for forum members to comment on the links posted.

## App Functionality 

When I go to the forum homepage, I can either login in with my email and password, or if I am a first time user I can sign up by creating a username, and entering my email address and password. Once I log in I go to a dashboard that features all of the links posted by forum members. When I click on a link, it takes me to that hyperlinked page. When I click on the comments link, I can read members' comments, and add comments of my own.

## Technologies Used
```md
- Express
- Sequelize
- MySQL
- Halfmoon CSS
```


## Installation

This project requires Node.js and other dependencies

[How to install Node](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)


Navigate to the directory you would like to use using the CLI and then clone this repository:

```bash
git clone git@github.com:jefid/pets-r-app.git
```

Create `.gitignore` to include the following:

```bash
node_modules
.env
.DS_Store
package-lock.json
```

`.env` will hold your sensitive information.

```bash
DB_NAME='pet_db'
DB_USER='root'
DB_PW='YOUR_PASSWORD_HERE'
```

Open your IDE and use these commands to install _all_ the necessary packages:

```bash
npm i bcrypt mysql2 dotenv express sequelize node
connect-session-sequelize express-handlebars express-session handlebars halfmoon
npm init
```

`npm init` will create your `package.json` file.
Make sure `package.json` includes the seed in your scripts:

```json
"scripts": {
    "start": "node server.js",
    "seed": "node seeds/index.js"
}
```

Login to MySQL with your credentials.

```bash
mysql -u root -p
```

In the MySQL terminal, start the database

```mysql
USE pet_db;
```

Go back to your main terminal or VS Code powershell and enter

```bash
npm run seeds
```

Finally, start the server from the command line:

```bash
npm start
```

## Demo Video

<img src = "public\images\hisscussions.gif">

## Documentation

- [npm](https://docs.npmjs.com/)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Express](https://expressjs.com/en/4x/api.html)
- [Sequelize](https://sequelize.org/master/)
- [Handlebars](https://handlebarsjs.com/guide/)
- [Halfmoon](https://www.gethalfmoon.com)


## Feedback

Have something you'd like to add?<br>
Feel free to contact me via email!<br>

<a href="mailto:jquandt411@gmail.com">
  <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
 </a>
