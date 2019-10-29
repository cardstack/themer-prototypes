import Controller from '@ember/controller';
import { action } from '@ember/object';
import {inject as service } from '@ember/service';

export default class Monaco extends Controller {
  @service 
  codeSamples

  @action
  editorReady (/*editor*/) {
    // use editor instance
  }

  @action
  handleEdit(/*code*/) {
    // parse and apply styling?
  }

  @action
  preview() {
    var css = this.sample1,
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

    head.appendChild(style);

    style.type = 'text/css';
    if (style.styleSheet){
      // This is required for IE8 and below.
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }
}
