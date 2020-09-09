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

/ - Home page \s\s
/register - Register page \s\s
/login - Login page \s\s
/logout - Logout from account \s\s
/profile - Your profile page \s\s
/profile/:user*id - Get information about \_user_id* \s\s
/forgot - Restore password page \s\s
/reset/:token - Reset your token \s\s

/posts - Get all your posts \s\s
/posts/new - Create new post \s\s
/posts/:id - Get, update or delete post with _id_ \s\s
/posts/:id/edit - Edit your post with _id_ \s\s

/posts/:id/reviews/ - Get reviews of post wit _id_ \s\s
/posts/:id/reviews/:review*id - Get, update or delete review with \_review_id* \s\s
/posts/:id/reviews/:review*id/edit - Edit review with \_review_id* \s\s
