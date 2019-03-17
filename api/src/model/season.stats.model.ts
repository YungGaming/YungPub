import { Schema } from 'mongoose';

export interface SeasonStatsInterface {
    pubgId: string;
    seasonType: string;
    seasonId: string;
    statsType: string;
    data: object;
    dateCreated: number;
    dateUpdated: number;
}

export const SeasonStatsModel = new Schema({
    pubgId: String,
    seasonType: String,
    seasonId: String,
    statsType: String,
    data: Object,
    dateCreated: Number,
    dateUpdated: Number,
});
