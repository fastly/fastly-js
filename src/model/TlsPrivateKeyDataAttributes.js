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
 * The TlsPrivateKeyDataAttributes model module.
 * @module model/TlsPrivateKeyDataAttributes
 * @version 4.0.0
 */
class TlsPrivateKeyDataAttributes {
    /**
     * Constructs a new <code>TlsPrivateKeyDataAttributes</code>.
     * @alias module:model/TlsPrivateKeyDataAttributes
     */
    constructor() { 
        
        TlsPrivateKeyDataAttributes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TlsPrivateKeyDataAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsPrivateKeyDataAttributes} obj Optional instance to populate.
     * @return {module:model/TlsPrivateKeyDataAttributes} The populated <code>TlsPrivateKeyDataAttributes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TlsPrivateKeyDataAttributes();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A customizable name for your private key. Optional.
 * @member {String} name
 */
TlsPrivateKeyDataAttributes.prototype['name'] = undefined;

/**
 * The contents of the private key. Must be a PEM-formatted key. Not returned in response body. Required.
 * @member {String} key
 */
TlsPrivateKeyDataAttributes.prototype['key'] = undefined;






export default TlsPrivateKeyDataAttributes;

