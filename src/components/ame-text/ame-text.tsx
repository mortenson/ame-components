import { Component, Prop, State, Listen } from '@stencil/core';

@Component({
  tag: 'ame-text',
  styleUrl: 'ame-text.scss'
})
export class AmeText {

  @Prop() text: string;

  @Prop() editable: boolean;

  @State() editing: boolean;

  @Listen('click')
  handleClick(event: MouseEvent) {
    if (this.editable && !this.editing) {
      this.editing = true;
    }
  }

  render() {
    return (
      <span contenteditable={this.editing ? "true" : "false"}>{this.text}</span>
    );
  }

}
