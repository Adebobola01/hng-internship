const express = require("express");

const app = express();

const data = {
    slackUsername: "adebobolamuhydeen",
    backend: true,
    age: 21,
    bio: "my name is Adebobola, i'm a developer with interest in web3",
};

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "POST, GET, OPTIONS, PUT, DELETE, PATCH"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
    );
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }
    next();
});

app.get("/", (req, res, next) => {
    res.status(200).json(data);
});

app.listen(process.env.PORT || 2000);
