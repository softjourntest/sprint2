/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.start = async (session, models, vars) => {
    await session.transform.sprint22.start();
    await session.transform.w4.start();
};