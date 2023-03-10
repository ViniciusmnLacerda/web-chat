"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require('dotenv').config();
const secret = process.env.JWT_SECRET || 'secret';
const jwtConfig = {
    algorithm: 'HS256',
    expiresIn: '1d',
};
const createToken = (user) => {
    const token = jsonwebtoken_1.default.sign({ user }, secret, jwtConfig);
    return token;
};
exports.createToken = createToken;
