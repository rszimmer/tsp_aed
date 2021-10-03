module.exports = {
    tree: function(mst) {
        var tree = [];
        for(var i = 0; i < mst.length; i++) {
            tree.push({
                source: mst[i].element[0],
                destination: mst[i].element[1],
                weight: mst[i].priority
            });
        }
        return tree;
    }
}