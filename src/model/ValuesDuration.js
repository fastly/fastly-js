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
 * The ValuesDuration model module.
 * @module model/ValuesDuration
 * @version 12.1.0
 */
class ValuesDuration {
    /**
     * Constructs a new <code>ValuesDuration</code>.
     * @alias module:model/ValuesDuration
     */
    constructor() { 
        
        ValuesDuration.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ValuesDuration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValuesDuration} obj Optional instance to populate.
     * @return {module:model/ValuesDuration} The populated <code>ValuesDuration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValuesDuration();

            if (data.hasOwnProperty('average_response_time')) {
                obj['average_response_time'] = ApiClient.convertToType(data['average_response_time'], 'Number');
            }
            if (data.hasOwnProperty('p95_response_time')) {
                obj['p95_response_time'] = ApiClient.convertToType(data['p95_response_time'], 'Number');
            }
            if (data.hasOwnProperty('response_time_percentage')) {
                obj['response_time_percentage'] = ApiClient.convertToType(data['response_time_percentage'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The average time in seconds to respond to requests to the URL in the current dimension.
 * @member {Number} average_response_time
 */
ValuesDuration.prototype['average_response_time'] = undefined;

/**
 * The P95 time in seconds to respond to requests to the URL in the current dimension.
 * @member {Number} p95_response_time
 */
ValuesDuration.prototype['p95_response_time'] = undefined;

/**
 * The total percentage of time to respond to all requests to the URL in the current dimension.
 * @member {Number} response_time_percentage
 */
ValuesDuration.prototype['response_time_percentage'] = undefined;






export default ValuesDuration;

