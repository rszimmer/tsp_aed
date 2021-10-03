const PriorityQueue = require('./priorityQueue');
const Tree = require('./tree')
const Path = require('./path2');

module.exports = {
    primsMST: function(originalGraph, startNode) {

        var mst = [];


    // Select first node as starting node
    let s = 0;


    // Create a Priority Queue and explored set
    let edgeQueue = new PriorityQueue();
    let explored = new Set();
    explored.add(s);
    nodeWeights = originalGraph[s];


    // Add all edges from this starting node to the PQ taking weights as priority
    for(var i = 0; i < nodeWeights.length; i++) {
        if(nodeWeights[i]!=0){
            edgeQueue.enqueue([s, i], nodeWeights[i]); 
        }
    }

    // Take the smallest edge and add that to the new graph
    let currentMinEdge = edgeQueue.dequeue();
    while (!edgeQueue.isEmpty()) {

        // Continue removing edges till we get an edge with an unexplored node
        while (!edgeQueue.isEmpty() && explored.has(currentMinEdge.element[1])) {
            currentMinEdge = edgeQueue.dequeue();
        }
        let nextNode = currentMinEdge.element[1];


        // Check again as queue might get empty without giving back unexplored element
        if (!explored.has(nextNode)) {
            mst.push(currentMinEdge);
            // Again add all edges to the PQ
            nodeWeights = originalGraph[nextNode];
            for(var i = 0; i < nodeWeights.length; i++) {
                if(nodeWeights[i]!=0){
                    edgeQueue.enqueue([nextNode, i], nodeWeights[i]); 
                }
            }
            //console.log(edgeQueue);


            // Mark this node as explored explored.add(nextNode);
            explored.add(nextNode)
            s = nextNode;
        }
    }

    Path.path(Tree.tree(mst), startNode, originalGraph.length);

    return mst;

        //return Path.DFS(mst, startNode)
    }

}
//Prims algorithm from: https://www.tutorialspoint.com/Prim-s-algorithm-in-Javascript