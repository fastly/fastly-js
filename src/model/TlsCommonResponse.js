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
import TlsCommonResponseAllOf from './TlsCommonResponseAllOf';
import TlsCommonResponseAllOf1 from './TlsCommonResponseAllOf1';

/**
 * The TlsCommonResponse model module.
 * @module model/TlsCommonResponse
 * @version 15.0.0-beta.2
 */
class TlsCommonResponse {
    /**
     * Constructs a new <code>TlsCommonResponse</code>.
     * @alias module:model/TlsCommonResponse
     * @implements module:model/TlsCommonResponseAllOf
     * @implements module:model/TlsCommonResponseAllOf1
     */
    constructor() { 
        TlsCommonResponseAllOf.initialize(this);TlsCommonResponseAllOf1.initialize(this);
        TlsCommonResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TlsCommonResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsCommonResponse} obj Optional instance to populate.
     * @return {module:model/TlsCommonResponse} The populated <code>TlsCommonResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TlsCommonResponse();
            TlsCommonResponseAllOf.constructFromObject(data, obj);
            TlsCommonResponseAllOf1.constructFromObject(data, obj);

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
        }
        return obj;
    }


}

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


// Implement TlsCommonResponseAllOf interface:
/**
 * A secure certificate to authenticate a server with. Must be in PEM format.
 * @member {String} tls_ca_cert
 * @default 'null'
 */
TlsCommonResponseAllOf.prototype['tls_ca_cert'] = 'null';
/**
 * The client certificate used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_cert
 * @default 'null'
 */
TlsCommonResponseAllOf.prototype['tls_client_cert'] = 'null';
/**
 * The client private key used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_key
 * @default 'null'
 */
TlsCommonResponseAllOf.prototype['tls_client_key'] = 'null';
/**
 * The hostname used to verify a server's certificate. It can either be the Common Name (CN) or a Subject Alternative Name (SAN).
 * @member {String} tls_cert_hostname
 * @default 'null'
 */
TlsCommonResponseAllOf.prototype['tls_cert_hostname'] = 'null';
// Implement TlsCommonResponseAllOf1 interface:
/**
 * Whether to use TLS.
 * @member {module:model/TlsCommonResponseAllOf1.UseTlsEnum} use_tls
 * @default '0'
 */
TlsCommonResponseAllOf1.prototype['use_tls'] = undefined;



/**
 * Allowed values for the <code>use_tls</code> property.
 * @enum {String}
 * @readonly
 */
TlsCommonResponse['UseTlsEnum'] = {

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



export default TlsCommonResponse;

