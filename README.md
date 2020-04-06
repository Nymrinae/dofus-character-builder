# Dofus Character Builder

<p align="center">
  <img src="https://imgur.com/Jnj50XZ.png" style="margin: 0 auto;">
</p>

<p align="justify">
Dofus Character Builder is a personal project presenting an interface where you can try a build for your character (items, stats...). This app has been built for <b>learning</b> purposes.
<br>It <b>does not aim</b> (and can't at all tbh) <b>to replace </b> any current existing builders (Dofusbook...) and <b> does not aim to be used </b> by someone since there is still some bugs and a lot of missing stuff.<br><br>
Because of some assets not showing errors (despite using ANKAMA urls), I added a repo where I uploaded all items, mounts, pets... assets. This repo will be deleted when this issue will be fixed.<br>You can find it here: <a href="https://github.com/Nymrinae/dofus-assets"> dofus-assets </a>
</p>

## Table of Contents
- [Stack](#stack)
- [Installation](#installation)
- [Features](#features)
- [FAQ](#faq)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)
- [License](#license)

## Stack

- Vue.js
- VueX (state management)
- Firebase

## Installation

#### Clone
- Clone this repo to your local machine using `https://github.com/Nymrinae/dofusCharBuilder`

#### Setup

Create a Firebase Cloud Firestore and replace the content of **.env.example** file, and rename it to **.env**

```sh
BASE_URL=http://localhost:3000

FIREBASE_APIKEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_DATABASE_URL=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
FIREBASE_APP_ID=
```

#### Launch

```sh
# install dependencies
$ npm install

# run for developement
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start
```

## Features
- Change character class/sex
- Add items to character build
- Update stats (+ scrolls)
- Load and save builds

## FAQ
- **Is this app going to be translated in English ?**
   - No.

## Authors
- [Nymrinae](https://github.com/Nymrinae)


## Acknowledgments
- [DofAPI](https://dofapi.fr/) for their API.
- [Dofusbook](https://www.dofusbook.net/fr) for some stats and thinking design
- [Dofusbuilder](https://dofusbuilder.com/) for thinking design

All assets are the property of ANKAMA.

## Licence
This project is under the MIT License. See the [LICENSE.md](./LICENSE.md) file for more details.
