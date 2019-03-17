import * as Mongoose from 'mongoose';
import { mongoUrl } from './config';

import { PlayerInterface, PlayerModel } from './model/player.model';
import { SeasonInterface, SeasonModel } from './model/season.model';
import { SeasonStatsInterface, SeasonStatsModel } from './model/season.stats.model';
import { MatchInterface, MatchModel } from './model/match.model';

Mongoose.connect(mongoUrl);

const Player = Mongoose.model('Player', PlayerModel);
const Season = Mongoose.model('Season', SeasonModel);
const SeasonStats = Mongoose.model('SeasonStats', SeasonStatsModel);
const Match = Mongoose.model('Match', MatchModel);

export {
    PlayerInterface,
    Player,
    SeasonInterface,
    Season,
    SeasonStatsInterface,
    SeasonStats,
    MatchInterface,
    Match,
}
