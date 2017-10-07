import { Component, Method, Prop, Event, EventEmitter } from '@stencil/core';
import { HTMLAmeElement } from '../../interfaces'

@Component({
  tag: 'ame-handler',
  styleUrl: 'ame-handler.scss'
})
export class AmeHandler {

  @Prop() handlerName: string;

  @Event() saveComplete: EventEmitter;

  @Method()
  save() {
    let resources = this.prepareResources();
    this.saveComplete.emit(resources);
  }

  setPathValue(object: Object, path: Array<string>, value: any) {
    let key = path.shift();
    if (path.length === 0) {
      object[key] = value;
      return object;
    }
    else if (!(key in object)) {
      object[key] = {};
    }
    return this.setPathValue(object[key], path, value);
  }

  prepareResources() {
    let resources = {};
    let selector = '[ame-resource][ame-path][ame-handler="'+this.handlerName+'"]';
    let elements = (document.body.querySelectorAll(selector) as NodeListOf<HTMLAmeElement>);
    for (let i = 0;i < elements.length; ++i) {
      if ('value' in elements[i] && typeof elements[i].value === 'function') {
        let path = elements[i].getAttribute('ame-path');
        let key = elements[i].getAttribute('ame-resource');
        if (!(key in resources)) {
          resources[key] = {};
        }
        this.setPathValue(resources[key], path.split('.'), elements[i].value());
      }
    }
    return resources;
  }

  render() {
    return (
      <span></span>
    );
  }

}
