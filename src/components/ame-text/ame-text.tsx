import { Component, Prop, Element, Method } from '@stencil/core';

@Component({
  tag: 'ame-text',
  styleUrl: 'ame-text.scss'
})
export class AmeText {

  @Element() element: HTMLElement;

  @Prop() editable: boolean = false;

  isChanged: boolean = false;

  @Method()
  value() {
    return this.getChild().innerText;
  }

  @Method()
  changed() {
    return this.isChanged;
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
    this.isChanged = true;
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
