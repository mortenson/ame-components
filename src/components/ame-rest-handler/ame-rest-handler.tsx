import { Component, Method, Prop, Event, EventEmitter } from '@stencil/core';
import {AmeHandler} from "../ame-handler/ame-handler";

@Component({
  tag: 'ame-rest-handler',
  styleUrl: 'ame-rest-handler.scss'
})
export class AmeRestHandler extends AmeHandler {

  @Prop() handlerName: string;

  @Prop() baseUrl: string;

  @Event() saveComplete: EventEmitter;

  getUrl(path) {
    return this.baseUrl.replace(/\/+$/, '') + '/' + path.replace(/^\/+/, '');
  }

  @Method()
  save() {
    if (this.baseUrl) {
      this.getChangedResources().then((resources) => {
        for (let key in resources) {
          this.lastResources[key] = resources[key];
          let tokenRequest = new XMLHttpRequest();
          tokenRequest.open('GET', this.getUrl('/rest/session/token'));
          tokenRequest.addEventListener('load', () => {
            if (tokenRequest.status === 200) {
              let patchRequest = new XMLHttpRequest();
              patchRequest.open('PATCH', this.getUrl(key));
              patchRequest.setRequestHeader('X-CSRF-Token', tokenRequest.responseText);
              patchRequest.setRequestHeader('Content-Type', 'application/json');
              patchRequest.setRequestHeader('Accept', 'application/json');
              patchRequest.addEventListener('load', () => {
                console.log(patchRequest);
              });
              patchRequest.send(JSON.stringify(resources[key]));
              this.saveComplete.emit(resources);
            }
          });
          tokenRequest.send();
        }
      });
    }
  }

  render() {
    return (
      <span></span>
    );
  }

}
