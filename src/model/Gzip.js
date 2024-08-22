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
 * The Gzip model module.
 * @module model/Gzip
 * @version 7.8.0
 */
class Gzip {
    /**
     * Constructs a new <code>Gzip</code>.
     * @alias module:model/Gzip
     */
    constructor() { 
        
        Gzip.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Gzip</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Gzip} obj Optional instance to populate.
     * @return {module:model/Gzip} The populated <code>Gzip</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Gzip();

            if (data.hasOwnProperty('cache_condition')) {
                obj['cache_condition'] = ApiClient.convertToType(data['cache_condition'], 'String');
            }
            if (data.hasOwnProperty('content_types')) {
                obj['content_types'] = ApiClient.convertToType(data['content_types'], 'String');
            }
            if (data.hasOwnProperty('extensions')) {
                obj['extensions'] = ApiClient.convertToType(data['extensions'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Name of the cache condition controlling when this configuration applies.
 * @member {String} cache_condition
 */
Gzip.prototype['cache_condition'] = undefined;

/**
 * Space-separated list of content types to compress. If you omit this field a default list will be used.
 * @member {String} content_types
 */
Gzip.prototype['content_types'] = undefined;

/**
 * Space-separated list of file extensions to compress. If you omit this field a default list will be used.
 * @member {String} extensions
 */
Gzip.prototype['extensions'] = undefined;

/**
 * Name of the gzip configuration.
 * @member {String} name
 */
Gzip.prototype['name'] = undefined;






export default Gzip;

