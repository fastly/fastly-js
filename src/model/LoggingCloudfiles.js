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
import LoggingCloudfilesAllOf from './LoggingCloudfilesAllOf';
import LoggingCommon from './LoggingCommon';
import LoggingGenericCommon from './LoggingGenericCommon';

/**
 * The LoggingCloudfiles model module.
 * @module model/LoggingCloudfiles
 * @version 4.1.0
 */
class LoggingCloudfiles {
    /**
     * Constructs a new <code>LoggingCloudfiles</code>.
     * @alias module:model/LoggingCloudfiles
     * @implements module:model/LoggingCommon
     * @implements module:model/LoggingGenericCommon
     * @implements module:model/LoggingCloudfilesAllOf
     */
    constructor() { 
        LoggingCommon.initialize(this);LoggingGenericCommon.initialize(this);LoggingCloudfilesAllOf.initialize(this);
        LoggingCloudfiles.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingCloudfiles</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingCloudfiles} obj Optional instance to populate.
     * @return {module:model/LoggingCloudfiles} The populated <code>LoggingCloudfiles</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingCloudfiles();
            LoggingCommon.constructFromObject(data, obj);
            LoggingGenericCommon.constructFromObject(data, obj);
            LoggingCloudfilesAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('placement')) {
                obj['placement'] = ApiClient.convertToType(data['placement'], 'String');
            }
            if (data.hasOwnProperty('format_version')) {
                obj['format_version'] = ApiClient.convertToType(data['format_version'], 'Number');
            }
            if (data.hasOwnProperty('response_condition')) {
                obj['response_condition'] = ApiClient.convertToType(data['response_condition'], 'String');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('message_type')) {
                obj['message_type'] = ApiClient.convertToType(data['message_type'], 'String');
            }
            if (data.hasOwnProperty('timestamp_format')) {
                obj['timestamp_format'] = ApiClient.convertToType(data['timestamp_format'], 'String');
            }
            if (data.hasOwnProperty('period')) {
                obj['period'] = ApiClient.convertToType(data['period'], 'Number');
            }
            if (data.hasOwnProperty('gzip_level')) {
                obj['gzip_level'] = ApiClient.convertToType(data['gzip_level'], 'Number');
            }
            if (data.hasOwnProperty('compression_codec')) {
                obj['compression_codec'] = ApiClient.convertToType(data['compression_codec'], 'String');
            }
            if (data.hasOwnProperty('access_key')) {
                obj['access_key'] = ApiClient.convertToType(data['access_key'], 'String');
            }
            if (data.hasOwnProperty('bucket_name')) {
                obj['bucket_name'] = ApiClient.convertToType(data['bucket_name'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('public_key')) {
                obj['public_key'] = ApiClient.convertToType(data['public_key'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingCloudfiles.prototype['name'] = undefined;

/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingCloudfiles.PlacementEnum} placement
 */
LoggingCloudfiles.prototype['placement'] = undefined;

/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
 * @member {module:model/LoggingCloudfiles.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */
LoggingCloudfiles.prototype['format_version'] = undefined;

/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingCloudfiles.prototype['response_condition'] = undefined;

/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */
LoggingCloudfiles.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';

/**
 * How the message should be formatted.
 * @member {module:model/LoggingCloudfiles.MessageTypeEnum} message_type
 * @default 'classic'
 */
LoggingCloudfiles.prototype['message_type'] = undefined;

/**
 * A timestamp format
 * @member {String} timestamp_format
 */
LoggingCloudfiles.prototype['timestamp_format'] = undefined;

/**
 * How frequently log files are finalized so they can be available for reading (in seconds).
 * @member {Number} period
 * @default 3600
 */
LoggingCloudfiles.prototype['period'] = 3600;

/**
 * The level of gzip encoding when sending logs (default `0`, no compression). Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {Number} gzip_level
 * @default 0
 */
LoggingCloudfiles.prototype['gzip_level'] = 0;

/**
 * The codec used for compressing your logs. Valid values are `zstd`, `snappy`, and `gzip`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {module:model/LoggingCloudfiles.CompressionCodecEnum} compression_codec
 */
LoggingCloudfiles.prototype['compression_codec'] = undefined;

/**
 * Your Cloud Files account access key.
 * @member {String} access_key
 */
LoggingCloudfiles.prototype['access_key'] = undefined;

/**
 * The name of your Cloud Files container.
 * @member {String} bucket_name
 */
LoggingCloudfiles.prototype['bucket_name'] = undefined;

/**
 * The path to upload logs to.
 * @member {String} path
 * @default 'null'
 */
LoggingCloudfiles.prototype['path'] = 'null';

/**
 * The region to stream logs to.
 * @member {module:model/LoggingCloudfiles.RegionEnum} region
 */
LoggingCloudfiles.prototype['region'] = undefined;

/**
 * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
 * @member {String} public_key
 * @default 'null'
 */
LoggingCloudfiles.prototype['public_key'] = 'null';

/**
 * The username for your Cloud Files account.
 * @member {String} user
 */
LoggingCloudfiles.prototype['user'] = undefined;


// Implement LoggingCommon interface:
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingCommon.prototype['name'] = undefined;
/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingCommon.PlacementEnum} placement
 */
LoggingCommon.prototype['placement'] = undefined;
/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
 * @member {module:model/LoggingCommon.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */
LoggingCommon.prototype['format_version'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingCommon.prototype['response_condition'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */
LoggingCommon.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
// Implement LoggingGenericCommon interface:
/**
 * How the message should be formatted.
 * @member {module:model/LoggingGenericCommon.MessageTypeEnum} message_type
 * @default 'classic'
 */
LoggingGenericCommon.prototype['message_type'] = undefined;
/**
 * A timestamp format
 * @member {String} timestamp_format
 */
LoggingGenericCommon.prototype['timestamp_format'] = undefined;
/**
 * How frequently log files are finalized so they can be available for reading (in seconds).
 * @member {Number} period
 * @default 3600
 */
LoggingGenericCommon.prototype['period'] = 3600;
/**
 * The level of gzip encoding when sending logs (default `0`, no compression). Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {Number} gzip_level
 * @default 0
 */
LoggingGenericCommon.prototype['gzip_level'] = 0;
/**
 * The codec used for compressing your logs. Valid values are `zstd`, `snappy`, and `gzip`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {module:model/LoggingGenericCommon.CompressionCodecEnum} compression_codec
 */
LoggingGenericCommon.prototype['compression_codec'] = undefined;
// Implement LoggingCloudfilesAllOf interface:
/**
 * Your Cloud Files account access key.
 * @member {String} access_key
 */
LoggingCloudfilesAllOf.prototype['access_key'] = undefined;
/**
 * The name of your Cloud Files container.
 * @member {String} bucket_name
 */
LoggingCloudfilesAllOf.prototype['bucket_name'] = undefined;
/**
 * The path to upload logs to.
 * @member {String} path
 * @default 'null'
 */
LoggingCloudfilesAllOf.prototype['path'] = 'null';
/**
 * The region to stream logs to.
 * @member {module:model/LoggingCloudfilesAllOf.RegionEnum} region
 */
LoggingCloudfilesAllOf.prototype['region'] = undefined;
/**
 * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
 * @member {String} public_key
 * @default 'null'
 */
LoggingCloudfilesAllOf.prototype['public_key'] = 'null';
/**
 * The username for your Cloud Files account.
 * @member {String} user
 */
LoggingCloudfilesAllOf.prototype['user'] = undefined;



/**
 * Allowed values for the <code>placement</code> property.
 * @enum {String}
 * @readonly
 */
LoggingCloudfiles['PlacementEnum'] = {

    /**
     * value: "none"
     * @const
     */
    "none": "none",

    /**
     * value: "waf_debug"
     * @const
     */
    "waf_debug": "waf_debug",

    /**
     * value: "null"
     * @const
     */
    "null": "null"
};


/**
 * Allowed values for the <code>format_version</code> property.
 * @enum {Number}
 * @readonly
 */
LoggingCloudfiles['FormatVersionEnum'] = {

    /**
     * value: 1
     * @const
     */
    "v1": 1,

    /**
     * value: 2
     * @const
     */
    "v2": 2
};


/**
 * Allowed values for the <code>message_type</code> property.
 * @enum {String}
 * @readonly
 */
LoggingCloudfiles['MessageTypeEnum'] = {

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
LoggingCloudfiles['CompressionCodecEnum'] = {

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


/**
 * Allowed values for the <code>region</code> property.
 * @enum {String}
 * @readonly
 */
LoggingCloudfiles['RegionEnum'] = {

    /**
     * value: "DFW"
     * @const
     */
    "DFW": "DFW",

    /**
     * value: "ORD"
     * @const
     */
    "ORD": "ORD",

    /**
     * value: "IAD"
     * @const
     */
    "IAD": "IAD",

    /**
     * value: "LON"
     * @const
     */
    "LON": "LON",

    /**
     * value: "SYD"
     * @const
     */
    "SYD": "SYD",

    /**
     * value: "HKG"
     * @const
     */
    "HKG": "HKG",

    /**
     * value: "null"
     * @const
     */
    "null": "null"
};



export default LoggingCloudfiles;

