/// <reference types="cypress" />

const Ajv = require('ajv');
const schema = require('../../schemas/masterTables.json');

describe('Master Tables API', () => {
  it('Should retrieve master tables successfully', () => {
    cy.request({
      method: 'GET',
      url: 'https://forms-staging.celeri.app/v1/master-tables',
      headers: {
        Host: 'forms-staging.celeri.app',
        pragma: 'no-cache',
        'cache-control': 'no-cache',
        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
        accept: 'application/json, text/plain, */*',
        'x-provider': 'product-onboarding.vercel.app',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://product-onboarding.vercel.app',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        referer: 'https://product-onboarding.vercel.app/',
        'accept-language': 'es-ES,es;q=0.9'
      }
    }).then((response) => {
      expect(response.status, 'El estado de respuesta no es 200').to.equal(200);
      expect(response.body, 'El cuerpo de respuesta está vacío').to.not.be.empty;
      expect(response.headers['content-type'], 'El tipo de contenido no es application/json').to.include('application/json');

      cy.wrap(response.duration).should('be.lessThan', 2500, 'La duración de la respuesta excede los 2500 ms');

      const ajv = new Ajv();
      const validate = ajv.compile(schema);
      const valid = validate(response.body);

      expect(valid, 'La validación del esquema ha fallado').to.be.true;

    });
  });
});
