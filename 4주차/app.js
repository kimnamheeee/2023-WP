console.log("Connection Succeed");

document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.querySelector(".search-button");
  const codeInput = document.querySelector("#code-input");

  searchButton.addEventListener("click", function () {
    const searchText = codeInput.value;
    const searchUrl =
      "https://www.google.com/search?q=" + encodeURIComponent(searchText);
    window.open(searchUrl, "_blank");
  });
});

const addButton = document.querySelector(".add-button");

const stringToHTML = function (str) {
  var dom = document.createElement("div");
  dom.innerHTML = str;
  return dom;
};

addButton.addEventListener("click", () => {
  const blocks = `
  <div class="code-block">
    <label class="code-input" for="code-input">코드 입력:</label>
    <textarea id="code-input"></textarea>
  </div>

  <div class="description-block">
    <label for="description-input">코드 설명:</label>
    <textarea id="description-input"></textarea>
  </div>
  `;
  container = document.querySelector(".container");
  container.append(stringToHTML(blocks));
});
