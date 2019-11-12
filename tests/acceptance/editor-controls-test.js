import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { findAll } from 'ember-test-helpers';

module('Acceptance | editor controls', function(hooks) {
  setupApplicationTest(hooks);

  test('hide and show code editor pane', async function(assert) {
    await visit('/cards/generic');
    assert.equal(currentURL(), '/cards/generic');
    let firstCheck = findAll('[data-test-checkboxes] input')[0];
    await click(firstCheck)
    assert.dom('[data-test-right-column]').hasClass("slide-out-right");
    await click(firstCheck)
    assert.dom('[data-test-right-column]').hasClass("slide-in-right");
  });

  test('expand and shrink card preview', async function(assert) {
    await visit('/cards/generic');
    assert.equal(currentURL(), '/cards/generic');
    let secondCheck = findAll('[data-test-checkboxes] input')[1];
    await click(secondCheck)
    assert.dom('[data-test-left-column]').hasClass("left-col-expand");
    await click(secondCheck)
    assert.dom('[data-test-left-column]').hasClass("left-col-collapse");
  });
});
