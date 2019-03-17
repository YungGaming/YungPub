import { Player, Match, Season } from 'pubg-typescript-api';
import {
    MatchInterface,
    Match as MatchDB,
    PlayerInterface,
    Player as PlayerDB,
    SeasonInterface,
    Season as SeasonDB,
} from '../model';
import { pubgApi } from '../config';

export async function FindPlayer(name: string) {
    try {
        const OriginalPlayer = await PlayerDB.findOne({ name });

        if (OriginalPlayer) {
            return OriginalPlayer;
        } else {
            const player = await Player.filterByName(pubgApi, [name]);

            const NewPlayerObject: PlayerInterface = {
                pubgId: player[0].id,
                shardId: 'steam',
                name: player[0].name,
                dateCreated: Number(new Date()),
                dateUpdated: Number(new Date()),
            };

            const NewPlayer = new PlayerDB(NewPlayerObject);
            NewPlayer.save();

            return NewPlayer;
        }
    } catch (error) {
        return error;
    }
}

export async function FindMatch(matchId) {
    try {
        const OriginalMatch = await MatchDB.findOne({ pubgId: matchId });

        if (OriginalMatch) {
            return OriginalMatch;
        } else {
            const match = await Match.get(pubgApi, matchId);
            const telemetry = await match.getTelemetry(pubgApi);
    
            const NewMatchObject: MatchInterface = {
                pubgId: match.id,
                shardId: match.shardId,
                duration: match.duration,
                mode: match.gameMode,
                map: match.map,
                participants: match.participants,
                telemetry: telemetry,
                dateCreated: Number(new Date()),
                dateUpdated: Number(new Date()),
            }
    
            const NewMatch = new MatchDB(NewMatchObject);
            NewMatch.save();
    
            return NewMatch;
        }
    } catch (error) {
        return error;
    }
}

export async function SyncSeasons() {
    try {
        const seasons = await Season.list(pubgApi);
        const SeasonData = [];
        
        for (let i = 0; i < seasons.length; i++) {
            const season = seasons[i];
            const OriginalSeason = await SeasonDB.findOne({ pubgid: season.id });

            if (OriginalSeason) {
                SeasonData.push(OriginalSeason);
            } else {
                const NewSeasonObject: SeasonInterface = {
                    pubgId: season.id,
                    currentSeason: season.isCurrentSeason,
                    offSeason: season.isOffSeason,
                    dateCreated: Number(new Date()),
                    dateUpdated: Number(new Date()),
                }

                const NewSeason = new SeasonDB(NewSeasonObject);
                await NewSeason.save();

                SeasonData.push(NewSeason);
            }
        }

        return SeasonData;
    } catch (error) {
        return error;
    }
}

export async function FindSeasons() {
    try {
        return await SeasonDB.find();
    } catch (error) {
        return error;
    }
}