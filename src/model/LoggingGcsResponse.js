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
import LoggingGcsAdditional from './LoggingGcsAdditional';
import LoggingGcsCommon from './LoggingGcsCommon';
import LoggingGenericCommonResponse from './LoggingGenericCommonResponse';
import ServiceIdAndVersionString from './ServiceIdAndVersionString';
import Timestamps from './Timestamps';

/**
 * The LoggingGcsResponse model module.
 * @module model/LoggingGcsResponse
 * @version 12.1.0
 */
class LoggingGcsResponse {
    /**
     * Constructs a new <code>LoggingGcsResponse</code>.
     * @alias module:model/LoggingGcsResponse
     * @implements module:model/LoggingCommonResponse
     * @implements module:model/LoggingGenericCommonResponse
     * @implements module:model/LoggingGcsCommon
     * @implements module:model/Timestamps
     * @implements module:model/ServiceIdAndVersionString
     * @implements module:model/LoggingGcsAdditional
     */
    constructor() { 
        LoggingCommonResponse.initialize(this);LoggingGenericCommonResponse.initialize(this);LoggingGcsCommon.initialize(this);Timestamps.initialize(this);ServiceIdAndVersionString.initialize(this);LoggingGcsAdditional.initialize(this);
        LoggingGcsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingGcsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingGcsResponse} obj Optional instance to populate.
     * @return {module:model/LoggingGcsResponse} The populated <code>LoggingGcsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingGcsResponse();
            LoggingCommonResponse.constructFromObject(data, obj);
            LoggingGenericCommonResponse.constructFromObject(data, obj);
            LoggingGcsCommon.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);
            ServiceIdAndVersionString.constructFromObject(data, obj);
            LoggingGcsAdditional.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('period')) {
                obj['period'] = ApiClient.convertToType(data['period'], 'String');
            }
            if (data.hasOwnProperty('gzip_level')) {
                obj['gzip_level'] = ApiClient.convertToType(data['gzip_level'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
            if (data.hasOwnProperty('secret_key')) {
                obj['secret_key'] = ApiClient.convertToType(data['secret_key'], 'String');
            }
            if (data.hasOwnProperty('account_name')) {
                obj['account_name'] = ApiClient.convertToType(data['account_name'], 'String');
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
            if (data.hasOwnProperty('bucket_name')) {
                obj['bucket_name'] = ApiClient.convertToType(data['bucket_name'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('public_key')) {
                obj['public_key'] = ApiClient.convertToType(data['public_key'], 'String');
            }
            if (data.hasOwnProperty('project_id')) {
                obj['project_id'] = ApiClient.convertToType(data['project_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingGcsResponse.prototype['name'] = undefined;

/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingGcsResponse.PlacementEnum} placement
 */
LoggingGcsResponse.prototype['placement'] = undefined;

/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingGcsResponse.prototype['response_condition'] = undefined;

/**
 * A Fastly [log format string](https://www.fastly.com/documentation/guides/integrations/streaming-logs/custom-log-formats/).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */
LoggingGcsResponse.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';

/**
 * The geographic region where the logs will be processed before streaming. Valid values are `us`, `eu`, and `none` for global.
 * @member {module:model/LoggingGcsResponse.LogProcessingRegionEnum} log_processing_region
 * @default 'none'
 */
LoggingGcsResponse.prototype['log_processing_region'] = undefined;

/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
 * @member {module:model/LoggingGcsResponse.FormatVersionEnum} format_version
 * @default '2'
 */
LoggingGcsResponse.prototype['format_version'] = undefined;

/**
 * How the message should be formatted.
 * @member {module:model/LoggingGcsResponse.MessageTypeEnum} message_type
 * @default 'classic'
 */
LoggingGcsResponse.prototype['message_type'] = undefined;

/**
 * A timestamp format
 * @member {String} timestamp_format
 */
LoggingGcsResponse.prototype['timestamp_format'] = undefined;

/**
 * The codec used for compressing your logs. Valid values are `zstd`, `snappy`, and `gzip`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {module:model/LoggingGcsResponse.CompressionCodecEnum} compression_codec
 */
LoggingGcsResponse.prototype['compression_codec'] = undefined;

/**
 * How frequently log files are finalized so they can be available for reading (in seconds).
 * @member {String} period
 * @default '3600'
 */
LoggingGcsResponse.prototype['period'] = '3600';

/**
 * The level of gzip encoding when sending logs (default `0`, no compression). Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {String} gzip_level
 * @default '0'
 */
LoggingGcsResponse.prototype['gzip_level'] = '0';

/**
 * Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Not required if `account_name` is specified.
 * @member {String} user
 */
LoggingGcsResponse.prototype['user'] = undefined;

/**
 * Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Not required if `account_name` is specified.
 * @member {String} secret_key
 */
LoggingGcsResponse.prototype['secret_key'] = undefined;

/**
 * The name of the Google Cloud Platform service account associated with the target log collection service. Not required if `user` and `secret_key` are provided.
 * @member {String} account_name
 */
LoggingGcsResponse.prototype['account_name'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
LoggingGcsResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
LoggingGcsResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
LoggingGcsResponse.prototype['updated_at'] = undefined;

/**
 * @member {String} service_id
 */
LoggingGcsResponse.prototype['service_id'] = undefined;

/**
 * @member {String} version
 */
LoggingGcsResponse.prototype['version'] = undefined;

/**
 * The name of the GCS bucket.
 * @member {String} bucket_name
 */
LoggingGcsResponse.prototype['bucket_name'] = undefined;

/**
 * @member {String} path
 * @default '/'
 */
LoggingGcsResponse.prototype['path'] = '/';

/**
 * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
 * @member {String} public_key
 * @default 'null'
 */
LoggingGcsResponse.prototype['public_key'] = 'null';

/**
 * Your Google Cloud Platform project ID. Required
 * @member {String} project_id
 */
LoggingGcsResponse.prototype['project_id'] = undefined;


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
// Implement LoggingGenericCommonResponse interface:
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
// Implement LoggingGcsCommon interface:
/**
 * Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Not required if `account_name` is specified.
 * @member {String} user
 */
LoggingGcsCommon.prototype['user'] = undefined;
/**
 * Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Not required if `account_name` is specified.
 * @member {String} secret_key
 */
LoggingGcsCommon.prototype['secret_key'] = undefined;
/**
 * The name of the Google Cloud Platform service account associated with the target log collection service. Not required if `user` and `secret_key` are provided.
 * @member {String} account_name
 */
LoggingGcsCommon.prototype['account_name'] = undefined;
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
// Implement LoggingGcsAdditional interface:
/**
 * The name of the GCS bucket.
 * @member {String} bucket_name
 */
LoggingGcsAdditional.prototype['bucket_name'] = undefined;
/**
 * @member {String} path
 * @default '/'
 */
LoggingGcsAdditional.prototype['path'] = '/';
/**
 * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
 * @member {String} public_key
 * @default 'null'
 */
LoggingGcsAdditional.prototype['public_key'] = 'null';
/**
 * Your Google Cloud Platform project ID. Required
 * @member {String} project_id
 */
LoggingGcsAdditional.prototype['project_id'] = undefined;



/**
 * Allowed values for the <code>placement</code> property.
 * @enum {String}
 * @readonly
 */
LoggingGcsResponse['PlacementEnum'] = {

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
LoggingGcsResponse['LogProcessingRegionEnum'] = {

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
LoggingGcsResponse['FormatVersionEnum'] = {

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
LoggingGcsResponse['MessageTypeEnum'] = {

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
LoggingGcsResponse['CompressionCodecEnum'] = {

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



export default LoggingGcsResponse;

