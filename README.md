# Svelte - Firebase

A free template that you can use to create new applications using Svelte and Firebase.

You can see a live demo here: [https://svelte-firebase-template.web.app/](https://svelte-firebase-template.web.app/)

## Features

- Powerfull routing system with nested layouts.
- Public and Private sections
- Form validation
- Preconfigured pages for Home, Login, Signup and more...
- Secure your database with Firebase rules
- Fully resposive theme
- And many more...

## Usage

Grab a copy of the template and install the dependencies:

```bash
git clone https://github.com/jorgegorka/svelte-firebase my-app-name
cd my-app-name && yarn install
```

Add your Firebase configuration info to
_src/config/settings.js_

If you don't have a Firebase project you can create one in the
[Firebase website](https://firebase.google.com/)

Activate cloud firestore, storage and hosting in the Firebase console

```javascript
const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
}
```

**Update .firebaserc with your project ID**

Install all the dependencies required by functions.

```bash
cd functions
npm i
```

Now we want to deploy all the rules, indexes and cloud functions to Firebase.


```bash
yarn deploy
```

This first first deployment will setup Firebase so everything is ready for development.

### Development

Launch the development server

```bash
yarn dev
```

Visit [http://localhost:5000](http://localhost:5000)

To add new pages edit the routes files at _src/lib/routes_

There are public and protected routes. Protected routes require the visitor to be authenticated before accesing them.

There are two complete CRUD examples: Teams and Employees.

### Deployment

Rembember to activate cloud firestore, storage and hosting in the Firebase console before deploying for the first time.

```bash
yarn deploy
```

Enjoy

## Contribute

Your comments, suggestions and improvements are [very welcome](https://github.com/jorgegorka/svelte-firebase/issues).

## Credits

Svelte-Firebase has been created by [Jorge Alvarez](https://www.alvareznavarro.es).

## License

[Released under MIT license](http://www.opensource.org/licenses/MIT)
