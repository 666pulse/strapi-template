// https://docs.strapi.io/dev-docs/plugins/documentation

module.exports = {
  documentation: {
    enabled: true,
    config: {
      openapi: '3.0.0',
      info: {
        version: 'v1',
        title: 'Strapi Doc',
        description: '',
        termsOfService: '',
        contact: {
          name: '',
          email: '',
          url: ''
        },
        license: {
          name: '',
          url: ''
        },
      },
      'x-strapi-config': {
        // Leave empty to ignore plugins during generation
        plugins: [ 'upload', 'users-permissions'],
        path: '/documentation',
      },
      servers: [{ url: 'http://localhost:1337/api', description: '' }],
      externalDocs: {
        url: '',
        description: '',
      },
      security: [ { bearerAuth: [] } ]
    }
  }
}
