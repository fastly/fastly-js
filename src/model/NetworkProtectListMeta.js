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
 * The NetworkProtectListMeta model module.
 * @module model/NetworkProtectListMeta
 * @version 17.0.0
 */
class NetworkProtectListMeta {
    /**
     * Constructs a new <code>NetworkProtectListMeta</code>.
     * Pagination metadata for a collection response.
     * @alias module:model/NetworkProtectListMeta
     * @param limit {Number} Effective page limit after defaulting and clamping.
     */
    constructor(limit) { 
        
        NetworkProtectListMeta.initialize(this, limit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, limit) { 
        obj['limit'] = limit || 100;
    }

    /**
     * Constructs a <code>NetworkProtectListMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkProtectListMeta} obj Optional instance to populate.
     * @return {module:model/NetworkProtectListMeta} The populated <code>NetworkProtectListMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkProtectListMeta();

            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('next_cursor')) {
                obj['next_cursor'] = ApiClient.convertToType(data['next_cursor'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Effective page limit after defaulting and clamping.
 * @member {Number} limit
 * @default 100
 */
NetworkProtectListMeta.prototype['limit'] = 100;

/**
 * Continuation value to send as cursor when more resources remain. Omitted on the final page.
 * @member {String} next_cursor
 */
NetworkProtectListMeta.prototype['next_cursor'] = undefined;






export default NetworkProtectListMeta;

