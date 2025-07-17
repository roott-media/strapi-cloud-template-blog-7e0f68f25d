'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/influencers',
      handler: 'influencer.find',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/influencers/:id',
      handler: 'influencer.findOne',
      config: {
        auth: false,
      },
    },
    {
      method: 'POST',
      path: '/influencers',
      handler: 'influencer.create',
      config: {
        auth: false,
      },
    },
    {
      method: 'PUT',
      path: '/influencers/:id',
      handler: 'influencer.update',
      config: {
        auth: false,
      },
    },
    {
      method: 'DELETE',
      path: '/influencers/:id',
      handler: 'influencer.delete',
      config: {
        auth: false,
      },
    },
  ],
};
