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
 * The VersionDetailSettings model module.
 * @module model/VersionDetailSettings
 * @version 6.0.0
 */
class VersionDetailSettings {
    /**
     * Constructs a new <code>VersionDetailSettings</code>.
     * List of default settings for this service.
     * @alias module:model/VersionDetailSettings
     */
    constructor() { 
        
        VersionDetailSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VersionDetailSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VersionDetailSettings} obj Optional instance to populate.
     * @return {module:model/VersionDetailSettings} The populated <code>VersionDetailSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VersionDetailSettings();

            if (data.hasOwnProperty('general.default_host')) {
                obj['general.default_host'] = ApiClient.convertToType(data['general.default_host'], 'String');
            }
            if (data.hasOwnProperty('general.default_ttl')) {
                obj['general.default_ttl'] = ApiClient.convertToType(data['general.default_ttl'], 'Number');
            }
            if (data.hasOwnProperty('general.stale_if_error')) {
                obj['general.stale_if_error'] = ApiClient.convertToType(data['general.stale_if_error'], 'Boolean');
            }
            if (data.hasOwnProperty('general.stale_if_error_ttl')) {
                obj['general.stale_if_error_ttl'] = ApiClient.convertToType(data['general.stale_if_error_ttl'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The default host name for the version.
 * @member {String} general.default_host
 */
VersionDetailSettings.prototype['general.default_host'] = undefined;

/**
 * The default time-to-live (TTL) for the version.
 * @member {Number} general.default_ttl
 */
VersionDetailSettings.prototype['general.default_ttl'] = undefined;

/**
 * Enables serving a stale object if there is an error.
 * @member {Boolean} general.stale_if_error
 * @default false
 */
VersionDetailSettings.prototype['general.stale_if_error'] = false;

/**
 * The default time-to-live (TTL) for serving the stale object for the version.
 * @member {Number} general.stale_if_error_ttl
 * @default 43200
 */
VersionDetailSettings.prototype['general.stale_if_error_ttl'] = 43200;






export default VersionDetailSettings;

