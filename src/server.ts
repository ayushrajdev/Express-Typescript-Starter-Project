import express from 'express';

const app= express();
app.use("/", function (_, res) {
    res.end('hello form server')
})
app.listen(3000);
