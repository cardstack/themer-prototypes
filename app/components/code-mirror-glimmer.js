import Component from '@glimmer/component';

export default class CodeMirrorGlimmerComponent extends Component {
  renderCode(el) {
    CodeMirror(el, {
      value: "function myScript(){return 100;}\n",
      mode:  "javascript",
      lineNumbers: true,
      readOnly: false
    });
  }
}