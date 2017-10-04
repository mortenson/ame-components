import { Component, Listen } from '@stencil/core';
import { HTMLAmeElement } from '../../interfaces'

@Component({
  tag: 'ame-save',
  styleUrl: 'ame-save.scss'
})
export class AmeSave {

  setPathValue(object: Object, path: Array<string>, value: any) {
    let key = path.shift();
    if (path.length === 0) {
      object[key] = value;
      return object;
    }
    else if (!(key in object)) {
      object[key] = [];
    }
    return this.setPathValue(object[key], path, value);
  }

  serializeComponentValues() {
    let resources = [];
    let elements = (document.body.querySelectorAll('[ame-resource]') as NodeListOf<HTMLAmeElement>);
    for (let i = 0;i < elements.length; ++i) {
      if ('value' in elements[i] && typeof elements[i].value === 'function') {
        let split = elements[i].getAttribute('ame-resource').split('/');
        let path = split.pop();
        let key = split.join('/');
        if (!(key in resources)) {
          resources[key] = [];
        }
        this.setPathValue(resources[key], path.split('.'), elements[i].value());
      }
    }
    console.log(resources);
  }

  @Listen('click')
  handleClick(event: MouseEvent) {
    this.serializeComponentValues();
  }

  render() {
    return (
      <button>Save</button>
    );
  }

}
