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
 * The ValuesStatusCodes model module.
 * @module model/ValuesStatusCodes
 * @version 15.0.0-beta.3
 */
class ValuesStatusCodes {
    /**
     * Constructs a new <code>ValuesStatusCodes</code>.
     * @alias module:model/ValuesStatusCodes
     */
    constructor() { 
        
        ValuesStatusCodes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ValuesStatusCodes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValuesStatusCodes} obj Optional instance to populate.
     * @return {module:model/ValuesStatusCodes} The populated <code>ValuesStatusCodes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValuesStatusCodes();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('rate_per_status')) {
                obj['rate_per_status'] = ApiClient.convertToType(data['rate_per_status'], 'Number');
            }
            if (data.hasOwnProperty('rate_per_url')) {
                obj['rate_per_url'] = ApiClient.convertToType(data['rate_per_url'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The HTTP request path.
 * @member {String} url
 */
ValuesStatusCodes.prototype['url'] = undefined;

/**
 * The URL accounts for this percentage of the status code in this dimension.
 * @member {Number} rate_per_status
 */
ValuesStatusCodes.prototype['rate_per_status'] = undefined;

/**
 * The rate at which the status code in this dimension occurs for this URL.
 * @member {Number} rate_per_url
 */
ValuesStatusCodes.prototype['rate_per_url'] = undefined;






export default ValuesStatusCodes;

