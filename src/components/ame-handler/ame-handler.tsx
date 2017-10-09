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
    if (!this.handlerName) {
      return {};
    }
    let resources = {};
    let selector = '[ame-resource][ame-path][ame-handler="'+this.handlerName+'"]';
    let elements = (document.body.querySelectorAll(selector) as NodeListOf<HTMLAmeElement>);
    for (let i = 0;i < elements.length; ++i) {
      if (elements[i].tagName !== 'AME-VALUE' && elements[i].changed()) {
        let path = elements[i].getAttribute('ame-path');
        let key = elements[i].getAttribute('ame-resource');
        if (!(key in resources)) {
          resources[key] = {};
        }
        this.setPathValue(resources[key], path.split('.'), elements[i].value());
        let selector = 'ame-value[ame-resource="'+key+'"][ame-handler="'+this.handlerName+'"][ame-include-with="'+path+'"]';
        let values = (document.body.querySelectorAll(selector) as NodeListOf<HTMLAmeElement>);
        for (let j = 0;j < values.length;++j) {
          let value_path = values[j].getAttribute('ame-path');
          this.setPathValue(resources[key], value_path.split('.'), values[j].value());
        }
      }
    }
    for (let key in resources) {
      let selector = 'ame-value[ame-resource="'+key+'"][ame-handler="'+this.handlerName+'"][ame-always-include]';
      let elements = (document.body.querySelectorAll(selector) as NodeListOf<HTMLAmeElement>);
      for (let i = 0;i < elements.length;++i) {
        let path = elements[i].getAttribute('ame-path');
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
