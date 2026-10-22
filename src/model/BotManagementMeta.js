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

/**
 * The BotManagementMeta model module.
 * @module model/BotManagementMeta
 * @version 17.0.0
 */
class BotManagementMeta {
    /**
     * Constructs a new <code>BotManagementMeta</code>.
     * Metadata about the request.
     * @alias module:model/BotManagementMeta
     */
    constructor() { 
        
        BotManagementMeta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BotManagementMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BotManagementMeta} obj Optional instance to populate.
     * @return {module:model/BotManagementMeta} The populated <code>BotManagementMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BotManagementMeta();

            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('next_cursor')) {
                obj['next_cursor'] = ApiClient.convertToType(data['next_cursor'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The `limit` value used when making the request.
 * @member {Number} limit
 */
BotManagementMeta.prototype['limit'] = undefined;

/**
 * The count of results matching the request.
 * @member {Number} total
 */
BotManagementMeta.prototype['total'] = undefined;

/**
 * The cursor to use to request the next page of results. Set to `null` when there are no more results.
 * @member {String} next_cursor
 */
BotManagementMeta.prototype['next_cursor'] = undefined;






export default BotManagementMeta;

