const test = require("node:test");
const assert = require("node:assert");
const { separateChineseWords } = require("../index");

test("simplified text", async (t) => {
  assert.strictEqual(
    separateChineseWords(
      "参加救治的医生在刚刚举行的记者会上透露，他被转移到医院时，已经没有任何生命迹象，他应该在遇刺现场心肺就已经停止工作。在他的肩膀上看到子弹造成的伤痕。"
    ).length,
    47
  );
});

test("traditional text", async (t) => {
  assert.strictEqual(
    separateChineseWords(
      "參加救治的醫生在剛剛舉行的記者會上透露，他被轉移到醫院時，已經沒有任何生命跡象，他應該在遇刺現場心肺就已經停止工作。在他的肩膀上看到子彈造成的傷痕。"
    ).length,
    47
  );
});
