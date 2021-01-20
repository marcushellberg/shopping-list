import {
  css,
  customElement,
  html,
  internalProperty,
  LitElement,
  property,
} from "lit-element";
import "@vaadin/vaadin-text-field";
import "@vaadin/vaadin-text-field/vaadin-integer-field";
import "@vaadin/vaadin-combo-box";
import "@vaadin/vaadin-button";
import { MobxLitElement } from "@adobe/lit-mobx";
import { store } from "../../store";
import ListItemModel from "../../generated/com/vaadin/tutorial/data/entity/ListItemModel";
import { Binder, field } from "@vaadin/form";
import ListItem from "../../generated/com/vaadin/tutorial/data/entity/ListItem";

@customElement("item-form")
export class ItemForm extends MobxLitElement {
  private binder = new Binder(this, ListItemModel);

  @property({ type: Object })
  set item(item: ListItem) {
    this.binder.read(item);
  }

  static styles = css`
    :host {
      display: block;
    }

    vaadin-integer-field {
      width: 4em;
    }

    vaadin-combo-box {
      width: 20em;
    }
  `;

  render() {
    const { model } = this.binder;
    return html`
      <vaadin-integer-field
        label="Quantity"
        ...=${field(model.quantity)}
      ></vaadin-integer-field>
      <vaadin-text-field
        label="Item"
        ...=${field(model.name)}
      ></vaadin-text-field>
      <vaadin-combo-box
        label="Category"
        ...=${field(model.category)}
        .items=${store.categories}
        item-label-path="name"
      ></vaadin-combo-box>
      <vaadin-button theme="primary" @click=${this.submit}>
        ${this.binder.value.id ? "Save" : "Add"}
      </vaadin-button>
    `;
  }

  submit() {
    this.binder.submitTo(async (item) => {
      store.saveItem(item);
      this.binder.clear();
    });
  }
}
