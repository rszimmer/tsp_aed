const fs = require('fs');
const { type } = require('os');
const tspR = require('./rough/tsp_rough');
const tspH = require('./aproximado/tsp_heuristic');
const file_transformer = require("./fileTreatment/file_transformer");
const start_node = require('./start_node');

fs.readFile('./data/tsp1_253.txt', 'utf8' , (err, data) => { //1_253, 2_1248, 3_1194,
    if (err) {                                          //4_7013, 5_27603
        console.error(err)
        return
    }
  
    var tspMatrix = file_transformer.toArray(data);
    //console.log(tspMatrix);
    var startNode = parseInt(start_node.getStartNode());

    //tspR.tspRough(tspMatrix, startNode);
    tspH.tspHeuristic(tspMatrix, startNode);

});
