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
import ConfigStoreItem from './ConfigStoreItem';
import ConfigStoreItemResponseAllOf from './ConfigStoreItemResponseAllOf';
import Timestamps from './Timestamps';

/**
 * The ConfigStoreItemResponse model module.
 * @module model/ConfigStoreItemResponse
 * @version 7.10.0
 */
class ConfigStoreItemResponse {
    /**
     * Constructs a new <code>ConfigStoreItemResponse</code>.
     * @alias module:model/ConfigStoreItemResponse
     * @implements module:model/ConfigStoreItem
     * @implements module:model/Timestamps
     * @implements module:model/ConfigStoreItemResponseAllOf
     */
    constructor() { 
        ConfigStoreItem.initialize(this);Timestamps.initialize(this);ConfigStoreItemResponseAllOf.initialize(this);
        ConfigStoreItemResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConfigStoreItemResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfigStoreItemResponse} obj Optional instance to populate.
     * @return {module:model/ConfigStoreItemResponse} The populated <code>ConfigStoreItemResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConfigStoreItemResponse();
            ConfigStoreItem.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);
            ConfigStoreItemResponseAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('store_id')) {
                obj['store_id'] = ApiClient.convertToType(data['store_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Item key, maximum 256 characters.
 * @member {String} item_key
 */
ConfigStoreItemResponse.prototype['item_key'] = undefined;

/**
 * Item value, maximum 8000 characters.
 * @member {String} item_value
 */
ConfigStoreItemResponse.prototype['item_value'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
ConfigStoreItemResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
ConfigStoreItemResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
ConfigStoreItemResponse.prototype['updated_at'] = undefined;

/**
 * @member {String} store_id
 */
ConfigStoreItemResponse.prototype['store_id'] = undefined;


// Implement ConfigStoreItem interface:
/**
 * Item key, maximum 256 characters.
 * @member {String} item_key
 */
ConfigStoreItem.prototype['item_key'] = undefined;
/**
 * Item value, maximum 8000 characters.
 * @member {String} item_value
 */
ConfigStoreItem.prototype['item_value'] = undefined;
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
// Implement ConfigStoreItemResponseAllOf interface:
/**
 * @member {String} store_id
 */
ConfigStoreItemResponseAllOf.prototype['store_id'] = undefined;




export default ConfigStoreItemResponse;

