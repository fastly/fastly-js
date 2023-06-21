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
import BulkUpdateConfigStoreItemAllOf from './BulkUpdateConfigStoreItemAllOf';
import ConfigStoreItem from './ConfigStoreItem';

/**
 * The BulkUpdateConfigStoreItem model module.
 * @module model/BulkUpdateConfigStoreItem
 * @version 4.2.1
 */
class BulkUpdateConfigStoreItem {
    /**
     * Constructs a new <code>BulkUpdateConfigStoreItem</code>.
     * @alias module:model/BulkUpdateConfigStoreItem
     * @implements module:model/ConfigStoreItem
     * @implements module:model/BulkUpdateConfigStoreItemAllOf
     */
    constructor() { 
        ConfigStoreItem.initialize(this);BulkUpdateConfigStoreItemAllOf.initialize(this);
        BulkUpdateConfigStoreItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BulkUpdateConfigStoreItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BulkUpdateConfigStoreItem} obj Optional instance to populate.
     * @return {module:model/BulkUpdateConfigStoreItem} The populated <code>BulkUpdateConfigStoreItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BulkUpdateConfigStoreItem();
            ConfigStoreItem.constructFromObject(data, obj);
            BulkUpdateConfigStoreItemAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('item_key')) {
                obj['item_key'] = ApiClient.convertToType(data['item_key'], 'String');
            }
            if (data.hasOwnProperty('item_value')) {
                obj['item_value'] = ApiClient.convertToType(data['item_value'], 'String');
            }
            if (data.hasOwnProperty('op')) {
                obj['op'] = ApiClient.convertToType(data['op'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Item key, maximum 256 characters.
 * @member {String} item_key
 */
BulkUpdateConfigStoreItem.prototype['item_key'] = undefined;

/**
 * Item value, maximum 8000 characters.
 * @member {String} item_value
 */
BulkUpdateConfigStoreItem.prototype['item_value'] = undefined;

/**
 * @member {module:model/BulkUpdateConfigStoreItem.OpEnum} op
 */
BulkUpdateConfigStoreItem.prototype['op'] = undefined;


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
// Implement BulkUpdateConfigStoreItemAllOf interface:
/**
 * @member {module:model/BulkUpdateConfigStoreItemAllOf.OpEnum} op
 */
BulkUpdateConfigStoreItemAllOf.prototype['op'] = undefined;



/**
 * Allowed values for the <code>op</code> property.
 * @enum {String}
 * @readonly
 */
BulkUpdateConfigStoreItem['OpEnum'] = {

    /**
     * value: "create"
     * @const
     */
    "create": "create",

    /**
     * value: "update"
     * @const
     */
    "update": "update",

    /**
     * value: "delete"
     * @const
     */
    "delete": "delete",

    /**
     * value: "upsert"
     * @const
     */
    "upsert": "upsert"
};



export default BulkUpdateConfigStoreItem;

