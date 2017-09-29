import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'ame-text',
  styleUrl: 'ame-text.scss'
})
export class AmeText {

  @Prop() text: string;

  render() {
    return (
      <p>{this.text}</p>
    );
  }
}
