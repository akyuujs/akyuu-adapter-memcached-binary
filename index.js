/*
 * @Author: fei
 * @Date: 2017-06-27 11:47:07
 * @Last Modified by: fei
 * @Last Modified time: 2017-06-27 11:49:56
 */
'use strict';

const memjs = require('memjs');

exports.create = function(config) {
    return memjs.Client.create(config.serverUri);
};
