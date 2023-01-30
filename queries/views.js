const db = require('../db/dbConfig.js')

const getAllViews = async () => {
    try{
        const allViews = await db.any('SELECT * FROM views');
        return allViews
    }catch(err){
        return err
    }
}

const getView = async (id) => {
    try{
        const oneView = await db.one('SELECT * FROM views WHERE id=$1', id);
        return oneView;
    }catch(err){
        return err
    }
}

const createView = async (view) => {
    if(!view.url){
        view.url = "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image"
    }

    try{
        const newView = await db.one('INSERT INTO views (name, url, location, is_favorite) VALUES($1, $2, $3, $4) RETURNING *', [view.name, view.url, view.location, view.is_favorite]
        );
        return newView
    }catch(err){
        return err;
    }
}

module.exports = { getAllViews, getView, createView };