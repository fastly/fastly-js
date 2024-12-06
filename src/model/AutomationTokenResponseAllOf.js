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
import ReadOnlyCustomerId from './ReadOnlyCustomerId';
import ReadOnlyId from './ReadOnlyId';

/**
 * The AutomationTokenResponseAllOf model module.
 * @module model/AutomationTokenResponseAllOf
 * @version 8.0.0
 */
class AutomationTokenResponseAllOf {
    /**
     * Constructs a new <code>AutomationTokenResponseAllOf</code>.
     * @alias module:model/AutomationTokenResponseAllOf
     */
    constructor() { 
        
        AutomationTokenResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AutomationTokenResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutomationTokenResponseAllOf} obj Optional instance to populate.
     * @return {module:model/AutomationTokenResponseAllOf} The populated <code>AutomationTokenResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AutomationTokenResponseAllOf();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ReadOnlyId.constructFromObject(data['id']);
            }
            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ReadOnlyCustomerId.constructFromObject(data['customer_id']);
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
            if (data.hasOwnProperty('ip')) {
                obj['ip'] = ApiClient.convertToType(data['ip'], 'String');
            }
            if (data.hasOwnProperty('user_agent')) {
                obj['user_agent'] = ApiClient.convertToType(data['user_agent'], 'String');
            }
            if (data.hasOwnProperty('sudo_expires_at')) {
                obj['sudo_expires_at'] = ApiClient.convertToType(data['sudo_expires_at'], 'String');
            }
            if (data.hasOwnProperty('last_used_at')) {
                obj['last_used_at'] = ApiClient.convertToType(data['last_used_at'], 'Date');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('expires_at')) {
                obj['expires_at'] = ApiClient.convertToType(data['expires_at'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ReadOnlyId} id
 */
AutomationTokenResponseAllOf.prototype['id'] = undefined;

/**
 * @member {module:model/ReadOnlyCustomerId} customer_id
 */
AutomationTokenResponseAllOf.prototype['customer_id'] = undefined;

/**
 * @member {String} role
 */
AutomationTokenResponseAllOf.prototype['role'] = undefined;

/**
 * The IP address of the client that last used the token.
 * @member {String} ip
 */
AutomationTokenResponseAllOf.prototype['ip'] = undefined;

/**
 * The User-Agent header of the client that last used the token.
 * @member {String} user_agent
 */
AutomationTokenResponseAllOf.prototype['user_agent'] = undefined;

/**
 * @member {String} sudo_expires_at
 */
AutomationTokenResponseAllOf.prototype['sudo_expires_at'] = undefined;

/**
 * A UTC time-stamp of when the token was last used.
 * @member {Date} last_used_at
 */
AutomationTokenResponseAllOf.prototype['last_used_at'] = undefined;

/**
 * A UTC time-stamp of when the token was created.
 * @member {String} created_at
 */
AutomationTokenResponseAllOf.prototype['created_at'] = undefined;

/**
 * (optional) A UTC time-stamp of when the token will expire.
 * @member {String} expires_at
 */
AutomationTokenResponseAllOf.prototype['expires_at'] = undefined;






export default AutomationTokenResponseAllOf;

