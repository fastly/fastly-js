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
import BulkUpdateDictionaryItemAllOf from './BulkUpdateDictionaryItemAllOf';
import DictionaryItem from './DictionaryItem';

/**
 * The BulkUpdateDictionaryItem model module.
 * @module model/BulkUpdateDictionaryItem
 * @version 3.0.0-beta3
 */
class BulkUpdateDictionaryItem {
    /**
     * Constructs a new <code>BulkUpdateDictionaryItem</code>.
     * @alias module:model/BulkUpdateDictionaryItem
     * @implements module:model/DictionaryItem
     * @implements module:model/BulkUpdateDictionaryItemAllOf
     */
    constructor() { 
        DictionaryItem.initialize(this);BulkUpdateDictionaryItemAllOf.initialize(this);
        BulkUpdateDictionaryItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BulkUpdateDictionaryItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BulkUpdateDictionaryItem} obj Optional instance to populate.
     * @return {module:model/BulkUpdateDictionaryItem} The populated <code>BulkUpdateDictionaryItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BulkUpdateDictionaryItem();
            DictionaryItem.constructFromObject(data, obj);
            BulkUpdateDictionaryItemAllOf.constructFromObject(data, obj);

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
BulkUpdateDictionaryItem.prototype['item_key'] = undefined;

/**
 * Item value, maximum 8000 characters.
 * @member {String} item_value
 */
BulkUpdateDictionaryItem.prototype['item_value'] = undefined;

/**
 * @member {module:model/BulkUpdateDictionaryItem.OpEnum} op
 */
BulkUpdateDictionaryItem.prototype['op'] = undefined;


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
// Implement BulkUpdateDictionaryItemAllOf interface:
/**
 * @member {module:model/BulkUpdateDictionaryItemAllOf.OpEnum} op
 */
BulkUpdateDictionaryItemAllOf.prototype['op'] = undefined;



/**
 * Allowed values for the <code>op</code> property.
 * @enum {String}
 * @readonly
 */
BulkUpdateDictionaryItem['OpEnum'] = {

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



export default BulkUpdateDictionaryItem;

