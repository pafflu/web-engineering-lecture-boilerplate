import './util/load-env.js';
import express from 'express';
import {apiRouter} from "./api.js";
// import path from 'node:path';

const app = express();

app.use('/api', apiRouter);

/*########## FRONTEND AUSLIEFERN ##########

app.use(express.static(process.env.FRONTEND_DIST_PATH));
app.use((req, res) => {
    res.sendFile(path.join(__dirname, process.env.FRONTEND_DIST_PATH, 'index.html'))
});

########################################*/

app.listen(process.env.NODE_PORT, () => {
    console.log(`App listening at http://localhost:${process.env.NODE_PORT}`)
});
