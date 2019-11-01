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
  eventCss: `.default-card {
  font-family: sans-serif;
  text-align: center;
}
  
.field-intro {}

.field-spouse-one {
  font-family: 'Sail', cursive;
  font-size: 30px;
}

.field-spouse-two {
  font-family: 'Sail', cursive;
  font-size: 30px;
}

.field-wedding-date {}

.field-location {}

.field-rsvp-by {}

.field-rsvp-link {}
  `,
  eventMarkup: `<div class="isolated-card default-card">
  <div class="field-renderer view-field field-intro field-type-cardstack-core-types-string">
    <span>
      We are delighted to invite you to the wedding of
    </span>
  </div>
  <div class="field-renderer view-field field-spouse-one field-type-cardstack-core-types-string">
    <span>
      Willa Karciana
    </span>
  </div>
  and
  <div class="field-renderer view-field field-spouse-two field-type-cardstack-core-types-string">
    <span>
      Ikram Eko
    </span>
  </div>
  <div class="field-renderer view-field field-wedding-date field-type-cardstack-core-types-date">
    <span>
      August 8th, 2020
    </span>
  </div>

  <div class="field-renderer view-field field-location field-type-cardstack-core-types-string">
    <span>
      The Gorgeous Hotel, 96 Hilton Avenue, San Francisco, CA
    </span>
  </div>
  <div class="request-text">
      Your RSVP is requested by
  </div>

  <div class="field-renderer view-field field-rsvp-by field-type-cardstack-core-types-date">
    <span>
      September 6th, 2020
    </span>
  </div>
  <div class="field-renderer view-field field-rsvp-link field-type-cardstack-core-types-string">
    <a href="#">
      www.karciana-eko.example.com
    </a>
  </div>
</div>
`
});
