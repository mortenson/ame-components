import { Component, Listen } from '@stencil/core';
import { HTMLAmeHandler } from '../../interfaces';

@Component({
  tag: 'ame-save',
  styleUrl: 'ame-save.scss'
})
export class AmeSave {

  @Listen('click')
  handleClick(event: MouseEvent) {
    let elements = (document.body.querySelectorAll('[handler-name]') as NodeListOf<HTMLAmeHandler>);
    for (let i = 0;i < elements.length; ++i) {
      if ('save' in elements[i] && typeof elements[i].save === 'function') {
        elements[i].save();
      }
    }
  }

  render() {
    return (
      <button>Save</button>
    );
  }

}
