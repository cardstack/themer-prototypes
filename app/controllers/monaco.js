import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class Monaco extends Controller {
  @service 
  codeSamples

  editor; // the instance of the editor
  monaco;  // overall monaco state

  @action
  editorReady (editor, monaco) {
    this.editor = editor
    this.monaco = monaco
    setInterval(this.validateAndRender, 5000)
  }

  @action
  validateAndRender() {
    let errors = this.monaco.getModelMarkers({})
    if (errors.length) {
      return
    } else {
      this.preview()
    }
  }

  @action
  preview() {
    var css = this.codeSamples.brokenCss
    let newStyle = document.createElement('style')
    newStyle.setAttribute('id', 'card-styles')

    document.querySelector('#card-styles').replaceWith(newStyle)

    newStyle.type = 'text/css';
    if (newStyle.styleSheet){
      // This is required for IE8 and below.
      newStyle.styleSheet.cssText = css;
    } else {
      newStyle.appendChild(document.createTextNode(css));
    }
  }
}
