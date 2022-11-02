// NewsArticle

const template = document.createElement("template");

template.innerHTML = `
    <style>
        h2 {
            color: darkslateblue;
        }
        p {
            color: grey;
        }
    </style>
    <h2></h2>    
    <p><slot name="content"></slot></p>
`;

class NewsArticle extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("h2").innerText = this.getAttribute("title");
  }
}
window.customElements.define("news-article", NewsArticle);

// ColContainer

class ColContainer extends HTMLElement {
  constructor() {
    super();

    const cols = this.querySelectorAll("div");

    this.style.display = "grid";
    this.style.padding = "5px";
    this.style.gridTemplateColumns = `repeat(${cols.length}, 1fr)`;
  }
}
window.customElements.define("col-container", ColContainer);
