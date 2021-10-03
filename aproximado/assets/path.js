const { ifError } = require("assert");
const { WSATYPE_NOT_FOUND } = require("constants");
const { reverse } = require("dns");
const { type } = require("os");
const primMST = require("./primMST");
module.exports = {

    path: function(mst, startNode) {
        console.log('========================MST========================')
        console.log(mst)
        var reverseMst = [];
        var path = [];
        var currentEdge, currentNode = startNode;
        var pathSize;
        var lastVisited;
        var flag = false;

        //Faz a versão da mst onde as arestas tem os nodos ao contrário
        for(var i = 0; i < mst.length; i++) {
            reverseMst.push({source: mst[i].destination,
                destination:mst[i].source,
                weight: mst[i].weight
            })
        }
        console.log('========================MST REVERSA========================')
        console.log(reverseMst)

        pathSize = mst.length+reverseMst.length

        //Condição de parada para sabermos que o contorno está completo: todos os nodos de ambos mst reveso estão
        //no caminho
        //while(path.length < pathSize) {
        for(var i = 0; i < 22; i++) {
            for(var j = 0; j < mst.length; j++) {
                lastVisited = neighbor(mst, currentNode);
                if(lastVisited != undefined){
                    currentEdge = lastVisited;
                    currentNode = currentEdge.element[1];
                    path.push(currentEdge);
                    removeElement(mst, currentEdge);
                    j = 0;
                    flag = true;
                } else break;
            }
            for(var j = 0; j < reverseMst.length; j++){    
                lastVisited = neighbor(reverseMst, currentNode);
                if(lastVisited != undefined) {
                    currentEdge = lastVisited;
                    currentNode = currentEdge.element[1];
                    path.push(currentEdge);
                    removeElement(reverseMst, currentEdge);
                    j = 0;
                    flag = false;
                } else break;
            }

            if((mst.length > 0 || reverseMst.length > 0) && currentNode == startNode) {
                if(flag) {
                    mst.push(currentEdge);
                    currentNode = currentEdge.element[0];
                } else {
                    reverseMst.push(currentEdge);
                    currentNode = currentEdge.element[0];
                }
            }
        }
        console.log('========================CAMINHO========================')
        console.log(path);
        console.log('========================MST========================')
        console.log(mst)
        console.log('========================MST REVERSA========================')
        console.log(reverseMst)
            
    }
}


function removeElement(array, element) {
    for(var i = 0; i < array.length && array[i] != element; i++);
    var removed = array.splice(i, 1);
    return array;
}

function neighbor(mst, currentEdge) {
    for(i = 0; i < mst.length; i++) {
        if(currentEdge == mst[i].element[0]) return mst[i];
    }
    return undefined;
}