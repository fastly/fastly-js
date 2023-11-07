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
 * The ConfigStoreItem model module.
 * @module model/ConfigStoreItem
 * @version 6.2.2
 */
class ConfigStoreItem {
    /**
     * Constructs a new <code>ConfigStoreItem</code>.
     * @alias module:model/ConfigStoreItem
     */
    constructor() { 
        
        ConfigStoreItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConfigStoreItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfigStoreItem} obj Optional instance to populate.
     * @return {module:model/ConfigStoreItem} The populated <code>ConfigStoreItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConfigStoreItem();

            if (data.hasOwnProperty('item_key')) {
                obj['item_key'] = ApiClient.convertToType(data['item_key'], 'String');
            }
            if (data.hasOwnProperty('item_value')) {
                obj['item_value'] = ApiClient.convertToType(data['item_value'], 'String');
            }
        }
        return obj;
    }


}

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






export default ConfigStoreItem;

