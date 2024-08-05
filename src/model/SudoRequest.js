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
 * The SudoRequest model module.
 * @module model/SudoRequest
 * @version 7.6.0
 */
class SudoRequest {
    /**
     * Constructs a new <code>SudoRequest</code>.
     * @alias module:model/SudoRequest
     * @param username {String} 
     * @param password {String} 
     */
    constructor(username, password) { 
        
        SudoRequest.initialize(this, username, password);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, username, password) { 
        obj['username'] = username;
        obj['password'] = password;
    }

    /**
     * Constructs a <code>SudoRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SudoRequest} obj Optional instance to populate.
     * @return {module:model/SudoRequest} The populated <code>SudoRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SudoRequest();

            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('expiry_time')) {
                obj['expiry_time'] = ApiClient.convertToType(data['expiry_time'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} username
 */
SudoRequest.prototype['username'] = undefined;

/**
 * @member {String} password
 */
SudoRequest.prototype['password'] = undefined;

/**
 * @member {String} expiry_time
 */
SudoRequest.prototype['expiry_time'] = undefined;






export default SudoRequest;

