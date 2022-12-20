"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const router = (0, express_1.Router)();
router.get('/', controllers_1.usersController.getAll);
router.get('/:email', middlewares_1.verifyJwt, controllers_1.usersController.getUser);
router.post('/login', middlewares_1.loginMiddleware, controllers_1.usersController.login);
router.post('/signup', middlewares_1.signupMiddleware, controllers_1.usersController.signup);
router.put('/:email', middlewares_1.verifyJwt, controllers_1.usersController.update);
exports.default = router;
