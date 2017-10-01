import { Component, State, Listen } from '@stencil/core';

@Component({
  tag: 'ame-edit',
  styleUrl: 'ame-edit.scss'
})
export class AmeEdit {

  @State() enabled: boolean;

  getEditableElements() {
    let editable = [];
    let elements = document.body.querySelectorAll('*');
    for (let i = 0;i < elements.length; ++i) {
      if ('editable' in elements[i]) {
        editable.push(elements[i]);
      }
    }
    return editable;
  }

  @Listen('click')
  handleClick(event: MouseEvent) {
    this.enabled = !this.enabled;
    this.getEditableElements().forEach((element) => {
      element.setAttribute('editable', this.enabled ? 'true' : 'false');
    });
  }

  render() {
    return (
      <button>{this.enabled ? 'Disable editing' : 'Enable editing'}</button>
    );
  }

}
