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
 * The UserResponseReadOnly model module.
 * @module model/UserResponseReadOnly
 * @version 12.1.0
 */
class UserResponseReadOnly {
    /**
     * Constructs a new <code>UserResponseReadOnly</code>.
     * @alias module:model/UserResponseReadOnly
     */
    constructor() { 
        
        UserResponseReadOnly.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserResponseReadOnly</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserResponseReadOnly} obj Optional instance to populate.
     * @return {module:model/UserResponseReadOnly} The populated <code>UserResponseReadOnly</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserResponseReadOnly();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('email_hash')) {
                obj['email_hash'] = ApiClient.convertToType(data['email_hash'], 'String');
            }
            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
UserResponseReadOnly.prototype['id'] = undefined;

/**
 * The alphanumeric string identifying a email login.
 * @member {String} email_hash
 */
UserResponseReadOnly.prototype['email_hash'] = undefined;

/**
 * @member {String} customer_id
 */
UserResponseReadOnly.prototype['customer_id'] = undefined;






export default UserResponseReadOnly;

