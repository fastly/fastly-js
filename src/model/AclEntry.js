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
 * The AclEntry model module.
 * @module model/AclEntry
 * @version 7.4.0
 */
class AclEntry {
    /**
     * Constructs a new <code>AclEntry</code>.
     * @alias module:model/AclEntry
     */
    constructor() { 
        
        AclEntry.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AclEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AclEntry} obj Optional instance to populate.
     * @return {module:model/AclEntry} The populated <code>AclEntry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AclEntry();

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
        }
        return obj;
    }


}

/**
 * Whether to negate the match. Useful primarily when creating individual exceptions to larger subnets.
 * @member {module:model/AclEntry.NegatedEnum} negated
 * @default NegatedEnum.disable
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





/**
 * Allowed values for the <code>negated</code> property.
 * @enum {Number}
 * @readonly
 */
AclEntry['NegatedEnum'] = {

    /**
     * value: 0
     * @const
     */
    "disable": 0,

    /**
     * value: 1
     * @const
     */
    "enable": 1
};



export default AclEntry;

