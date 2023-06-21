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
import LoggingDigitalocean from './LoggingDigitalocean';
import ServiceIdAndVersion from './ServiceIdAndVersion';
import Timestamps from './Timestamps';

/**
 * The LoggingDigitaloceanResponse model module.
 * @module model/LoggingDigitaloceanResponse
 * @version 4.2.1
 */
class LoggingDigitaloceanResponse {
    /**
     * Constructs a new <code>LoggingDigitaloceanResponse</code>.
     * @alias module:model/LoggingDigitaloceanResponse
     * @implements module:model/LoggingDigitalocean
     * @implements module:model/Timestamps
     * @implements module:model/ServiceIdAndVersion
     */
    constructor() { 
        LoggingDigitalocean.initialize(this);Timestamps.initialize(this);ServiceIdAndVersion.initialize(this);
        LoggingDigitaloceanResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingDigitaloceanResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingDigitaloceanResponse} obj Optional instance to populate.
     * @return {module:model/LoggingDigitaloceanResponse} The populated <code>LoggingDigitaloceanResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingDigitaloceanResponse();
            LoggingDigitalocean.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);
            ServiceIdAndVersion.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('bucket_name')) {
                obj['bucket_name'] = ApiClient.convertToType(data['bucket_name'], 'String');
            }
            if (data.hasOwnProperty('access_key')) {
                obj['access_key'] = ApiClient.convertToType(data['access_key'], 'String');
            }
            if (data.hasOwnProperty('secret_key')) {
                obj['secret_key'] = ApiClient.convertToType(data['secret_key'], 'String');
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('public_key')) {
                obj['public_key'] = ApiClient.convertToType(data['public_key'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingDigitaloceanResponse.prototype['name'] = undefined;

/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingDigitaloceanResponse.PlacementEnum} placement
 */
LoggingDigitaloceanResponse.prototype['placement'] = undefined;

/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
 * @member {module:model/LoggingDigitaloceanResponse.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */
LoggingDigitaloceanResponse.prototype['format_version'] = undefined;

/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingDigitaloceanResponse.prototype['response_condition'] = undefined;

/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */
LoggingDigitaloceanResponse.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';

/**
 * How the message should be formatted.
 * @member {module:model/LoggingDigitaloceanResponse.MessageTypeEnum} message_type
 * @default 'classic'
 */
LoggingDigitaloceanResponse.prototype['message_type'] = undefined;

/**
 * A timestamp format
 * @member {String} timestamp_format
 */
LoggingDigitaloceanResponse.prototype['timestamp_format'] = undefined;

/**
 * How frequently log files are finalized so they can be available for reading (in seconds).
 * @member {Number} period
 * @default 3600
 */
LoggingDigitaloceanResponse.prototype['period'] = 3600;

/**
 * The level of gzip encoding when sending logs (default `0`, no compression). Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {Number} gzip_level
 * @default 0
 */
LoggingDigitaloceanResponse.prototype['gzip_level'] = 0;

/**
 * The codec used for compressing your logs. Valid values are `zstd`, `snappy`, and `gzip`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {module:model/LoggingDigitaloceanResponse.CompressionCodecEnum} compression_codec
 */
LoggingDigitaloceanResponse.prototype['compression_codec'] = undefined;

/**
 * The name of the DigitalOcean Space.
 * @member {String} bucket_name
 */
LoggingDigitaloceanResponse.prototype['bucket_name'] = undefined;

/**
 * Your DigitalOcean Spaces account access key.
 * @member {String} access_key
 */
LoggingDigitaloceanResponse.prototype['access_key'] = undefined;

/**
 * Your DigitalOcean Spaces account secret key.
 * @member {String} secret_key
 */
LoggingDigitaloceanResponse.prototype['secret_key'] = undefined;

/**
 * The domain of the DigitalOcean Spaces endpoint.
 * @member {String} domain
 * @default 'nyc3.digitaloceanspaces.com'
 */
LoggingDigitaloceanResponse.prototype['domain'] = 'nyc3.digitaloceanspaces.com';

/**
 * The path to upload logs to.
 * @member {String} path
 * @default 'null'
 */
LoggingDigitaloceanResponse.prototype['path'] = 'null';

/**
 * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
 * @member {String} public_key
 * @default 'null'
 */
LoggingDigitaloceanResponse.prototype['public_key'] = 'null';

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
LoggingDigitaloceanResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
LoggingDigitaloceanResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
LoggingDigitaloceanResponse.prototype['updated_at'] = undefined;

/**
 * @member {String} service_id
 */
LoggingDigitaloceanResponse.prototype['service_id'] = undefined;

/**
 * @member {Number} version
 */
LoggingDigitaloceanResponse.prototype['version'] = undefined;


// Implement LoggingDigitalocean interface:
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingDigitalocean.prototype['name'] = undefined;
/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingDigitalocean.PlacementEnum} placement
 */
LoggingDigitalocean.prototype['placement'] = undefined;
/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
 * @member {module:model/LoggingDigitalocean.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */
LoggingDigitalocean.prototype['format_version'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingDigitalocean.prototype['response_condition'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */
LoggingDigitalocean.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
/**
 * How the message should be formatted.
 * @member {module:model/LoggingDigitalocean.MessageTypeEnum} message_type
 * @default 'classic'
 */
LoggingDigitalocean.prototype['message_type'] = undefined;
/**
 * A timestamp format
 * @member {String} timestamp_format
 */
LoggingDigitalocean.prototype['timestamp_format'] = undefined;
/**
 * How frequently log files are finalized so they can be available for reading (in seconds).
 * @member {Number} period
 * @default 3600
 */
LoggingDigitalocean.prototype['period'] = 3600;
/**
 * The level of gzip encoding when sending logs (default `0`, no compression). Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {Number} gzip_level
 * @default 0
 */
LoggingDigitalocean.prototype['gzip_level'] = 0;
/**
 * The codec used for compressing your logs. Valid values are `zstd`, `snappy`, and `gzip`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {module:model/LoggingDigitalocean.CompressionCodecEnum} compression_codec
 */
LoggingDigitalocean.prototype['compression_codec'] = undefined;
/**
 * The name of the DigitalOcean Space.
 * @member {String} bucket_name
 */
LoggingDigitalocean.prototype['bucket_name'] = undefined;
/**
 * Your DigitalOcean Spaces account access key.
 * @member {String} access_key
 */
LoggingDigitalocean.prototype['access_key'] = undefined;
/**
 * Your DigitalOcean Spaces account secret key.
 * @member {String} secret_key
 */
LoggingDigitalocean.prototype['secret_key'] = undefined;
/**
 * The domain of the DigitalOcean Spaces endpoint.
 * @member {String} domain
 * @default 'nyc3.digitaloceanspaces.com'
 */
LoggingDigitalocean.prototype['domain'] = 'nyc3.digitaloceanspaces.com';
/**
 * The path to upload logs to.
 * @member {String} path
 * @default 'null'
 */
LoggingDigitalocean.prototype['path'] = 'null';
/**
 * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
 * @member {String} public_key
 * @default 'null'
 */
LoggingDigitalocean.prototype['public_key'] = 'null';
// Implement Timestamps interface:
/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
Timestamps.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
Timestamps.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
Timestamps.prototype['updated_at'] = undefined;
// Implement ServiceIdAndVersion interface:
/**
 * @member {String} service_id
 */
ServiceIdAndVersion.prototype['service_id'] = undefined;
/**
 * @member {Number} version
 */
ServiceIdAndVersion.prototype['version'] = undefined;



/**
 * Allowed values for the <code>placement</code> property.
 * @enum {String}
 * @readonly
 */
LoggingDigitaloceanResponse['PlacementEnum'] = {

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
LoggingDigitaloceanResponse['FormatVersionEnum'] = {

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
LoggingDigitaloceanResponse['MessageTypeEnum'] = {

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
LoggingDigitaloceanResponse['CompressionCodecEnum'] = {

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



export default LoggingDigitaloceanResponse;

