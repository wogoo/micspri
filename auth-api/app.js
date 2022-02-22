import express from "express";

const app = express();
const env = process.env;
const PORT = env.PORT || 8080; // default port to listen

app.get('/api/status', (req, res) => {
    return res.status(200).json({ 
        service: "Auth-API",
        status: "UP",
        httpStatus: 200,

    })
})


app.listen(PORT, () => { // listen on port
    console.info(`Server started successfully at port ${PORT}`); 
})