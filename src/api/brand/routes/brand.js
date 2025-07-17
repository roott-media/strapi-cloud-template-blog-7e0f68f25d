'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/brands',
      handler: 'brand.find',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/brands/:id',
      handler: 'brand.findOne',
      config: {
        auth: false,
      },
    },
    {
      method: 'POST',
      path: '/brands',
      handler: 'brand.create',
      config: {
        auth: false,
      },
    },
    {
      method: 'PUT',
      path: '/brands/:id',
      handler: 'brand.update',
      config: {
        auth: false,
      },
    },
    {
      method: 'DELETE',
      path: '/brands/:id',
      handler: 'brand.delete',
      config: {
        auth: false,
      },
    },
  ],
};
