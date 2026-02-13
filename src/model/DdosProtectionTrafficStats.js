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
import DdosProtectionTrafficStatsAllOf from './DdosProtectionTrafficStatsAllOf';
import TimestampsNoDelete from './TimestampsNoDelete';

/**
 * The DdosProtectionTrafficStats model module.
 * @module model/DdosProtectionTrafficStats
 * @version 15.0.0-beta.1
 */
class DdosProtectionTrafficStats {
    /**
     * Constructs a new <code>DdosProtectionTrafficStats</code>.
     * @alias module:model/DdosProtectionTrafficStats
     * @implements module:model/TimestampsNoDelete
     * @implements module:model/DdosProtectionTrafficStatsAllOf
     */
    constructor() { 
        TimestampsNoDelete.initialize(this);DdosProtectionTrafficStatsAllOf.initialize(this);
        DdosProtectionTrafficStats.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DdosProtectionTrafficStats</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DdosProtectionTrafficStats} obj Optional instance to populate.
     * @return {module:model/DdosProtectionTrafficStats} The populated <code>DdosProtectionTrafficStats</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DdosProtectionTrafficStats();
            TimestampsNoDelete.constructFromObject(data, obj);
            DdosProtectionTrafficStatsAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], [DdosProtectionAttributeStats]);
            }
            if (data.hasOwnProperty('traffic_percentage')) {
                obj['traffic_percentage'] = ApiClient.convertToType(data['traffic_percentage'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
DdosProtectionTrafficStats.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
DdosProtectionTrafficStats.prototype['updated_at'] = undefined;

/**
 * Alphanumeric string identifying the customer.
 * @member {String} customer_id
 */
DdosProtectionTrafficStats.prototype['customer_id'] = undefined;

/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */
DdosProtectionTrafficStats.prototype['service_id'] = undefined;

/**
 * @member {Array.<module:model/DdosProtectionAttributeStats>} attributes
 */
DdosProtectionTrafficStats.prototype['attributes'] = undefined;

/**
 * Rule traffic percentage for the event.
 * @member {Number} traffic_percentage
 */
DdosProtectionTrafficStats.prototype['traffic_percentage'] = undefined;


// Implement TimestampsNoDelete interface:
/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
TimestampsNoDelete.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
TimestampsNoDelete.prototype['updated_at'] = undefined;
// Implement DdosProtectionTrafficStatsAllOf interface:
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
/**
 * Rule traffic percentage for the event.
 * @member {Number} traffic_percentage
 */
DdosProtectionTrafficStatsAllOf.prototype['traffic_percentage'] = undefined;




export default DdosProtectionTrafficStats;

