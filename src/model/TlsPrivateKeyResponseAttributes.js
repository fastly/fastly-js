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
import Timestamps from './Timestamps';
import TlsPrivateKeyResponseAttributesAllOf from './TlsPrivateKeyResponseAttributesAllOf';

/**
 * The TlsPrivateKeyResponseAttributes model module.
 * @module model/TlsPrivateKeyResponseAttributes
 * @version 15.0.0-beta.4
 */
class TlsPrivateKeyResponseAttributes {
    /**
     * Constructs a new <code>TlsPrivateKeyResponseAttributes</code>.
     * @alias module:model/TlsPrivateKeyResponseAttributes
     * @implements module:model/Timestamps
     * @implements module:model/TlsPrivateKeyResponseAttributesAllOf
     */
    constructor() { 
        Timestamps.initialize(this);TlsPrivateKeyResponseAttributesAllOf.initialize(this);
        TlsPrivateKeyResponseAttributes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TlsPrivateKeyResponseAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsPrivateKeyResponseAttributes} obj Optional instance to populate.
     * @return {module:model/TlsPrivateKeyResponseAttributes} The populated <code>TlsPrivateKeyResponseAttributes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TlsPrivateKeyResponseAttributes();
            Timestamps.constructFromObject(data, obj);
            TlsPrivateKeyResponseAttributesAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('key_length')) {
                obj['key_length'] = ApiClient.convertToType(data['key_length'], 'Number');
            }
            if (data.hasOwnProperty('key_type')) {
                obj['key_type'] = ApiClient.convertToType(data['key_type'], 'String');
            }
            if (data.hasOwnProperty('replace')) {
                obj['replace'] = ApiClient.convertToType(data['replace'], 'Boolean');
            }
            if (data.hasOwnProperty('public_key_sha1')) {
                obj['public_key_sha1'] = ApiClient.convertToType(data['public_key_sha1'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
TlsPrivateKeyResponseAttributes.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
TlsPrivateKeyResponseAttributes.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
TlsPrivateKeyResponseAttributes.prototype['updated_at'] = undefined;

/**
 * A customizable name for your private key.
 * @member {String} name
 */
TlsPrivateKeyResponseAttributes.prototype['name'] = undefined;

/**
 * The key length used to generate the private key.
 * @member {Number} key_length
 */
TlsPrivateKeyResponseAttributes.prototype['key_length'] = undefined;

/**
 * The algorithm used to generate the private key. Must be `RSA`.
 * @member {String} key_type
 */
TlsPrivateKeyResponseAttributes.prototype['key_type'] = undefined;

/**
 * A recommendation from Fastly to replace this private key and all associated certificates.
 * @member {Boolean} replace
 */
TlsPrivateKeyResponseAttributes.prototype['replace'] = undefined;

/**
 * Useful for safely identifying the key.
 * @member {String} public_key_sha1
 */
TlsPrivateKeyResponseAttributes.prototype['public_key_sha1'] = undefined;


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
// Implement TlsPrivateKeyResponseAttributesAllOf interface:
/**
 * A customizable name for your private key.
 * @member {String} name
 */
TlsPrivateKeyResponseAttributesAllOf.prototype['name'] = undefined;
/**
 * The key length used to generate the private key.
 * @member {Number} key_length
 */
TlsPrivateKeyResponseAttributesAllOf.prototype['key_length'] = undefined;
/**
 * The algorithm used to generate the private key. Must be `RSA`.
 * @member {String} key_type
 */
TlsPrivateKeyResponseAttributesAllOf.prototype['key_type'] = undefined;
/**
 * A recommendation from Fastly to replace this private key and all associated certificates.
 * @member {Boolean} replace
 */
TlsPrivateKeyResponseAttributesAllOf.prototype['replace'] = undefined;
/**
 * Useful for safely identifying the key.
 * @member {String} public_key_sha1
 */
TlsPrivateKeyResponseAttributesAllOf.prototype['public_key_sha1'] = undefined;




export default TlsPrivateKeyResponseAttributes;

