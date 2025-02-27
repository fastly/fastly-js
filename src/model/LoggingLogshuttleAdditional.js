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
 * The LoggingLogshuttleAdditional model module.
 * @module model/LoggingLogshuttleAdditional
 * @version 9.0.0
 */
class LoggingLogshuttleAdditional {
    /**
     * Constructs a new <code>LoggingLogshuttleAdditional</code>.
     * @alias module:model/LoggingLogshuttleAdditional
     */
    constructor() { 
        
        LoggingLogshuttleAdditional.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingLogshuttleAdditional</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingLogshuttleAdditional} obj Optional instance to populate.
     * @return {module:model/LoggingLogshuttleAdditional} The populated <code>LoggingLogshuttleAdditional</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingLogshuttleAdditional();

            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The data authentication token associated with this endpoint.
 * @member {String} token
 */
LoggingLogshuttleAdditional.prototype['token'] = undefined;

/**
 * The URL to stream logs to.
 * @member {String} url
 */
LoggingLogshuttleAdditional.prototype['url'] = undefined;






export default LoggingLogshuttleAdditional;

