import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';


export default class HintComponent extends Component {
  @tracked showHint = false;

  @action
  toggleHint() {
    this.showHint = !this.showHint
  }
}