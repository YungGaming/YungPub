// Global Environment Variables
export const port = process.env.PORT || 3000;
export const env = process.env.NODE_ENV || 'development';
export const testing = process.env['LOADED_MOCHA_OPTS'];
export const sessionSecret = process.env.SESSION_SECRET || 'yungpub';
export const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/yungpub';
export const cors = process.env.CORS_URL || 'origin';
export const logging = process.env.LOGGING || 1;
export const cwd = process.cwd();

// PUBG API Configuration
import * as PUBG_API from 'pubg-http-api';
import { PlatformRegion, PubgAPI } from 'pubg-typescript-api';
export const pubgKey = process.env.PUBG_KEY || '';
export const pubgApi = new PubgAPI(pubgKey, PlatformRegion.PC_NA);

console.log(`PUBG API Key is ${pubgKey}\n`.green);

// AWS SQS Configuration
import * as SQS from '@meadow/sqs';
export const awsQueue = process.env.AWS_QUEUE || 'off';
export const awsQueueUrl = process.env.AWS_QUEUE_URL || '';
export const awsKey = process.env.AWS_KEY || '';
export const awsSecret = process.env.AWS_SECRET || '';
export let sqsClient: SQS;

if (awsKey && awsSecret) {
    console.log(`AWS Key: ${awsKey}`.green.bold);
    console.log(`AWS Secret: ${awsSecret}`.green.bold);
} else {
    console.log(`AWS Keys are not configured`.green.bold);
}

console.log(`SQS Queues are ${awsQueue === 'off' ? 'are not' : 'are'} enabled\n`.green.bold);

if (awsQueue === 'on') {
    console.log(`SQS Queue URL is ${awsQueueUrl}\n`.green.bold);

    sqsClient = new SQS({
        region: 'us-east-1',
        accessKeyId: awsKey,
        secretAccessKey: awsSecret,
        queue: awsQueueUrl,
    });

    sqsClient.sendMessage({
        type: 'TEST',
        payload: {
            'hello': 'world'
        }
    });
}
