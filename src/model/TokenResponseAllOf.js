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
 * The TokenResponseAllOf model module.
 * @module model/TokenResponseAllOf
 * @version 4.2.0
 */
class TokenResponseAllOf {
    /**
     * Constructs a new <code>TokenResponseAllOf</code>.
     * @alias module:model/TokenResponseAllOf
     */
    constructor() { 
        
        TokenResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TokenResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokenResponseAllOf} obj Optional instance to populate.
     * @return {module:model/TokenResponseAllOf} The populated <code>TokenResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TokenResponseAllOf();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('last_used_at')) {
                obj['last_used_at'] = ApiClient.convertToType(data['last_used_at'], 'String');
            }
            if (data.hasOwnProperty('expires_at')) {
                obj['expires_at'] = ApiClient.convertToType(data['expires_at'], 'String');
            }
            if (data.hasOwnProperty('ip')) {
                obj['ip'] = ApiClient.convertToType(data['ip'], 'String');
            }
            if (data.hasOwnProperty('user_agent')) {
                obj['user_agent'] = ApiClient.convertToType(data['user_agent'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
TokenResponseAllOf.prototype['id'] = undefined;

/**
 * @member {String} user_id
 */
TokenResponseAllOf.prototype['user_id'] = undefined;

/**
 * Time-stamp (UTC) of when the token was created.
 * @member {String} created_at
 */
TokenResponseAllOf.prototype['created_at'] = undefined;

/**
 * Time-stamp (UTC) of when the token was last used.
 * @member {String} last_used_at
 */
TokenResponseAllOf.prototype['last_used_at'] = undefined;

/**
 * Time-stamp (UTC) of when the token will expire (optional).
 * @member {String} expires_at
 */
TokenResponseAllOf.prototype['expires_at'] = undefined;

/**
 * IP Address of the client that last used the token.
 * @member {String} ip
 */
TokenResponseAllOf.prototype['ip'] = undefined;

/**
 * User-Agent header of the client that last used the token.
 * @member {String} user_agent
 */
TokenResponseAllOf.prototype['user_agent'] = undefined;






export default TokenResponseAllOf;

