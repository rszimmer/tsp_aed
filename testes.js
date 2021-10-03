//podia ser uma forma de achar os caminhos
tspRough = function(tspMatrix, startNode) {
    var startNode = start_node.getStartNode();
    var endNode = startNode;
    var nodeNum = startNode;
    var presentNode = tspMatrix[nodeNum];
    var passedNodes = [];
    var pathsVerified = [];
    var smallesValue;

    while(passedNodes.length != presentNode.length) {
        if(presentNode[0] != 0) smallesValue = {value: presentNode[0], position: 0};
        else smallesValue = {value: presentNode[1], position: 1};
        
        for(var i = 0; i < presentNode.length; i++) {
            if(presentNode[i] < smallesValue.value && presentNode[i] != 0) {
                if(passedNodes == [] || !passedNodes.find(e => e.position == i? true : false))
                    smallesValue = {value: presentNode[i], position: i};
            }
        }
    
        passedNodes.push(smallesValue);
        presentNode = tspMatrix[smallesValue.position];
    }
    
    console.log(passedNodes);
    
}