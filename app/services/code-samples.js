import Service from '@ember/service';

export default Service.extend({
  genericCss: `.card-container {}

.field-title {}

.field-is-submitted {}

.field-score {}
`,

  genericMarkup: `<div class="isolated-card default-card card-container">
  <div class="field-renderer view-field field-title field-type-cardstack-core-types-string">
    <span>
      title:
    </span>
    <span>
      So cool!
    </span>
  </div>

  <div class="field-renderer view-field field-is-submitted field-type-cardstack-core-types-boolean">
    <span>
      is-submitted:
    </span>
    <span>
      false
    </span>

  </div>

  <div class="field-renderer view-field field-score field-type-cardstack-core-types-integer">

    <span>
      score:
    </span>
    <span>
      12
    </span>
  </div>
</div>
  `,
  eventCss: ``,
  eventMarkup: ``
});
