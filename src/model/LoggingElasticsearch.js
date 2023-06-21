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
import LoggingCommon from './LoggingCommon';
import LoggingElasticsearchAllOf from './LoggingElasticsearchAllOf';
import LoggingRequestCapsCommon from './LoggingRequestCapsCommon';
import LoggingTlsCommon from './LoggingTlsCommon';

/**
 * The LoggingElasticsearch model module.
 * @module model/LoggingElasticsearch
 * @version 4.2.1
 */
class LoggingElasticsearch {
    /**
     * Constructs a new <code>LoggingElasticsearch</code>.
     * @alias module:model/LoggingElasticsearch
     * @implements module:model/LoggingCommon
     * @implements module:model/LoggingTlsCommon
     * @implements module:model/LoggingRequestCapsCommon
     * @implements module:model/LoggingElasticsearchAllOf
     */
    constructor() { 
        LoggingCommon.initialize(this);LoggingTlsCommon.initialize(this);LoggingRequestCapsCommon.initialize(this);LoggingElasticsearchAllOf.initialize(this);
        LoggingElasticsearch.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingElasticsearch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingElasticsearch} obj Optional instance to populate.
     * @return {module:model/LoggingElasticsearch} The populated <code>LoggingElasticsearch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingElasticsearch();
            LoggingCommon.constructFromObject(data, obj);
            LoggingTlsCommon.constructFromObject(data, obj);
            LoggingRequestCapsCommon.constructFromObject(data, obj);
            LoggingElasticsearchAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('index')) {
                obj['index'] = ApiClient.convertToType(data['index'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('pipeline')) {
                obj['pipeline'] = ApiClient.convertToType(data['pipeline'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingElasticsearch.prototype['name'] = undefined;

/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingElasticsearch.PlacementEnum} placement
 */
LoggingElasticsearch.prototype['placement'] = undefined;

/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
 * @member {module:model/LoggingElasticsearch.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */
LoggingElasticsearch.prototype['format_version'] = undefined;

/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingElasticsearch.prototype['response_condition'] = undefined;

/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Elasticsearch can ingest.
 * @member {String} format
 */
LoggingElasticsearch.prototype['format'] = undefined;

/**
 * A secure certificate to authenticate a server with. Must be in PEM format.
 * @member {String} tls_ca_cert
 * @default 'null'
 */
LoggingElasticsearch.prototype['tls_ca_cert'] = 'null';

/**
 * The client certificate used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_cert
 * @default 'null'
 */
LoggingElasticsearch.prototype['tls_client_cert'] = 'null';

/**
 * The client private key used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_key
 * @default 'null'
 */
LoggingElasticsearch.prototype['tls_client_key'] = 'null';

/**
 * The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
 * @member {String} tls_hostname
 * @default 'null'
 */
LoggingElasticsearch.prototype['tls_hostname'] = 'null';

/**
 * The maximum number of logs sent in one request. Defaults `0` for unbounded.
 * @member {Number} request_max_entries
 * @default 0
 */
LoggingElasticsearch.prototype['request_max_entries'] = 0;

/**
 * The maximum number of bytes sent in one request. Defaults `0` for unbounded.
 * @member {Number} request_max_bytes
 * @default 0
 */
LoggingElasticsearch.prototype['request_max_bytes'] = 0;

/**
 * The name of the Elasticsearch index to send documents (logs) to. The index must follow the Elasticsearch [index format rules](https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-create-index.html). We support [strftime](https://www.man7.org/linux/man-pages/man3/strftime.3.html) interpolated variables inside braces prefixed with a pound symbol. For example, `#{%F}` will interpolate as `YYYY-MM-DD` with today's date.
 * @member {String} index
 */
LoggingElasticsearch.prototype['index'] = undefined;

/**
 * The URL to stream logs to. Must use HTTPS.
 * @member {String} url
 */
LoggingElasticsearch.prototype['url'] = undefined;

/**
 * The ID of the Elasticsearch ingest pipeline to apply pre-process transformations to before indexing. Learn more about creating a pipeline in the [Elasticsearch docs](https://www.elastic.co/guide/en/elasticsearch/reference/current/ingest.html).
 * @member {String} pipeline
 */
LoggingElasticsearch.prototype['pipeline'] = undefined;

/**
 * Basic Auth username.
 * @member {String} user
 */
LoggingElasticsearch.prototype['user'] = undefined;

/**
 * Basic Auth password.
 * @member {String} password
 */
LoggingElasticsearch.prototype['password'] = undefined;


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
// Implement LoggingRequestCapsCommon interface:
/**
 * The maximum number of logs sent in one request. Defaults `0` for unbounded.
 * @member {Number} request_max_entries
 * @default 0
 */
LoggingRequestCapsCommon.prototype['request_max_entries'] = 0;
/**
 * The maximum number of bytes sent in one request. Defaults `0` for unbounded.
 * @member {Number} request_max_bytes
 * @default 0
 */
LoggingRequestCapsCommon.prototype['request_max_bytes'] = 0;
// Implement LoggingElasticsearchAllOf interface:
/**
 * The name of the Elasticsearch index to send documents (logs) to. The index must follow the Elasticsearch [index format rules](https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-create-index.html). We support [strftime](https://www.man7.org/linux/man-pages/man3/strftime.3.html) interpolated variables inside braces prefixed with a pound symbol. For example, `#{%F}` will interpolate as `YYYY-MM-DD` with today's date.
 * @member {String} index
 */
LoggingElasticsearchAllOf.prototype['index'] = undefined;
/**
 * The URL to stream logs to. Must use HTTPS.
 * @member {String} url
 */
LoggingElasticsearchAllOf.prototype['url'] = undefined;
/**
 * The ID of the Elasticsearch ingest pipeline to apply pre-process transformations to before indexing. Learn more about creating a pipeline in the [Elasticsearch docs](https://www.elastic.co/guide/en/elasticsearch/reference/current/ingest.html).
 * @member {String} pipeline
 */
LoggingElasticsearchAllOf.prototype['pipeline'] = undefined;
/**
 * Basic Auth username.
 * @member {String} user
 */
LoggingElasticsearchAllOf.prototype['user'] = undefined;
/**
 * Basic Auth password.
 * @member {String} password
 */
LoggingElasticsearchAllOf.prototype['password'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Elasticsearch can ingest.
 * @member {String} format
 */
LoggingElasticsearchAllOf.prototype['format'] = undefined;



/**
 * Allowed values for the <code>placement</code> property.
 * @enum {String}
 * @readonly
 */
LoggingElasticsearch['PlacementEnum'] = {

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
LoggingElasticsearch['FormatVersionEnum'] = {

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



export default LoggingElasticsearch;

