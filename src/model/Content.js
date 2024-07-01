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
 * The Content model module.
 * @module model/Content
 * @version 7.5.0
 */
class Content {
    /**
     * Constructs a new <code>Content</code>.
     * @alias module:model/Content
     */
    constructor() { 
        
        Content.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Content</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Content} obj Optional instance to populate.
     * @return {module:model/Content} The populated <code>Content</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Content();

            if (data.hasOwnProperty('hash')) {
                obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
            }
            if (data.hasOwnProperty('request')) {
                obj['request'] = ApiClient.convertToType(data['request'], {'String': Object});
            }
            if (data.hasOwnProperty('response')) {
                obj['response'] = ApiClient.convertToType(data['response'], {'String': Object});
            }
            if (data.hasOwnProperty('response_time')) {
                obj['response_time'] = ApiClient.convertToType(data['response_time'], 'Number');
            }
            if (data.hasOwnProperty('server')) {
                obj['server'] = ApiClient.convertToType(data['server'], 'String');
            }
            if (data.hasOwnProperty('pop')) {
                obj['pop'] = ApiClient.convertToType(data['pop'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} hash
 */
Content.prototype['hash'] = undefined;

/**
 * @member {Object.<String, Object>} request
 */
Content.prototype['request'] = undefined;

/**
 * @member {Object.<String, Object>} response
 */
Content.prototype['response'] = undefined;

/**
 * @member {Number} response_time
 */
Content.prototype['response_time'] = undefined;

/**
 * @member {String} server
 */
Content.prototype['server'] = undefined;

/**
 * @member {String} pop
 */
Content.prototype['pop'] = undefined;






export default Content;

