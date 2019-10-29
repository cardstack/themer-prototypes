import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    CodeMirror(this.element.querySelector('.codemirror-container'), {
      value: "function myScript(){return 100;}\n",
      mode:  "javascript",
      lineNumbers: true,
      readOnly: false
    });
  }
});
