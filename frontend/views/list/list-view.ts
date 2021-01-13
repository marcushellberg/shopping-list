import { css, customElement, html, LitElement } from "lit-element";

@customElement("list-view")
export class ListView extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: var(--lumo-space-m);
    }
  `;

  render() {
    return html`<div>Content placeholder</div>`;
  }
}
