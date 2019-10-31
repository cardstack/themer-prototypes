import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | cards/invoice', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:cards/invoice');
    assert.ok(route);
  });
});
