/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
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
 * The ConfigStoreInfoResponse model module.
 * @module model/ConfigStoreInfoResponse
 * @version 5.0.1
 */
class ConfigStoreInfoResponse {
    /**
     * Constructs a new <code>ConfigStoreInfoResponse</code>.
     * @alias module:model/ConfigStoreInfoResponse
     */
    constructor() { 
        
        ConfigStoreInfoResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConfigStoreInfoResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfigStoreInfoResponse} obj Optional instance to populate.
     * @return {module:model/ConfigStoreInfoResponse} The populated <code>ConfigStoreInfoResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConfigStoreInfoResponse();

            if (data.hasOwnProperty('item_count')) {
                obj['item_count'] = ApiClient.convertToType(data['item_count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The number of items currently in the config store.
 * @member {Number} item_count
 */
ConfigStoreInfoResponse.prototype['item_count'] = undefined;






export default ConfigStoreInfoResponse;

