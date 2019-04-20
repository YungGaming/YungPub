# Yung Pub Data Cache / REST API

![License](https://img.shields.io/badge/license-GPLv3-blue.svg)
![NPM Version](https://img.shields.io/badge/npm-v6.4.1-blue.svg)
![Node Version](https://img.shields.io/badge/node-v10.14.1-blue.svg)

## Running in development mode

```bash
# Install node_modules
yarn

# If nodemon is not installed
yarn global add nodemon

# Run with nodemon
yarn start # or just `nodemon`
```

## Running in production or beta mode

We suggest to use PM2. It's the most stable and easiest to use process manager for Node. You can obviously use your own process manager if you wish.

```bash
# Install node_modules
yarn

# If pm2 is not installed
yarn global add pm2

# Build the project
yarn build

# Configure your environment
export NODE_ENV='production'
...

# Run with pm2
pm2 start dist/server.js --name DC_API
```


## Configuring for beta and production deployments

Please make sure you have these environment variables configured in order for the API to function properly. The below environment variables are based on the default configurations:

```bash
# Server Configuration
export PORT=3000
export NODE_ENV='development'
export SESSION_SECRET='YungPub' # Suggestion: create a custom one via SHA or some Checksum.
export MONGO_URL='mongodb://localhost/yungpub'
export CORS_URL='origin' # Origin will allow preflight from the originating URI.
export LOGGING=1 # 1 will have verbose logging via Morgan. 0 will not log anything.

# PUBG API Key
export PUBG_KEY='xxxxx'

# AWS Keys (for SQS)
export AWS_QUEUE='off'
export AWS_KEY='xxxx'
export AWS_SECRET='xxxx'
export AWS_QUEUE_URL='http://...'
```

## AWS SQS

If you want to process and sync data through SQS you can enable it by adding your AWS Key and Secret. Just make sure to set `AWS_QUEUE` to `on`:

```bash
export AWS_QUEUE='on'
```

Make sure to add your key and secret as well too.

### Web Workers

In order to run as a web worker node (for SQS messages) run:

```bash
npm run worker
# or
yarn worker
```
