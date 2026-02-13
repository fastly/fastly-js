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
 * The PlatformValues model module.
 * @module model/PlatformValues
 * @version 15.0.0-beta.2
 */
class PlatformValues {
    /**
     * Constructs a new <code>PlatformValues</code>.
     * The results of the query, optionally filtered and grouped over the requested timespan.
     * @alias module:model/PlatformValues
     */
    constructor() { 
        
        PlatformValues.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PlatformValues</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PlatformValues} obj Optional instance to populate.
     * @return {module:model/PlatformValues} The populated <code>PlatformValues</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PlatformValues();

            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
            }
            if (data.hasOwnProperty('ttfb_origin_p25_us')) {
                obj['ttfb_origin_p25_us'] = ApiClient.convertToType(data['ttfb_origin_p25_us'], 'Number');
            }
            if (data.hasOwnProperty('ttfb_origin_p50_us')) {
                obj['ttfb_origin_p50_us'] = ApiClient.convertToType(data['ttfb_origin_p50_us'], 'Number');
            }
            if (data.hasOwnProperty('ttfb_origin_p75_us')) {
                obj['ttfb_origin_p75_us'] = ApiClient.convertToType(data['ttfb_origin_p75_us'], 'Number');
            }
            if (data.hasOwnProperty('ttfb_origin_p95_us')) {
                obj['ttfb_origin_p95_us'] = ApiClient.convertToType(data['ttfb_origin_p95_us'], 'Number');
            }
            if (data.hasOwnProperty('ttfb_origin_p99_us')) {
                obj['ttfb_origin_p99_us'] = ApiClient.convertToType(data['ttfb_origin_p99_us'], 'Number');
            }
            if (data.hasOwnProperty('ttfb_shield_p25_us')) {
                obj['ttfb_shield_p25_us'] = ApiClient.convertToType(data['ttfb_shield_p25_us'], 'Number');
            }
            if (data.hasOwnProperty('ttfb_shield_p50_us')) {
                obj['ttfb_shield_p50_us'] = ApiClient.convertToType(data['ttfb_shield_p50_us'], 'Number');
            }
            if (data.hasOwnProperty('ttfb_shield_p75_us')) {
                obj['ttfb_shield_p75_us'] = ApiClient.convertToType(data['ttfb_shield_p75_us'], 'Number');
            }
            if (data.hasOwnProperty('ttfb_shield_p95_us')) {
                obj['ttfb_shield_p95_us'] = ApiClient.convertToType(data['ttfb_shield_p95_us'], 'Number');
            }
            if (data.hasOwnProperty('ttfb_shield_p99_us')) {
                obj['ttfb_shield_p99_us'] = ApiClient.convertToType(data['ttfb_shield_p99_us'], 'Number');
            }
            if (data.hasOwnProperty('ttfb_edge_p25_us')) {
                obj['ttfb_edge_p25_us'] = ApiClient.convertToType(data['ttfb_edge_p25_us'], 'Number');
            }
            if (data.hasOwnProperty('ttfb_edge_p50_us')) {
                obj['ttfb_edge_p50_us'] = ApiClient.convertToType(data['ttfb_edge_p50_us'], 'Number');
            }
            if (data.hasOwnProperty('ttfb_edge_p75_us')) {
                obj['ttfb_edge_p75_us'] = ApiClient.convertToType(data['ttfb_edge_p75_us'], 'Number');
            }
            if (data.hasOwnProperty('ttfb_edge_p95_us')) {
                obj['ttfb_edge_p95_us'] = ApiClient.convertToType(data['ttfb_edge_p95_us'], 'Number');
            }
            if (data.hasOwnProperty('ttfb_edge_p99_us')) {
                obj['ttfb_edge_p99_us'] = ApiClient.convertToType(data['ttfb_edge_p99_us'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Timestamp of the metrics data point.
 * @member {Date} timestamp
 */
PlatformValues.prototype['timestamp'] = undefined;

/**
 * 25th percentile of time to first byte from origin, in microseconds.
 * @member {Number} ttfb_origin_p25_us
 */
PlatformValues.prototype['ttfb_origin_p25_us'] = undefined;

/**
 * 50th percentile of time to first byte from origin, in microseconds.
 * @member {Number} ttfb_origin_p50_us
 */
PlatformValues.prototype['ttfb_origin_p50_us'] = undefined;

/**
 * 75th percentile of time to first byte from origin, in microseconds.
 * @member {Number} ttfb_origin_p75_us
 */
PlatformValues.prototype['ttfb_origin_p75_us'] = undefined;

/**
 * 95th percentile of time to first byte from origin, in microseconds.
 * @member {Number} ttfb_origin_p95_us
 */
PlatformValues.prototype['ttfb_origin_p95_us'] = undefined;

/**
 * 99th percentile of time to first byte from origin, in microseconds.
 * @member {Number} ttfb_origin_p99_us
 */
PlatformValues.prototype['ttfb_origin_p99_us'] = undefined;

/**
 * 25th percentile of time to first byte from shield, in microseconds.
 * @member {Number} ttfb_shield_p25_us
 */
PlatformValues.prototype['ttfb_shield_p25_us'] = undefined;

/**
 * 50th percentile of time to first byte from shield, in microseconds.
 * @member {Number} ttfb_shield_p50_us
 */
PlatformValues.prototype['ttfb_shield_p50_us'] = undefined;

/**
 * 75th percentile of time to first byte from shield, in microseconds.
 * @member {Number} ttfb_shield_p75_us
 */
PlatformValues.prototype['ttfb_shield_p75_us'] = undefined;

/**
 * 95th percentile of time to first byte from shield, in microseconds.
 * @member {Number} ttfb_shield_p95_us
 */
PlatformValues.prototype['ttfb_shield_p95_us'] = undefined;

/**
 * 99th percentile of time to first byte from shield, in microseconds.
 * @member {Number} ttfb_shield_p99_us
 */
PlatformValues.prototype['ttfb_shield_p99_us'] = undefined;

/**
 * 25th percentile of time to first byte from edge, in microseconds.
 * @member {Number} ttfb_edge_p25_us
 */
PlatformValues.prototype['ttfb_edge_p25_us'] = undefined;

/**
 * 50th percentile of time to first byte from edge, in microseconds.
 * @member {Number} ttfb_edge_p50_us
 */
PlatformValues.prototype['ttfb_edge_p50_us'] = undefined;

/**
 * 75th percentile of time to first byte from edge, in microseconds.
 * @member {Number} ttfb_edge_p75_us
 */
PlatformValues.prototype['ttfb_edge_p75_us'] = undefined;

/**
 * 95th percentile of time to first byte from edge, in microseconds.
 * @member {Number} ttfb_edge_p95_us
 */
PlatformValues.prototype['ttfb_edge_p95_us'] = undefined;

/**
 * 99th percentile of time to first byte from edge, in microseconds.
 * @member {Number} ttfb_edge_p99_us
 */
PlatformValues.prototype['ttfb_edge_p99_us'] = undefined;






export default PlatformValues;

