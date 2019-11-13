import Component from '@glimmer/component';
import requirejsPolyfill from '@cardstack/requirejs-monaco-ember-polyfill';
import * as monaco from 'monaco-editor';
import { action } from '@ember/object';

// without this polyfill, workers won't start due to a type error accessing
// a requirejs attribute. See the polyfill package readme for details.
requirejsPolyfill();

export default class CodeEditor extends Component {
  editor; // value is set by renderEditor

  // readOnly defaults to true
  get readOnly() {
    if (this.args.readOnly === false) {
      return false;
    } else {
      return true;
    }
  }

  @action
  renderEditor(el) {
    // This is called when the containing div has been rendered.
    // `create` constructs a code editor and inserts it into the DOM.
    // el is the element that {{did-insert}} was used on.
    let editor = monaco.editor.create(el, {
      value: this.args.code,
      language: this.args.language,
      theme: 'vs-dark',
      readOnly: this.readOnly
    });
    
    // Whenever the code block's text changes, onUpdateCode will be called.
    editor.onDidChangeModelContent(this.onUpdateCode)

    // Save editor instance locally, so we can reference it in other methods
    this.editor = editor;
  }

  @action
  onEditorReady() {
    // console.log('editor ready')
  }

  @action
  onUpdateCode() {
    if (this.args.updateCode) {
      // passing the updateCode action in is optional, so we check to see if it's
      // defined before calling it.
      this.args.updateCode(this.editor.getValue())
    }
  }
}
