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
 * The LoggingGenericCommonResponseAllOf1 model module.
 * @module model/LoggingGenericCommonResponseAllOf1
 * @version 7.7.0
 */
class LoggingGenericCommonResponseAllOf1 {
    /**
     * Constructs a new <code>LoggingGenericCommonResponseAllOf1</code>.
     * @alias module:model/LoggingGenericCommonResponseAllOf1
     */
    constructor() { 
        
        LoggingGenericCommonResponseAllOf1.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingGenericCommonResponseAllOf1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingGenericCommonResponseAllOf1} obj Optional instance to populate.
     * @return {module:model/LoggingGenericCommonResponseAllOf1} The populated <code>LoggingGenericCommonResponseAllOf1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingGenericCommonResponseAllOf1();

            if (data.hasOwnProperty('period')) {
                obj['period'] = ApiClient.convertToType(data['period'], 'String');
            }
            if (data.hasOwnProperty('gzip_level')) {
                obj['gzip_level'] = ApiClient.convertToType(data['gzip_level'], 'String');
            }
        }
        return obj;
    }


}

/**
 * How frequently log files are finalized so they can be available for reading (in seconds).
 * @member {String} period
 * @default '3600'
 */
LoggingGenericCommonResponseAllOf1.prototype['period'] = '3600';

/**
 * The level of gzip encoding when sending logs (default `0`, no compression). Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {String} gzip_level
 * @default '0'
 */
LoggingGenericCommonResponseAllOf1.prototype['gzip_level'] = '0';






export default LoggingGenericCommonResponseAllOf1;

