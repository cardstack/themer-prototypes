import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { timeout } from "ember-concurrency";
import { restartableTask } from "ember-concurrency-decorators";

const DEBOUNCE_MS = 250;

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

  @restartableTask
  * updateCss(code) {
    // Pause here for DEBOUNCE_MS milliseconds. Because this
    // task is `restartable`, if the user starts typing again,
    // the current search will be canceled at this point and
    // start over from the beginning.
    yield timeout(DEBOUNCE_MS)

    this.css = code
    this.preview()
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
    this.updateCss.perform(code);
  }
}
