const ToDo = require("./todo");

const searchId = async (id) => {
    const filter = { id: id };
    return await ToDo.exists(filter);
}

module.exports = searchId;