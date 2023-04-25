/* eslint-disable prettier/prettier */
interface Model {
    count: number;
}

type Msg = "increment" | "decrement";

function update(msg: Msg, model: Model): Model {
    switch (msg) {
        case "increment":
        return { ...model, count: model.count + 1 };
        case "decrement":
        return { ...model, count: model.count - 1 };
        default:
        return model;
    }
}

function view(model: Model): string {
    return `<div>${model.count}</div>
        <button onclick="app.ports.msg.send('increment')">+</button>
        <button onclick="app.ports.msg.send('decrement')">-</button>`;
}

const app = {
    init: { count: 0 },
    view: view,
    update: update,
    ports: {
        msg: new BroadcastChannel("msg"),
    },
};

let model = app.init;

while (true) {
    const message = await app.ports.msg.receive();
    model = app.update(message, model);
    console.log(app.view(model));
}

export {}