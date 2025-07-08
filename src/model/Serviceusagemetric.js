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
 * The Serviceusagemetric model module.
 * @module model/Serviceusagemetric
 * @version 12.1.0
 */
class Serviceusagemetric {
    /**
     * Constructs a new <code>Serviceusagemetric</code>.
     * @alias module:model/Serviceusagemetric
     */
    constructor() { 
        
        Serviceusagemetric.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Serviceusagemetric</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Serviceusagemetric} obj Optional instance to populate.
     * @return {module:model/Serviceusagemetric} The populated <code>Serviceusagemetric</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Serviceusagemetric();

            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('service_name')) {
                obj['service_name'] = ApiClient.convertToType(data['service_name'], 'String');
            }
            if (data.hasOwnProperty('usage_units')) {
                obj['usage_units'] = ApiClient.convertToType(data['usage_units'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} customer_id
 */
Serviceusagemetric.prototype['customer_id'] = undefined;

/**
 * Service ID associated with the usage.
 * @member {String} service_id
 */
Serviceusagemetric.prototype['service_id'] = undefined;

/**
 * Name of the service associated with the usage.
 * @member {String} service_name
 */
Serviceusagemetric.prototype['service_name'] = undefined;

/**
 * The quantity of the usage for the billing period. Amount will be in the units provided in the parent object (e.g., a quantity of `1.3` with a unit of `gb` would have a usage amount of 1.3 gigabytes).
 * @member {Number} usage_units
 */
Serviceusagemetric.prototype['usage_units'] = undefined;






export default Serviceusagemetric;

