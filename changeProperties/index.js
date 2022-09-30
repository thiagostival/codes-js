//! SET TEXT ERROR IN SPAN
function setError(error) {
  try {
    const span = document.getElementById("error");

    if (!span) return;

    span.innerText = error;
  } catch (error) {
    console.error("set error >> ", error);
  }
}

//! SAVE JSON FILE
function saveFile(data, name = `new_file_${Date.now()}`) {
  try {
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:application/json;charset=utf-8," +
        encodeURIComponent(JSON.stringify(data))
    );
    element.setAttribute("download", name);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  } catch (error) {
    setError("error in save file");
    console.error("save file >> ", error);
  }
}

const changesPortsNames = {
  56526: {
    profinetIn: "busIn",
    profinetOut: "busOut",
  },
  55556: {
    profinetIn: "bus1",
    profinetOut: "bus2",
  },
  55557: {
    profinetIn: "bus1",
    profinetOut: "bus2",
  },
  54620: {
    powerIn: "XD1",
    powerOut: "XD2",
    profinetIn: "XF1",
    profinetOut: "XF2",
  },
  54630: {
    powerIn: "XD1",
    powerOut: "XD2",
    profinetIn: "XF1",
    profinetOut: "XF2",
  },
};

function changePortsNames(nodes, edges) {
  let newEdges = edges;

  let newNodes = nodes.map((node) => {
    const change = changesPortsNames[node.type];
    if (!change) return node;

    newEdges = newEdges.map((edge) => {
      if (edge.to === node.id) {
        const newInterlinks = edge.interlinks.map((interlink) => {
          if (!change[interlink.to]) return interlink;

          return {
            ...interlink,
            to: change[interlink.to],
          };
        });

        return {
          ...edge,
          interlinks: newInterlinks,
        };
      } else if (edge.from === node.id) {
        const newInterlinks = edge.interlinks.map((interlink) => {
          if (!change[interlink.from]) return interlink;

          return {
            ...interlink,
            from: change[interlink.from],
          };
        });

        return {
          ...edge,
          interlinks: newInterlinks,
        };
      }

      return edge;
    });

    const newLinks = node.links.map((link) => {
      if (!change[link.name]) return link;

      return {
        ...link,
        name: change[link.name],
      };
    });

    return {
      ...node,
      links: newLinks,
    };
  });

  return { newEdges, newNodes };
}

function createEdgesX3T(nodes, edges) {
  let newEdges = edges;

  let newNodes = nodes.map((node) => {
    if (node.connectedIn?.id && node.connectedIn?.port) {
      const find = newEdges.find(
        (edge) =>
          (edge.from === node.id && edge.to === node.connectedIn?.id) ||
          (edge.to === node.id && edge.from === node.connectedIn?.id)
      );

      if (!find) {
        newEdges.push({
          from: node.id,
          to: node.connectedIn?.id,
          interlinks: [
            {
              from: "x_3",
              to: node.connectedIn?.port,
            },
          ],
        });
      } else {
        newEdges = newEdges.map((edge) => {
          if (edge.from === node.id && edge.to === node.connectedIn?.id) {
            return {
              ...edge,
              interlinks: [
                ...edge.interlinks,
                {
                  from: "x_3",
                  to: node.connectedIn?.port,
                },
              ],
            };
          }
          if (edge.to === node.id && edge.from === node.connectedIn?.id) {
            return {
              ...edge,
              interlinks: [
                ...edge.interlinks,
                {
                  from: node.connectedIn?.port,
                  to: "x_3",
                },
              ],
            };
          }

          return edge;
        });
      }

      if (!node.links.find((link) => link.name === "x_3")) {
        node.links.push({
          name: "x_3",
        });
      }

      delete node?.connectedIn;
    }

    return node;
  });

  return { newEdges, newNodes };
}

//! LOADED FILE
function loadedFile(e, fileName) {
  try {
    var obj = JSON.parse(e.target.result);
    if (!obj) return;

    const { newEdges, newNodes } = changeProperties(obj.nodes, obj.edges);

    const newObj = {
      ...obj,
      nodes: newNodes,
      edges: newEdges,
    };

    saveFile(newObj, fileName);
  } catch (error) {
    setError("error in loaded file");
    console.error("get values >> ", error);
  }
}

function loopFiles(file) {
  return new Promise((resolve, reject) => {
    var reader = new FileReader();

    const fileName = file.name.split(".json")[0];
    reader.onload = (e) => {
      loadedFile(e, fileName);
      resolve();
    };

    reader.readAsText(file);
  });
}

//! READ FILE
async function readFile(event) {
  try {
    console.log(event.target.files);
    await Promise.all(
      Array.from(event.target.files).map(async (file) => {
        await loopFiles(file);
      })
    );

    setError("");
  } catch (error) {
    setError("error in read json");
    console.error("read file >> ", error);
  }
}

document.getElementById("file").addEventListener("change", readFile);
