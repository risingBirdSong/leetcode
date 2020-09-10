/* eslint-disable no-undefined */
'use strict';
const queueCreator = () => {
  const queue = [];
  return {
    add(x) {
      queue.unshift(x);
    },
    remove() {
      if (queue.length === 0) {
        return undefined;
      }
      return queue.pop();
    },
    next() {
      if (queue.length === 0) {
        return undefined;
      }
      return queue[queue.length - 1];
    },
    get length() {
      return queue.length;
    },
    empty() {
      return queue.length === 0;
    },
  };
};

const nodeCreator = (id) => {
  const neighbors = [];
  return {
    id,
    neighbors,
    addNeighbors(node) {
      neighbors.push(node);
    },
  };
};

const graphCreator = (uni = false) => {
  const nodes = [];
  const edges = [];
  return {
    uni,
    nodes,
    edges,
    addNode(id) {
      nodes.push(nodeCreator(id));
    },
    searchNode(id) {
      return nodes.find(n => n.id === id);
    },
    addEdge(idOne, idTwo) {
      const a = this.searchNode(idOne);
      const b = this.searchNode(idTwo);

      a.addNeighbors(b);
      if (!uni) {
        b.addNeighbors(a);
      }
      edges.push(`${idOne}${idTwo}`);
    },
    display() {
      return nodes.map(({ neighbors, id, }) => {
        let output = `${id}`;
        if (neighbors.length) {
          output += ` => ${neighbors.map(node => node.id).join(' ')}`;
        }
        return output;
      }).joing('\n');
    },
  };
};

const breadthFirst = (startingNode, neighborVisit) => {
  const firstNode = this.searchNode(startingNode);
  const visitedNode = nodes.reduce((sum, node) => {
    sum[node.id] = false;
    return sum;
  }, {});
  const queue = queueCreator();
  queue.add(firstNode);
  while (!queue.empty()) {
    const temp = queue.remove();
    if (!visitedNode[temp.id]) {
      neighborVisit(temp);
      visitedNode[temp.id] = true;
    }
    temp.neighbors.forEach(node => {
      if (!visitedNode[node.id]) {
        queue.add(node);
      }
    });
  }
};

const graph = graphCreator(true);
graph.addNode('a');
graph.addNode('b');
graph.addNode('c');
graph.addNode('d');
graph.addNode('e');
graph.addNode('f');
graph.addEdge('a', 'c');
graph.addEdge('a', 'e');
graph.addEdge('b', 'a');
graph.addEdge('b', 'c');
graph.addEdge('c', 'd');
graph.addEdge('c', 'e');
graph.addEdge('d', 'e');
graph.addEdge('e', 'f');
graph.addEdge('f', 'e');

graph.breadthFirst('c', node => {
  console.log(node.id);
});