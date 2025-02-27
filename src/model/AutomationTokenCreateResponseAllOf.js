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
import ReadOnlyUserId from './ReadOnlyUserId';

/**
 * The AutomationTokenCreateResponseAllOf model module.
 * @module model/AutomationTokenCreateResponseAllOf
 * @version 9.0.0
 */
class AutomationTokenCreateResponseAllOf {
    /**
     * Constructs a new <code>AutomationTokenCreateResponseAllOf</code>.
     * @alias module:model/AutomationTokenCreateResponseAllOf
     */
    constructor() { 
        
        AutomationTokenCreateResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AutomationTokenCreateResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutomationTokenCreateResponseAllOf} obj Optional instance to populate.
     * @return {module:model/AutomationTokenCreateResponseAllOf} The populated <code>AutomationTokenCreateResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AutomationTokenCreateResponseAllOf();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ReadOnlyId.constructFromObject(data['id']);
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ReadOnlyUserId.constructFromObject(data['user_id']);
            }
            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ReadOnlyCustomerId.constructFromObject(data['customer_id']);
            }
            if (data.hasOwnProperty('sudo_expires_at')) {
                obj['sudo_expires_at'] = ApiClient.convertToType(data['sudo_expires_at'], 'Date');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('access_token')) {
                obj['access_token'] = ApiClient.convertToType(data['access_token'], 'String');
            }
            if (data.hasOwnProperty('last_used_at')) {
                obj['last_used_at'] = ApiClient.convertToType(data['last_used_at'], 'Date');
            }
            if (data.hasOwnProperty('user_agent')) {
                obj['user_agent'] = ApiClient.convertToType(data['user_agent'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ReadOnlyId} id
 */
AutomationTokenCreateResponseAllOf.prototype['id'] = undefined;

/**
 * @member {module:model/ReadOnlyUserId} user_id
 */
AutomationTokenCreateResponseAllOf.prototype['user_id'] = undefined;

/**
 * @member {module:model/ReadOnlyCustomerId} customer_id
 */
AutomationTokenCreateResponseAllOf.prototype['customer_id'] = undefined;

/**
 * @member {Date} sudo_expires_at
 */
AutomationTokenCreateResponseAllOf.prototype['sudo_expires_at'] = undefined;

/**
 * A UTC time-stamp of when the token was created. 
 * @member {Date} created_at
 */
AutomationTokenCreateResponseAllOf.prototype['created_at'] = undefined;

/**
 * @member {String} access_token
 */
AutomationTokenCreateResponseAllOf.prototype['access_token'] = undefined;

/**
 * A UTC time-stamp of when the token was last used.
 * @member {Date} last_used_at
 */
AutomationTokenCreateResponseAllOf.prototype['last_used_at'] = undefined;

/**
 * The User-Agent header of the client that last used the token.
 * @member {String} user_agent
 */
AutomationTokenCreateResponseAllOf.prototype['user_agent'] = undefined;






export default AutomationTokenCreateResponseAllOf;

