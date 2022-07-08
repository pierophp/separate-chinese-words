const nodejieba = require("nodejieba");
let nodeJiebaLoaded = false;

function separateChineseWords(text) {
  if (!nodeJiebaLoaded) {
    nodejieba.load({
      // Compiled to use traditional characters to
      dict: `${__dirname}/dict/jieba.dict.utf8`,
      userDict: `${__dirname}/dict/user.dict.utf8`,
    });
    nodeJiebaLoaded = true;
  }

  return nodejieba.cut(text);
}

exports.separateChineseWords = separateChineseWords;
exports.default = separateChineseWords;
