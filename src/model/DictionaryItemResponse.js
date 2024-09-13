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
import DictionaryItem from './DictionaryItem';
import DictionaryItemResponseAllOf from './DictionaryItemResponseAllOf';
import Timestamps from './Timestamps';

/**
 * The DictionaryItemResponse model module.
 * @module model/DictionaryItemResponse
 * @version 7.9.0
 */
class DictionaryItemResponse {
    /**
     * Constructs a new <code>DictionaryItemResponse</code>.
     * @alias module:model/DictionaryItemResponse
     * @implements module:model/DictionaryItem
     * @implements module:model/Timestamps
     * @implements module:model/DictionaryItemResponseAllOf
     */
    constructor() { 
        DictionaryItem.initialize(this);Timestamps.initialize(this);DictionaryItemResponseAllOf.initialize(this);
        DictionaryItemResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DictionaryItemResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DictionaryItemResponse} obj Optional instance to populate.
     * @return {module:model/DictionaryItemResponse} The populated <code>DictionaryItemResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DictionaryItemResponse();
            DictionaryItem.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);
            DictionaryItemResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('item_key')) {
                obj['item_key'] = ApiClient.convertToType(data['item_key'], 'String');
            }
            if (data.hasOwnProperty('item_value')) {
                obj['item_value'] = ApiClient.convertToType(data['item_value'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('dictionary_id')) {
                obj['dictionary_id'] = ApiClient.convertToType(data['dictionary_id'], 'String');
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Item key, maximum 256 characters.
 * @member {String} item_key
 */
DictionaryItemResponse.prototype['item_key'] = undefined;

/**
 * Item value, maximum 8000 characters.
 * @member {String} item_value
 */
DictionaryItemResponse.prototype['item_value'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
DictionaryItemResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
DictionaryItemResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
DictionaryItemResponse.prototype['updated_at'] = undefined;

/**
 * @member {String} dictionary_id
 */
DictionaryItemResponse.prototype['dictionary_id'] = undefined;

/**
 * @member {String} service_id
 */
DictionaryItemResponse.prototype['service_id'] = undefined;


// Implement DictionaryItem interface:
/**
 * Item key, maximum 256 characters.
 * @member {String} item_key
 */
DictionaryItem.prototype['item_key'] = undefined;
/**
 * Item value, maximum 8000 characters.
 * @member {String} item_value
 */
DictionaryItem.prototype['item_value'] = undefined;
// Implement Timestamps interface:
/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
Timestamps.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
Timestamps.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
Timestamps.prototype['updated_at'] = undefined;
// Implement DictionaryItemResponseAllOf interface:
/**
 * @member {String} dictionary_id
 */
DictionaryItemResponseAllOf.prototype['dictionary_id'] = undefined;
/**
 * @member {String} service_id
 */
DictionaryItemResponseAllOf.prototype['service_id'] = undefined;




export default DictionaryItemResponse;

