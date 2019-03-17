import { Schema } from 'mongoose';

export interface SeasonInterface {
    pubgId: string;
    currentSeason: boolean;
    offSeason: boolean;
    dateCreated: number;
    dateUpdated: number;
}

export const SeasonModel = new Schema({
    pubgId: String,
    currentSeason: Boolean,
    offSeason: Boolean,
    dateCreated: Number,
    dateUpdated: Number,
});
