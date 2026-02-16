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
 * The BulkUpdateConfigStoreItemAllOf model module.
 * @module model/BulkUpdateConfigStoreItemAllOf
 * @version 15.0.0
 */
class BulkUpdateConfigStoreItemAllOf {
    /**
     * Constructs a new <code>BulkUpdateConfigStoreItemAllOf</code>.
     * @alias module:model/BulkUpdateConfigStoreItemAllOf
     */
    constructor() { 
        
        BulkUpdateConfigStoreItemAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BulkUpdateConfigStoreItemAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BulkUpdateConfigStoreItemAllOf} obj Optional instance to populate.
     * @return {module:model/BulkUpdateConfigStoreItemAllOf} The populated <code>BulkUpdateConfigStoreItemAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BulkUpdateConfigStoreItemAllOf();

            if (data.hasOwnProperty('op')) {
                obj['op'] = ApiClient.convertToType(data['op'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BulkUpdateConfigStoreItemAllOf.OpEnum} op
 */
BulkUpdateConfigStoreItemAllOf.prototype['op'] = undefined;





/**
 * Allowed values for the <code>op</code> property.
 * @enum {String}
 * @readonly
 */
BulkUpdateConfigStoreItemAllOf['OpEnum'] = {

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



export default BulkUpdateConfigStoreItemAllOf;

