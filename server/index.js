import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
const port = 5000;
app.use(cookieParser());
app.use(cors());

app.post("/cookie", (req, res) => {
  res
    .status(200)
    .cookie("cookieName", "cookieValue", {
      //httpOnly: true,
      secure: true,
      sameSite: "None",
      path: "/",
      domain: "localhost",
    })
    .json({ success: "success" });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
