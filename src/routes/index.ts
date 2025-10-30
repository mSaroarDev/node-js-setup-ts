import express from 'express';

const router = express.Router();

import TestRoute from '../modules/test/test.routes';

const routes = [
  { path: "/", route: TestRoute },
];

routes.forEach((route) => router.use(route.path, route.route));

export default router;