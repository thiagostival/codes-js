// Converts an edgelist to an adjacency list representation
// In this program, we use a dictionary as an adjacency list,
// where each key is a vertex, and each value is a list of all
// vertices adjacent to that vertex
var convert_edgelist_to_adjlist = function (edgelist) {
  var adjlist = {};
  var i, len, pair, u, v;
  for (i = 0, len = edgelist.length; i < len; i += 1) {
    pair = edgelist[i];
    u = pair[0];
    v = pair[1];
    if (adjlist[u]) {
      // append vertex v to edgelist of vertex u
      adjlist[u].push(v);
    } else {
      // vertex u is not in adjlist, create new adjacency list for it
      adjlist[u] = [v];
    }
    if (adjlist[v]) {
      adjlist[v].push(u);
    } else {
      adjlist[v] = [u];
    }
  }
  return adjlist;
};

var edges = [
  {
    id: "96-128.0",
    source: "96",
    target: "128",
    sourceHandle: "busIn",
    targetHandle: "x_3",
    category: "cube67-BUS",
    type: "step",
    label: "7000-46041-802xxxx",
    style: {
      stroke: "#4d9b17",
      strokeWidth: "3px",
    },
    labelBgStyle: {
      fill: "transparent",
    },
  },
  {
    id: "97-128.0",
    source: "97",
    target: "128",
    sourceHandle: "busIn",
    targetHandle: "x_2",
    category: "cube67-BUS",
    type: "step",
    label: "7000-46041-802xxxx",
    style: {
      stroke: "#4d9b17",
      strokeWidth: "3px",
    },
    labelBgStyle: {
      fill: "transparent",
    },
  },
  {
    id: "98-97.0",
    source: "98",
    target: "97",
    sourceHandle: "busIn",
    targetHandle: "busOut",
    category: "cube67-BUS",
    type: "step",
    label: "7000-46041-802xxxx",
    style: {
      stroke: "#4d9b17",
      strokeWidth: "3px",
    },
    labelBgStyle: {
      fill: "transparent",
    },
  },
  {
    id: "99-96.0",
    source: "99",
    target: "96",
    sourceHandle: "busIn",
    targetHandle: "busOut",
    category: "cube67-BUS",
    type: "step",
    label: "7000-46041-802xxxx",
    style: {
      stroke: "#4d9b17",
      strokeWidth: "3px",
    },
    labelBgStyle: {
      fill: "transparent",
    },
  },
  {
    id: "100-99.0",
    source: "100",
    target: "99",
    sourceHandle: "busIn",
    targetHandle: "busOut",
    category: "cube67-BUS",
    type: "step",
    label: "7000-46041-802xxxx",
    style: {
      stroke: "#4d9b17",
      strokeWidth: "3px",
    },
    labelBgStyle: {
      fill: "transparent",
    },
  },
  {
    id: "101-98.0",
    source: "101",
    target: "98",
    sourceHandle: "busIn",
    targetHandle: "busOut",
    category: "cube67-BUS",
    type: "step",
    label: "7000-46041-802xxxx",
    style: {
      stroke: "#4d9b17",
      strokeWidth: "3px",
    },
    labelBgStyle: {
      fill: "transparent",
    },
  },
  {
    id: "106-128.0",
    source: "106",
    target: "128",
    sourceHandle: "busIn",
    targetHandle: "x_0",
    category: "cube67-BUS",
    type: "step",
    label: "7000-46041-802xxxx",
    style: {
      stroke: "#4d9b17",
      strokeWidth: "3px",
    },
    labelBgStyle: {
      fill: "transparent",
    },
  },
  {
    id: "128-107.0",
    source: "128",
    target: "107",
    sourceHandle: "x_1",
    targetHandle: "busIn",
    category: "cube67-BUS",
    type: "step",
    label: "7000-46041-802xxxx",
    style: {
      stroke: "#4d9b17",
      strokeWidth: "3px",
    },
    labelBgStyle: {
      fill: "transparent",
    },
  },
  {
    id: "107-112.0",
    source: "107",
    target: "112",
    sourceHandle: "busOut",
    targetHandle: "busIn",
    category: "cube67-BUS",
    type: "step",
    label: "7000-46041-802xxxx",
    style: {
      stroke: "#4d9b17",
      strokeWidth: "3px",
    },
    labelBgStyle: {
      fill: "transparent",
    },
  },
  {
    id: "113-100.0",
    source: "113",
    target: "100",
    sourceHandle: "busIn",
    targetHandle: "busOut",
    category: "cube67-BUS",
    type: "step",
    label: "7000-46041-802xxxx",
    style: {
      stroke: "#4d9b17",
      strokeWidth: "3px",
    },
    labelBgStyle: {
      fill: "transparent",
    },
  },
  {
    id: "114-101.0",
    source: "114",
    target: "101",
    sourceHandle: "busIn",
    targetHandle: "busOut",
    category: "cube67-BUS",
    type: "step",
    label: "7000-46041-802xxxx",
    style: {
      stroke: "#4d9b17",
      strokeWidth: "3px",
    },
    labelBgStyle: {
      fill: "transparent",
    },
  },
  {
    id: "115-114.0",
    source: "115",
    target: "114",
    sourceHandle: "busIn",
    targetHandle: "busOut",
    category: "cube67-BUS",
    type: "step",
    label: "7000-46041-802xxxx",
    style: {
      stroke: "#4d9b17",
      strokeWidth: "3px",
    },
    labelBgStyle: {
      fill: "transparent",
    },
  },
  {
    id: "116-106.0",
    source: "116",
    target: "106",
    sourceHandle: "busIn",
    targetHandle: "busOut",
    category: "cube67-BUS",
    type: "step",
    label: "7000-46041-802xxxx",
    style: {
      stroke: "#4d9b17",
      strokeWidth: "3px",
    },
    labelBgStyle: {
      fill: "transparent",
    },
  },
  {
    id: "117-115.0",
    source: "117",
    target: "115",
    sourceHandle: "busIn",
    targetHandle: "busOut",
    category: "cube67-BUS",
    type: "step",
    label: "7000-46041-802xxxx",
    style: {
      stroke: "#4d9b17",
      strokeWidth: "3px",
    },
    labelBgStyle: {
      fill: "transparent",
    },
  },
  {
    id: "120-116.0",
    source: "120",
    target: "116",
    sourceHandle: "busIn",
    targetHandle: "busOut",
    category: "cube67-BUS",
    type: "step",
    label: "7000-46041-802xxxx",
    style: {
      stroke: "#4d9b17",
      strokeWidth: "3px",
    },
    labelBgStyle: {
      fill: "transparent",
    },
  },
  {
    id: "112-121.0",
    source: "112",
    target: "121",
    sourceHandle: "busOut",
    targetHandle: "busIn",
    category: "cube67-BUS",
    type: "step",
    label: "7000-46041-802xxxx",
    style: {
      stroke: "#4d9b17",
      strokeWidth: "3px",
    },
    labelBgStyle: {
      fill: "transparent",
    },
  },
  {
    id: "124-117.0",
    source: "124",
    target: "117",
    sourceHandle: "busIn",
    targetHandle: "busOut",
    category: "cube67-BUS",
    type: "step",
    label: "7000-46041-802xxxx",
    style: {
      stroke: "#4d9b17",
      strokeWidth: "3px",
    },
    labelBgStyle: {
      fill: "transparent",
    },
  },
  {
    id: "125-124.0",
    source: "125",
    target: "124",
    sourceHandle: "busIn",
    targetHandle: "busOut",
    category: "cube67-BUS",
    type: "step",
    label: "7000-46041-802xxxx",
    style: {
      stroke: "#4d9b17",
      strokeWidth: "3px",
    },
    labelBgStyle: {
      fill: "transparent",
    },
  },
  {
    id: "128-129.0",
    source: "128",
    target: "129",
    sourceHandle: "powerIn",
    targetHandle: "powerSupply",
    category: "power-cable",
    type: "step",
    label: "7000-78021-961xxxx",
    style: {
      stroke: "#52595D",
      strokeWidth: "3px",
    },
    labelBgStyle: {
      fill: "transparent",
    },
  },
  {
    id: "128-130.0",
    source: "128",
    target: "130",
    sourceHandle: "profinetIn",
    targetHandle: "profinetBus",
    category: "profinet-BUS",
    type: "step",
    label: "7000-14541-796xxxx",
    style: {
      stroke: "#688A52",
      strokeWidth: "3px",
    },
    labelBgStyle: {
      fill: "transparent",
    },
  },
];

var list = edges.map((i) => [i.source, i.target]);

var adjlist = convert_edgelist_to_adjlist(list);

var targetId = "128";
var findTarget = adjlist[targetId];

var visited = {};

function recursise(links, id, values) {
  if (links[id].length < 2) {
    values.push(id);
    return values;
  } else {
    values.push(id);
    recursise(links, links[id][1], values);
  }

  return values;
}

let obj = [];
findTarget.forEach((i) => {
  let result = recursise(adjlist, i, obj);
  console.log("result >> ", result);
  obj = [];
});

console.log("obj >> ", obj);

// Breadth First Search using adjacency list
var bfs = function (v, adjlist, visited) {
  var q = [];
  var current_group = [];
  var i, len, adjV, nextVertex;
  q.push(v);
  visited[v] = true;
  while (q.length > 0) {
    v = q.shift();
    current_group.push(v);
    // Go through adjacency list of vertex v, and push any unvisited
    // vertex onto the queue.
    // This is more efficient than our earlier approach of going
    // through an edge list.
    adjV = adjlist[v];
    for (i = 0, len = adjV.length; i < len; i += 1) {
      nextVertex = adjV[i];
      if (!visited[nextVertex]) {
        q.push(nextVertex);
        visited[nextVertex] = true;
      }
    }
  }
  return current_group;
};

var pairs = [
  ["a2", "a5"],
  ["a3", "a6"],
  ["a4", "a5"],
  ["a7", "a9"],
];

var groups = [];
var visited = {};
var v;

// this should look like:
// {
//   "a2": ["a5"],
//   "a3": ["a6"],
//   "a4": ["a5"],
//   "a5": ["a2", "a4"],
//   "a6": ["a3"],
//   "a7": ["a9"],
//   "a9": ["a7"]
// }

for (v in adjlist) {
  if (adjlist.hasOwnProperty(v) && !visited[v]) {
    groups.push(bfs(v, adjlist, visited));
  }
}

console.log(groups);
