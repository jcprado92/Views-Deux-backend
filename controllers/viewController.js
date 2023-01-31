const express = require("express");
const views = express.Router();
const {
  getAllViews,
  getView,
  createView,
  updateView,
  deleteView,
} = require("../queries/views");
const {
  validateName,
  validateLocation,
  validateIsFav,
  // validateURL,
} = require("../validations/checkViews");

// INDEX
views.get("/", async (req, res) => {
  const allViews = await getAllViews();
  if (allViews[0]) {
    res.status(200).json({ payload: allViews, success: true });
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW
views.get("/:id", async (req, res) => {
  const { id } = req.params;
  const view = await getView(id);
  if (view.id) {
    res.json({ payload: view, success: true });
  } else {
    res
      .status(404)
      .json({ payload: "not found", success: false, error: "View not found" });
  }
});

// CREATE
views.post(
  "/",
  validateName,
  validateLocation,
  validateIsFav,
  // validateURL,
  async (req, res) => {
    try {
      const createdView = await createView(req.body);
      if (createdView.id) {
        res.status(200).json({ payload: createdView, success: true });
      } else {
        res
          .status(422)
          .json({ payload: "Could not create View", success: false });
      }
    } catch (err) {
      console.log(err);
    }
  }
);

// UPDATE
views.put(
  "/:id",
  validateName,
  validateLocation,
  validateIsFav,
  // validateURL,
  async (req, res) => {
    const { id } = req.params;
    const updatedView = await updateView(req.body, id);
    if (updatedView.id) {
      res.status(200).json(updatedView);
    } else {
      res.status(404).json({ error: "View not found" });
    }
  }
);
// DELETE
views.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedView = await deleteView(id);
  if (deletedView.id) {
    res.status(200).json({ payload: deletedView, success: true });
  } else {
    res.status(404).json({ payload: "View not found", success: false });
  }
});

module.exports = views;
