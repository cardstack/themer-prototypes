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
  text-align: center;
  font-family: 'Parisienne', cursive;
}
  
.field-intro {
  padding: 30px 0;
  font-size: 20px;
}

.flourish {
  background-image: url("/images/flourish-pixabay-gordon-johnson.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  min-height: 100px;
}

.flourish-bottom {
  transform: rotate(180deg);
}

.field-spouse-one {
  font-size: 34px;
  padding: 0 0 0.5em 0;
}

.field-spouse-two {
  font-size: 34px;
  padding-top: 0.2em;
}

.field-wedding-date {
  font-size: 24px;
  padding: 1em 0;
}

.field-location {
  font-family: cursive;
}

.field-rsvp-by {
  padding-top: 1em;
  font-family: cursive;
}

.field-rsvp-link {
  font-family: cursive;
}

.ampersand {
  font-size: 40px;
}
  `,
  eventMarkup: `<div class="isolated-card default-card">
  <div class="field-renderer view-field field-intro field-type-cardstack-core-types-string">
    <span>
      We are delighted to invite you to the wedding of
    </span>
  </div>
  <div class="flourish flourish-top"></div>
  <div class="field-renderer view-field field-spouse-one field-type-cardstack-core-types-string">
    <span>
      Willa Karciana
    </span>
  </div>
  <div class="ampersand">
    &
  </div>
  <div class="field-renderer view-field field-spouse-two field-type-cardstack-core-types-string">
    <span>
      Ikram Eko
    </span>
  </div>
  <div class="flourish flourish-bottom"></div>
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
  
  <div class="field-renderer view-field field-rsvp-by field-type-cardstack-core-types-date">
    <div class="request-text">
        Your RSVP is requested by
    </div>
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
`,
invoiceMarkup: `<div class="isolated-card default-card card-container">
  <div class="field-renderer view-field field-title field-type-cardstack-core-types-string">
    <span>
      title:
    </span>
    <span>
      Initial invoice
    </span>
  </div>

  <div class="field-renderer view-field field-payable-to field-type-cardstack-core-types-string">
    <span>
      Payable to:
    </span>
    <span>
      Daisy Chain
    </span>
  </div>

  <div class="field-renderer view-field field-payable-from field-type-cardstack-core-types-string">
    <span>
      From:
    </span>
    <span>
      Willa Karciana
    </span>
  </div>

  <div class="field-renderer view-field field-amount-due field-type-cardstack-core-types-number">
    <span>
      Amount due today
    </span>
    <span>
      2000
    </span>

  </div>

  <div class="field-renderer view-field field-total-balance field-type-cardstack-core-types-number">

    <span>
      Total balance:
    </span>
    <span>
      10000
    </span>
  </div>
</div>`,
invoiceCss: `.default-card {}

.field-title {}

.field-payable-to {}

.field-payable-from {}

.field-amount-due {}

.field-total-balance {}
`
});
