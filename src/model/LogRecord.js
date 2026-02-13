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
import LogPropertyServiceId from './LogPropertyServiceId';

/**
 * The LogRecord model module.
 * @module model/LogRecord
 * @version 15.0.0-beta.4
 */
class LogRecord {
    /**
     * Constructs a new <code>LogRecord</code>.
     * @alias module:model/LogRecord
     */
    constructor() { 
        
        LogRecord.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LogRecord</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LogRecord} obj Optional instance to populate.
     * @return {module:model/LogRecord} The populated <code>LogRecord</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogRecord();

            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = LogPropertyServiceId.constructFromObject(data['service_id']);
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
            }
            if (data.hasOwnProperty('client_as_number')) {
                obj['client_as_number'] = ApiClient.convertToType(data['client_as_number'], 'Number');
            }
            if (data.hasOwnProperty('client_region')) {
                obj['client_region'] = ApiClient.convertToType(data['client_region'], 'String');
            }
            if (data.hasOwnProperty('client_country_code')) {
                obj['client_country_code'] = ApiClient.convertToType(data['client_country_code'], 'String');
            }
            if (data.hasOwnProperty('client_os_name')) {
                obj['client_os_name'] = ApiClient.convertToType(data['client_os_name'], 'String');
            }
            if (data.hasOwnProperty('client_device_type')) {
                obj['client_device_type'] = ApiClient.convertToType(data['client_device_type'], 'String');
            }
            if (data.hasOwnProperty('client_browser_name')) {
                obj['client_browser_name'] = ApiClient.convertToType(data['client_browser_name'], 'String');
            }
            if (data.hasOwnProperty('client_browser_version')) {
                obj['client_browser_version'] = ApiClient.convertToType(data['client_browser_version'], 'String');
            }
            if (data.hasOwnProperty('fastly_pop')) {
                obj['fastly_pop'] = ApiClient.convertToType(data['fastly_pop'], 'String');
            }
            if (data.hasOwnProperty('origin_host')) {
                obj['origin_host'] = ApiClient.convertToType(data['origin_host'], 'String');
            }
            if (data.hasOwnProperty('request_protocol')) {
                obj['request_protocol'] = ApiClient.convertToType(data['request_protocol'], 'String');
            }
            if (data.hasOwnProperty('request_host')) {
                obj['request_host'] = ApiClient.convertToType(data['request_host'], 'String');
            }
            if (data.hasOwnProperty('request_path')) {
                obj['request_path'] = ApiClient.convertToType(data['request_path'], 'String');
            }
            if (data.hasOwnProperty('request_method')) {
                obj['request_method'] = ApiClient.convertToType(data['request_method'], 'String');
            }
            if (data.hasOwnProperty('response_bytes_body')) {
                obj['response_bytes_body'] = ApiClient.convertToType(data['response_bytes_body'], 'Number');
            }
            if (data.hasOwnProperty('response_bytes_header')) {
                obj['response_bytes_header'] = ApiClient.convertToType(data['response_bytes_header'], 'Number');
            }
            if (data.hasOwnProperty('response_content_length')) {
                obj['response_content_length'] = ApiClient.convertToType(data['response_content_length'], 'Number');
            }
            if (data.hasOwnProperty('response_content_type')) {
                obj['response_content_type'] = ApiClient.convertToType(data['response_content_type'], 'String');
            }
            if (data.hasOwnProperty('response_reason')) {
                obj['response_reason'] = ApiClient.convertToType(data['response_reason'], 'String');
            }
            if (data.hasOwnProperty('response_state')) {
                obj['response_state'] = ApiClient.convertToType(data['response_state'], 'String');
            }
            if (data.hasOwnProperty('response_status')) {
                obj['response_status'] = ApiClient.convertToType(data['response_status'], 'Number');
            }
            if (data.hasOwnProperty('response_time')) {
                obj['response_time'] = ApiClient.convertToType(data['response_time'], 'Number');
            }
            if (data.hasOwnProperty('response_x_cache')) {
                obj['response_x_cache'] = ApiClient.convertToType(data['response_x_cache'], 'String');
            }
            if (data.hasOwnProperty('is_cache_hit')) {
                obj['is_cache_hit'] = ApiClient.convertToType(data['is_cache_hit'], 'Boolean');
            }
            if (data.hasOwnProperty('is_edge')) {
                obj['is_edge'] = ApiClient.convertToType(data['is_edge'], 'Boolean');
            }
            if (data.hasOwnProperty('is_shield')) {
                obj['is_shield'] = ApiClient.convertToType(data['is_shield'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The ID of the Fastly customer that owns the service.
 * @member {String} customer_id
 */
LogRecord.prototype['customer_id'] = undefined;

/**
 * @member {module:model/LogPropertyServiceId} service_id
 */
LogRecord.prototype['service_id'] = undefined;

/**
 * Timestamp of the request in ISO 8601 format.
 * @member {Date} timestamp
 */
LogRecord.prototype['timestamp'] = undefined;

/**
 * The autonomous system (AS) number of the client.
 * @member {Number} client_as_number
 */
LogRecord.prototype['client_as_number'] = undefined;

/**
 * The client's country subdivision code as found in ISO 3166-2.
 * @member {String} client_region
 */
LogRecord.prototype['client_region'] = undefined;

/**
 * The two-letter ISO 3166-1 country code for the client.
 * @member {String} client_country_code
 */
LogRecord.prototype['client_country_code'] = undefined;

/**
 * The name of the operating system installed on the client device.
 * @member {String} client_os_name
 */
LogRecord.prototype['client_os_name'] = undefined;

/**
 * The type of the client's device.
 * @member {String} client_device_type
 */
LogRecord.prototype['client_device_type'] = undefined;

/**
 * The name of the browser in use on the client device.
 * @member {String} client_browser_name
 */
LogRecord.prototype['client_browser_name'] = undefined;

/**
 * The version of the browser in use on client device.
 * @member {String} client_browser_version
 */
LogRecord.prototype['client_browser_version'] = undefined;

/**
 * The name of the Fastly POP that served this request.
 * @member {String} fastly_pop
 */
LogRecord.prototype['fastly_pop'] = undefined;

/**
 * The name of the origin host that served this request.
 * @member {String} origin_host
 */
LogRecord.prototype['origin_host'] = undefined;

/**
 * HTTP protocol version in use for this request. For example, HTTP/1.1.
 * @member {String} request_protocol
 */
LogRecord.prototype['request_protocol'] = undefined;

/**
 * The name of the request host used for this request.
 * @member {String} request_host
 */
LogRecord.prototype['request_host'] = undefined;

/**
 * The URL path supplied for this request.
 * @member {String} request_path
 */
LogRecord.prototype['request_path'] = undefined;

/**
 * HTTP method sent by the client such as \"GET\" or \"POST\".
 * @member {String} request_method
 */
LogRecord.prototype['request_method'] = undefined;

/**
 * Body bytes sent to the client in the response.
 * @member {Number} response_bytes_body
 */
LogRecord.prototype['response_bytes_body'] = undefined;

/**
 * Header bytes sent to the client in the response.
 * @member {Number} response_bytes_header
 */
LogRecord.prototype['response_bytes_header'] = undefined;

/**
 * Total bytes sent to the client in the response.
 * @member {Number} response_content_length
 */
LogRecord.prototype['response_content_length'] = undefined;

/**
 * The content type of the response sent to the client.
 * @member {String} response_content_type
 */
LogRecord.prototype['response_content_type'] = undefined;

/**
 * The HTTP reason phrase returned for this request, if any.
 * @member {String} response_reason
 */
LogRecord.prototype['response_reason'] = undefined;

/**
 * The state of the request with optional suffixes describing special cases.
 * @member {String} response_state
 */
LogRecord.prototype['response_state'] = undefined;

/**
 * The HTTP response code returned for this request.
 * @member {Number} response_status
 */
LogRecord.prototype['response_status'] = undefined;

/**
 * The time since the request started in seconds.
 * @member {Number} response_time
 */
LogRecord.prototype['response_time'] = undefined;

/**
 * Indicates whether the request was a HIT or a MISS.
 * @member {String} response_x_cache
 */
LogRecord.prototype['response_x_cache'] = undefined;

/**
 * Indicates whether this request was fulfilled from cache.
 * @member {Boolean} is_cache_hit
 */
LogRecord.prototype['is_cache_hit'] = undefined;

/**
 * Indicates whether the request was handled by a Fastly edge POP.
 * @member {Boolean} is_edge
 */
LogRecord.prototype['is_edge'] = undefined;

/**
 * Indicates whether the request was handled by a Fastly shield POP.
 * @member {Boolean} is_shield
 */
LogRecord.prototype['is_shield'] = undefined;






export default LogRecord;

