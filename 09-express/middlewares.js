const express = require("express");

const app = express();

app.get("/health-checkup", function (req, res) {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  if (!(username === "vaishali") || password === "pass") {
    res.status(400).json({ msg: "something up with your inputs" });
    return;
  }

  if (kidneyId != 1 && kidneyId != 2) {
    // do something with kidney here
    res.status(400).json({ msg: "something up with your inputs" });
    return;
  }

  res.json({
    msg: "Your kidney is fine!",
  });
});

app.listen(4000);
