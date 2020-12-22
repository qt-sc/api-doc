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

import ApiClient from '../ApiClient';

/**
* The Apis model module.
* @module model/Apis
* @version 0.1.4
*/
export default class Apis {
    /**
    * Constructs a new <code>Apis</code>.
    * @alias module:model/Apis
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Apis</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Apis} obj Optional instance to populate.
    * @return {module:model/Apis} The populated <code>Apis</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Apis();
                        
            
            if (data.hasOwnProperty('users_url')) {
                obj['users_url'] = ApiClient.convertToType(data['users_url'], 'String');
            }
            if (data.hasOwnProperty('user_url')) {
                obj['user_url'] = ApiClient.convertToType(data['user_url'], 'String');
            }
            if (data.hasOwnProperty('articles_url')) {
                obj['articles_url'] = ApiClient.convertToType(data['articles_url'], 'String');
            }
            if (data.hasOwnProperty('article_url')) {
                obj['article_url'] = ApiClient.convertToType(data['article_url'], 'String');
            }
            if (data.hasOwnProperty('replies_url')) {
                obj['replies_url'] = ApiClient.convertToType(data['replies_url'], 'String');
            }
            if (data.hasOwnProperty('reply_url')) {
                obj['reply_url'] = ApiClient.convertToType(data['reply_url'], 'String');
            }
            if (data.hasOwnProperty('tags_url')) {
                obj['tags_url'] = ApiClient.convertToType(data['tags_url'], 'String');
            }
            if (data.hasOwnProperty('tag_url')) {
                obj['tag_url'] = ApiClient.convertToType(data['tag_url'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} users_url
    * @default '/api/users'
    */
    'users_url' = '/api/users';
    /**
    * @member {String} user_url
    * @default '/api/users/{userid}'
    */
    'user_url' = '/api/users/{userid}';
    /**
    * @member {String} articles_url
    * @default '/api/users/{userid}/articles'
    */
    'articles_url' = '/api/users/{userid}/articles';
    /**
    * @member {String} article_url
    * @default '/api/users/{userid}/articles/{articleid}'
    */
    'article_url' = '/api/users/{userid}/articles/{articleid}';
    /**
    * @member {String} replies_url
    * @default '/api/users/{userid}/articles/{articleid}/replies'
    */
    'replies_url' = '/api/users/{userid}/articles/{articleid}/replies';
    /**
    * @member {String} reply_url
    * @default '/api/users/{userid}/articles/{articleid}/replies/{replyid}'
    */
    'reply_url' = '/api/users/{userid}/articles/{articleid}/replies/{replyid}';
    /**
    * @member {String} tags_url
    * @default '/api/users'
    */
    'tags_url' = '/api/users';
    /**
    * @member {String} tag_url
    * @default '/api/users/{userid}'
    */
    'tag_url' = '/api/users/{userid}';




}