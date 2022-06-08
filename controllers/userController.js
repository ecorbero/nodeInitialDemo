
"use strict";

const userGet = (req, res) => {
  try {
    res.status(200).json({
      name: "Enric",
      edat: "25",
      url:  req.protocol + '://' + req.get('host') + req.originalUrl,
    });
  } catch (error) {
    res.status(500).json({ message: `Error` });
  }
};

module.exports =  userGet;