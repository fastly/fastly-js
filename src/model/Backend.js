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
 * The Backend model module.
 * @module model/Backend
 * @version 7.1.0
 */
class Backend {
    /**
     * Constructs a new <code>Backend</code>.
     * @alias module:model/Backend
     */
    constructor() { 
        
        Backend.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Backend</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Backend} obj Optional instance to populate.
     * @return {module:model/Backend} The populated <code>Backend</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Backend();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('auto_loadbalance')) {
                obj['auto_loadbalance'] = ApiClient.convertToType(data['auto_loadbalance'], 'Boolean');
            }
            if (data.hasOwnProperty('between_bytes_timeout')) {
                obj['between_bytes_timeout'] = ApiClient.convertToType(data['between_bytes_timeout'], 'Number');
            }
            if (data.hasOwnProperty('client_cert')) {
                obj['client_cert'] = ApiClient.convertToType(data['client_cert'], 'String');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('connect_timeout')) {
                obj['connect_timeout'] = ApiClient.convertToType(data['connect_timeout'], 'Number');
            }
            if (data.hasOwnProperty('first_byte_timeout')) {
                obj['first_byte_timeout'] = ApiClient.convertToType(data['first_byte_timeout'], 'Number');
            }
            if (data.hasOwnProperty('healthcheck')) {
                obj['healthcheck'] = ApiClient.convertToType(data['healthcheck'], 'String');
            }
            if (data.hasOwnProperty('hostname')) {
                obj['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
            }
            if (data.hasOwnProperty('ipv4')) {
                obj['ipv4'] = ApiClient.convertToType(data['ipv4'], 'String');
            }
            if (data.hasOwnProperty('ipv6')) {
                obj['ipv6'] = ApiClient.convertToType(data['ipv6'], 'String');
            }
            if (data.hasOwnProperty('keepalive_time')) {
                obj['keepalive_time'] = ApiClient.convertToType(data['keepalive_time'], 'Number');
            }
            if (data.hasOwnProperty('max_conn')) {
                obj['max_conn'] = ApiClient.convertToType(data['max_conn'], 'Number');
            }
            if (data.hasOwnProperty('max_tls_version')) {
                obj['max_tls_version'] = ApiClient.convertToType(data['max_tls_version'], 'String');
            }
            if (data.hasOwnProperty('min_tls_version')) {
                obj['min_tls_version'] = ApiClient.convertToType(data['min_tls_version'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('override_host')) {
                obj['override_host'] = ApiClient.convertToType(data['override_host'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
            if (data.hasOwnProperty('request_condition')) {
                obj['request_condition'] = ApiClient.convertToType(data['request_condition'], 'String');
            }
            if (data.hasOwnProperty('share_key')) {
                obj['share_key'] = ApiClient.convertToType(data['share_key'], 'String');
            }
            if (data.hasOwnProperty('shield')) {
                obj['shield'] = ApiClient.convertToType(data['shield'], 'String');
            }
            if (data.hasOwnProperty('ssl_ca_cert')) {
                obj['ssl_ca_cert'] = ApiClient.convertToType(data['ssl_ca_cert'], 'String');
            }
            if (data.hasOwnProperty('ssl_cert_hostname')) {
                obj['ssl_cert_hostname'] = ApiClient.convertToType(data['ssl_cert_hostname'], 'String');
            }
            if (data.hasOwnProperty('ssl_check_cert')) {
                obj['ssl_check_cert'] = ApiClient.convertToType(data['ssl_check_cert'], 'Boolean');
            }
            if (data.hasOwnProperty('ssl_ciphers')) {
                obj['ssl_ciphers'] = ApiClient.convertToType(data['ssl_ciphers'], 'String');
            }
            if (data.hasOwnProperty('ssl_client_cert')) {
                obj['ssl_client_cert'] = ApiClient.convertToType(data['ssl_client_cert'], 'String');
            }
            if (data.hasOwnProperty('ssl_client_key')) {
                obj['ssl_client_key'] = ApiClient.convertToType(data['ssl_client_key'], 'String');
            }
            if (data.hasOwnProperty('ssl_hostname')) {
                obj['ssl_hostname'] = ApiClient.convertToType(data['ssl_hostname'], 'String');
            }
            if (data.hasOwnProperty('ssl_sni_hostname')) {
                obj['ssl_sni_hostname'] = ApiClient.convertToType(data['ssl_sni_hostname'], 'String');
            }
            if (data.hasOwnProperty('use_ssl')) {
                obj['use_ssl'] = ApiClient.convertToType(data['use_ssl'], 'Boolean');
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * A hostname, IPv4, or IPv6 address for the backend. This is the preferred way to specify the location of your backend.
 * @member {String} address
 */
Backend.prototype['address'] = undefined;

/**
 * Whether or not this backend should be automatically load balanced. If true, all backends with this setting that don't have a `request_condition` will be selected based on their `weight`.
 * @member {Boolean} auto_loadbalance
 */
Backend.prototype['auto_loadbalance'] = undefined;

/**
 * Maximum duration in milliseconds that Fastly will wait while receiving no data on a download from a backend. If exceeded, the response received so far will be considered complete and the fetch will end. May be set at runtime using `bereq.between_bytes_timeout`.
 * @member {Number} between_bytes_timeout
 */
Backend.prototype['between_bytes_timeout'] = undefined;

/**
 * Unused.
 * @member {String} client_cert
 */
Backend.prototype['client_cert'] = undefined;

/**
 * A freeform descriptive note.
 * @member {String} comment
 */
Backend.prototype['comment'] = undefined;

/**
 * Maximum duration in milliseconds to wait for a connection to this backend to be established. If exceeded, the connection is aborted and a synthethic `503` response will be presented instead. May be set at runtime using `bereq.connect_timeout`.
 * @member {Number} connect_timeout
 */
Backend.prototype['connect_timeout'] = undefined;

/**
 * Maximum duration in milliseconds to wait for the server response to begin after a TCP connection is established and the request has been sent. If exceeded, the connection is aborted and a synthethic `503` response will be presented instead. May be set at runtime using `bereq.first_byte_timeout`.
 * @member {Number} first_byte_timeout
 */
Backend.prototype['first_byte_timeout'] = undefined;

/**
 * The name of the healthcheck to use with this backend.
 * @member {String} healthcheck
 */
Backend.prototype['healthcheck'] = undefined;

/**
 * The hostname of the backend. May be used as an alternative to `address` to set the backend location.
 * @member {String} hostname
 */
Backend.prototype['hostname'] = undefined;

/**
 * IPv4 address of the backend. May be used as an alternative to `address` to set the backend location.
 * @member {String} ipv4
 */
Backend.prototype['ipv4'] = undefined;

/**
 * IPv6 address of the backend. May be used as an alternative to `address` to set the backend location.
 * @member {String} ipv6
 */
Backend.prototype['ipv6'] = undefined;

/**
 * How long in seconds to keep a persistent connection to the backend between requests.
 * @member {Number} keepalive_time
 */
Backend.prototype['keepalive_time'] = undefined;

/**
 * Maximum number of concurrent connections this backend will accept.
 * @member {Number} max_conn
 */
Backend.prototype['max_conn'] = undefined;

/**
 * Maximum allowed TLS version on SSL connections to this backend. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
 * @member {String} max_tls_version
 */
Backend.prototype['max_tls_version'] = undefined;

/**
 * Minimum allowed TLS version on SSL connections to this backend. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
 * @member {String} min_tls_version
 */
Backend.prototype['min_tls_version'] = undefined;

/**
 * The name of the backend.
 * @member {String} name
 */
Backend.prototype['name'] = undefined;

/**
 * If set, will replace the client-supplied HTTP `Host` header on connections to this backend. Applied after VCL has been processed, so this setting will take precedence over changing `bereq.http.Host` in VCL.
 * @member {String} override_host
 */
Backend.prototype['override_host'] = undefined;

/**
 * Port on which the backend server is listening for connections from Fastly. Setting `port` to 80 or 443 will also set `use_ssl` automatically (to false and true respectively), unless explicitly overridden by setting `use_ssl` in the same request.
 * @member {Number} port
 */
Backend.prototype['port'] = undefined;

/**
 * Name of a Condition, which if satisfied, will select this backend during a request. If set, will override any `auto_loadbalance` setting. By default, the first backend added to a service is selected for all requests.
 * @member {String} request_condition
 */
Backend.prototype['request_condition'] = undefined;

/**
 * Value that when shared across backends will enable those backends to share the same health check.
 * @member {String} share_key
 */
Backend.prototype['share_key'] = undefined;

/**
 * Identifier of the POP to use as a [shield](https://docs.fastly.com/en/guides/shielding).
 * @member {String} shield
 */
Backend.prototype['shield'] = undefined;

/**
 * CA certificate attached to origin.
 * @member {String} ssl_ca_cert
 */
Backend.prototype['ssl_ca_cert'] = undefined;

/**
 * Overrides `ssl_hostname`, but only for cert verification. Does not affect SNI at all.
 * @member {String} ssl_cert_hostname
 */
Backend.prototype['ssl_cert_hostname'] = undefined;

/**
 * Be strict on checking SSL certs.
 * @member {Boolean} ssl_check_cert
 * @default true
 */
Backend.prototype['ssl_check_cert'] = true;

/**
 * List of [OpenSSL ciphers](https://www.openssl.org/docs/man1.1.1/man1/ciphers.html) to support for connections to this origin. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
 * @member {String} ssl_ciphers
 */
Backend.prototype['ssl_ciphers'] = undefined;

/**
 * Client certificate attached to origin.
 * @member {String} ssl_client_cert
 */
Backend.prototype['ssl_client_cert'] = undefined;

/**
 * Client key attached to origin.
 * @member {String} ssl_client_key
 */
Backend.prototype['ssl_client_key'] = undefined;

/**
 * Use `ssl_cert_hostname` and `ssl_sni_hostname` to configure certificate validation.
 * @member {String} ssl_hostname
 */
Backend.prototype['ssl_hostname'] = undefined;

/**
 * Overrides `ssl_hostname`, but only for SNI in the handshake. Does not affect cert validation at all.
 * @member {String} ssl_sni_hostname
 */
Backend.prototype['ssl_sni_hostname'] = undefined;

/**
 * Whether or not to require TLS for connections to this backend.
 * @member {Boolean} use_ssl
 */
Backend.prototype['use_ssl'] = undefined;

/**
 * Weight used to load balance this backend against others. May be any positive integer. If `auto_loadbalance` is true, the chance of this backend being selected is equal to its own weight over the sum of all weights for backends that have `auto_loadbalance` set to true.
 * @member {Number} weight
 */
Backend.prototype['weight'] = undefined;






export default Backend;

