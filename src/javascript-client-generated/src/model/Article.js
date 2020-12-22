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

import ApiClient from '../ApiClient';
import Reply from './Reply';
import Tag from './Tag';

/**
* The Article model module.
* @module model/Article
* @version 0.1.4
*/
export default class Article {
    /**
    * Constructs a new <code>Article</code>.
    * @alias module:model/Article
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Article</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Article} obj Optional instance to populate.
    * @return {module:model/Article} The populated <code>Article</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Article();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('readNum')) {
                obj['readNum'] = ApiClient.convertToType(data['readNum'], 'Number');
            }
            if (data.hasOwnProperty('likeNum')) {
                obj['likeNum'] = ApiClient.convertToType(data['likeNum'], 'Number');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('replies')) {
                obj['replies'] = ApiClient.convertToType(data['replies'], [Reply]);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], [Tag]);
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {Number} id
    */
    'id' = undefined;
    /**
    * @member {String} title
    */
    'title' = undefined;
    /**
    * @member {Number} readNum
    */
    'readNum' = undefined;
    /**
    * @member {Number} likeNum
    */
    'likeNum' = undefined;
    /**
    * @member {String} content
    */
    'content' = undefined;
    /**
    * @member {Array.<module:model/Reply>} replies
    */
    'replies' = undefined;
    /**
    * @member {Array.<module:model/Tag>} tags
    */
    'tags' = undefined;
    /**
    * @member {String} url
    */
    'url' = undefined;




}
