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
import PoolAdditional from './PoolAdditional';
import PoolResponseCommon from './PoolResponseCommon';
import PoolResponsePostAllOf from './PoolResponsePostAllOf';
import ServiceIdAndVersionString from './ServiceIdAndVersionString';
import Timestamps from './Timestamps';
import TlsCommonResponse from './TlsCommonResponse';

/**
 * The PoolResponsePost model module.
 * @module model/PoolResponsePost
 * @version 11.0.0
 */
class PoolResponsePost {
    /**
     * Constructs a new <code>PoolResponsePost</code>.
     * @alias module:model/PoolResponsePost
     * @implements module:model/TlsCommonResponse
     * @implements module:model/Timestamps
     * @implements module:model/ServiceIdAndVersionString
     * @implements module:model/PoolAdditional
     * @implements module:model/PoolResponseCommon
     * @implements module:model/PoolResponsePostAllOf
     */
    constructor() { 
        TlsCommonResponse.initialize(this);Timestamps.initialize(this);ServiceIdAndVersionString.initialize(this);PoolAdditional.initialize(this);PoolResponseCommon.initialize(this);PoolResponsePostAllOf.initialize(this);
        PoolResponsePost.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PoolResponsePost</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PoolResponsePost} obj Optional instance to populate.
     * @return {module:model/PoolResponsePost} The populated <code>PoolResponsePost</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PoolResponsePost();
            TlsCommonResponse.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);
            ServiceIdAndVersionString.constructFromObject(data, obj);
            PoolAdditional.constructFromObject(data, obj);
            PoolResponseCommon.constructFromObject(data, obj);
            PoolResponsePostAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('tls_ca_cert')) {
                obj['tls_ca_cert'] = ApiClient.convertToType(data['tls_ca_cert'], 'String');
            }
            if (data.hasOwnProperty('tls_client_cert')) {
                obj['tls_client_cert'] = ApiClient.convertToType(data['tls_client_cert'], 'String');
            }
            if (data.hasOwnProperty('tls_client_key')) {
                obj['tls_client_key'] = ApiClient.convertToType(data['tls_client_key'], 'String');
            }
            if (data.hasOwnProperty('tls_cert_hostname')) {
                obj['tls_cert_hostname'] = ApiClient.convertToType(data['tls_cert_hostname'], 'String');
            }
            if (data.hasOwnProperty('use_tls')) {
                obj['use_tls'] = ApiClient.convertToType(data['use_tls'], 'String');
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
            if (data.hasOwnProperty('between_bytes_timeout')) {
                obj['between_bytes_timeout'] = ApiClient.convertToType(data['between_bytes_timeout'], 'String');
            }
            if (data.hasOwnProperty('connect_timeout')) {
                obj['connect_timeout'] = ApiClient.convertToType(data['connect_timeout'], 'String');
            }
            if (data.hasOwnProperty('first_byte_timeout')) {
                obj['first_byte_timeout'] = ApiClient.convertToType(data['first_byte_timeout'], 'String');
            }
            if (data.hasOwnProperty('max_conn_default')) {
                obj['max_conn_default'] = ApiClient.convertToType(data['max_conn_default'], 'String');
            }
            if (data.hasOwnProperty('tls_check_cert')) {
                obj['tls_check_cert'] = ApiClient.convertToType(data['tls_check_cert'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('quorum')) {
                obj['quorum'] = ApiClient.convertToType(data['quorum'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * A secure certificate to authenticate a server with. Must be in PEM format.
 * @member {String} tls_ca_cert
 * @default 'null'
 */
PoolResponsePost.prototype['tls_ca_cert'] = 'null';

/**
 * The client certificate used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_cert
 * @default 'null'
 */
PoolResponsePost.prototype['tls_client_cert'] = 'null';

/**
 * The client private key used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_key
 * @default 'null'
 */
PoolResponsePost.prototype['tls_client_key'] = 'null';

/**
 * The hostname used to verify a server's certificate. It can either be the Common Name (CN) or a Subject Alternative Name (SAN).
 * @member {String} tls_cert_hostname
 * @default 'null'
 */
PoolResponsePost.prototype['tls_cert_hostname'] = 'null';

/**
 * Whether to use TLS.
 * @member {module:model/PoolResponsePost.UseTlsEnum} use_tls
 * @default '0'
 */
PoolResponsePost.prototype['use_tls'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
PoolResponsePost.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
PoolResponsePost.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
PoolResponsePost.prototype['updated_at'] = undefined;

/**
 * @member {String} service_id
 */
PoolResponsePost.prototype['service_id'] = undefined;

/**
 * @member {String} version
 */
PoolResponsePost.prototype['version'] = undefined;

/**
 * Name for the Pool.
 * @member {String} name
 */
PoolResponsePost.prototype['name'] = undefined;

/**
 * Selected POP to serve as a shield for the servers. Defaults to `null` meaning no origin shielding if not set. Refer to the [POPs API endpoint](https://www.fastly.com/documentation/reference/api/utils/pops/) to get a list of available POPs used for shielding.
 * @member {String} shield
 * @default 'null'
 */
PoolResponsePost.prototype['shield'] = 'null';

/**
 * Condition which, if met, will select this configuration during a request. Optional.
 * @member {String} request_condition
 */
PoolResponsePost.prototype['request_condition'] = undefined;

/**
 * List of OpenSSL ciphers (see the [openssl.org manpages](https://www.openssl.org/docs/man1.1.1/man1/ciphers.html) for details). Optional.
 * @member {String} tls_ciphers
 */
PoolResponsePost.prototype['tls_ciphers'] = undefined;

/**
 * SNI hostname. Optional.
 * @member {String} tls_sni_hostname
 */
PoolResponsePost.prototype['tls_sni_hostname'] = undefined;

/**
 * Minimum allowed TLS version on connections to this server. Optional.
 * @member {Number} min_tls_version
 */
PoolResponsePost.prototype['min_tls_version'] = undefined;

/**
 * Maximum allowed TLS version on connections to this server. Optional.
 * @member {Number} max_tls_version
 */
PoolResponsePost.prototype['max_tls_version'] = undefined;

/**
 * Name of the healthcheck to use with this pool. Can be empty and could be reused across multiple backend and pools.
 * @member {String} healthcheck
 */
PoolResponsePost.prototype['healthcheck'] = undefined;

/**
 * A freeform descriptive note.
 * @member {String} comment
 */
PoolResponsePost.prototype['comment'] = undefined;

/**
 * What type of load balance group to use.
 * @member {module:model/PoolResponsePost.TypeEnum} type
 */
PoolResponsePost.prototype['type'] = undefined;

/**
 * The hostname to [override the Host header](https://docs.fastly.com/en/guides/specifying-an-override-host). Defaults to `null` meaning no override of the Host header will occur. This setting can also be added to a Server definition. If the field is set on a Server definition it will override the Pool setting.
 * @member {String} override_host
 * @default 'null'
 */
PoolResponsePost.prototype['override_host'] = 'null';

/**
 * Maximum duration in milliseconds that Fastly will wait while receiving no data on a download from a backend. If exceeded, the response received so far will be considered complete and the fetch will end. May be set at runtime using `bereq.between_bytes_timeout`.
 * @member {String} between_bytes_timeout
 */
PoolResponsePost.prototype['between_bytes_timeout'] = undefined;

/**
 * How long to wait for a timeout in milliseconds.
 * @member {String} connect_timeout
 */
PoolResponsePost.prototype['connect_timeout'] = undefined;

/**
 * How long to wait for the first byte in milliseconds.
 * @member {String} first_byte_timeout
 */
PoolResponsePost.prototype['first_byte_timeout'] = undefined;

/**
 * Maximum number of connections.
 * @member {String} max_conn_default
 * @default '200'
 */
PoolResponsePost.prototype['max_conn_default'] = '200';

/**
 * Be strict on checking TLS certs.
 * @member {String} tls_check_cert
 */
PoolResponsePost.prototype['tls_check_cert'] = undefined;

/**
 * @member {String} id
 */
PoolResponsePost.prototype['id'] = undefined;

/**
 * Percentage of capacity (`0-100`) that needs to be operationally available for a pool to be considered up.
 * @member {Number} quorum
 * @default 75
 */
PoolResponsePost.prototype['quorum'] = 75;


// Implement TlsCommonResponse interface:
/**
 * A secure certificate to authenticate a server with. Must be in PEM format.
 * @member {String} tls_ca_cert
 * @default 'null'
 */
TlsCommonResponse.prototype['tls_ca_cert'] = 'null';
/**
 * The client certificate used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_cert
 * @default 'null'
 */
TlsCommonResponse.prototype['tls_client_cert'] = 'null';
/**
 * The client private key used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_key
 * @default 'null'
 */
TlsCommonResponse.prototype['tls_client_key'] = 'null';
/**
 * The hostname used to verify a server's certificate. It can either be the Common Name (CN) or a Subject Alternative Name (SAN).
 * @member {String} tls_cert_hostname
 * @default 'null'
 */
TlsCommonResponse.prototype['tls_cert_hostname'] = 'null';
/**
 * Whether to use TLS.
 * @member {module:model/TlsCommonResponse.UseTlsEnum} use_tls
 * @default '0'
 */
TlsCommonResponse.prototype['use_tls'] = undefined;
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
// Implement PoolAdditional interface:
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
 * The hostname to [override the Host header](https://docs.fastly.com/en/guides/specifying-an-override-host). Defaults to `null` meaning no override of the Host header will occur. This setting can also be added to a Server definition. If the field is set on a Server definition it will override the Pool setting.
 * @member {String} override_host
 * @default 'null'
 */
PoolAdditional.prototype['override_host'] = 'null';
// Implement PoolResponseCommon interface:
/**
 * Maximum duration in milliseconds that Fastly will wait while receiving no data on a download from a backend. If exceeded, the response received so far will be considered complete and the fetch will end. May be set at runtime using `bereq.between_bytes_timeout`.
 * @member {String} between_bytes_timeout
 */
PoolResponseCommon.prototype['between_bytes_timeout'] = undefined;
/**
 * How long to wait for a timeout in milliseconds.
 * @member {String} connect_timeout
 */
PoolResponseCommon.prototype['connect_timeout'] = undefined;
/**
 * How long to wait for the first byte in milliseconds.
 * @member {String} first_byte_timeout
 */
PoolResponseCommon.prototype['first_byte_timeout'] = undefined;
/**
 * Maximum number of connections.
 * @member {String} max_conn_default
 * @default '200'
 */
PoolResponseCommon.prototype['max_conn_default'] = '200';
/**
 * Be strict on checking TLS certs.
 * @member {String} tls_check_cert
 */
PoolResponseCommon.prototype['tls_check_cert'] = undefined;
/**
 * @member {String} id
 */
PoolResponseCommon.prototype['id'] = undefined;
// Implement PoolResponsePostAllOf interface:
/**
 * Percentage of capacity (`0-100`) that needs to be operationally available for a pool to be considered up.
 * @member {Number} quorum
 * @default 75
 */
PoolResponsePostAllOf.prototype['quorum'] = 75;



/**
 * Allowed values for the <code>use_tls</code> property.
 * @enum {String}
 * @readonly
 */
PoolResponsePost['UseTlsEnum'] = {

    /**
     * value: "0"
     * @const
     */
    "no_tls": "0",

    /**
     * value: "1"
     * @const
     */
    "use_tls": "1"
};


/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
PoolResponsePost['TypeEnum'] = {

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



export default PoolResponsePost;

