import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { click } from 'ember-test-helpers';

module('Acceptance | navigate to themer', function(hooks) {
  setupApplicationTest(hooks);

  test('navigation from index to generic', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/');
    await click('[data-test-catalog-item="generic"]');
    assert.equal(currentURL(), '/cards/generic');
  });

  test('navigation from index to wedding', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/');
    await click('[data-test-catalog-item="event"]');
    assert.equal(currentURL(), '/cards/event');
  });

  test('navigation from index to invoice', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/');
    await click('[data-test-catalog-item="invoice"]');
    assert.equal(currentURL(), '/cards/invoice');
  });
});
