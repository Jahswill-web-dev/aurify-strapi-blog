'use strict';

/**
 * aurify-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::aurify-blog.aurify-blog');
