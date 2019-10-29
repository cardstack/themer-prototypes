import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    CodeMirror(document.querySelector('.codemirror-container'), {
      value: "function myScript(){return 100;}\n",
      mode:  "javascript",
      lineNumbers: true,
      readOnly: false
    });
  }
});
