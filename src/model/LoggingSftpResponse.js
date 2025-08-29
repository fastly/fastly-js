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
import LoggingCommonResponse from './LoggingCommonResponse';
import LoggingGenericCommon from './LoggingGenericCommon';
import LoggingSftpAdditional from './LoggingSftpAdditional';
import LoggingSftpResponseAllOf from './LoggingSftpResponseAllOf';
import ServiceIdAndVersionString from './ServiceIdAndVersionString';
import Timestamps from './Timestamps';

/**
 * The LoggingSftpResponse model module.
 * @module model/LoggingSftpResponse
 * @version 13.0.0
 */
class LoggingSftpResponse {
    /**
     * Constructs a new <code>LoggingSftpResponse</code>.
     * @alias module:model/LoggingSftpResponse
     * @implements module:model/LoggingCommonResponse
     * @implements module:model/LoggingGenericCommon
     * @implements module:model/Timestamps
     * @implements module:model/ServiceIdAndVersionString
     * @implements module:model/LoggingSftpAdditional
     * @implements module:model/LoggingSftpResponseAllOf
     */
    constructor() { 
        LoggingCommonResponse.initialize(this);LoggingGenericCommon.initialize(this);Timestamps.initialize(this);ServiceIdAndVersionString.initialize(this);LoggingSftpAdditional.initialize(this);LoggingSftpResponseAllOf.initialize(this);
        LoggingSftpResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingSftpResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingSftpResponse} obj Optional instance to populate.
     * @return {module:model/LoggingSftpResponse} The populated <code>LoggingSftpResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingSftpResponse();
            LoggingCommonResponse.constructFromObject(data, obj);
            LoggingGenericCommon.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);
            ServiceIdAndVersionString.constructFromObject(data, obj);
            LoggingSftpAdditional.constructFromObject(data, obj);
            LoggingSftpResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('placement')) {
                obj['placement'] = ApiClient.convertToType(data['placement'], 'String');
            }
            if (data.hasOwnProperty('response_condition')) {
                obj['response_condition'] = ApiClient.convertToType(data['response_condition'], 'String');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('log_processing_region')) {
                obj['log_processing_region'] = ApiClient.convertToType(data['log_processing_region'], 'String');
            }
            if (data.hasOwnProperty('format_version')) {
                obj['format_version'] = ApiClient.convertToType(data['format_version'], 'String');
            }
            if (data.hasOwnProperty('message_type')) {
                obj['message_type'] = ApiClient.convertToType(data['message_type'], 'String');
            }
            if (data.hasOwnProperty('timestamp_format')) {
                obj['timestamp_format'] = ApiClient.convertToType(data['timestamp_format'], 'String');
            }
            if (data.hasOwnProperty('compression_codec')) {
                obj['compression_codec'] = ApiClient.convertToType(data['compression_codec'], 'String');
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
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('public_key')) {
                obj['public_key'] = ApiClient.convertToType(data['public_key'], 'String');
            }
            if (data.hasOwnProperty('secret_key')) {
                obj['secret_key'] = ApiClient.convertToType(data['secret_key'], 'String');
            }
            if (data.hasOwnProperty('ssh_known_hosts')) {
                obj['ssh_known_hosts'] = ApiClient.convertToType(data['ssh_known_hosts'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'String');
            }
            if (data.hasOwnProperty('period')) {
                obj['period'] = ApiClient.convertToType(data['period'], 'String');
            }
            if (data.hasOwnProperty('gzip_level')) {
                obj['gzip_level'] = ApiClient.convertToType(data['gzip_level'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingSftpResponse.prototype['name'] = undefined;

/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingSftpResponse.PlacementEnum} placement
 */
LoggingSftpResponse.prototype['placement'] = undefined;

/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingSftpResponse.prototype['response_condition'] = undefined;

/**
 * A Fastly [log format string](https://www.fastly.com/documentation/guides/integrations/streaming-logs/custom-log-formats/).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */
LoggingSftpResponse.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';

/**
 * The geographic region where the logs will be processed before streaming. Valid values are `us`, `eu`, and `none` for global.
 * @member {module:model/LoggingSftpResponse.LogProcessingRegionEnum} log_processing_region
 * @default 'none'
 */
LoggingSftpResponse.prototype['log_processing_region'] = undefined;

/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
 * @member {module:model/LoggingSftpResponse.FormatVersionEnum} format_version
 * @default '2'
 */
LoggingSftpResponse.prototype['format_version'] = undefined;

/**
 * How the message should be formatted.
 * @member {module:model/LoggingSftpResponse.MessageTypeEnum} message_type
 * @default 'classic'
 */
LoggingSftpResponse.prototype['message_type'] = undefined;

/**
 * A timestamp format
 * @member {String} timestamp_format
 */
LoggingSftpResponse.prototype['timestamp_format'] = undefined;

/**
 * The codec used for compressing your logs. Valid values are `zstd`, `snappy`, and `gzip`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {module:model/LoggingSftpResponse.CompressionCodecEnum} compression_codec
 */
LoggingSftpResponse.prototype['compression_codec'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
LoggingSftpResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
LoggingSftpResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
LoggingSftpResponse.prototype['updated_at'] = undefined;

/**
 * @member {String} service_id
 */
LoggingSftpResponse.prototype['service_id'] = undefined;

/**
 * @member {String} version
 */
LoggingSftpResponse.prototype['version'] = undefined;

/**
 * The password for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference.
 * @member {String} password
 */
LoggingSftpResponse.prototype['password'] = undefined;

/**
 * The path to upload logs to.
 * @member {String} path
 * @default 'null'
 */
LoggingSftpResponse.prototype['path'] = 'null';

/**
 * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
 * @member {String} public_key
 * @default 'null'
 */
LoggingSftpResponse.prototype['public_key'] = 'null';

/**
 * The SSH private key for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference.
 * @member {String} secret_key
 * @default 'null'
 */
LoggingSftpResponse.prototype['secret_key'] = 'null';

/**
 * A list of host keys for all hosts we can connect to over SFTP.
 * @member {String} ssh_known_hosts
 */
LoggingSftpResponse.prototype['ssh_known_hosts'] = undefined;

/**
 * The username for the server.
 * @member {String} user
 */
LoggingSftpResponse.prototype['user'] = undefined;

/**
 * A hostname or IPv4 address.
 * @member {String} address
 */
LoggingSftpResponse.prototype['address'] = undefined;

/**
 * The port number.
 * @member {String} port
 * @default '22'
 */
LoggingSftpResponse.prototype['port'] = '22';

/**
 * How frequently log files are finalized so they can be available for reading (in seconds).
 * @member {String} period
 * @default '3600'
 */
LoggingSftpResponse.prototype['period'] = '3600';

/**
 * The level of gzip encoding when sending logs (default `0`, no compression). Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {Number} gzip_level
 * @default 0
 */
LoggingSftpResponse.prototype['gzip_level'] = 0;


// Implement LoggingCommonResponse interface:
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingCommonResponse.prototype['name'] = undefined;
/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingCommonResponse.PlacementEnum} placement
 */
LoggingCommonResponse.prototype['placement'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingCommonResponse.prototype['response_condition'] = undefined;
/**
 * A Fastly [log format string](https://www.fastly.com/documentation/guides/integrations/streaming-logs/custom-log-formats/).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */
LoggingCommonResponse.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
/**
 * The geographic region where the logs will be processed before streaming. Valid values are `us`, `eu`, and `none` for global.
 * @member {module:model/LoggingCommonResponse.LogProcessingRegionEnum} log_processing_region
 * @default 'none'
 */
LoggingCommonResponse.prototype['log_processing_region'] = undefined;
/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
 * @member {module:model/LoggingCommonResponse.FormatVersionEnum} format_version
 * @default '2'
 */
LoggingCommonResponse.prototype['format_version'] = undefined;
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
 * The codec used for compressing your logs. Valid values are `zstd`, `snappy`, and `gzip`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {module:model/LoggingGenericCommon.CompressionCodecEnum} compression_codec
 */
LoggingGenericCommon.prototype['compression_codec'] = undefined;
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
// Implement ServiceIdAndVersionString interface:
/**
 * @member {String} service_id
 */
ServiceIdAndVersionString.prototype['service_id'] = undefined;
/**
 * @member {String} version
 */
ServiceIdAndVersionString.prototype['version'] = undefined;
// Implement LoggingSftpAdditional interface:
/**
 * The password for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference.
 * @member {String} password
 */
LoggingSftpAdditional.prototype['password'] = undefined;
/**
 * The path to upload logs to.
 * @member {String} path
 * @default 'null'
 */
LoggingSftpAdditional.prototype['path'] = 'null';
/**
 * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
 * @member {String} public_key
 * @default 'null'
 */
LoggingSftpAdditional.prototype['public_key'] = 'null';
/**
 * The SSH private key for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference.
 * @member {String} secret_key
 * @default 'null'
 */
LoggingSftpAdditional.prototype['secret_key'] = 'null';
/**
 * A list of host keys for all hosts we can connect to over SFTP.
 * @member {String} ssh_known_hosts
 */
LoggingSftpAdditional.prototype['ssh_known_hosts'] = undefined;
/**
 * The username for the server.
 * @member {String} user
 */
LoggingSftpAdditional.prototype['user'] = undefined;
// Implement LoggingSftpResponseAllOf interface:
/**
 * A hostname or IPv4 address.
 * @member {String} address
 */
LoggingSftpResponseAllOf.prototype['address'] = undefined;
/**
 * The port number.
 * @member {String} port
 * @default '22'
 */
LoggingSftpResponseAllOf.prototype['port'] = '22';
/**
 * How frequently log files are finalized so they can be available for reading (in seconds).
 * @member {String} period
 * @default '3600'
 */
LoggingSftpResponseAllOf.prototype['period'] = '3600';
/**
 * The level of gzip encoding when sending logs (default `0`, no compression). Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {Number} gzip_level
 * @default 0
 */
LoggingSftpResponseAllOf.prototype['gzip_level'] = 0;



/**
 * Allowed values for the <code>placement</code> property.
 * @enum {String}
 * @readonly
 */
LoggingSftpResponse['PlacementEnum'] = {

    /**
     * value: "none"
     * @const
     */
    "none": "none",

    /**
     * value: "null"
     * @const
     */
    "null": "null"
};


/**
 * Allowed values for the <code>log_processing_region</code> property.
 * @enum {String}
 * @readonly
 */
LoggingSftpResponse['LogProcessingRegionEnum'] = {

    /**
     * value: "none"
     * @const
     */
    "none": "none",

    /**
     * value: "eu"
     * @const
     */
    "eu": "eu",

    /**
     * value: "us"
     * @const
     */
    "us": "us"
};


/**
 * Allowed values for the <code>format_version</code> property.
 * @enum {String}
 * @readonly
 */
LoggingSftpResponse['FormatVersionEnum'] = {

    /**
     * value: "1"
     * @const
     */
    "v1": "1",

    /**
     * value: "2"
     * @const
     */
    "v2": "2"
};


/**
 * Allowed values for the <code>message_type</code> property.
 * @enum {String}
 * @readonly
 */
LoggingSftpResponse['MessageTypeEnum'] = {

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
LoggingSftpResponse['CompressionCodecEnum'] = {

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



export default LoggingSftpResponse;

