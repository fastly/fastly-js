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
 * The ArcSessionLogEntry model module.
 * @module model/ArcSessionLogEntry
 * @version 17.0.0
 */
class ArcSessionLogEntry {
    /**
     * Constructs a new <code>ArcSessionLogEntry</code>.
     * A single request and response pair recorded within a session.
     * @alias module:model/ArcSessionLogEntry
     */
    constructor() { 
        
        ArcSessionLogEntry.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ArcSessionLogEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArcSessionLogEntry} obj Optional instance to populate.
     * @return {module:model/ArcSessionLogEntry} The populated <code>ArcSessionLogEntry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArcSessionLogEntry();

            if (data.hasOwnProperty('request')) {
                obj['request'] = ApiClient.convertToType(data['request'], 'String');
            }
            if (data.hasOwnProperty('response')) {
                obj['response'] = ApiClient.convertToType(data['response'], 'String');
            }
            if (data.hasOwnProperty('attrs')) {
                obj['attrs'] = ApiClient.convertToType(data['attrs'], {'String': Object});
            }
        }
        return obj;
    }


}

/**
 * The raw request data.
 * @member {String} request
 */
ArcSessionLogEntry.prototype['request'] = undefined;

/**
 * The raw response data.
 * @member {String} response
 */
ArcSessionLogEntry.prototype['response'] = undefined;

/**
 * Additional attributes recorded for this request/response pair.
 * @member {Object.<String, Object>} attrs
 */
ArcSessionLogEntry.prototype['attrs'] = undefined;






export default ArcSessionLogEntry;

