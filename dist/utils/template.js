"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
var ejs = require("ejs");
exports.render = function (content, data) {
    return ejs.render(content, data);
};
//# sourceMappingURL=template.js.map