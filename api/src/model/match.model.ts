import { Schema } from 'mongoose';

export interface MatchInterface {
    pubgId: string;
    shardId: string;
    duration: number;
    mode: string;
    map: string;
    participants: Object;
    telemetry: Object;
    dateCreated: number;
    dateUpdated: number;
}

export const MatchModel = new Schema({
    pubgId: String,
    shardId: String,
    duration: Number,
    mode: String,
    map: String,
    participants: Object,
    telemetry: Object,
    dateCreated: Number,
    dateUpdated: Number,
});