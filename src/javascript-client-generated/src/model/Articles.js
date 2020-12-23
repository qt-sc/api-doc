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
import Article from './Article';

/**
* The Articles model module.
* @module model/Articles
* @version 0.1.4
*/
export default class Articles extends Array {
    /**
    * Constructs a new <code>Articles</code>.
    * @alias module:model/Articles
    * @class
    * @extends Array
    */

    constructor() {
        super();
        
        
        return this;
    }

    /**
    * Constructs a <code>Articles</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Articles} obj Optional instance to populate.
    * @return {module:model/Articles} The populated <code>Articles</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Articles();
            ApiClient.constructFromObject(data, obj, 'Article');
            
            
        }
        return obj;
    }





}
