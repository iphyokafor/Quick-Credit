const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
import router from './routes/index';

const app = express();

const corsOptions = {
    origin: 'http://localhost:4041',
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', router);

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to quick credit!' });
});

const PORT = 4040;
// const PORT = process.env.PORT || 4040;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);
});