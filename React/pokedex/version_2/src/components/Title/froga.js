"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
function update(msg, model) {
    switch (msg) {
        case "increment":
            return __assign(__assign({}, model), { count: model.count + 1 });
        case "decrement":
            return __assign(__assign({}, model), { count: model.count - 1 });
        default:
            return model;
    }
}
function view(model) {
    return "<div>".concat(model.count, "</div>\n        <button onclick=\"app.ports.msg.send('increment')\">+</button>\n        <button onclick=\"app.ports.msg.send('decrement')\">-</button>");
}
var app = {
    init: { count: 0 },
    view: view,
    update: update,
    ports: {
        msg: new BroadcastChannel("msg"),
    },
};
var model = app.init;
while (true) {
    var message = await app.ports.msg.receive();
    model = app.update(message, model);
    console.log(app.view(model));
}
