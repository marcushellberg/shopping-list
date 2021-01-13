const addCssBlock = (block: string) => {
  const tpl = document.createElement('template');
  tpl.innerHTML = block;
  document.head['insertBefore'](tpl.content, document.head.firstChild);
};

addCssBlock('<custom-style><style include="lumo-color lumo-typography"></style></custom-style>');

import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-list/iron-list.js';
import '@vaadin/vaadin-accordion/theme/lumo/vaadin-accordion.js';
import '@vaadin/vaadin-app-layout/theme/lumo/vaadin-app-layout.js';
import '@vaadin/vaadin-app-layout/theme/lumo/vaadin-drawer-toggle.js';
import '@vaadin/vaadin-board/vaadin-board-row.js';
import '@vaadin/vaadin-board/vaadin-board.js';
import '@vaadin/vaadin-button/theme/lumo/vaadin-button.js';
import '@vaadin/vaadin-charts/src/vaadin-chart.js';
import '@vaadin/vaadin-checkbox/theme/lumo/vaadin-checkbox-group.js';
import '@vaadin/vaadin-checkbox/theme/lumo/vaadin-checkbox.js';
import '@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box.js';
import '@vaadin/vaadin-confirm-dialog/theme/lumo/vaadin-confirm-dialog.js';
import '@vaadin/vaadin-context-menu/theme/lumo/vaadin-context-menu.js';
import '@vaadin/vaadin-cookie-consent/theme/lumo/vaadin-cookie-consent.js';
import '@vaadin/vaadin-crud/src/vaadin-crud-edit-column.js';
import '@vaadin/vaadin-crud/theme/lumo/vaadin-crud.js';
import '@vaadin/vaadin-custom-field/theme/lumo/vaadin-custom-field.js';
import '@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker.js';
import '@vaadin/vaadin-date-time-picker/theme/lumo/vaadin-date-time-picker.js';
import '@vaadin/vaadin-details/theme/lumo/vaadin-details.js';
import '@vaadin/vaadin-dialog/theme/lumo/vaadin-dialog.js';
import '@vaadin/vaadin-form-layout/theme/lumo/vaadin-form-item.js';
import '@vaadin/vaadin-form-layout/theme/lumo/vaadin-form-layout.js';
import '@vaadin/vaadin-grid-pro/theme/lumo/vaadin-grid-pro-edit-column.js';
import '@vaadin/vaadin-grid-pro/theme/lumo/vaadin-grid-pro.js';
import '@vaadin/vaadin-grid/theme/lumo/vaadin-grid-column-group.js';
import '@vaadin/vaadin-grid/theme/lumo/vaadin-grid-column.js';
import '@vaadin/vaadin-grid/theme/lumo/vaadin-grid-sorter.js';
import '@vaadin/vaadin-grid/theme/lumo/vaadin-grid-tree-toggle.js';
import '@vaadin/vaadin-grid/theme/lumo/vaadin-grid.js';
import '@vaadin/vaadin-icons/vaadin-icons.js';
import '@vaadin/vaadin-item/theme/lumo/vaadin-item.js';
import '@vaadin/vaadin-list-box/theme/lumo/vaadin-list-box.js';
import '@vaadin/vaadin-login/theme/lumo/vaadin-login-form.js';
import '@vaadin/vaadin-login/theme/lumo/vaadin-login-overlay.js';
import '@vaadin/vaadin-lumo-styles/color.js';
import '@vaadin/vaadin-lumo-styles/icons.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import '@vaadin/vaadin-lumo-styles/style.js';
import '@vaadin/vaadin-lumo-styles/typography.js';
import '@vaadin/vaadin-menu-bar/theme/lumo/vaadin-menu-bar.js';
import '@vaadin/vaadin-notification/theme/lumo/vaadin-notification.js';
import '@vaadin/vaadin-ordered-layout/theme/lumo/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-ordered-layout/theme/lumo/vaadin-vertical-layout.js';
import '@vaadin/vaadin-ordered-layout/vaadin-scroller.js';
import '@vaadin/vaadin-progress-bar/theme/lumo/vaadin-progress-bar.js';
import '@vaadin/vaadin-radio-button/theme/lumo/vaadin-radio-button.js';
import '@vaadin/vaadin-radio-button/theme/lumo/vaadin-radio-group.js';
import '@vaadin/vaadin-rich-text-editor/theme/lumo/vaadin-rich-text-editor.js';
import '@vaadin/vaadin-select/theme/lumo/vaadin-select.js';
import '@vaadin/vaadin-split-layout/theme/lumo/vaadin-split-layout.js';
import '@vaadin/vaadin-tabs/theme/lumo/vaadin-tab.js';
import '@vaadin/vaadin-tabs/theme/lumo/vaadin-tabs.js';
import '@vaadin/vaadin-text-field/theme/lumo/vaadin-email-field.js';
import '@vaadin/vaadin-text-field/theme/lumo/vaadin-integer-field.js';
import '@vaadin/vaadin-text-field/theme/lumo/vaadin-number-field.js';
import '@vaadin/vaadin-text-field/theme/lumo/vaadin-password-field.js';
import '@vaadin/vaadin-text-field/theme/lumo/vaadin-text-area.js';
import '@vaadin/vaadin-text-field/theme/lumo/vaadin-text-field.js';
import '@vaadin/vaadin-time-picker/theme/lumo/vaadin-time-picker.js';
import '@vaadin/vaadin-upload/src/vaadin-upload-file.js';
import '@vaadin/vaadin-upload/theme/lumo/vaadin-upload.js';

import { LitElement, html, css, customElement, property } from 'lit-element';
import { render } from 'lit-html';
import { applyPolyfill } from 'custom-elements-hmr-polyfill';
//@ts-ignore
import { DiffDOM, nodeToObj } from 'diff-dom';

// Use custom elements polyfill to speed up things
// Might also help avoid leaking memory since old classes can maybe be reclaimed
(window as any).HMR_SKIP_DEEP_PATCH = true;
applyPolyfill();

const dd = new DiffDOM();
// Previously rendered DiffDOM tree, used for diffing
let oldTree: any;

// Empty shell that will host the preview DOM
@customElement('my-element')
//@ts-ignore
class MyElement extends LitElement {}

const registeredClass = customElements.get('my-element');
const element = new registeredClass();

let currentlySelectedElementId: number;

// This section should be in a separate module that is updated with HMR when imports are updated
(window as any).importScope = {
  LitElement: LitElement,
  html: html,
  css: css,
  customElement: customElement,
  property: property,
};
const importHeader = `
  const LitElement = window.importScope.LitElement;
  const html = window.importScope.html;
  const css = window.importScope.css;
  const customElement = window.importScope.customElement;
  const property = window.importScope.property;
`;

const update = async (code: string) => {
  console.log('Start update');
  const fullCode = importHeader + code;

  const url = URL.createObjectURL(new Blob([fullCode], { type: 'application/javascript' }));

  let c: CustomElementConstructor[] = [];
  const hmrPolyfillDefineFn = CustomElementRegistry.prototype.define;
  CustomElementRegistry.prototype.define = function (
    name: string,
    constructor: CustomElementConstructor,
    options?: ElementDefinitionOptions
  ) {
    hmrPolyfillDefineFn.apply(this, [name, constructor, options]);
    c.push(constructor);
  };
  await eval('import(url)');
  CustomElementRegistry.prototype.define = hmrPolyfillDefineFn;

  URL.revokeObjectURL(url);

  if (c.length === 0) {
    document.getElementById('outlet')!.innerText = 'The file must define a custom element.';
    return;
  } else if (c.length > 1) {
    document.getElementById(
      'outlet'
    )!.innerText = `The file defines ${c.length} custom elements. Do not know which one to preview. Please define only one custom element in the file.`;
    return;
  }

  // Override static LitElement helper that delegates to lit-html render
  (c[0] as any).render = (result: unknown, container: Element | DocumentFragment, options: any) => {
    let tempContainer = document.createDocumentFragment();
    let originalImport = document.importNode;
    try {
      document.importNode = (node, deep) => node.cloneNode(deep) as any;

      render(result, tempContainer, options);
    } finally {
      document.importNode = originalImport;
    }

    let newTree = nodeToObj(tempContainer);

    if (oldTree) {
      const diff = dd.diff(oldTree, newTree);
      dd.apply(element.shadowRoot!, diff);
    } else {
      element.shadowRoot!.append(tempContainer.cloneNode(true));
    }

    //@ts-ignore
    element.shadowRoot!.adoptedStyleSheets = container.adoptedStyleSheets;

    oldTree = newTree;

    refreshSelection();

    console.log('Complete update');
    window.parent.postMessage({ command: 'updateFinished' }, '*');
  };

  // Register as custom element to allow creating instance
  customElements.define('my-element', c[0]);
  // Emulate attaching so that it will render itself
  new registeredClass().connectedCallback();
};

const refresh = (code: string) => {
  const postTranspile = new XMLHttpRequest();
  postTranspile.open('POST', '/VAADIN/transpile');
  postTranspile.setRequestHeader('Content-Type', 'text/plain');
  postTranspile.onreadystatechange = () => {
    if (postTranspile.readyState === 4 && postTranspile.status === 200) {
      update(postTranspile.responseText);
    }
  };
  postTranspile.send(code);
};

document.getElementById('outlet')?.appendChild(element);

window.addEventListener(
  'message',
  (event) => {
    const message = event.data;
    switch (message.command) {
      case 'transpile': {
        refresh(message.code);
        break;
      }
      case 'selectFromEditor': {
        showSelectIndicatorOn(message.id);
        return;
      }
    }
  },
  false
);

window.parent.postMessage({ command: 'previewReady' }, '*');

let indicatorAnimation: Animation | undefined;
const indicator = document.createElement('div');
{
  indicator.style.position = 'absolute';
  indicator.style.backgroundColor = 'rgb(255, 203, 106)';
  indicator.style.opacity = '0';
  indicator.style.zIndex = '10000';
  indicator.style.pointerEvents = 'none';
  const inner = document.createElement('div');
  inner.style.height = '100%';
  inner.style.backgroundColor = 'rgb(138, 255, 173)';
  inner.style.boxSizing = 'border-box';
  inner.style.border = '0px solid yellow';
  indicator.appendChild(inner);
  const innermost = document.createElement('div');
  innermost.style.height = '100%';
  innermost.style.backgroundColor = 'rgb(149, 195, 255)';
  inner.appendChild(innermost);
}
document.body.appendChild(indicator);

document.body.onmousedown = (event) => {
  const targetComponent = document.querySelector('my-element');
  const el = targetComponent?.shadowRoot?.elementFromPoint(event.clientX, event.clientY);
  const id = Number(el!.getAttribute('data-design-id')!) || -1;
  log(`id found: ${id}Element found: ${el!.outerHTML}`);
  window.parent.postMessage({ command: 'selectFromPreview', id: id }, '*');
  showSelectIndicatorOn(id, Number.MAX_VALUE);
  event.preventDefault();
  event.stopPropagation();
};

const refreshSelection = () => {
  showSelectIndicatorOn(currentlySelectedElementId);
};
const showSelectIndicatorOn = (id: number, delay?: number) => {
  delay = delay ?? 800;
  const targetComponent = document.querySelector('my-element');
  const el = targetComponent?.shadowRoot?.querySelector('[data-design-id="' + id + '"]');
  if (el) {
    currentlySelectedElementId = id;
    // POSITION
    const rect = el.getBoundingClientRect();
    indicator.style.top = rect.top + window.scrollY + 'px';
    indicator.style.left = rect.left + window.scrollX + 'px';
    indicator.style.width = rect.width + 'px';
    indicator.style.height = rect.height + 'px';
    // MARGIN
    const cs = window.getComputedStyle(el);
    indicator.style.padding = cs.margin;
    indicator.style.marginTop = '-' + cs.marginTop;
    indicator.style.marginRight = '-' + cs.marginRight;
    indicator.style.marginBottom = '-' + cs.marginBottom;
    indicator.style.marginLeft = '-' + cs.marginLeft;
    // PADDING
    const padding = indicator.firstElementChild as HTMLElement;
    padding.style.padding = cs.padding;
    // BORDER
    padding.style.borderWidth = cs.borderWidth;
    // ANIMATE
    indicatorAnimation?.cancel();
    indicatorAnimation = indicator.animate([{ opacity: 0.5 }, { opacity: 0.5 }, { opacity: 0.0 }], {
      duration: delay,
      iterations: 1,
    });
  } else {
    log('Did not find element with id ' + id);
    indicatorAnimation?.cancel();
    indicator.style.opacity = '0';
  }
};

const log = (msg: string) => {
  window.parent.postMessage({ logMessage: msg }, '*');
};
