const { Router } = require ("express");
const userRouter = require ("./userRouter");
const postRouter = require ("./postRouter");

const router = Router ();

router.use ("/moviesusers", userRouter);
router.use ("/moviesposts", postRouter);

module.exports = router;