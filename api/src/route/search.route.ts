import { pubgApi } from '../config';
import { ResponseTemplate, Response, code } from '../service/response.service';
import { FindPlayer, FindMatch, FindSeasons } from '../service/pubg.service';

export async function SearchPlayer(req, res) {
    let response: Response = ResponseTemplate();

    try {
        response.response = await FindPlayer(req.query.name);
    } catch (error) {
        console.log(error);
        response.code = 500;
        response.message = code(500);
    }

    return res.status(response.code).send(response);
}

export async function SearchMatch(req, res) {
    let response: Response = ResponseTemplate();

    try {
        response.response = await FindMatch(req.query.match);
    } catch (error) {
        console.log(error);
        response.code = 500;
        response.message = code(500);
    }

    return res.status(response.code).send(response);
}

export async function SearchSeasons(req, res) {
    let response: Response = ResponseTemplate();

    try {
        response.response = await FindSeasons();
    } catch (error) {
        console.log(error);
        response.code = 500;
        response.message = code(500);
    }

    return res.status(response.code).send(response);
}