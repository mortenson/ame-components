import { Component, Method, Element, Prop } from '@stencil/core';

@Component({
  tag: 'ame-value',
  styleUrl: 'ame-value.scss'
})
export class AmeValue {

  @Element() element: HTMLElement;

  @Prop()
  return: string;

  @Method()
  value() {
    return this.return;
  }

  render() {
    return (
      <span></span>
    );
  }

}
