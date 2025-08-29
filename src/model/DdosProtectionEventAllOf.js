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
 * The DdosProtectionEventAllOf model module.
 * @module model/DdosProtectionEventAllOf
 * @version 13.0.0
 */
class DdosProtectionEventAllOf {
    /**
     * Constructs a new <code>DdosProtectionEventAllOf</code>.
     * @alias module:model/DdosProtectionEventAllOf
     */
    constructor() { 
        
        DdosProtectionEventAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DdosProtectionEventAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DdosProtectionEventAllOf} obj Optional instance to populate.
     * @return {module:model/DdosProtectionEventAllOf} The populated <code>DdosProtectionEventAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DdosProtectionEventAllOf();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('started_at')) {
                obj['started_at'] = ApiClient.convertToType(data['started_at'], 'Date');
            }
            if (data.hasOwnProperty('ended_at')) {
                obj['ended_at'] = ApiClient.convertToType(data['ended_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * Unique ID of the event.
 * @member {String} id
 */
DdosProtectionEventAllOf.prototype['id'] = undefined;

/**
 * A human-readable name for the event.
 * @member {String} name
 */
DdosProtectionEventAllOf.prototype['name'] = undefined;

/**
 * Alphanumeric string identifying the customer.
 * @member {String} customer_id
 */
DdosProtectionEventAllOf.prototype['customer_id'] = undefined;

/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */
DdosProtectionEventAllOf.prototype['service_id'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} started_at
 */
DdosProtectionEventAllOf.prototype['started_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} ended_at
 */
DdosProtectionEventAllOf.prototype['ended_at'] = undefined;






export default DdosProtectionEventAllOf;

