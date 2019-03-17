# PUBG Tracker

![License](https://img.shields.io/badge/license-NONE-blue.svg)
![NPM Version](https://img.shields.io/badge/npm-v6.4.1-blue.svg)
![Node Version](https://img.shields.io/badge/node-v10.14.1-blue.svg)
![Angular Version](https://img.shields.io/badge/angular-v7.1.4-blue.svg)

A straight forward app to review your games. Who've you killed, and, who killed you. See weapon loadouts and other stats of players throughout the game in an easy to view timeseries graph.

## Usage / Running

### WebApp Locally

```bash
# install node modules
yarn # or npm install

# run dev server
ng serve --port 4200

# build for prod
ng build --prod

# deploy to gh-pages
sh deploy.sh
```

### WebApp in Overwolf

```bash
# install node modules
yarn # or npm install

# run Overwolf Reload Dev Task
gulp dev
```

### Api in [/api](./api/README.md)

```bash
# install node modules
yarn # or npm install

# run api server
yarn start
```

Have a question? :mailbox: Email hello@chriscates.ca