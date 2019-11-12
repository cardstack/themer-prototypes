import Component from '@glimmer/component';
import requirejsPolyfill from '@cardstack/requirejs-monaco-ember-polyfill';
import * as monaco from 'monaco-editor';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

requirejsPolyfill();


export default class CodeEditor extends Component {
  @tracked code;
  @tracked editor;
  
  constructor() {
    super(...arguments);
    this.code = this.args.code;
  }

  get readOnly() {
    if (this.args.readOnly === false) {
      return false;
    }

    return true;
  }

  @action
  renderEditor(el) {
    monaco.editor.onDidCreateEditor(this.onEditorReady)
    let editor = monaco.editor.create(el, {
      value: this.args.code,
      language: this.args.language,
      theme: 'vs-dark',
      readOnly: this.readOnly
    });
    
    editor.onDidChangeModelContent(this.onUpdateCode)
    this.editor = editor;
  }

  @action
  onEditorReady() {
    console.log('EDITOR READY');
    // https://microsoft.github.io/monaco-editor/api/modules/monaco.editor.html#ondidcreateeditor
  }

  @action
  onUpdateCode() {
    this.args.updateCode(this.editor.getValue())
  }
}
