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
 * The LoggingGenericCommonResponseAllOf model module.
 * @module model/LoggingGenericCommonResponseAllOf
 * @version 6.2.2
 */
class LoggingGenericCommonResponseAllOf {
    /**
     * Constructs a new <code>LoggingGenericCommonResponseAllOf</code>.
     * @alias module:model/LoggingGenericCommonResponseAllOf
     */
    constructor() { 
        
        LoggingGenericCommonResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingGenericCommonResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingGenericCommonResponseAllOf} obj Optional instance to populate.
     * @return {module:model/LoggingGenericCommonResponseAllOf} The populated <code>LoggingGenericCommonResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingGenericCommonResponseAllOf();

            if (data.hasOwnProperty('message_type')) {
                obj['message_type'] = ApiClient.convertToType(data['message_type'], 'String');
            }
            if (data.hasOwnProperty('timestamp_format')) {
                obj['timestamp_format'] = ApiClient.convertToType(data['timestamp_format'], 'String');
            }
            if (data.hasOwnProperty('compression_codec')) {
                obj['compression_codec'] = ApiClient.convertToType(data['compression_codec'], 'String');
            }
        }
        return obj;
    }


}

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





/**
 * Allowed values for the <code>message_type</code> property.
 * @enum {String}
 * @readonly
 */
LoggingGenericCommonResponseAllOf['MessageTypeEnum'] = {

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
LoggingGenericCommonResponseAllOf['CompressionCodecEnum'] = {

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



export default LoggingGenericCommonResponseAllOf;

