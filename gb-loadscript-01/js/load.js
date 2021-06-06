function urlCheck(url) {
  const scriptElements = document.getElementsByTagName("script"),
    scripts = Array.from(scriptElements).map((e) => e.src.split("/").pop());
  let result = false;
  scripts.forEach((e) => {
    if (e === url.split("/").pop()) result = true;
  });
  return result;
}

function createScript(url, callback) {
  console.log("URL check", url, urlCheck(url));
  if (urlCheck(url)) return; // exit from function if url already exists
  const element = document.createElement("script");
  element.type = "text/javascript";
  element.src = url;
  if (callback) element.onload = callback;

  document.body.appendChild(element);
}

const loadScript = (param1, param2 = null) => {
  // console.log("Script loaded. ", param1, param2);

  let url = null,
    ary = null,
    callback = null;

  if (typeof param1 === "function") {
    callback = param1;
    ary = null;
    url = "";
    param2 = null;
  } else if (typeof param1 === "object") {
    ary = param1;
    url = null;
  } else {
    ary = null;
    url = param1;
  }

  if (typeof param2 === "function") {
    callback = param2;
  } else {
    callback = null;
  }

  if (url || url === "") {
    createScript(url, callback);
  }

  if (ary) {
    ary.forEach((url) => {
      createScript(url, callback);
    });
  }
};
