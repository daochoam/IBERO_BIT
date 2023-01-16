"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App_Server = void 0;
// Server Class
const express_1 = __importDefault(require("express"));
class App_Server {
    constructor(PORT) {
        this.PORT = PORT;
        this.server = (0, express_1.default)();
        this.settings();
    }
    settings() {
        this.server.set('PORT', this.PORT || process.env.PORT || 3000);
    }
    listen() {
        this.server.listen(this.server.get('PORT'), () => console.log('Server on port', this.server.get('PORT')));
    }
}
exports.App_Server = App_Server;
