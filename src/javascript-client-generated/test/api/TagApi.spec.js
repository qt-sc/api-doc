/**
 * Zhihu_Caffe
 * Zhihu_Caffe can craw data from ZhihuDaily and post article by user,  allowing users to reply the article and interact with other users.
 *
 * OpenAPI spec version: 0.1.4
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ZhihuCaffe);
  }
}(this, function(expect, ZhihuCaffe) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ZhihuCaffe.TagApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('TagApi', function() {
    describe('getTags', function() {
      it('should call getTags successfully', function(done) {
        //uncomment below and update the code to test getTags
        //instance.getTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchArticlesByTag', function() {
      it('should call searchArticlesByTag successfully', function(done) {
        //uncomment below and update the code to test searchArticlesByTag
        //instance.searchArticlesByTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));