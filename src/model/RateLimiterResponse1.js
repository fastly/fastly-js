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
 * The RateLimiterResponse1 model module.
 * @module model/RateLimiterResponse1
 * @version 4.2.1
 */
class RateLimiterResponse1 {
    /**
     * Constructs a new <code>RateLimiterResponse1</code>.
     * Custom response to be sent when the rate limit is exceeded. Required if &#x60;action&#x60; is &#x60;response&#x60;.
     * @alias module:model/RateLimiterResponse1
     */
    constructor() { 
        
        RateLimiterResponse1.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RateLimiterResponse1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RateLimiterResponse1} obj Optional instance to populate.
     * @return {module:model/RateLimiterResponse1} The populated <code>RateLimiterResponse1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RateLimiterResponse1();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
            }
            if (data.hasOwnProperty('content_type')) {
                obj['content_type'] = ApiClient.convertToType(data['content_type'], 'String');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
        }
        return obj;
    }


}

/**
 * HTTP status code for custom limit enforcement response.
 * @member {Number} status
 */
RateLimiterResponse1.prototype['status'] = undefined;

/**
 * MIME type for custom limit enforcement response.
 * @member {String} content_type
 */
RateLimiterResponse1.prototype['content_type'] = undefined;

/**
 * Response body for custom limit enforcement response.
 * @member {String} content
 */
RateLimiterResponse1.prototype['content'] = undefined;






export default RateLimiterResponse1;

