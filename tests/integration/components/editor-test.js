import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | card-editor', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<CardEditor />`);

    assert.dom('.left-col').includesText('Card Themer');

    // Template block usage:
    await render(hbs`
      <CardEditor>
        template block text
      </CardEditor>
    `);

    assert.dom('.left-col').includesText('template block text');
  });
});
