/**
 * Zhihu_Caffee
 * Zhihu_Caffee can craw data from ZhihuDaily and post article by user,  allowing users to reply the article and interact with other users.
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
    instance = new ZhihuCaffe.ReplyApi();
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

  describe('ReplyApi', function() {
    describe('createReply', function() {
      it('should call createReply successfully', function(done) {
        //uncomment below and update the code to test createReply
        //instance.createReply(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getReplies', function() {
      it('should call getReplies successfully', function(done) {
        //uncomment below and update the code to test getReplies
        //instance.getReplies(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getReply', function() {
      it('should call getReply successfully', function(done) {
        //uncomment below and update the code to test getReply
        //instance.getReply(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('likeReply', function() {
      it('should call likeReply successfully', function(done) {
        //uncomment below and update the code to test likeReply
        //instance.likeReply(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
