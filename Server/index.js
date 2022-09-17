import express from 'express';
import bodyParser from 'body-parser';

import router from './routes/router.js'
const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use('/',router);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));