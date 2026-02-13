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
 * The MutualAuthenticationDataAttributes model module.
 * @module model/MutualAuthenticationDataAttributes
 * @version 15.0.0-beta.2
 */
class MutualAuthenticationDataAttributes {
    /**
     * Constructs a new <code>MutualAuthenticationDataAttributes</code>.
     * @alias module:model/MutualAuthenticationDataAttributes
     */
    constructor() { 
        
        MutualAuthenticationDataAttributes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MutualAuthenticationDataAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MutualAuthenticationDataAttributes} obj Optional instance to populate.
     * @return {module:model/MutualAuthenticationDataAttributes} The populated <code>MutualAuthenticationDataAttributes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MutualAuthenticationDataAttributes();

            if (data.hasOwnProperty('cert_bundle')) {
                obj['cert_bundle'] = ApiClient.convertToType(data['cert_bundle'], 'String');
            }
            if (data.hasOwnProperty('enforced')) {
                obj['enforced'] = ApiClient.convertToType(data['enforced'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * One or more certificates. Enter each individual certificate blob on a new line. Must be PEM-formatted. Required on create. You may optionally rotate the cert_bundle on update.
 * @member {String} cert_bundle
 */
MutualAuthenticationDataAttributes.prototype['cert_bundle'] = undefined;

/**
 * Determines whether Mutual TLS will fail closed (enforced) or fail open. A true value will require a successful Mutual TLS handshake for the connection to continue and will fail closed if unsuccessful. A false value will fail open and allow the connection to proceed. Optional. Defaults to true.
 * @member {Boolean} enforced
 */
MutualAuthenticationDataAttributes.prototype['enforced'] = undefined;

/**
 * A custom name for your mutual authentication. Optional. If name is not supplied we will auto-generate one.
 * @member {String} name
 */
MutualAuthenticationDataAttributes.prototype['name'] = undefined;






export default MutualAuthenticationDataAttributes;

