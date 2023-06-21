/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
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
 * The LoggingRequestCapsCommon model module.
 * @module model/LoggingRequestCapsCommon
 * @version 4.2.1
 */
class LoggingRequestCapsCommon {
    /**
     * Constructs a new <code>LoggingRequestCapsCommon</code>.
     * @alias module:model/LoggingRequestCapsCommon
     */
    constructor() { 
        
        LoggingRequestCapsCommon.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingRequestCapsCommon</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingRequestCapsCommon} obj Optional instance to populate.
     * @return {module:model/LoggingRequestCapsCommon} The populated <code>LoggingRequestCapsCommon</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingRequestCapsCommon();

            if (data.hasOwnProperty('request_max_entries')) {
                obj['request_max_entries'] = ApiClient.convertToType(data['request_max_entries'], 'Number');
            }
            if (data.hasOwnProperty('request_max_bytes')) {
                obj['request_max_bytes'] = ApiClient.convertToType(data['request_max_bytes'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The maximum number of logs sent in one request. Defaults `0` for unbounded.
 * @member {Number} request_max_entries
 * @default 0
 */
LoggingRequestCapsCommon.prototype['request_max_entries'] = 0;

/**
 * The maximum number of bytes sent in one request. Defaults `0` for unbounded.
 * @member {Number} request_max_bytes
 * @default 0
 */
LoggingRequestCapsCommon.prototype['request_max_bytes'] = 0;






export default LoggingRequestCapsCommon;

