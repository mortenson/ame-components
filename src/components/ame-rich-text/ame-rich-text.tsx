import { Component, Prop, Element, Method, PropWillChange } from '@stencil/core';
import Quill from 'quill';

@Component({
  tag: 'ame-rich-text',
  styleUrl: 'ame-rich-text.scss'
})
export class AmeRichText {

  @Element() element: HTMLElement;

  @Prop() editable: boolean;

  quill: Quill;

  @Method()
  value() {
    if (this.quill) {
      return this.quill.root.innerHTML;
    }
    else {
      return this.getChild().innerHTML;
    }
  }

  @PropWillChange('editable')
  handleEditableChange(editable: boolean) {
    if (!this.quill) {
      this.quill = new Quill(this.getChild(), {
        theme: 'bubble'
      });
    }
    this.quill.enable(editable);
  }

  getChild() {
    return this.element.querySelector('span');
  }

  render() {
    return (
      <span><slot /></span>
    );
  }

}
