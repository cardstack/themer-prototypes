import Component from '@ember/component';

export default Component.extend({
  showHint: false,
  actions: {
    toggleHint() {
      this.toggleProperty('showHint')
    }
  }
});
