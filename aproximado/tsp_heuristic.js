const primMST = require("./assets/primMST");
const path = require("./assets/path");

module.exports = {
    tspHeuristic: function(tspMatrix, startNode) {
        var mst, mid;
        mst = primMST.primsMST(tspMatrix, startNode);
        // mst.forEach(element => {
        //     console.log(element); 
        // });

        //path.path(tspMatrix, mst, startNode);
    }
}