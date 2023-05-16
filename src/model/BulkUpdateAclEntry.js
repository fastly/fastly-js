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
import AclEntry from './AclEntry';
import BulkUpdateAclEntryAllOf from './BulkUpdateAclEntryAllOf';

/**
 * The BulkUpdateAclEntry model module.
 * @module model/BulkUpdateAclEntry
 * @version 4.0.0
 */
class BulkUpdateAclEntry {
    /**
     * Constructs a new <code>BulkUpdateAclEntry</code>.
     * @alias module:model/BulkUpdateAclEntry
     * @implements module:model/AclEntry
     * @implements module:model/BulkUpdateAclEntryAllOf
     */
    constructor() { 
        AclEntry.initialize(this);BulkUpdateAclEntryAllOf.initialize(this);
        BulkUpdateAclEntry.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BulkUpdateAclEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BulkUpdateAclEntry} obj Optional instance to populate.
     * @return {module:model/BulkUpdateAclEntry} The populated <code>BulkUpdateAclEntry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BulkUpdateAclEntry();
            AclEntry.constructFromObject(data, obj);
            BulkUpdateAclEntryAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('negated')) {
                obj['negated'] = ApiClient.convertToType(data['negated'], 'Number');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('ip')) {
                obj['ip'] = ApiClient.convertToType(data['ip'], 'String');
            }
            if (data.hasOwnProperty('subnet')) {
                obj['subnet'] = ApiClient.convertToType(data['subnet'], 'Number');
            }
            if (data.hasOwnProperty('op')) {
                obj['op'] = ApiClient.convertToType(data['op'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Whether to negate the match. Useful primarily when creating individual exceptions to larger subnets.
 * @member {module:model/BulkUpdateAclEntry.NegatedEnum} negated
 * @default NegatedEnum.0
 */
BulkUpdateAclEntry.prototype['negated'] = undefined;

/**
 * A freeform descriptive note.
 * @member {String} comment
 */
BulkUpdateAclEntry.prototype['comment'] = undefined;

/**
 * An IP address.
 * @member {String} ip
 */
BulkUpdateAclEntry.prototype['ip'] = undefined;

/**
 * Number of bits for the subnet mask applied to the IP address. For IPv4 addresses, a value of 32 represents the smallest subnet mask (1 address), 24 represents a class C subnet mask (256 addresses), 16 represents a class B subnet mask (65k addresses), and 8 is class A subnet mask (16m addresses). If not provided, no mask is applied.
 * @member {Number} subnet
 */
BulkUpdateAclEntry.prototype['subnet'] = undefined;

/**
 * @member {module:model/BulkUpdateAclEntry.OpEnum} op
 */
BulkUpdateAclEntry.prototype['op'] = undefined;

/**
 * @member {String} id
 */
BulkUpdateAclEntry.prototype['id'] = undefined;


// Implement AclEntry interface:
/**
 * Whether to negate the match. Useful primarily when creating individual exceptions to larger subnets.
 * @member {module:model/AclEntry.NegatedEnum} negated
 * @default NegatedEnum.0
 */
AclEntry.prototype['negated'] = undefined;
/**
 * A freeform descriptive note.
 * @member {String} comment
 */
AclEntry.prototype['comment'] = undefined;
/**
 * An IP address.
 * @member {String} ip
 */
AclEntry.prototype['ip'] = undefined;
/**
 * Number of bits for the subnet mask applied to the IP address. For IPv4 addresses, a value of 32 represents the smallest subnet mask (1 address), 24 represents a class C subnet mask (256 addresses), 16 represents a class B subnet mask (65k addresses), and 8 is class A subnet mask (16m addresses). If not provided, no mask is applied.
 * @member {Number} subnet
 */
AclEntry.prototype['subnet'] = undefined;
// Implement BulkUpdateAclEntryAllOf interface:
/**
 * @member {module:model/BulkUpdateAclEntryAllOf.OpEnum} op
 */
BulkUpdateAclEntryAllOf.prototype['op'] = undefined;
/**
 * @member {String} id
 */
BulkUpdateAclEntryAllOf.prototype['id'] = undefined;



/**
 * Allowed values for the <code>negated</code> property.
 * @enum {Number}
 * @readonly
 */
BulkUpdateAclEntry['NegatedEnum'] = {

    /**
     * value: 0
     * @const
     */
    "0": 0,

    /**
     * value: 1
     * @const
     */
    "1": 1
};


/**
 * Allowed values for the <code>op</code> property.
 * @enum {String}
 * @readonly
 */
BulkUpdateAclEntry['OpEnum'] = {

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
    "delete": "delete"
};



export default BulkUpdateAclEntry;

