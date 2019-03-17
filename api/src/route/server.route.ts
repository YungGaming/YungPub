export const startTime = Number(new Date());

export async function ServerInfo(req, res, next) {
    const serverTime = Number(new Date());
    const upTime = serverTime - startTime;

    return res.status(200).send({
        'status': 'OK',
        startTime,
        serverTime,
        upTime,
    });
}
