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
import LoggingGenericCommonResponseAllOf from './LoggingGenericCommonResponseAllOf';
import LoggingGenericCommonResponseAllOf1 from './LoggingGenericCommonResponseAllOf1';

/**
 * The LoggingGenericCommonResponse model module.
 * @module model/LoggingGenericCommonResponse
 * @version 13.0.0
 */
class LoggingGenericCommonResponse {
    /**
     * Constructs a new <code>LoggingGenericCommonResponse</code>.
     * @alias module:model/LoggingGenericCommonResponse
     * @implements module:model/LoggingGenericCommonResponseAllOf
     * @implements module:model/LoggingGenericCommonResponseAllOf1
     */
    constructor() { 
        LoggingGenericCommonResponseAllOf.initialize(this);LoggingGenericCommonResponseAllOf1.initialize(this);
        LoggingGenericCommonResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingGenericCommonResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingGenericCommonResponse} obj Optional instance to populate.
     * @return {module:model/LoggingGenericCommonResponse} The populated <code>LoggingGenericCommonResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingGenericCommonResponse();
            LoggingGenericCommonResponseAllOf.constructFromObject(data, obj);
            LoggingGenericCommonResponseAllOf1.constructFromObject(data, obj);

            if (data.hasOwnProperty('message_type')) {
                obj['message_type'] = ApiClient.convertToType(data['message_type'], 'String');
            }
            if (data.hasOwnProperty('timestamp_format')) {
                obj['timestamp_format'] = ApiClient.convertToType(data['timestamp_format'], 'String');
            }
            if (data.hasOwnProperty('compression_codec')) {
                obj['compression_codec'] = ApiClient.convertToType(data['compression_codec'], 'String');
            }
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
 * How the message should be formatted.
 * @member {module:model/LoggingGenericCommonResponse.MessageTypeEnum} message_type
 * @default 'classic'
 */
LoggingGenericCommonResponse.prototype['message_type'] = undefined;

/**
 * A timestamp format
 * @member {String} timestamp_format
 */
LoggingGenericCommonResponse.prototype['timestamp_format'] = undefined;

/**
 * The codec used for compressing your logs. Valid values are `zstd`, `snappy`, and `gzip`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {module:model/LoggingGenericCommonResponse.CompressionCodecEnum} compression_codec
 */
LoggingGenericCommonResponse.prototype['compression_codec'] = undefined;

/**
 * How frequently log files are finalized so they can be available for reading (in seconds).
 * @member {String} period
 * @default '3600'
 */
LoggingGenericCommonResponse.prototype['period'] = '3600';

/**
 * The level of gzip encoding when sending logs (default `0`, no compression). Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {String} gzip_level
 * @default '0'
 */
LoggingGenericCommonResponse.prototype['gzip_level'] = '0';


// Implement LoggingGenericCommonResponseAllOf interface:
/**
 * How the message should be formatted.
 * @member {module:model/LoggingGenericCommonResponseAllOf.MessageTypeEnum} message_type
 * @default 'classic'
 */
LoggingGenericCommonResponseAllOf.prototype['message_type'] = undefined;
/**
 * A timestamp format
 * @member {String} timestamp_format
 */
LoggingGenericCommonResponseAllOf.prototype['timestamp_format'] = undefined;
/**
 * The codec used for compressing your logs. Valid values are `zstd`, `snappy`, and `gzip`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {module:model/LoggingGenericCommonResponseAllOf.CompressionCodecEnum} compression_codec
 */
LoggingGenericCommonResponseAllOf.prototype['compression_codec'] = undefined;
// Implement LoggingGenericCommonResponseAllOf1 interface:
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



/**
 * Allowed values for the <code>message_type</code> property.
 * @enum {String}
 * @readonly
 */
LoggingGenericCommonResponse['MessageTypeEnum'] = {

    /**
     * value: "classic"
     * @const
     */
    "classic": "classic",

    /**
     * value: "loggly"
     * @const
     */
    "loggly": "loggly",

    /**
     * value: "logplex"
     * @const
     */
    "logplex": "logplex",

    /**
     * value: "blank"
     * @const
     */
    "blank": "blank"
};


/**
 * Allowed values for the <code>compression_codec</code> property.
 * @enum {String}
 * @readonly
 */
LoggingGenericCommonResponse['CompressionCodecEnum'] = {

    /**
     * value: "zstd"
     * @const
     */
    "zstd": "zstd",

    /**
     * value: "snappy"
     * @const
     */
    "snappy": "snappy",

    /**
     * value: "gzip"
     * @const
     */
    "gzip": "gzip"
};



export default LoggingGenericCommonResponse;

