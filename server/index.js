import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App';
import template from '../templates/html';

const server = express();

server.use('/build', express.static('build'));

server.get('/:text?', (req, res) => {
    console.log('::: / ', req.params);

    const initialState = {
        ssr: true,
        text: req.params.text
    };

    const appString = renderToString(<App {...initialState} />);

    res.send(template({
        body: appString,
        title: 'Hello World',
        initialState: JSON.stringify(initialState)
    }));
});

server.get('/ssr/:text?', (req, res) => {
    console.log('::: /ssr ', req.params);

    const initialData = {
        ssr: true,
        text: req.params.text
    };

    const appString = renderToString(<App {...initialData} />);

    res.send(appString);
});

server.listen(22222, () => {
    console.log("Server listening on port 22222!");
});
