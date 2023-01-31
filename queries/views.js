const db = require("../db/dbConfig.js");

// INDEX ROUTE
const getAllViews = async () => {
  try {
    const allViews = await db.any("SELECT * FROM views");
    return allViews;
  } catch (err) {
    return err;
  }
};

// VIEW ROUTE
const getView = async (id) => {
  try {
    const oneView = await db.one("SELECT * FROM views WHERE id=$1", id);
    return oneView;
  } catch (err) {
    return err;
  }
};

// CREATE ROUTE
const createView = async (view) => {
  if (!view.url) {
    view.url = "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image";
  }

  try {
    const newView = await db.one(
      "INSERT INTO views (name, url, location, is_favorite) VALUES($1, $2, $3, $4) RETURNING *",
      [view.name, view.url, view.location, view.is_favorite]
    );
    return newView;
  } catch (err) {
    return err;
  }
};

// UPDATE ROUTE
const updateView = async (view, id) => {
  if (!view.url) {
    view.url = "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image";
  }
  try {
    const updatedView = await db.one(
      "UPDATE views SET name=$1, url=$2, location=$3, is_favorite=$4 WHERE id=$5 RETURNING *",[
        view.name, view.url, view.location, view.is_favorite, id
      ]
    );
    return updatedView;
  } catch (err) {
    return err;
  }
};

// DELETE ROUTE
const deleteView = async (id) => {
  try {
    const deletedView = await db.one(
      "DELETE FROM views WHERE id=$1 RETURNING *",
      id
    );
    return deletedView;
  } catch (err) {
    return err;
  }
};
module.exports = { getAllViews, getView, createView, updateView, deleteView };
