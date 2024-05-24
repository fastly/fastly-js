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
 * The RequestSettingsResponseAllOf model module.
 * @module model/RequestSettingsResponseAllOf
 * @version 7.3.0
 */
class RequestSettingsResponseAllOf {
    /**
     * Constructs a new <code>RequestSettingsResponseAllOf</code>.
     * @alias module:model/RequestSettingsResponseAllOf
     */
    constructor() { 
        
        RequestSettingsResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RequestSettingsResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestSettingsResponseAllOf} obj Optional instance to populate.
     * @return {module:model/RequestSettingsResponseAllOf} The populated <code>RequestSettingsResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RequestSettingsResponseAllOf();

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






export default RequestSettingsResponseAllOf;

