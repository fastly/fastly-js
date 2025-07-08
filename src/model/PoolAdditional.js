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

/**
 * The PoolAdditional model module.
 * @module model/PoolAdditional
 * @version 12.1.0
 */
class PoolAdditional {
    /**
     * Constructs a new <code>PoolAdditional</code>.
     * @alias module:model/PoolAdditional
     */
    constructor() { 
        
        PoolAdditional.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PoolAdditional</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PoolAdditional} obj Optional instance to populate.
     * @return {module:model/PoolAdditional} The populated <code>PoolAdditional</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PoolAdditional();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('shield')) {
                obj['shield'] = ApiClient.convertToType(data['shield'], 'String');
            }
            if (data.hasOwnProperty('request_condition')) {
                obj['request_condition'] = ApiClient.convertToType(data['request_condition'], 'String');
            }
            if (data.hasOwnProperty('tls_ciphers')) {
                obj['tls_ciphers'] = ApiClient.convertToType(data['tls_ciphers'], 'String');
            }
            if (data.hasOwnProperty('tls_sni_hostname')) {
                obj['tls_sni_hostname'] = ApiClient.convertToType(data['tls_sni_hostname'], 'String');
            }
            if (data.hasOwnProperty('min_tls_version')) {
                obj['min_tls_version'] = ApiClient.convertToType(data['min_tls_version'], 'Number');
            }
            if (data.hasOwnProperty('max_tls_version')) {
                obj['max_tls_version'] = ApiClient.convertToType(data['max_tls_version'], 'Number');
            }
            if (data.hasOwnProperty('healthcheck')) {
                obj['healthcheck'] = ApiClient.convertToType(data['healthcheck'], 'String');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('override_host')) {
                obj['override_host'] = ApiClient.convertToType(data['override_host'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Name for the Pool.
 * @member {String} name
 */
PoolAdditional.prototype['name'] = undefined;

/**
 * Selected POP to serve as a shield for the servers. Defaults to `null` meaning no origin shielding if not set. Refer to the [POPs API endpoint](https://www.fastly.com/documentation/reference/api/utils/pops/) to get a list of available POPs used for shielding.
 * @member {String} shield
 * @default 'null'
 */
PoolAdditional.prototype['shield'] = 'null';

/**
 * Condition which, if met, will select this configuration during a request. Optional.
 * @member {String} request_condition
 */
PoolAdditional.prototype['request_condition'] = undefined;

/**
 * List of OpenSSL ciphers (see the [openssl.org manpages](https://www.openssl.org/docs/man1.1.1/man1/ciphers.html) for details). Optional.
 * @member {String} tls_ciphers
 */
PoolAdditional.prototype['tls_ciphers'] = undefined;

/**
 * SNI hostname. Optional.
 * @member {String} tls_sni_hostname
 */
PoolAdditional.prototype['tls_sni_hostname'] = undefined;

/**
 * Minimum allowed TLS version on connections to this server. Optional.
 * @member {Number} min_tls_version
 */
PoolAdditional.prototype['min_tls_version'] = undefined;

/**
 * Maximum allowed TLS version on connections to this server. Optional.
 * @member {Number} max_tls_version
 */
PoolAdditional.prototype['max_tls_version'] = undefined;

/**
 * Name of the healthcheck to use with this pool. Can be empty and could be reused across multiple backend and pools.
 * @member {String} healthcheck
 */
PoolAdditional.prototype['healthcheck'] = undefined;

/**
 * A freeform descriptive note.
 * @member {String} comment
 */
PoolAdditional.prototype['comment'] = undefined;

/**
 * What type of load balance group to use.
 * @member {module:model/PoolAdditional.TypeEnum} type
 */
PoolAdditional.prototype['type'] = undefined;

/**
 * The hostname to [override the Host header](https://www.fastly.com/documentation/guides/full-site-delivery/domains-and-origins/specifying-an-override-host/). Defaults to `null` meaning no override of the Host header will occur. This setting can also be added to a Server definition. If the field is set on a Server definition it will override the Pool setting.
 * @member {String} override_host
 * @default 'null'
 */
PoolAdditional.prototype['override_host'] = 'null';





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
PoolAdditional['TypeEnum'] = {

    /**
     * value: "random"
     * @const
     */
    "random": "random",

    /**
     * value: "hash"
     * @const
     */
    "hash": "hash",

    /**
     * value: "client"
     * @const
     */
    "client": "client"
};



export default PoolAdditional;

