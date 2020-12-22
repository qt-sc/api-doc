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
import Tag from './Tag';

/**
* The Tags model module.
* @module model/Tags
* @version 0.1.4
*/
export default class Tags extends Array {
    /**
    * Constructs a new <code>Tags</code>.
    * @alias module:model/Tags
    * @class
    * @extends Array
    */

    constructor() {
        super();
        
        
        return this;
    }

    /**
    * Constructs a <code>Tags</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Tags} obj Optional instance to populate.
    * @return {module:model/Tags} The populated <code>Tags</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Tags();
            ApiClient.constructFromObject(data, obj, 'Tag');
            
            
        }
        return obj;
    }





}
