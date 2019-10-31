import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class Monaco extends Controller {
  @service 
  codeSamples

  editor; // the instance of the editor
  monaco;  // overall monaco state
  lastCode = '';

  @action
  editorReady (editor, monaco) {
    this.editor = editor
    this.monaco = monaco
    setInterval(this.validateAndRender, 3000)
  }

  @action
  validateAndRender() {
    if (this.lastCode === this.codeSamples.defaultCss) {
      // skip rendering if content is unchanged
      // since last render
      console.log('skip')
      return
    }
    
    this.lastCode = this.codeSamples.defaultCss

    // if there are no warnings in the CSS editor,
    // render the stylesheet
    let errors = this.monaco.getModelMarkers({})
    if (errors.length) {
      return
    } else {
      this.preview()
    }
  }

  @action
  preview() {
    var css = this.codeSamples.defaultCss
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
