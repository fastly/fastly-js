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
 * The SecretResponse model module.
 * @module model/SecretResponse
 * @version 6.0.0
 */
class SecretResponse {
    /**
     * Constructs a new <code>SecretResponse</code>.
     * @alias module:model/SecretResponse
     */
    constructor() { 
        
        SecretResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SecretResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecretResponse} obj Optional instance to populate.
     * @return {module:model/SecretResponse} The populated <code>SecretResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecretResponse();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('digest')) {
                obj['digest'] = ApiClient.convertToType(data['digest'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('recreated')) {
                obj['recreated'] = ApiClient.convertToType(data['recreated'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Name of the secret.
 * @member {String} name
 */
SecretResponse.prototype['name'] = undefined;

/**
 * An opaque identifier of the plaintext secret value. This can be used to determine if a secret value has changed.
 * @member {String} digest
 */
SecretResponse.prototype['digest'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
SecretResponse.prototype['created_at'] = undefined;

/**
 * True if the secret replaced a secret with the same name.
 * @member {Boolean} recreated
 */
SecretResponse.prototype['recreated'] = undefined;






export default SecretResponse;

