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
 * The LogError model module.
 * @module model/LogError
 * @version 16.1.0
 */
class LogError {
    /**
     * Constructs a new <code>LogError</code>.
     * @alias module:model/LogError
     */
    constructor() { 
        
        LogError.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LogError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LogError} obj Optional instance to populate.
     * @return {module:model/LogError} The populated <code>LogError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogError();

            if (data.hasOwnProperty('sequence_number')) {
                obj['sequence_number'] = ApiClient.convertToType(data['sequence_number'], 'Number');
            }
            if (data.hasOwnProperty('error_time_us')) {
                obj['error_time_us'] = ApiClient.convertToType(data['error_time_us'], 'Number');
            }
            if (data.hasOwnProperty('stream')) {
                obj['stream'] = ApiClient.convertToType(data['stream'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('endpoint')) {
                obj['endpoint'] = ApiClient.convertToType(data['endpoint'], 'String');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Sequence number for ordering messages.
 * @member {Number} sequence_number
 */
LogError.prototype['sequence_number'] = undefined;

/**
 * Timestamp of the error in microseconds.
 * @member {Number} error_time_us
 */
LogError.prototype['error_time_us'] = undefined;

/**
 * The stream type, always 'logging_error' for logging endpoint errors.
 * @member {String} stream
 */
LogError.prototype['stream'] = undefined;

/**
 * User-friendly error message.
 * @member {String} message
 */
LogError.prototype['message'] = undefined;

/**
 * Name of the logging endpoint that generated the error.
 * @member {String} endpoint
 */
LogError.prototype['endpoint'] = undefined;

/**
 * Additional error details as a JSON string.
 * @member {String} details
 */
LogError.prototype['details'] = undefined;






export default LogError;

