const nodejieba = require("nodejieba");
let nodeJiebaLoaded = false;

/**
 @param {string} text 
 @param {{ dictPath: string, userDictPath: string }=} options 
 */
function separateChineseWords(text, options) {
  if (!nodeJiebaLoaded) {
    nodejieba.load({
      // Compiled to use traditional characters to
      dict: options?.dictPath ?? `${__dirname}/dict/jieba.dict.utf8`,
      userDict: options?.userDictPath ?? `${__dirname}/dict/user.dict.utf8`,
    });
    nodeJiebaLoaded = true;
  }

  return nodejieba.cut(text);
}

exports.separateChineseWords = separateChineseWords;
exports.default = separateChineseWords;
