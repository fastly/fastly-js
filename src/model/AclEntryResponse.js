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
import AclEntryResponseAllOf from './AclEntryResponseAllOf';
import Timestamps from './Timestamps';

/**
 * The AclEntryResponse model module.
 * @module model/AclEntryResponse
 * @version 6.1.0
 */
class AclEntryResponse {
    /**
     * Constructs a new <code>AclEntryResponse</code>.
     * @alias module:model/AclEntryResponse
     * @implements module:model/AclEntry
     * @implements module:model/Timestamps
     * @implements module:model/AclEntryResponseAllOf
     */
    constructor() { 
        AclEntry.initialize(this);Timestamps.initialize(this);AclEntryResponseAllOf.initialize(this);
        AclEntryResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AclEntryResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AclEntryResponse} obj Optional instance to populate.
     * @return {module:model/AclEntryResponse} The populated <code>AclEntryResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AclEntryResponse();
            AclEntry.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);
            AclEntryResponseAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('acl_id')) {
                obj['acl_id'] = ApiClient.convertToType(data['acl_id'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Whether to negate the match. Useful primarily when creating individual exceptions to larger subnets.
 * @member {module:model/AclEntryResponse.NegatedEnum} negated
 * @default NegatedEnum.disable
 */
AclEntryResponse.prototype['negated'] = undefined;

/**
 * A freeform descriptive note.
 * @member {String} comment
 */
AclEntryResponse.prototype['comment'] = undefined;

/**
 * An IP address.
 * @member {String} ip
 */
AclEntryResponse.prototype['ip'] = undefined;

/**
 * Number of bits for the subnet mask applied to the IP address. For IPv4 addresses, a value of 32 represents the smallest subnet mask (1 address), 24 represents a class C subnet mask (256 addresses), 16 represents a class B subnet mask (65k addresses), and 8 is class A subnet mask (16m addresses). If not provided, no mask is applied.
 * @member {Number} subnet
 */
AclEntryResponse.prototype['subnet'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
AclEntryResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
AclEntryResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
AclEntryResponse.prototype['updated_at'] = undefined;

/**
 * @member {String} acl_id
 */
AclEntryResponse.prototype['acl_id'] = undefined;

/**
 * @member {String} id
 */
AclEntryResponse.prototype['id'] = undefined;

/**
 * @member {String} service_id
 */
AclEntryResponse.prototype['service_id'] = undefined;


// Implement AclEntry interface:
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
// Implement AclEntryResponseAllOf interface:
/**
 * @member {String} acl_id
 */
AclEntryResponseAllOf.prototype['acl_id'] = undefined;
/**
 * @member {String} id
 */
AclEntryResponseAllOf.prototype['id'] = undefined;
/**
 * @member {String} service_id
 */
AclEntryResponseAllOf.prototype['service_id'] = undefined;



/**
 * Allowed values for the <code>negated</code> property.
 * @enum {Number}
 * @readonly
 */
AclEntryResponse['NegatedEnum'] = {

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



export default AclEntryResponse;

