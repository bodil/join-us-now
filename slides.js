const Pink = require("pink");

require("pink/css/themes/simon.less");
require("pink/node_modules/highlight.js/styles/vs.css");
require("./screen.less");

new Pink("#slides", {
  "background": require("pink/modules/background"),
  "image": require("pink/modules/image")
});
