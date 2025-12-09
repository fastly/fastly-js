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
 * The Secret model module.
 * @module model/Secret
 * @version 14.1.0
 */
class Secret {
    /**
     * Constructs a new <code>Secret</code>.
     * @alias module:model/Secret
     */
    constructor() { 
        
        Secret.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Secret</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Secret} obj Optional instance to populate.
     * @return {module:model/Secret} The populated <code>Secret</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Secret();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('secret')) {
                obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
            }
            if (data.hasOwnProperty('client_key')) {
                obj['client_key'] = ApiClient.convertToType(data['client_key'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A human-readable name for the secret. The value must contain only letters, numbers, dashes (`-`), underscores (`_`), and periods (`.`).
 * @member {String} name
 */
Secret.prototype['name'] = undefined;

/**
 * A Base64-encoded string containing either the secret or the encrypted secret (when using client_key). The maximum secret size (before Base64 encoding and optional local encryption) is 64KB.
 * @member {String} secret
 */
Secret.prototype['secret'] = undefined;

/**
 * The Base64-encoded string containing the client key used to encrypt the secret, if applicable.
 * @member {String} client_key
 */
Secret.prototype['client_key'] = undefined;






export default Secret;

