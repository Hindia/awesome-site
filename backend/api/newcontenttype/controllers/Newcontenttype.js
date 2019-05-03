'use strict';

/**
 * Newcontenttype.js controller
 *
 * @description: A set of functions called "actions" for managing `Newcontenttype`.
 */

module.exports = {

  /**
   * Retrieve newcontenttype records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.newcontenttype.search(ctx.query);
    } else {
      return strapi.services.newcontenttype.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a newcontenttype record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.newcontenttype.fetch(ctx.params);
  },

  /**
   * Count newcontenttype records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.newcontenttype.count(ctx.query);
  },

  /**
   * Create a/an newcontenttype record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.newcontenttype.add(ctx.request.body);
  },

  /**
   * Update a/an newcontenttype record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.newcontenttype.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an newcontenttype record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.newcontenttype.remove(ctx.params);
  }
};
