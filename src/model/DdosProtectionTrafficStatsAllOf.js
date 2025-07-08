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
import DdosProtectionAttributeStats from './DdosProtectionAttributeStats';

/**
 * The DdosProtectionTrafficStatsAllOf model module.
 * @module model/DdosProtectionTrafficStatsAllOf
 * @version 12.1.0
 */
class DdosProtectionTrafficStatsAllOf {
    /**
     * Constructs a new <code>DdosProtectionTrafficStatsAllOf</code>.
     * @alias module:model/DdosProtectionTrafficStatsAllOf
     */
    constructor() { 
        
        DdosProtectionTrafficStatsAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DdosProtectionTrafficStatsAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DdosProtectionTrafficStatsAllOf} obj Optional instance to populate.
     * @return {module:model/DdosProtectionTrafficStatsAllOf} The populated <code>DdosProtectionTrafficStatsAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DdosProtectionTrafficStatsAllOf();

            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], [DdosProtectionAttributeStats]);
            }
        }
        return obj;
    }


}

/**
 * Alphanumeric string identifying the customer.
 * @member {String} customer_id
 */
DdosProtectionTrafficStatsAllOf.prototype['customer_id'] = undefined;

/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */
DdosProtectionTrafficStatsAllOf.prototype['service_id'] = undefined;

/**
 * @member {Array.<module:model/DdosProtectionAttributeStats>} attributes
 */
DdosProtectionTrafficStatsAllOf.prototype['attributes'] = undefined;






export default DdosProtectionTrafficStatsAllOf;

