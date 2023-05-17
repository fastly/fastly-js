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
import LoggingAddressAndPort from './LoggingAddressAndPort';
import LoggingCommon from './LoggingCommon';
import LoggingMessageType from './LoggingMessageType';
import LoggingSyslogAllOf from './LoggingSyslogAllOf';
import LoggingTlsCommon from './LoggingTlsCommon';
import LoggingUseTls from './LoggingUseTls';

/**
 * The LoggingSyslog model module.
 * @module model/LoggingSyslog
 * @version 4.1.0
 */
class LoggingSyslog {
    /**
     * Constructs a new <code>LoggingSyslog</code>.
     * @alias module:model/LoggingSyslog
     * @implements module:model/LoggingCommon
     * @implements module:model/LoggingTlsCommon
     * @implements module:model/LoggingAddressAndPort
     * @implements module:model/LoggingSyslogAllOf
     */
    constructor() { 
        LoggingCommon.initialize(this);LoggingTlsCommon.initialize(this);LoggingAddressAndPort.initialize(this);LoggingSyslogAllOf.initialize(this);
        LoggingSyslog.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingSyslog</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingSyslog} obj Optional instance to populate.
     * @return {module:model/LoggingSyslog} The populated <code>LoggingSyslog</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingSyslog();
            LoggingCommon.constructFromObject(data, obj);
            LoggingTlsCommon.constructFromObject(data, obj);
            LoggingAddressAndPort.constructFromObject(data, obj);
            LoggingSyslogAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
            if (data.hasOwnProperty('message_type')) {
                obj['message_type'] = LoggingMessageType.constructFromObject(data['message_type']);
            }
            if (data.hasOwnProperty('hostname')) {
                obj['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
            }
            if (data.hasOwnProperty('ipv4')) {
                obj['ipv4'] = ApiClient.convertToType(data['ipv4'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('use_tls')) {
                obj['use_tls'] = LoggingUseTls.constructFromObject(data['use_tls']);
            }
        }
        return obj;
    }


}

/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingSyslog.prototype['name'] = undefined;

/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingSyslog.PlacementEnum} placement
 */
LoggingSyslog.prototype['placement'] = undefined;

/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
 * @member {module:model/LoggingSyslog.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */
LoggingSyslog.prototype['format_version'] = undefined;

/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingSyslog.prototype['response_condition'] = undefined;

/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */
LoggingSyslog.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';

/**
 * A secure certificate to authenticate a server with. Must be in PEM format.
 * @member {String} tls_ca_cert
 * @default 'null'
 */
LoggingSyslog.prototype['tls_ca_cert'] = 'null';

/**
 * The client certificate used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_cert
 * @default 'null'
 */
LoggingSyslog.prototype['tls_client_cert'] = 'null';

/**
 * The client private key used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_key
 * @default 'null'
 */
LoggingSyslog.prototype['tls_client_key'] = 'null';

/**
 * The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
 * @member {String} tls_hostname
 * @default 'null'
 */
LoggingSyslog.prototype['tls_hostname'] = 'null';

/**
 * A hostname or IPv4 address.
 * @member {String} address
 */
LoggingSyslog.prototype['address'] = undefined;

/**
 * The port number.
 * @member {Number} port
 * @default 514
 */
LoggingSyslog.prototype['port'] = 514;

/**
 * @member {module:model/LoggingMessageType} message_type
 */
LoggingSyslog.prototype['message_type'] = undefined;

/**
 * The hostname used for the syslog endpoint.
 * @member {String} hostname
 */
LoggingSyslog.prototype['hostname'] = undefined;

/**
 * The IPv4 address used for the syslog endpoint.
 * @member {String} ipv4
 */
LoggingSyslog.prototype['ipv4'] = undefined;

/**
 * Whether to prepend each message with a specific token.
 * @member {String} token
 * @default 'null'
 */
LoggingSyslog.prototype['token'] = 'null';

/**
 * @member {module:model/LoggingUseTls} use_tls
 */
LoggingSyslog.prototype['use_tls'] = undefined;


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
// Implement LoggingAddressAndPort interface:
/**
 * A hostname or IPv4 address.
 * @member {String} address
 */
LoggingAddressAndPort.prototype['address'] = undefined;
/**
 * The port number.
 * @member {Number} port
 * @default 514
 */
LoggingAddressAndPort.prototype['port'] = 514;
// Implement LoggingSyslogAllOf interface:
/**
 * @member {module:model/LoggingMessageType} message_type
 */
LoggingSyslogAllOf.prototype['message_type'] = undefined;
/**
 * The hostname used for the syslog endpoint.
 * @member {String} hostname
 */
LoggingSyslogAllOf.prototype['hostname'] = undefined;
/**
 * The IPv4 address used for the syslog endpoint.
 * @member {String} ipv4
 */
LoggingSyslogAllOf.prototype['ipv4'] = undefined;
/**
 * Whether to prepend each message with a specific token.
 * @member {String} token
 * @default 'null'
 */
LoggingSyslogAllOf.prototype['token'] = 'null';
/**
 * @member {module:model/LoggingUseTls} use_tls
 */
LoggingSyslogAllOf.prototype['use_tls'] = undefined;



/**
 * Allowed values for the <code>placement</code> property.
 * @enum {String}
 * @readonly
 */
LoggingSyslog['PlacementEnum'] = {

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
LoggingSyslog['FormatVersionEnum'] = {

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



export default LoggingSyslog;

