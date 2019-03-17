import 'colors';
import { sqsClient } from './config';

export async function process(message) {
    try {
        console.log('Received Message', message);
        throw new Error('Well...');
    } catch (error) {
        console.log('error processing retrying in 5 seconds');
        setTimeout(() => { process(message); }, 5000);
    }
}

export function worker() {
    sqsClient.pollQueue({}, process);
}

worker();
