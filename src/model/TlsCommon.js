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
 * The TlsCommon model module.
 * @module model/TlsCommon
 * @version 4.0.0
 */
class TlsCommon {
    /**
     * Constructs a new <code>TlsCommon</code>.
     * @alias module:model/TlsCommon
     */
    constructor() { 
        
        TlsCommon.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TlsCommon</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsCommon} obj Optional instance to populate.
     * @return {module:model/TlsCommon} The populated <code>TlsCommon</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TlsCommon();

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
                obj['use_tls'] = ApiClient.convertToType(data['use_tls'], 'Number');
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
TlsCommon.prototype['tls_ca_cert'] = 'null';

/**
 * The client certificate used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_cert
 * @default 'null'
 */
TlsCommon.prototype['tls_client_cert'] = 'null';

/**
 * The client private key used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_key
 * @default 'null'
 */
TlsCommon.prototype['tls_client_key'] = 'null';

/**
 * The hostname used to verify a server's certificate. It can either be the Common Name (CN) or a Subject Alternative Name (SAN).
 * @member {String} tls_cert_hostname
 * @default 'null'
 */
TlsCommon.prototype['tls_cert_hostname'] = 'null';

/**
 * Whether to use TLS.
 * @member {module:model/TlsCommon.UseTlsEnum} use_tls
 * @default UseTlsEnum.no_tls
 */
TlsCommon.prototype['use_tls'] = undefined;





/**
 * Allowed values for the <code>use_tls</code> property.
 * @enum {Number}
 * @readonly
 */
TlsCommon['UseTlsEnum'] = {

    /**
     * value: 0
     * @const
     */
    "no_tls": 0,

    /**
     * value: 1
     * @const
     */
    "use_tls": 1
};



export default TlsCommon;

