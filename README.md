# Svelte - Firebase

A free template that you can use to create new applications using Svelte and Firebase.

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
_src/config/firebase.js_ (If you don't have a Firebase project you can create one in the
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

Update .firebaserc with your project ID

### Deployment

Launch the development server

```bash
yarn dev
```

Visit http://localhost:5000

### Deployment

Rembember to activate cloud firestore, storage and hosting in the Firebase console.

```bash
yarn deploy
```

Enjoy

## Credits

Svelte-Firebase has been created by [Jorge Alvarez](https://www.alvareznavarro.es).

## License

[Released under MIT license](http://www.opensource.org/licenses/MIT)
