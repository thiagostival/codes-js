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

//! EXTRACT ALL KEYS OF THE "orderinfotable"
function extractKeys(arr) {
  try {
    const keys = [];

    arr.forEach((item) =>
      item?.orderinfotable?.forEach((order) =>
        Object.keys(order).forEach(
          (key) =>
            !keys.find((i) => i.toLowerCase() === key.toLowerCase()) &&
            keys.push(key)
        )
      )
    );

    if (!keys.length) {
      throw new Error();
    }

    return keys;
  } catch (error) {
    setError("error in extract keys of the orderinfotable");
    console.error("extract keys >> ", error);
  }
}

//! CREATE OBJ WITH TABLE FORMAT AND ALL KEYS
function getValuesKeys(arr = [], keys = []) {
  try {
    const newArr = [];

    arr.forEach((i) => {
      i?.orderinfotable?.forEach((item) => {
        let newItem = {
          article_number_master: i?.article_number,
          datasheet_name: i?.datasheet_name,
          ...item,
        };
        const currentKeys = Object.keys(item);
        const diffKeys = keys.filter((k) => !currentKeys.includes(k));

        diffKeys.forEach((key) => {
          newItem[key] = "";
        });

        newArr.push(newItem);
      });
    });

    if (!newArr.length) {
      throw new Error();
    }

    return newArr;
  } catch (error) {
    setError("error in create file with table format");
    console.error("get values >> ", error);
  }
}

//! LOADED FILE
function loadedFile(e, fileName) {
  try {
    var obj = JSON.parse(e.target.result);
    if (!obj) return;

    const keys = extractKeys(obj);
    if (!keys.length) return;

    const newObj = getValuesKeys(obj, keys);
    if (!newObj.length) return;

    saveFile(newObj, `${fileName}-converted`);
  } catch (error) {
    setError("error in loaded file");
    console.error("get values >> ", error);
  }
}

//! READ FILE
function readFile(event) {
  try {
    var reader = new FileReader();

    const fileName = event.target.files[0].name.split(".json")[0];
    reader.onload = (e) => loadedFile(e, fileName);

    reader.readAsText(event.target.files[0]);
    setError("");
  } catch (error) {
    setError("error in read json");
    console.error("read file >> ", error);
  }
}

document.getElementById("file").addEventListener("change", readFile);
