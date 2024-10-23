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
import Metadata from './Metadata';
import Serviceusagemetric from './Serviceusagemetric';

/**
 * The ServiceusagemetricsData model module.
 * @module model/ServiceusagemetricsData
 * @version 7.10.0
 */
class ServiceusagemetricsData {
    /**
     * Constructs a new <code>ServiceusagemetricsData</code>.
     * @alias module:model/ServiceusagemetricsData
     */
    constructor() { 
        
        ServiceusagemetricsData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceusagemetricsData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceusagemetricsData} obj Optional instance to populate.
     * @return {module:model/ServiceusagemetricsData} The populated <code>ServiceusagemetricsData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceusagemetricsData();

            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
            }
            if (data.hasOwnProperty('start_time')) {
                obj['start_time'] = ApiClient.convertToType(data['start_time'], 'Date');
            }
            if (data.hasOwnProperty('end_time')) {
                obj['end_time'] = ApiClient.convertToType(data['end_time'], 'Date');
            }
            if (data.hasOwnProperty('usage_type')) {
                obj['usage_type'] = ApiClient.convertToType(data['usage_type'], 'String');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], [Serviceusagemetric]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = Metadata.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} customer_id
 */
ServiceusagemetricsData.prototype['customer_id'] = undefined;

/**
 * Date and time (in ISO 8601 format) for initiation point of a billing cycle, signifying the start of charges for a service or subscription.
 * @member {Date} start_time
 */
ServiceusagemetricsData.prototype['start_time'] = undefined;

/**
 * Date and time (in ISO 8601 format) for termination point of a billing cycle, signifying the end of charges for a service or subscription.
 * @member {Date} end_time
 */
ServiceusagemetricsData.prototype['end_time'] = undefined;

/**
 * The usage type identifier for the usage. This is a single, billable metric for the product.
 * @member {String} usage_type
 */
ServiceusagemetricsData.prototype['usage_type'] = undefined;

/**
 * The unit for the usage as shown on an invoice. If there is no explicit unit, this field will be \"unit\" (e.g., a request with `product_id` of 'cdn_usage' and `usage_type` of 'North America Requests' has no unit, and will return \"unit\").
 * @member {String} unit
 */
ServiceusagemetricsData.prototype['unit'] = undefined;

/**
 * @member {Array.<module:model/Serviceusagemetric>} details
 */
ServiceusagemetricsData.prototype['details'] = undefined;

/**
 * @member {module:model/Metadata} meta
 */
ServiceusagemetricsData.prototype['meta'] = undefined;






export default ServiceusagemetricsData;

