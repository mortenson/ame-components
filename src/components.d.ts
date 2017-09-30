/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import { AmeText as AmeText } from './components/ame-text/ame-text';

interface HTMLAmeTextElement extends AmeText, HTMLElement {
}
declare var HTMLAmeTextElement: {
  prototype: HTMLAmeTextElement;
  new (): HTMLAmeTextElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "ame-text": HTMLAmeTextElement;
  }
  interface ElementTagNameMap {
      "ame-text": HTMLAmeTextElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "ame-text": JSXElements.AmeTextAttributes;
      }
  }
  namespace JSXElements {
      export interface AmeTextAttributes extends HTMLAttributes {
        
          text?: any,
          editable?: boolean | "true" | "false"
      }
  }
}

