const start_node = require('../start_node');
const sos = require('./factorial');

module.exports = {   
    tspRough: function(tspMatrix, startNode) {
        var passedNodes = []
        passedNodes.push(startNode);
        var neighborsValues = tspMatrix[startNode];
        var nextNode, sum=0;
        var pathsVerified = [], sumsVerified = [];

        
        while(pathsVerified.length < sos.fat(neighborsValues.length-1)) {
            while(neighborsValues.length > passedNodes.length) {
                //console.log("funfa 1: " + pathsVerified);
                nextNode = Math.trunc(Math.random() * (neighborsValues.length - 0) + 0);
                
                if(undefined==passedNodes.find(e => e==nextNode)) {
                    passedNodes.push(nextNode);
                    sum += neighborsValues[nextNode];
                    neighborsValues = [];
                    neighborsValues = tspMatrix[nextNode];
                }
            }

            sum = sum+neighborsValues[startNode];
            passedNodes.push(startNode);
            //console.log(passedNodes);
            //console.log(sum)
            if(undefined==pathsVerified.find(e => e==passedNodes || pathsVerified == [])){
                pathsVerified.push(passedNodes);
                sumsVerified.push(sum);
            }
            
            passedNodes = []
            passedNodes.push(startNode);
            neighborsValues = tspMatrix[startNode];
            nextNode=0;
            sum=0;
        }
        console.log(pathsVerified[pathsVerified.length-1])
        console.log(Math.min(...sumsVerified))

    }
}
