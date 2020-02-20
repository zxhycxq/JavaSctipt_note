let querystring = {
  parse(str) {
    let fields = str.split("&");
    let queryObj = {};
    fields.forEach(field => {
      let [key, val] = field.split("=");
      queryObj[(key = val)];
    });
  },
  stringify() {}
};
