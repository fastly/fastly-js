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
 * The LoggingHoneycombAllOf model module.
 * @module model/LoggingHoneycombAllOf
 * @version v3.1.0
 */
class LoggingHoneycombAllOf {
    /**
     * Constructs a new <code>LoggingHoneycombAllOf</code>.
     * @alias module:model/LoggingHoneycombAllOf
     */
    constructor() { 
        
        LoggingHoneycombAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingHoneycombAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingHoneycombAllOf} obj Optional instance to populate.
     * @return {module:model/LoggingHoneycombAllOf} The populated <code>LoggingHoneycombAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingHoneycombAllOf();

            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('dataset')) {
                obj['dataset'] = ApiClient.convertToType(data['dataset'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Honeycomb can ingest.
 * @member {String} format
 */
LoggingHoneycombAllOf.prototype['format'] = undefined;

/**
 * The Honeycomb Dataset you want to log to.
 * @member {String} dataset
 */
LoggingHoneycombAllOf.prototype['dataset'] = undefined;

/**
 * The Write Key from the Account page of your Honeycomb account.
 * @member {String} token
 */
LoggingHoneycombAllOf.prototype['token'] = undefined;






export default LoggingHoneycombAllOf;

