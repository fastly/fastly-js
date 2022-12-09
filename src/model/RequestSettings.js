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
 * The RequestSettings model module.
 * @module model/RequestSettings
 * @version 3.0.0
 */
class RequestSettings {
    /**
     * Constructs a new <code>RequestSettings</code>.
     * @alias module:model/RequestSettings
     */
    constructor() { 
        
        RequestSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RequestSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestSettings} obj Optional instance to populate.
     * @return {module:model/RequestSettings} The populated <code>RequestSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RequestSettings();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('bypass_busy_wait')) {
                obj['bypass_busy_wait'] = ApiClient.convertToType(data['bypass_busy_wait'], 'Number');
            }
            if (data.hasOwnProperty('default_host')) {
                obj['default_host'] = ApiClient.convertToType(data['default_host'], 'String');
            }
            if (data.hasOwnProperty('force_miss')) {
                obj['force_miss'] = ApiClient.convertToType(data['force_miss'], 'Number');
            }
            if (data.hasOwnProperty('force_ssl')) {
                obj['force_ssl'] = ApiClient.convertToType(data['force_ssl'], 'Number');
            }
            if (data.hasOwnProperty('geo_headers')) {
                obj['geo_headers'] = ApiClient.convertToType(data['geo_headers'], 'Number');
            }
            if (data.hasOwnProperty('hash_keys')) {
                obj['hash_keys'] = ApiClient.convertToType(data['hash_keys'], 'String');
            }
            if (data.hasOwnProperty('max_stale_age')) {
                obj['max_stale_age'] = ApiClient.convertToType(data['max_stale_age'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('request_condition')) {
                obj['request_condition'] = ApiClient.convertToType(data['request_condition'], 'String');
            }
            if (data.hasOwnProperty('timer_support')) {
                obj['timer_support'] = ApiClient.convertToType(data['timer_support'], 'Number');
            }
            if (data.hasOwnProperty('xff')) {
                obj['xff'] = ApiClient.convertToType(data['xff'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Allows you to terminate request handling and immediately perform an action.
 * @member {module:model/RequestSettings.ActionEnum} action
 */
RequestSettings.prototype['action'] = undefined;

/**
 * Disable collapsed forwarding, so you don't wait for other objects to origin.
 * @member {Number} bypass_busy_wait
 */
RequestSettings.prototype['bypass_busy_wait'] = undefined;

/**
 * Sets the host header.
 * @member {String} default_host
 */
RequestSettings.prototype['default_host'] = undefined;

/**
 * Allows you to force a cache miss for the request. Replaces the item in the cache if the content is cacheable.
 * @member {Number} force_miss
 */
RequestSettings.prototype['force_miss'] = undefined;

/**
 * Forces the request use SSL (redirects a non-SSL to SSL).
 * @member {Number} force_ssl
 */
RequestSettings.prototype['force_ssl'] = undefined;

/**
 * Injects Fastly-Geo-Country, Fastly-Geo-City, and Fastly-Geo-Region into the request headers.
 * @member {Number} geo_headers
 */
RequestSettings.prototype['geo_headers'] = undefined;

/**
 * Comma separated list of varnish request object fields that should be in the hash key.
 * @member {String} hash_keys
 */
RequestSettings.prototype['hash_keys'] = undefined;

/**
 * How old an object is allowed to be to serve stale-if-error or stale-while-revalidate.
 * @member {Number} max_stale_age
 */
RequestSettings.prototype['max_stale_age'] = undefined;

/**
 * Name for the request settings.
 * @member {String} name
 */
RequestSettings.prototype['name'] = undefined;

/**
 * Condition which, if met, will select this configuration during a request. Optional.
 * @member {String} request_condition
 */
RequestSettings.prototype['request_condition'] = undefined;

/**
 * Injects the X-Timer info into the request for viewing origin fetch durations.
 * @member {Number} timer_support
 */
RequestSettings.prototype['timer_support'] = undefined;

/**
 * Short for X-Forwarded-For.
 * @member {module:model/RequestSettings.XffEnum} xff
 */
RequestSettings.prototype['xff'] = undefined;





/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
RequestSettings['ActionEnum'] = {

    /**
     * value: "lookup"
     * @const
     */
    "lookup": "lookup",

    /**
     * value: "pass"
     * @const
     */
    "pass": "pass"
};


/**
 * Allowed values for the <code>xff</code> property.
 * @enum {String}
 * @readonly
 */
RequestSettings['XffEnum'] = {

    /**
     * value: "clear"
     * @const
     */
    "clear": "clear",

    /**
     * value: "leave"
     * @const
     */
    "leave": "leave",

    /**
     * value: "append"
     * @const
     */
    "append": "append",

    /**
     * value: "append_all"
     * @const
     */
    "append_all": "append_all",

    /**
     * value: "overwrite"
     * @const
     */
    "overwrite": "overwrite"
};



export default RequestSettings;

