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
 * The ClientKey model module.
 * @module model/ClientKey
 * @version 6.1.0
 */
class ClientKey {
    /**
     * Constructs a new <code>ClientKey</code>.
     * A Base64-encoded X25519 public key.
     * @alias module:model/ClientKey
     */
    constructor() { 
        
        ClientKey.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ClientKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClientKey} obj Optional instance to populate.
     * @return {module:model/ClientKey} The populated <code>ClientKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClientKey();

            if (data.hasOwnProperty('client_key')) {
                obj['client_key'] = ApiClient.convertToType(data['client_key'], 'String');
            }
            if (data.hasOwnProperty('signature')) {
                obj['signature'] = ApiClient.convertToType(data['signature'], 'String');
            }
            if (data.hasOwnProperty('expires_at')) {
                obj['expires_at'] = ApiClient.convertToType(data['expires_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * A Base64-encoded X25519 public key that can be used with a [libsodium-compatible sealed box](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes) to encrypt secrets before upload.
 * @member {String} client_key
 */
ClientKey.prototype['client_key'] = undefined;

/**
 * A Base64-encoded signature of the client key. The signature is generated using the signing key and must be verified before using the client key.
 * @member {String} signature
 */
ClientKey.prototype['signature'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} expires_at
 */
ClientKey.prototype['expires_at'] = undefined;






export default ClientKey;

