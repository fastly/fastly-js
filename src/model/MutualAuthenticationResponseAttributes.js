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
import MutualAuthenticationResponseAttributesAllOf from './MutualAuthenticationResponseAttributesAllOf';
import Timestamps from './Timestamps';

/**
 * The MutualAuthenticationResponseAttributes model module.
 * @module model/MutualAuthenticationResponseAttributes
 * @version 7.7.0
 */
class MutualAuthenticationResponseAttributes {
    /**
     * Constructs a new <code>MutualAuthenticationResponseAttributes</code>.
     * @alias module:model/MutualAuthenticationResponseAttributes
     * @implements module:model/Timestamps
     * @implements module:model/MutualAuthenticationResponseAttributesAllOf
     */
    constructor() { 
        Timestamps.initialize(this);MutualAuthenticationResponseAttributesAllOf.initialize(this);
        MutualAuthenticationResponseAttributes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MutualAuthenticationResponseAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MutualAuthenticationResponseAttributes} obj Optional instance to populate.
     * @return {module:model/MutualAuthenticationResponseAttributes} The populated <code>MutualAuthenticationResponseAttributes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MutualAuthenticationResponseAttributes();
            Timestamps.constructFromObject(data, obj);
            MutualAuthenticationResponseAttributesAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('enforced')) {
                obj['enforced'] = ApiClient.convertToType(data['enforced'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
MutualAuthenticationResponseAttributes.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
MutualAuthenticationResponseAttributes.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
MutualAuthenticationResponseAttributes.prototype['updated_at'] = undefined;

/**
 * Determines whether Mutual TLS will fail closed (enforced) or fail open.
 * @member {Boolean} enforced
 */
MutualAuthenticationResponseAttributes.prototype['enforced'] = undefined;


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
// Implement MutualAuthenticationResponseAttributesAllOf interface:
/**
 * Determines whether Mutual TLS will fail closed (enforced) or fail open.
 * @member {Boolean} enforced
 */
MutualAuthenticationResponseAttributesAllOf.prototype['enforced'] = undefined;




export default MutualAuthenticationResponseAttributes;

