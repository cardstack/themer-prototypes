import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CardEditorComponent extends Component {
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

  @action
  initialRender() {
    this.preview()
  }

  @action
  setChecked(propertyToSet, val) {
    this[propertyToSet] = val;
  }

  @action
  updateCode(code) {
    this.css = code
    this.preview()
  }
}
