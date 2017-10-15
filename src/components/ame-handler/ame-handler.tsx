import { Component, Method, Prop, Event, EventEmitter } from '@stencil/core';
import { HTMLAmeElement } from '../../interfaces'

@Component({
  tag: 'ame-handler',
  styleUrl: 'ame-handler.scss'
})
export class AmeHandler {

  @Prop() handlerName: string;

  @Event() saveComplete: EventEmitter;

  lastResources: Object = {};

  @Method()
  save() {
    this.getChangedResources().then((resources) => {
      for (let key in resources) {
        this.lastResources[key] = resources[key];
      }
      this.saveComplete.emit(resources);
    });
  }

  componentDidLoad() {
    this.getResources().then((resources) => {
      this.lastResources = resources;
    });
  }

  sortObject(object) {
    let sorted = {};
    let keys = Object.keys(object).sort();

    for (let index in keys) {
      let key = keys[index];
      if (typeof object[key] == 'object' && !(object[key] instanceof Array)) {
        sorted[key] = this.sortObject(object[key]);
      }
      else {
        sorted[key] = object[key];
      }
    }

    return sorted;
  }

  objectsMatch(object1, object2) {
    return JSON.stringify(this.sortObject(object1)) == JSON.stringify(this.sortObject(object2));
  }

  getChangedResources() {
    return this.getResources().then((resources) => {
      let changed = {};
      for (let key in resources) {
        if (!(key in this.lastResources) || !this.objectsMatch(resources[key], this.lastResources[key])) {
          changed[key] = resources[key];
        }
      }
      return changed;
    });
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

  getElementValue(element: HTMLAmeElement) {
    if ('value' in element) {
      if (typeof element.value == 'function') {
        return element.value();
      }
      else {
        return element.value;
      }
    }
    return element.innerHTML;
  }

  elementIsReady(element) {
    if ('componentOnReady' in element) {
      return element.componentOnReady().then((component) => {
        return component;
      });
    }
    return Promise.resolve(element);
  }

  getResources() {
    if (!this.handlerName) {
      return Promise.resolve({});
    }
    let resources = {}, promises = [];
    let selector = '[ame-resource][ame-path][ame-handler="'+this.handlerName+'"]';
    let elements = (document.body.querySelectorAll(selector)as NodeListOf<HTMLAmeElement>);
    for (let i = 0;i < elements.length; ++i) {
      let path = elements[i].getAttribute('ame-path');
      let key = elements[i].getAttribute('ame-resource');
      if (!(key in resources)) {
        resources[key] = {};
      }
      let promise = this.elementIsReady(elements[i]);
      promise.then((element) => {
        this.setPathValue(resources[key], path.split('.'), this.getElementValue(element));
      });
      promises.push(promise);
    }
    return Promise.all(promises).then(() => {
      return resources;
    });
  }

  render() {
    return (
      <span></span>
    );
  }

}
