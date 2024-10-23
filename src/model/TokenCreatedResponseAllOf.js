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
 * The TokenCreatedResponseAllOf model module.
 * @module model/TokenCreatedResponseAllOf
 * @version 7.10.0
 */
class TokenCreatedResponseAllOf {
    /**
     * Constructs a new <code>TokenCreatedResponseAllOf</code>.
     * @alias module:model/TokenCreatedResponseAllOf
     */
    constructor() { 
        
        TokenCreatedResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TokenCreatedResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokenCreatedResponseAllOf} obj Optional instance to populate.
     * @return {module:model/TokenCreatedResponseAllOf} The populated <code>TokenCreatedResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TokenCreatedResponseAllOf();

            if (data.hasOwnProperty('access_token')) {
                obj['access_token'] = ApiClient.convertToType(data['access_token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The alphanumeric string for accessing the API (only available on token creation).
 * @member {String} access_token
 */
TokenCreatedResponseAllOf.prototype['access_token'] = undefined;






export default TokenCreatedResponseAllOf;

