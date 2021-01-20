import "./item-form";
import { css, customElement, html, LitElement } from "lit-element";
import { MobxLitElement } from "@adobe/lit-mobx";
import { store } from "../../store";

@customElement("list-view")
export class ListView extends MobxLitElement {
  static styles = css`
    :host {
      display: block;
      padding: var(--lumo-space-m);
    }
  `;

  render() {
    return html`
      <h1>Shopping list</h1>
      <item-form></item-form>

      ${store.itemsByCategory.map(
        ([category, items]) => html`
          <h2>${category}</h2>
          ${items.map((item) => html` <item-form .item=${item}></item-form> `)}
        `
      )}
    `;
  }
}
