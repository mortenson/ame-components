import { Component, Prop, State, Element, Method } from '@stencil/core';

@Component({
  tag: 'ame-text',
  styleUrl: 'ame-text.scss'
})
export class AmeText {

  @Element() element: HTMLElement;

  @Prop() text: string;

  @Prop() editable: boolean;

  @State() editedText: string;

  @Method()
  revert() {
    this.editedText = this.text;
  }

  @Method()
  value() {
    return this.editedText;
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
      this.editedText = this.getChild().innerText;
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
      >{this.editedText || this.text}</span>
    );
  }

}
