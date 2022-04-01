const expect = require("chai").expect;
const assert = require("chai").assert;
const getArticles = require("../ArticleTest").getArticles;

describe("Article test", function () {
  it("Article record is exist", function () {
    let articleCount = getArticles();
    expect(articleCount).to.be.not.eq(0);
  });
});
