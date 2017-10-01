import { Component, Prop, Element, Method } from '@stencil/core';

@Component({
  tag: 'ame-rich-text',
  styleUrl: 'ame-rich-text.scss'
})
export class AmeRichText {

  @Element() element: HTMLElement;

  @Prop() editable: boolean;

  @Method()
  value() {
    return this.getChild().innerText;
  }

  getChild() {
    return this.element.querySelector('span');
  }

  handleClick(event: MouseEvent) {
    if (this.editable) {
      let child = this.getChild();
      child.setAttribute('contenteditable', 'true');
      child.focus();
    }
  }

  handleBlur(event: FocusEvent) {
    if (this.editable) {
      this.getChild().innerHTML = this.getChild().innerText;
    }
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  }

  render() {
    return (
      <span contenteditable={this.editable ? 'true' : 'false'}
            onClick={this.handleClick.bind(this)}
            onBlur={this.handleBlur.bind(this)}
            onKeyDown={this.handleKeyDown.bind(this)}
      ><slot /></span>
    );
  }

}
