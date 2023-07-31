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
import LoggingUseTls from './LoggingUseTls';

/**
 * The LoggingSplunkAdditional model module.
 * @module model/LoggingSplunkAdditional
 * @version 6.0.0
 */
class LoggingSplunkAdditional {
    /**
     * Constructs a new <code>LoggingSplunkAdditional</code>.
     * @alias module:model/LoggingSplunkAdditional
     */
    constructor() { 
        
        LoggingSplunkAdditional.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingSplunkAdditional</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingSplunkAdditional} obj Optional instance to populate.
     * @return {module:model/LoggingSplunkAdditional} The populated <code>LoggingSplunkAdditional</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingSplunkAdditional();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('use_tls')) {
                obj['use_tls'] = LoggingUseTls.constructFromObject(data['use_tls']);
            }
        }
        return obj;
    }


}

/**
 * The URL to post logs to.
 * @member {String} url
 */
LoggingSplunkAdditional.prototype['url'] = undefined;

/**
 * A Splunk token for use in posting logs over HTTP to your collector.
 * @member {String} token
 */
LoggingSplunkAdditional.prototype['token'] = undefined;

/**
 * @member {module:model/LoggingUseTls} use_tls
 */
LoggingSplunkAdditional.prototype['use_tls'] = undefined;






export default LoggingSplunkAdditional;

