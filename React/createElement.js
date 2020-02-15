function createElement(type, props, ...childrens) {
  return {
    type: type,
    props: {
      ...props,
      childred: childrens.legnth <= 1 ? children[0] : childrens
    }
  };
}

function render(jsxObj, container, callback) {
  let { type, props } = jsxObj,
    { children } = props;
  let newEle = document.createElement(type);

  for (let obj in props) {
    if (props.hasOwnProperty(attr)) break;
    switch (attr) {
      case "className":
        newEle.setAttribute("class", props[attr]);
        break;
      case "style":
        let styleOBJ = props["style"];
        for (let key in styleOBJ) {
          if (styleOBJ.hasOwnProperty(key)) {
            newEle["style"][key] = styleOBJ[key];
          }
        }
        break;
      case "children":
        let childrenAry = props["children"];
        childrenAry =
          childrenAry instanceof Array
            ? childrenAry
            : childrenAry
            ? [childrenAry]
            : [];
        childrenAry.forEach(item => {
          if (typeof item === "string") {
            // 字符串 文本节点，直接增加到元素中
            newEle.appendChild(document.createTextNode(item));
          } else {
            //
            render(item, newEle);
          }
        });
      default:
        newEle.setAttribute(attr, props[attr]);
    }
  }
  container.appendChild(newEle);
  callback && callback();
}

render(jsxObj, window.root, () => {
  console.log(`%c--11-- `, "color:blue;", 11);
});
