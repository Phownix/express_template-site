import express, { json } from "express";
import nunjucks from "nunjucks";
import compression from "compression";
import http from "http";
import https from "https";
import fs from "fs";
import 'dotenv/config';

import { HomeRouter } from "./pages/Home.js";
import { DocumentsRouter } from "./pages/Documents.js";

const app = express();
const port = process.env.PORT || '3000';

// SSL Options
const options = process.env.SSL_FOLDER ? {
    key: fs.readFileSync(process.env.SSL_FOLDER+"/selfsigned.key"),
    cert: fs.readFileSync(process.env.SSL_FOLDER+"/selfsigned.crt"),
} : {};

const server = process.env.SSL ? https.createServer(options, app) : http.createServer(app);

// Nunjucks
nunjucks.configure(["views/"], {
    autoescape: true,
    express: app
});

app.set('trust proxy', 1)

// Middlewares
app.set('view engine', 'html');
app.use(json());
app.use(compression());
app.use('/', express.static('public'));

app.use(async (req, res, next) => {
    app.locals.url = req.url
    res.set({"X-Powered-By": "Express Template Site - MIT License"});
    next();
});

// Pages
app.use("/", HomeRouter);
app.use("/docs", DocumentsRouter);

// 404
app.use((req, res, next) => {
    console.error(`Error 404: ${req.url}`);

    res.status(404).render("Error", {
        error_type: "404",
        error_name: "Page not found </br>"+req.url
    });
});

app.use((err, req, res, next) => {
    console.error(`Error 500: ${err}`);

    res.status(500).render("Error", {
        error_type: "500",
        error_name: err || "Internal Server Error"
    });
});

// SetUp server
server.listen(port, () => {
    console.debug('Server on http://localhost:'+port)
});