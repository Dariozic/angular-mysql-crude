"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class DominiosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('dominios'));
    }
}
const dominiosRoutes = new DominiosRoutes();
exports.default = dominiosRoutes.router;
