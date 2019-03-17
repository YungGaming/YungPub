import { Schema } from 'mongoose';

export interface PlayerInterface {
    pubgId: string;
    shardId: string;
    name: string;
    dateCreated: number;
    dateUpdated: number;
}

export const PlayerModel = new Schema({
    pubgId: String,
    shardId: String,
    name: String,
    dateCreated: Number,
    dateUpdated: Number,
});
