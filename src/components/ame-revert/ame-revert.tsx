import { Component, Listen } from '@stencil/core';

@Component({
  tag: 'ame-revert',
  styleUrl: 'ame-revert.scss'
})
export class AmeRevert {

  getRevertableElements() {
    let revertable = [];
    let elements = document.body.querySelectorAll('*');
    for (let i = 0;i < elements.length; ++i) {
      if ('revert' in elements[i]) {
        revertable.push(elements[i]);
      }
    }
    return revertable;
  }

  @Listen('click')
  handleClick(event: MouseEvent) {
    this.getRevertableElements().forEach((element) => {
      element.revert();
    });
  }

  render() {
    return (
      <button>Revert</button>
    );
  }

}
