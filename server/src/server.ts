import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    return response.json({ message: 'Hello World'})
})


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(routes);

app.listen(3333);

