const db = require('../db/dbConfig.js')

const getAllViews = async () => {
    try{
        const allViews = await db.any('SELECT * FROM views');
        return allViews
    }catch(err){
        return err
    }
}
module.exports = { getAllViews };