const prompt = require("prompt-sync")();

module.exports = {
    getStartNode: function () {
        var node = prompt("Input Starting Node ");
        return node;
    }
}