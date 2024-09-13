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
import CacheSetting from './CacheSetting';
import ServiceIdAndVersionString from './ServiceIdAndVersionString';
import Timestamps from './Timestamps';

/**
 * The CacheSettingResponse model module.
 * @module model/CacheSettingResponse
 * @version 7.9.0
 */
class CacheSettingResponse {
    /**
     * Constructs a new <code>CacheSettingResponse</code>.
     * @alias module:model/CacheSettingResponse
     * @implements module:model/CacheSetting
     * @implements module:model/ServiceIdAndVersionString
     * @implements module:model/Timestamps
     */
    constructor() { 
        CacheSetting.initialize(this);ServiceIdAndVersionString.initialize(this);Timestamps.initialize(this);
        CacheSettingResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CacheSettingResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CacheSettingResponse} obj Optional instance to populate.
     * @return {module:model/CacheSettingResponse} The populated <code>CacheSettingResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CacheSettingResponse();
            CacheSetting.constructFromObject(data, obj);
            ServiceIdAndVersionString.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);

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
                obj['stale_ttl'] = ApiClient.convertToType(data['stale_ttl'], 'String');
            }
            if (data.hasOwnProperty('ttl')) {
                obj['ttl'] = ApiClient.convertToType(data['ttl'], 'String');
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * If set, will cause vcl_fetch to terminate after processing this rule with the return state specified. If not set, other configuration logic in vcl_fetch with a lower priority will run after this rule. 
 * @member {module:model/CacheSettingResponse.ActionEnum} action
 */
CacheSettingResponse.prototype['action'] = undefined;

/**
 * Name of the cache condition controlling when this configuration applies.
 * @member {String} cache_condition
 */
CacheSettingResponse.prototype['cache_condition'] = undefined;

/**
 * Name for the cache settings object.
 * @member {String} name
 */
CacheSettingResponse.prototype['name'] = undefined;

/**
 * Maximum time in seconds to continue to use a stale version of the object if future requests to your backend server fail (also known as 'stale if error').
 * @member {String} stale_ttl
 */
CacheSettingResponse.prototype['stale_ttl'] = undefined;

/**
 * Maximum time to consider the object fresh in the cache (the cache 'time to live').
 * @member {String} ttl
 */
CacheSettingResponse.prototype['ttl'] = undefined;

/**
 * @member {String} service_id
 */
CacheSettingResponse.prototype['service_id'] = undefined;

/**
 * @member {String} version
 */
CacheSettingResponse.prototype['version'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
CacheSettingResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
CacheSettingResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
CacheSettingResponse.prototype['updated_at'] = undefined;


// Implement CacheSetting interface:
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
 * @member {String} stale_ttl
 */
CacheSetting.prototype['stale_ttl'] = undefined;
/**
 * Maximum time to consider the object fresh in the cache (the cache 'time to live').
 * @member {String} ttl
 */
CacheSetting.prototype['ttl'] = undefined;
// Implement ServiceIdAndVersionString interface:
/**
 * @member {String} service_id
 */
ServiceIdAndVersionString.prototype['service_id'] = undefined;
/**
 * @member {String} version
 */
ServiceIdAndVersionString.prototype['version'] = undefined;
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



/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
CacheSettingResponse['ActionEnum'] = {

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



export default CacheSettingResponse;

