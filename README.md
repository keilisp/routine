# Routine shop

# Description

Unfinished E-Commerce website built using MVC design pattern

# Stack

- _Node.js_
- _Express_
- _MongoDB_ (mongoose)
- _Ejs_
- _Passport_
- _Morgan_
- _dotenv_
- _Locus_

# Installation

Clone the repo into your folder

```sh
cd *your-folder*
git clone https://github.com/mediocreeee/routine.git
```

Install all required packages via npm

```sh
npm install
```

Run the website via npm

```sh
npm start
```

# Endpoints

/ - Home page
/register - Register page
/login - Login page
/logout - Logout from account
/profile - Your profile page
/profile/:user*id - Get information about \_user_id*
/forgot - Restore password page
/reset/:token - Reset your token

/posts - Get all your posts
/posts/new - Create new post
/posts/:id - Get, update or delete post with _id_
/posts/:id/edit - Edit your post with _id_

/posts/:id/reviews/ - Get reviews of post wit _id_
/posts/:id/reviews/:review*id - Get, update or delete review with \_review_id*
/posts/:id/reviews/:review*id/edit - Edit review with \_review_id*
