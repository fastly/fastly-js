/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://www.fastly.com/documentation/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import BotManagementCategoryResponse from './BotManagementCategoryResponse';
import BotManagementMeta from './BotManagementMeta';

/**
 * The BotManagementCategoriesResponse model module.
 * @module model/BotManagementCategoriesResponse
 * @version 17.0.0
 */
class BotManagementCategoriesResponse {
    /**
     * Constructs a new <code>BotManagementCategoriesResponse</code>.
     * @alias module:model/BotManagementCategoriesResponse
     * @param meta {module:model/BotManagementMeta} 
     * @param data {Array.<module:model/BotManagementCategoryResponse>} The categories returned by the request.
     */
    constructor(meta, data) { 
        
        BotManagementCategoriesResponse.initialize(this, meta, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, meta, data) { 
        obj['meta'] = meta;
        obj['data'] = data;
    }

    /**
     * Constructs a <code>BotManagementCategoriesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BotManagementCategoriesResponse} obj Optional instance to populate.
     * @return {module:model/BotManagementCategoriesResponse} The populated <code>BotManagementCategoriesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BotManagementCategoriesResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = BotManagementMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [BotManagementCategoryResponse]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BotManagementMeta} meta
 */
BotManagementCategoriesResponse.prototype['meta'] = undefined;

/**
 * The categories returned by the request.
 * @member {Array.<module:model/BotManagementCategoryResponse>} data
 */
BotManagementCategoriesResponse.prototype['data'] = undefined;






export default BotManagementCategoriesResponse;

