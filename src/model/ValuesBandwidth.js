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
 * The ValuesBandwidth model module.
 * @module model/ValuesBandwidth
 * @version 14.0.0
 */
class ValuesBandwidth {
    /**
     * Constructs a new <code>ValuesBandwidth</code>.
     * @alias module:model/ValuesBandwidth
     */
    constructor() { 
        
        ValuesBandwidth.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ValuesBandwidth</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValuesBandwidth} obj Optional instance to populate.
     * @return {module:model/ValuesBandwidth} The populated <code>ValuesBandwidth</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValuesBandwidth();

            if (data.hasOwnProperty('average_bandwidth_bytes')) {
                obj['average_bandwidth_bytes'] = ApiClient.convertToType(data['average_bandwidth_bytes'], 'Number');
            }
            if (data.hasOwnProperty('bandwidth_percentage')) {
                obj['bandwidth_percentage'] = ApiClient.convertToType(data['bandwidth_percentage'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The average bandwidth in bytes for responses to requests to the URL in the current dimension.
 * @member {Number} average_bandwidth_bytes
 */
ValuesBandwidth.prototype['average_bandwidth_bytes'] = undefined;

/**
 * The total bandwidth percentage for all responses to requests to the URL in the current dimension.
 * @member {Number} bandwidth_percentage
 */
ValuesBandwidth.prototype['bandwidth_percentage'] = undefined;






export default ValuesBandwidth;

