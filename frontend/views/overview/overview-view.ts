import "@vaadin/vaadin-charts/src/vaadin-chart-series";
import { css, customElement, html, LitElement } from "lit-element";
import "@vaadin/vaadin-charts";
import { store } from "../../store";

@customElement("overview-view")
export class OverviewView extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: var(--lumo-space-m);
    }
  `;

  render() {
    return html`
      <h1>Shopping stats</h1>
      <vaadin-chart type="pie">
        <vaadin-chart-series
          .values=${store.countByCategory}
        ></vaadin-chart-series>
      </vaadin-chart>
    `;
  }
}
