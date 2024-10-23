export default class KanbamAPI {
    static getItens(columId) {
        const column = read().find(column => column.id == columId);

        if (!column) {
            return [];
        }

        return column.items;
    }

    static insertItens(columId, content) {
        const data = read();

        const column = data.find(column => column.id == columId);

        const item = {
            id: Math.floor(Math.random() * 100000),
            content
        };

        if (!column) {
            throw new Error("Column not found");
        }

        column.items.push(item);
        save(data);

        return item;
    }

    static updateItens(itemId, newProps) {
        const data = read();
        const [item, currentColumn] = (() => {
            for (const column of data) {
                const item = column.items.find(item => item.id == itemId);

                if (item) {
                    return [item, column];
                }
            }
        })();
        if (!item) {
            throw new Error("Item not found");
        }

        item.content = newProps.content === undefined ? item.content : newProps.content;
    }
}

function read() {
    const json = localStorage.getItem("kanban-data");

    if (!json) {
        return [
            {
                id: 1,
                items: [],
            },
            {
                id: 2,
                items: [],
            },
            {
                id: 3,
                items: [],
            },
        ];
    }

    return JSON.parse(json);
}


function save(data) {
    localStorage.setItem("kanban-data", JSON.stringify(data));
}