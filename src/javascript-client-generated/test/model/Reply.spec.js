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
    instance = new ZhihuCaffe.Reply();
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

  describe('Reply', function() {
    it('should create an instance of Reply', function() {
      // uncomment below and update the code to test Reply
      //var instane = new ZhihuCaffe.Reply();
      //expect(instance).to.be.a(ZhihuCaffe.Reply);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ZhihuCaffe.Reply();
      //expect(instance).to.be();
    });

    it('should have the property likeNum (base name: "likeNum")', function() {
      // uncomment below and update the code to test the property likeNum
      //var instane = new ZhihuCaffe.Reply();
      //expect(instance).to.be();
    });

    it('should have the property createTime (base name: "createTime")', function() {
      // uncomment below and update the code to test the property createTime
      //var instane = new ZhihuCaffe.Reply();
      //expect(instance).to.be();
    });

    it('should have the property content (base name: "content")', function() {
      // uncomment below and update the code to test the property content
      //var instane = new ZhihuCaffe.Reply();
      //expect(instance).to.be();
    });

    it('should have the property authorUrl (base name: "author-url")', function() {
      // uncomment below and update the code to test the property authorUrl
      //var instane = new ZhihuCaffe.Reply();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new ZhihuCaffe.Reply();
      //expect(instance).to.be();
    });

  });

}));
