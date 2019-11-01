import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { fade } from 'ember-animated/transitions/fade'


export default class HintComponent extends Component {
  @tracked showHint = false;
  fade=fade;

  @action
  toggleHint() {
    this.showHint = !this.showHint
  }
}