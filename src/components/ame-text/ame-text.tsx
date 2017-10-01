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

  handleClick(event: MouseEvent) {
    if (this.editable) {
      let child = this.element.querySelector('span');
      child.setAttribute('contenteditable', 'true');
      child.focus();
    }
  }

  handleBlur(event: FocusEvent) {
    if (this.editable) {
      let child = this.element.querySelector('span');
      child.innerHTML = this.editedText = child.innerText;
    }
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  }

  render() {
    let text = this.editedText || this.text;
    return (
      <span contenteditable={this.editable ? 'true' : 'false'}
            onClick={this.handleClick.bind(this)}
            onBlur={this.handleBlur.bind(this)}
            onKeyDown={this.handleKeyDown.bind(this)}
      >{text}</span>
    );
  }

}
