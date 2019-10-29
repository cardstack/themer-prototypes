import Service from '@ember/service';

export default Service.extend({
  defaultCss: `.default-card {

  }`,

  markup: `
  <div data-test-isolated-card="local-hub::my-card::one" class="isolated-card default-card">

  <div class="field-renderer view-field field-title field-type-cardstack-core-types-string" data-test-field="title"
    data-test-field-type="@cardstack/core-types::string" data-test-field-mode="view">

    <span data-test-string-field-viewer-label="">
      title:
    </span>
    <span data-test-string-field-viewer-value="">
      So cool!
    </span>

  </div>

  <div class="field-renderer view-field field-is-submitted field-type-cardstack-core-types-boolean"
    data-test-field="is-submitted" data-test-field-type="@cardstack/core-types::boolean" data-test-field-mode="view">

    <span data-test-boolean-field-viewer-label="">
      is-submitted:
    </span>
    <span data-test-boolean-field-viewer-value="">
      false
    </span>

  </div>

  <div class="field-renderer view-field field-score field-type-cardstack-core-types-integer" data-test-field="score"
    data-test-field-type="@cardstack/core-types::integer" data-test-field-mode="view">

    <span data-test-integer-field-viewer-label="">
      score:
    </span>
    <span data-test-integer-field-viewer-value="">

    </span>

  </div>
</div>
  `,
});
