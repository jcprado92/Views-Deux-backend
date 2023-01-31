// NAME INPUT VALIDATION
const validateName = (req, res, next) => {
  console.log("name is being checked");
  const { name } = req.body;
  if (name) {
    console.log("we have got a name here!");
    next();
  } else {
    res.status(400).json({ error: "We need a name..." });
  }
};
// LOCATION INPUT VALIDATION
const validateLocation = (req, res, next) => {
  console.log("location is being checked");
  const { location } = req.body;
  if (location) {
    console.log("we have got a location!");
    next();
  } else {
    res.status(400).json({ error: "We need a location..." });
  }
};
// BOOLEAN INPUT VALIDATION
const validateIsFav = (req, res, next) => {
  console.log("Is_favorite is being checked");
  const { is_favorite } = req.body;

  if (
    is_favorite == "true" ||
    is_favorite == "false" ||
    is_favorite == undefined
  ) {
    next();
  } else {
    res.status(400).json({ error: "is_favorite must be a boolean value" });
  }
};
// URL INPUT VALIDATION
// const validateURL = (req, res, next) => {
//   if (
//     req.body.url.substring(0, 7) === "http://" ||
//     req.body.url.substring(0, 8) === "https://"
//   ) {
//     return next();
//   } else {
//     res
//       .status(400)
//       .json({ error: "You forgot to start your url with http:// or https://" });
//   }
// };

module.exports = { validateName, validateLocation, validateIsFav};//, validateURL };
