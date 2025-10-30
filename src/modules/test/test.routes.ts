import express from "express";
import TestControllers from "./test.controllers";

const router = express.Router();

router.post("/create", TestControllers.createTest);

const TestRoutes = router;
export default TestRoutes;