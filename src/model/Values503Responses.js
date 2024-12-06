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
 * The Values503Responses model module.
 * @module model/Values503Responses
 * @version 8.0.0
 */
class Values503Responses {
    /**
     * Constructs a new <code>Values503Responses</code>.
     * @alias module:model/Values503Responses
     */
    constructor() { 
        
        Values503Responses.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Values503Responses</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Values503Responses} obj Optional instance to populate.
     * @return {module:model/Values503Responses} The populated <code>Values503Responses</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Values503Responses();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('rate_per_url')) {
                obj['rate_per_url'] = ApiClient.convertToType(data['rate_per_url'], 'Number');
            }
            if (data.hasOwnProperty('503_rate_per_url')) {
                obj['503_rate_per_url'] = ApiClient.convertToType(data['503_rate_per_url'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The HTTP request path.
 * @member {String} url
 */
Values503Responses.prototype['url'] = undefined;

/**
 * The rate at which the reason in this dimension occurs among responses to this URL with a 503 status code.
 * @member {Number} rate_per_url
 */
Values503Responses.prototype['rate_per_url'] = undefined;

/**
 * The rate at which 503 status codes are returned for this URL.
 * @member {Number} 503_rate_per_url
 */
Values503Responses.prototype['503_rate_per_url'] = undefined;






export default Values503Responses;

