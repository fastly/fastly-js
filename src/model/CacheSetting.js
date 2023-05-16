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
 * The CacheSetting model module.
 * @module model/CacheSetting
 * @version 4.0.0
 */
class CacheSetting {
    /**
     * Constructs a new <code>CacheSetting</code>.
     * @alias module:model/CacheSetting
     */
    constructor() { 
        
        CacheSetting.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CacheSetting</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CacheSetting} obj Optional instance to populate.
     * @return {module:model/CacheSetting} The populated <code>CacheSetting</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CacheSetting();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('cache_condition')) {
                obj['cache_condition'] = ApiClient.convertToType(data['cache_condition'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('stale_ttl')) {
                obj['stale_ttl'] = ApiClient.convertToType(data['stale_ttl'], 'Number');
            }
            if (data.hasOwnProperty('ttl')) {
                obj['ttl'] = ApiClient.convertToType(data['ttl'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * If set, will cause vcl_fetch to terminate after processing this rule with the return state specified. If not set, other configuration logic in vcl_fetch with a lower priority will run after this rule. 
 * @member {module:model/CacheSetting.ActionEnum} action
 */
CacheSetting.prototype['action'] = undefined;

/**
 * Name of the cache condition controlling when this configuration applies.
 * @member {String} cache_condition
 */
CacheSetting.prototype['cache_condition'] = undefined;

/**
 * Name for the cache settings object.
 * @member {String} name
 */
CacheSetting.prototype['name'] = undefined;

/**
 * Maximum time in seconds to continue to use a stale version of the object if future requests to your backend server fail (also known as 'stale if error').
 * @member {Number} stale_ttl
 */
CacheSetting.prototype['stale_ttl'] = undefined;

/**
 * Maximum time to consider the object fresh in the cache (the cache 'time to live').
 * @member {Number} ttl
 */
CacheSetting.prototype['ttl'] = undefined;





/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
CacheSetting['ActionEnum'] = {

    /**
     * value: "pass"
     * @const
     */
    "pass": "pass",

    /**
     * value: "cache"
     * @const
     */
    "cache": "cache",

    /**
     * value: "restart"
     * @const
     */
    "restart": "restart"
};



export default CacheSetting;

