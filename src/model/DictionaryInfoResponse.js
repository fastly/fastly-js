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
 * The DictionaryInfoResponse model module.
 * @module model/DictionaryInfoResponse
 * @version 7.10.0
 */
class DictionaryInfoResponse {
    /**
     * Constructs a new <code>DictionaryInfoResponse</code>.
     * @alias module:model/DictionaryInfoResponse
     */
    constructor() { 
        
        DictionaryInfoResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DictionaryInfoResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DictionaryInfoResponse} obj Optional instance to populate.
     * @return {module:model/DictionaryInfoResponse} The populated <code>DictionaryInfoResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DictionaryInfoResponse();

            if (data.hasOwnProperty('last_updated')) {
                obj['last_updated'] = ApiClient.convertToType(data['last_updated'], 'String');
            }
            if (data.hasOwnProperty('item_count')) {
                obj['item_count'] = ApiClient.convertToType(data['item_count'], 'Number');
            }
            if (data.hasOwnProperty('digest')) {
                obj['digest'] = ApiClient.convertToType(data['digest'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Timestamp (UTC) when the dictionary was last updated or an item was added or removed.
 * @member {String} last_updated
 */
DictionaryInfoResponse.prototype['last_updated'] = undefined;

/**
 * The number of items currently in the dictionary.
 * @member {Number} item_count
 */
DictionaryInfoResponse.prototype['item_count'] = undefined;

/**
 * A hash of all the dictionary content.
 * @member {String} digest
 */
DictionaryInfoResponse.prototype['digest'] = undefined;






export default DictionaryInfoResponse;

