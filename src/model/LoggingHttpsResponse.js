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
import LoggingHttps from './LoggingHttps';
import LoggingMessageType from './LoggingMessageType';
import ServiceIdAndVersion from './ServiceIdAndVersion';
import Timestamps from './Timestamps';

/**
 * The LoggingHttpsResponse model module.
 * @module model/LoggingHttpsResponse
 * @version 4.4.0
 */
class LoggingHttpsResponse {
    /**
     * Constructs a new <code>LoggingHttpsResponse</code>.
     * @alias module:model/LoggingHttpsResponse
     * @implements module:model/LoggingHttps
     * @implements module:model/Timestamps
     * @implements module:model/ServiceIdAndVersion
     */
    constructor() { 
        LoggingHttps.initialize(this);Timestamps.initialize(this);ServiceIdAndVersion.initialize(this);
        LoggingHttpsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingHttpsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingHttpsResponse} obj Optional instance to populate.
     * @return {module:model/LoggingHttpsResponse} The populated <code>LoggingHttpsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingHttpsResponse();
            LoggingHttps.constructFromObject(data, obj);
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
            if (data.hasOwnProperty('request_max_entries')) {
                obj['request_max_entries'] = ApiClient.convertToType(data['request_max_entries'], 'Number');
            }
            if (data.hasOwnProperty('request_max_bytes')) {
                obj['request_max_bytes'] = ApiClient.convertToType(data['request_max_bytes'], 'Number');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('content_type')) {
                obj['content_type'] = ApiClient.convertToType(data['content_type'], 'String');
            }
            if (data.hasOwnProperty('header_name')) {
                obj['header_name'] = ApiClient.convertToType(data['header_name'], 'String');
            }
            if (data.hasOwnProperty('message_type')) {
                obj['message_type'] = LoggingMessageType.constructFromObject(data['message_type']);
            }
            if (data.hasOwnProperty('header_value')) {
                obj['header_value'] = ApiClient.convertToType(data['header_value'], 'String');
            }
            if (data.hasOwnProperty('method')) {
                obj['method'] = ApiClient.convertToType(data['method'], 'String');
            }
            if (data.hasOwnProperty('json_format')) {
                obj['json_format'] = ApiClient.convertToType(data['json_format'], 'String');
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
LoggingHttpsResponse.prototype['name'] = undefined;

/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingHttpsResponse.PlacementEnum} placement
 */
LoggingHttpsResponse.prototype['placement'] = undefined;

/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
 * @member {module:model/LoggingHttpsResponse.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */
LoggingHttpsResponse.prototype['format_version'] = undefined;

/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingHttpsResponse.prototype['response_condition'] = undefined;

/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */
LoggingHttpsResponse.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';

/**
 * A secure certificate to authenticate a server with. Must be in PEM format.
 * @member {String} tls_ca_cert
 * @default 'null'
 */
LoggingHttpsResponse.prototype['tls_ca_cert'] = 'null';

/**
 * The client certificate used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_cert
 * @default 'null'
 */
LoggingHttpsResponse.prototype['tls_client_cert'] = 'null';

/**
 * The client private key used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_key
 * @default 'null'
 */
LoggingHttpsResponse.prototype['tls_client_key'] = 'null';

/**
 * The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
 * @member {String} tls_hostname
 * @default 'null'
 */
LoggingHttpsResponse.prototype['tls_hostname'] = 'null';

/**
 * The maximum number of logs sent in one request. Defaults `0` (10k).
 * @member {Number} request_max_entries
 * @default 0
 */
LoggingHttpsResponse.prototype['request_max_entries'] = 0;

/**
 * The maximum number of bytes sent in one request. Defaults `0` (100MB).
 * @member {Number} request_max_bytes
 * @default 0
 */
LoggingHttpsResponse.prototype['request_max_bytes'] = 0;

/**
 * The URL to send logs to. Must use HTTPS. Required.
 * @member {String} url
 */
LoggingHttpsResponse.prototype['url'] = undefined;

/**
 * Content type of the header sent with the request.
 * @member {String} content_type
 * @default 'null'
 */
LoggingHttpsResponse.prototype['content_type'] = 'null';

/**
 * Name of the custom header sent with the request.
 * @member {String} header_name
 * @default 'null'
 */
LoggingHttpsResponse.prototype['header_name'] = 'null';

/**
 * @member {module:model/LoggingMessageType} message_type
 */
LoggingHttpsResponse.prototype['message_type'] = undefined;

/**
 * Value of the custom header sent with the request.
 * @member {String} header_value
 * @default 'null'
 */
LoggingHttpsResponse.prototype['header_value'] = 'null';

/**
 * HTTP method used for request.
 * @member {module:model/LoggingHttpsResponse.MethodEnum} method
 * @default 'POST'
 */
LoggingHttpsResponse.prototype['method'] = undefined;

/**
 * Enforces valid JSON formatting for log entries.
 * @member {module:model/LoggingHttpsResponse.JsonFormatEnum} json_format
 */
LoggingHttpsResponse.prototype['json_format'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
LoggingHttpsResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
LoggingHttpsResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
LoggingHttpsResponse.prototype['updated_at'] = undefined;

/**
 * @member {String} service_id
 */
LoggingHttpsResponse.prototype['service_id'] = undefined;

/**
 * @member {Number} version
 */
LoggingHttpsResponse.prototype['version'] = undefined;


// Implement LoggingHttps interface:
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingHttps.prototype['name'] = undefined;
/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingHttps.PlacementEnum} placement
 */
LoggingHttps.prototype['placement'] = undefined;
/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
 * @member {module:model/LoggingHttps.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */
LoggingHttps.prototype['format_version'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingHttps.prototype['response_condition'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */
LoggingHttps.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
/**
 * A secure certificate to authenticate a server with. Must be in PEM format.
 * @member {String} tls_ca_cert
 * @default 'null'
 */
LoggingHttps.prototype['tls_ca_cert'] = 'null';
/**
 * The client certificate used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_cert
 * @default 'null'
 */
LoggingHttps.prototype['tls_client_cert'] = 'null';
/**
 * The client private key used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_key
 * @default 'null'
 */
LoggingHttps.prototype['tls_client_key'] = 'null';
/**
 * The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
 * @member {String} tls_hostname
 * @default 'null'
 */
LoggingHttps.prototype['tls_hostname'] = 'null';
/**
 * The maximum number of logs sent in one request. Defaults `0` (10k).
 * @member {Number} request_max_entries
 * @default 0
 */
LoggingHttps.prototype['request_max_entries'] = 0;
/**
 * The maximum number of bytes sent in one request. Defaults `0` (100MB).
 * @member {Number} request_max_bytes
 * @default 0
 */
LoggingHttps.prototype['request_max_bytes'] = 0;
/**
 * The URL to send logs to. Must use HTTPS. Required.
 * @member {String} url
 */
LoggingHttps.prototype['url'] = undefined;
/**
 * Content type of the header sent with the request.
 * @member {String} content_type
 * @default 'null'
 */
LoggingHttps.prototype['content_type'] = 'null';
/**
 * Name of the custom header sent with the request.
 * @member {String} header_name
 * @default 'null'
 */
LoggingHttps.prototype['header_name'] = 'null';
/**
 * @member {module:model/LoggingMessageType} message_type
 */
LoggingHttps.prototype['message_type'] = undefined;
/**
 * Value of the custom header sent with the request.
 * @member {String} header_value
 * @default 'null'
 */
LoggingHttps.prototype['header_value'] = 'null';
/**
 * HTTP method used for request.
 * @member {module:model/LoggingHttps.MethodEnum} method
 * @default 'POST'
 */
LoggingHttps.prototype['method'] = undefined;
/**
 * Enforces valid JSON formatting for log entries.
 * @member {module:model/LoggingHttps.JsonFormatEnum} json_format
 */
LoggingHttps.prototype['json_format'] = undefined;
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
LoggingHttpsResponse['PlacementEnum'] = {

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
LoggingHttpsResponse['FormatVersionEnum'] = {

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
 * Allowed values for the <code>method</code> property.
 * @enum {String}
 * @readonly
 */
LoggingHttpsResponse['MethodEnum'] = {

    /**
     * value: "POST"
     * @const
     */
    "POST": "POST",

    /**
     * value: "PUT"
     * @const
     */
    "PUT": "PUT"
};


/**
 * Allowed values for the <code>json_format</code> property.
 * @enum {String}
 * @readonly
 */
LoggingHttpsResponse['JsonFormatEnum'] = {

    /**
     * value: "0"
     * @const
     */
    "disabled": "0",

    /**
     * value: "1"
     * @const
     */
    "json_array": "1",

    /**
     * value: "2"
     * @const
     */
    "newline_delimited_json": "2"
};



export default LoggingHttpsResponse;

