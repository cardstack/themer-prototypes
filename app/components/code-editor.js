import Component from '@glimmer/component';
import requirejsPolyfill from '@cardstack/requirejs-monaco-ember-polyfill';
import * as monaco from 'monaco-editor';
import { action } from '@ember/object';

requirejsPolyfill();


export default class CodeEditor extends Component {
  @action
  renderEditor(el) {
    monaco.editor.create(el, {
      value: "let a = 2;",
      language: "javascript",
      theme: 'vs-dark',
      readOnly: true
    });
  }
}
