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
import RequestSettingsAdditional from './RequestSettingsAdditional';
import RequestSettingsResponseAllOf from './RequestSettingsResponseAllOf';
import ServiceIdAndVersionString from './ServiceIdAndVersionString';
import Timestamps from './Timestamps';

/**
 * The RequestSettingsResponse model module.
 * @module model/RequestSettingsResponse
 * @version 15.0.0-beta.4
 */
class RequestSettingsResponse {
    /**
     * Constructs a new <code>RequestSettingsResponse</code>.
     * @alias module:model/RequestSettingsResponse
     * @implements module:model/Timestamps
     * @implements module:model/ServiceIdAndVersionString
     * @implements module:model/RequestSettingsAdditional
     * @implements module:model/RequestSettingsResponseAllOf
     */
    constructor() { 
        Timestamps.initialize(this);ServiceIdAndVersionString.initialize(this);RequestSettingsAdditional.initialize(this);RequestSettingsResponseAllOf.initialize(this);
        RequestSettingsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RequestSettingsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestSettingsResponse} obj Optional instance to populate.
     * @return {module:model/RequestSettingsResponse} The populated <code>RequestSettingsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RequestSettingsResponse();
            Timestamps.constructFromObject(data, obj);
            ServiceIdAndVersionString.constructFromObject(data, obj);
            RequestSettingsAdditional.constructFromObject(data, obj);
            RequestSettingsResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('default_host')) {
                obj['default_host'] = ApiClient.convertToType(data['default_host'], 'String');
            }
            if (data.hasOwnProperty('hash_keys')) {
                obj['hash_keys'] = ApiClient.convertToType(data['hash_keys'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('request_condition')) {
                obj['request_condition'] = ApiClient.convertToType(data['request_condition'], 'String');
            }
            if (data.hasOwnProperty('xff')) {
                obj['xff'] = ApiClient.convertToType(data['xff'], 'String');
            }
            if (data.hasOwnProperty('bypass_busy_wait')) {
                obj['bypass_busy_wait'] = ApiClient.convertToType(data['bypass_busy_wait'], 'String');
            }
            if (data.hasOwnProperty('force_miss')) {
                obj['force_miss'] = ApiClient.convertToType(data['force_miss'], 'String');
            }
            if (data.hasOwnProperty('force_ssl')) {
                obj['force_ssl'] = ApiClient.convertToType(data['force_ssl'], 'String');
            }
            if (data.hasOwnProperty('geo_headers')) {
                obj['geo_headers'] = ApiClient.convertToType(data['geo_headers'], 'String');
            }
            if (data.hasOwnProperty('max_stale_age')) {
                obj['max_stale_age'] = ApiClient.convertToType(data['max_stale_age'], 'String');
            }
            if (data.hasOwnProperty('timer_support')) {
                obj['timer_support'] = ApiClient.convertToType(data['timer_support'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
RequestSettingsResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
RequestSettingsResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
RequestSettingsResponse.prototype['updated_at'] = undefined;

/**
 * @member {String} service_id
 */
RequestSettingsResponse.prototype['service_id'] = undefined;

/**
 * @member {String} version
 */
RequestSettingsResponse.prototype['version'] = undefined;

/**
 * Allows you to terminate request handling and immediately perform an action.
 * @member {module:model/RequestSettingsResponse.ActionEnum} action
 */
RequestSettingsResponse.prototype['action'] = undefined;

/**
 * Sets the host header.
 * @member {String} default_host
 */
RequestSettingsResponse.prototype['default_host'] = undefined;

/**
 * Comma separated list of varnish request object fields that should be in the hash key.
 * @member {String} hash_keys
 */
RequestSettingsResponse.prototype['hash_keys'] = undefined;

/**
 * Name for the request settings.
 * @member {String} name
 */
RequestSettingsResponse.prototype['name'] = undefined;

/**
 * Condition which, if met, will select this configuration during a request. Optional.
 * @member {String} request_condition
 */
RequestSettingsResponse.prototype['request_condition'] = undefined;

/**
 * Short for X-Forwarded-For.
 * @member {module:model/RequestSettingsResponse.XffEnum} xff
 */
RequestSettingsResponse.prototype['xff'] = undefined;

/**
 * Disable collapsed forwarding, so you don't wait for other objects to origin.
 * @member {String} bypass_busy_wait
 */
RequestSettingsResponse.prototype['bypass_busy_wait'] = undefined;

/**
 * Allows you to force a cache miss for the request. Replaces the item in the cache if the content is cacheable.
 * @member {String} force_miss
 */
RequestSettingsResponse.prototype['force_miss'] = undefined;

/**
 * Forces the request use SSL (redirects a non-SSL to SSL).
 * @member {String} force_ssl
 */
RequestSettingsResponse.prototype['force_ssl'] = undefined;

/**
 * Injects Fastly-Geo-Country, Fastly-Geo-City, and Fastly-Geo-Region into the request headers.
 * @member {String} geo_headers
 */
RequestSettingsResponse.prototype['geo_headers'] = undefined;

/**
 * How old an object is allowed to be to serve stale-if-error or stale-while-revalidate.
 * @member {String} max_stale_age
 */
RequestSettingsResponse.prototype['max_stale_age'] = undefined;

/**
 * Injects the X-Timer info into the request for viewing origin fetch durations.
 * @member {String} timer_support
 */
RequestSettingsResponse.prototype['timer_support'] = undefined;


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
// Implement ServiceIdAndVersionString interface:
/**
 * @member {String} service_id
 */
ServiceIdAndVersionString.prototype['service_id'] = undefined;
/**
 * @member {String} version
 */
ServiceIdAndVersionString.prototype['version'] = undefined;
// Implement RequestSettingsAdditional interface:
/**
 * Allows you to terminate request handling and immediately perform an action.
 * @member {module:model/RequestSettingsAdditional.ActionEnum} action
 */
RequestSettingsAdditional.prototype['action'] = undefined;
/**
 * Sets the host header.
 * @member {String} default_host
 */
RequestSettingsAdditional.prototype['default_host'] = undefined;
/**
 * Comma separated list of varnish request object fields that should be in the hash key.
 * @member {String} hash_keys
 */
RequestSettingsAdditional.prototype['hash_keys'] = undefined;
/**
 * Name for the request settings.
 * @member {String} name
 */
RequestSettingsAdditional.prototype['name'] = undefined;
/**
 * Condition which, if met, will select this configuration during a request. Optional.
 * @member {String} request_condition
 */
RequestSettingsAdditional.prototype['request_condition'] = undefined;
/**
 * Short for X-Forwarded-For.
 * @member {module:model/RequestSettingsAdditional.XffEnum} xff
 */
RequestSettingsAdditional.prototype['xff'] = undefined;
// Implement RequestSettingsResponseAllOf interface:
/**
 * Disable collapsed forwarding, so you don't wait for other objects to origin.
 * @member {String} bypass_busy_wait
 */
RequestSettingsResponseAllOf.prototype['bypass_busy_wait'] = undefined;
/**
 * Allows you to force a cache miss for the request. Replaces the item in the cache if the content is cacheable.
 * @member {String} force_miss
 */
RequestSettingsResponseAllOf.prototype['force_miss'] = undefined;
/**
 * Forces the request use SSL (redirects a non-SSL to SSL).
 * @member {String} force_ssl
 */
RequestSettingsResponseAllOf.prototype['force_ssl'] = undefined;
/**
 * Injects Fastly-Geo-Country, Fastly-Geo-City, and Fastly-Geo-Region into the request headers.
 * @member {String} geo_headers
 */
RequestSettingsResponseAllOf.prototype['geo_headers'] = undefined;
/**
 * How old an object is allowed to be to serve stale-if-error or stale-while-revalidate.
 * @member {String} max_stale_age
 */
RequestSettingsResponseAllOf.prototype['max_stale_age'] = undefined;
/**
 * Injects the X-Timer info into the request for viewing origin fetch durations.
 * @member {String} timer_support
 */
RequestSettingsResponseAllOf.prototype['timer_support'] = undefined;



/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
RequestSettingsResponse['ActionEnum'] = {

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
RequestSettingsResponse['XffEnum'] = {

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



export default RequestSettingsResponse;

