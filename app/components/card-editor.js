import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CardEditorComponent extends Component {
  editor; // the instance of the editor
  monaco;  // overall monaco state
  lastCode = '';
  @tracked css;
  @tracked markup;
  @tracked showEditingPane = true;
  @tracked isFullWidth = false;

  constructor() {
    super(...arguments)
    this.css = this.args.css
    this.markup = this.args.markup
  }

  @action
  editorReady (editor, monaco) {
    this.editor = editor
    this.monaco = monaco
    setInterval(this.validateAndRender, 2000)
  }

  @action
  validateAndRender() {
    if (this.lastCode === this.css) {
      // skip rendering if content is unchanged since last render
      return
    }
    
    this.lastCode = this.css

    // if there are no errors in the CSS editor,
    // render the stylesheet. Let warnings and hints slide.
    // Technically we can skip this and let the browser make sense of errors...
    // let errors = this.monaco.getModelMarkers({})
    // if (errors.some(this.checkForErrors)) {
    //   return
    // } else {
      this.preview()
    // }
  }

  @action
  preview() {
    var css = this.css
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

  checkForErrors(item) {
    return item.severity === 8
  }

  @action
  initialRender() {
    this.preview()
  }

  @action
  setChecked(propertyToSet, val) {
    this[propertyToSet] = val;
  }
}
