const router = require("express").Router();
module.exports = router;

router.get("/", async(req, res, next)=> {
    try {
        // get the data from server (maybe database)
        // send back to client

        //res.json()
    } catch (error) {
        next(error)
    }
})