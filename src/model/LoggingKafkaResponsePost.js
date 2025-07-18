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
import LoggingCommon from './LoggingCommon';
import LoggingFormatVersionInteger from './LoggingFormatVersionInteger';
import LoggingKafkaAdditional from './LoggingKafkaAdditional';
import LoggingTlsCommon from './LoggingTlsCommon';
import LoggingUseTlsString from './LoggingUseTlsString';
import ServiceIdAndVersionString from './ServiceIdAndVersionString';
import Timestamps from './Timestamps';

/**
 * The LoggingKafkaResponsePost model module.
 * @module model/LoggingKafkaResponsePost
 * @version 12.1.0
 */
class LoggingKafkaResponsePost {
    /**
     * Constructs a new <code>LoggingKafkaResponsePost</code>.
     * @alias module:model/LoggingKafkaResponsePost
     * @implements module:model/LoggingCommon
     * @implements module:model/LoggingFormatVersionInteger
     * @implements module:model/LoggingTlsCommon
     * @implements module:model/Timestamps
     * @implements module:model/ServiceIdAndVersionString
     * @implements module:model/LoggingKafkaAdditional
     */
    constructor() { 
        LoggingCommon.initialize(this);LoggingFormatVersionInteger.initialize(this);LoggingTlsCommon.initialize(this);Timestamps.initialize(this);ServiceIdAndVersionString.initialize(this);LoggingKafkaAdditional.initialize(this);
        LoggingKafkaResponsePost.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingKafkaResponsePost</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingKafkaResponsePost} obj Optional instance to populate.
     * @return {module:model/LoggingKafkaResponsePost} The populated <code>LoggingKafkaResponsePost</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingKafkaResponsePost();
            LoggingCommon.constructFromObject(data, obj);
            LoggingFormatVersionInteger.constructFromObject(data, obj);
            LoggingTlsCommon.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);
            ServiceIdAndVersionString.constructFromObject(data, obj);
            LoggingKafkaAdditional.constructFromObject(data, obj);

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
                obj['format_version'] = ApiClient.convertToType(data['format_version'], 'Number');
            }
            if (data.hasOwnProperty('tls_ca_cert')) {
                obj['tls_ca_cert'] = ApiClient.convertToType(data['tls_ca_cert'], 'String');
            }
            if (data.hasOwnProperty('tls_client_cert')) {
                obj['tls_client_cert'] = ApiClient.convertToType(data['tls_client_cert'], 'String');
            }
            if (data.hasOwnProperty('tls_client_key')) {
                obj['tls_client_key'] = ApiClient.convertToType(data['tls_client_key'], 'String');
            }
            if (data.hasOwnProperty('tls_hostname')) {
                obj['tls_hostname'] = ApiClient.convertToType(data['tls_hostname'], 'String');
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
            if (data.hasOwnProperty('topic')) {
                obj['topic'] = ApiClient.convertToType(data['topic'], 'String');
            }
            if (data.hasOwnProperty('brokers')) {
                obj['brokers'] = ApiClient.convertToType(data['brokers'], 'String');
            }
            if (data.hasOwnProperty('compression_codec')) {
                obj['compression_codec'] = ApiClient.convertToType(data['compression_codec'], 'String');
            }
            if (data.hasOwnProperty('required_acks')) {
                obj['required_acks'] = ApiClient.convertToType(data['required_acks'], 'Number');
            }
            if (data.hasOwnProperty('request_max_bytes')) {
                obj['request_max_bytes'] = ApiClient.convertToType(data['request_max_bytes'], 'Number');
            }
            if (data.hasOwnProperty('parse_log_keyvals')) {
                obj['parse_log_keyvals'] = ApiClient.convertToType(data['parse_log_keyvals'], 'Boolean');
            }
            if (data.hasOwnProperty('auth_method')) {
                obj['auth_method'] = ApiClient.convertToType(data['auth_method'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('use_tls')) {
                obj['use_tls'] = LoggingUseTlsString.constructFromObject(data['use_tls']);
            }
        }
        return obj;
    }


}

/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingKafkaResponsePost.prototype['name'] = undefined;

/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingKafkaResponsePost.PlacementEnum} placement
 */
LoggingKafkaResponsePost.prototype['placement'] = undefined;

/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingKafkaResponsePost.prototype['response_condition'] = undefined;

/**
 * A Fastly [log format string](https://www.fastly.com/documentation/guides/integrations/streaming-logs/custom-log-formats/).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */
LoggingKafkaResponsePost.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';

/**
 * The geographic region where the logs will be processed before streaming. Valid values are `us`, `eu`, and `none` for global.
 * @member {module:model/LoggingKafkaResponsePost.LogProcessingRegionEnum} log_processing_region
 * @default 'none'
 */
LoggingKafkaResponsePost.prototype['log_processing_region'] = undefined;

/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
 * @member {module:model/LoggingKafkaResponsePost.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */
LoggingKafkaResponsePost.prototype['format_version'] = undefined;

/**
 * A secure certificate to authenticate a server with. Must be in PEM format.
 * @member {String} tls_ca_cert
 * @default 'null'
 */
LoggingKafkaResponsePost.prototype['tls_ca_cert'] = 'null';

/**
 * The client certificate used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_cert
 * @default 'null'
 */
LoggingKafkaResponsePost.prototype['tls_client_cert'] = 'null';

/**
 * The client private key used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_key
 * @default 'null'
 */
LoggingKafkaResponsePost.prototype['tls_client_key'] = 'null';

/**
 * The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
 * @member {String} tls_hostname
 * @default 'null'
 */
LoggingKafkaResponsePost.prototype['tls_hostname'] = 'null';

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
LoggingKafkaResponsePost.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
LoggingKafkaResponsePost.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
LoggingKafkaResponsePost.prototype['updated_at'] = undefined;

/**
 * @member {String} service_id
 */
LoggingKafkaResponsePost.prototype['service_id'] = undefined;

/**
 * @member {String} version
 */
LoggingKafkaResponsePost.prototype['version'] = undefined;

/**
 * The Kafka topic to send logs to. Required.
 * @member {String} topic
 */
LoggingKafkaResponsePost.prototype['topic'] = undefined;

/**
 * A comma-separated list of IP addresses or hostnames of Kafka brokers. Required.
 * @member {String} brokers
 */
LoggingKafkaResponsePost.prototype['brokers'] = undefined;

/**
 * The codec used for compression of your logs.
 * @member {module:model/LoggingKafkaResponsePost.CompressionCodecEnum} compression_codec
 */
LoggingKafkaResponsePost.prototype['compression_codec'] = undefined;

/**
 * The number of acknowledgements a leader must receive before a write is considered successful.
 * @member {module:model/LoggingKafkaResponsePost.RequiredAcksEnum} required_acks
 * @default RequiredAcksEnum.one
 */
LoggingKafkaResponsePost.prototype['required_acks'] = undefined;

/**
 * The maximum number of bytes sent in one request. Defaults `0` (no limit).
 * @member {Number} request_max_bytes
 * @default 0
 */
LoggingKafkaResponsePost.prototype['request_max_bytes'] = 0;

/**
 * Enables parsing of key=value tuples from the beginning of a logline, turning them into [record headers](https://cwiki.apache.org/confluence/display/KAFKA/KIP-82+-+Add+Record+Headers).
 * @member {Boolean} parse_log_keyvals
 */
LoggingKafkaResponsePost.prototype['parse_log_keyvals'] = undefined;

/**
 * SASL authentication method.
 * @member {module:model/LoggingKafkaResponsePost.AuthMethodEnum} auth_method
 */
LoggingKafkaResponsePost.prototype['auth_method'] = undefined;

/**
 * SASL user.
 * @member {String} user
 */
LoggingKafkaResponsePost.prototype['user'] = undefined;

/**
 * SASL password.
 * @member {String} password
 */
LoggingKafkaResponsePost.prototype['password'] = undefined;

/**
 * @member {module:model/LoggingUseTlsString} use_tls
 */
LoggingKafkaResponsePost.prototype['use_tls'] = undefined;


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
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingCommon.prototype['response_condition'] = undefined;
/**
 * A Fastly [log format string](https://www.fastly.com/documentation/guides/integrations/streaming-logs/custom-log-formats/).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */
LoggingCommon.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
/**
 * The geographic region where the logs will be processed before streaming. Valid values are `us`, `eu`, and `none` for global.
 * @member {module:model/LoggingCommon.LogProcessingRegionEnum} log_processing_region
 * @default 'none'
 */
LoggingCommon.prototype['log_processing_region'] = undefined;
// Implement LoggingFormatVersionInteger interface:
/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
 * @member {module:model/LoggingFormatVersionInteger.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */
LoggingFormatVersionInteger.prototype['format_version'] = undefined;
// Implement LoggingTlsCommon interface:
/**
 * A secure certificate to authenticate a server with. Must be in PEM format.
 * @member {String} tls_ca_cert
 * @default 'null'
 */
LoggingTlsCommon.prototype['tls_ca_cert'] = 'null';
/**
 * The client certificate used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_cert
 * @default 'null'
 */
LoggingTlsCommon.prototype['tls_client_cert'] = 'null';
/**
 * The client private key used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_key
 * @default 'null'
 */
LoggingTlsCommon.prototype['tls_client_key'] = 'null';
/**
 * The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
 * @member {String} tls_hostname
 * @default 'null'
 */
LoggingTlsCommon.prototype['tls_hostname'] = 'null';
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
// Implement LoggingKafkaAdditional interface:
/**
 * The Kafka topic to send logs to. Required.
 * @member {String} topic
 */
LoggingKafkaAdditional.prototype['topic'] = undefined;
/**
 * A comma-separated list of IP addresses or hostnames of Kafka brokers. Required.
 * @member {String} brokers
 */
LoggingKafkaAdditional.prototype['brokers'] = undefined;
/**
 * The codec used for compression of your logs.
 * @member {module:model/LoggingKafkaAdditional.CompressionCodecEnum} compression_codec
 */
LoggingKafkaAdditional.prototype['compression_codec'] = undefined;
/**
 * The number of acknowledgements a leader must receive before a write is considered successful.
 * @member {module:model/LoggingKafkaAdditional.RequiredAcksEnum} required_acks
 * @default RequiredAcksEnum.one
 */
LoggingKafkaAdditional.prototype['required_acks'] = undefined;
/**
 * The maximum number of bytes sent in one request. Defaults `0` (no limit).
 * @member {Number} request_max_bytes
 * @default 0
 */
LoggingKafkaAdditional.prototype['request_max_bytes'] = 0;
/**
 * Enables parsing of key=value tuples from the beginning of a logline, turning them into [record headers](https://cwiki.apache.org/confluence/display/KAFKA/KIP-82+-+Add+Record+Headers).
 * @member {Boolean} parse_log_keyvals
 */
LoggingKafkaAdditional.prototype['parse_log_keyvals'] = undefined;
/**
 * SASL authentication method.
 * @member {module:model/LoggingKafkaAdditional.AuthMethodEnum} auth_method
 */
LoggingKafkaAdditional.prototype['auth_method'] = undefined;
/**
 * SASL user.
 * @member {String} user
 */
LoggingKafkaAdditional.prototype['user'] = undefined;
/**
 * SASL password.
 * @member {String} password
 */
LoggingKafkaAdditional.prototype['password'] = undefined;
/**
 * @member {module:model/LoggingUseTlsString} use_tls
 */
LoggingKafkaAdditional.prototype['use_tls'] = undefined;



/**
 * Allowed values for the <code>placement</code> property.
 * @enum {String}
 * @readonly
 */
LoggingKafkaResponsePost['PlacementEnum'] = {

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
LoggingKafkaResponsePost['LogProcessingRegionEnum'] = {

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
 * @enum {Number}
 * @readonly
 */
LoggingKafkaResponsePost['FormatVersionEnum'] = {

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
 * Allowed values for the <code>compression_codec</code> property.
 * @enum {String}
 * @readonly
 */
LoggingKafkaResponsePost['CompressionCodecEnum'] = {

    /**
     * value: "gzip"
     * @const
     */
    "gzip": "gzip",

    /**
     * value: "snappy"
     * @const
     */
    "snappy": "snappy",

    /**
     * value: "lz4"
     * @const
     */
    "lz4": "lz4",

    /**
     * value: "null"
     * @const
     */
    "null": "null"
};


/**
 * Allowed values for the <code>required_acks</code> property.
 * @enum {Number}
 * @readonly
 */
LoggingKafkaResponsePost['RequiredAcksEnum'] = {

    /**
     * value: 1
     * @const
     */
    "one": 1,

    /**
     * value: 0
     * @const
     */
    "none": 0,

    /**
     * value: -1
     * @const
     */
    "all": -1
};


/**
 * Allowed values for the <code>auth_method</code> property.
 * @enum {String}
 * @readonly
 */
LoggingKafkaResponsePost['AuthMethodEnum'] = {

    /**
     * value: "plain"
     * @const
     */
    "plain": "plain",

    /**
     * value: "scram-sha-256"
     * @const
     */
    "scram-sha-256": "scram-sha-256",

    /**
     * value: "scram-sha-512"
     * @const
     */
    "scram-sha-512": "scram-sha-512"
};



export default LoggingKafkaResponsePost;

