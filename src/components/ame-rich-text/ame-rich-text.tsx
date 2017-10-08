import { Component, Prop, Element, Method, PropWillChange } from '@stencil/core';
import Quill from 'quill';

@Component({
  tag: 'ame-rich-text',
  styleUrl: 'ame-rich-text.scss'
})
export class AmeRichText {

  @Element() element: HTMLElement;

  @Prop() editable: boolean = false;

  quill: Quill;

  isChanged: boolean = false;

  @Method()
  value() {
    if (this.quill) {
      return this.quill.root.innerHTML;
    }
    else {
      return this.getChild().innerHTML;
    }
  }

  @Method()
  changed() {
    return this.isChanged;
  }

  @PropWillChange('editable')
  handleEditableChange(editable: boolean) {
    if (!this.quill) {
      this.quill = new Quill(this.getChild(), {
        theme: 'bubble'
      });
      this.quill.on('text-change', () => {
        this.isChanged = true;
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
