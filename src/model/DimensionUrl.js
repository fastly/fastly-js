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
 * The DimensionUrl model module.
 * @module model/DimensionUrl
 * @version 12.1.0
 */
class DimensionUrl {
    /**
     * Constructs a new <code>DimensionUrl</code>.
     * @alias module:model/DimensionUrl
     */
    constructor() { 
        
        DimensionUrl.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DimensionUrl</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DimensionUrl} obj Optional instance to populate.
     * @return {module:model/DimensionUrl} The populated <code>DimensionUrl</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DimensionUrl();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The URL path for this dimension.
 * @member {String} url
 */
DimensionUrl.prototype['url'] = undefined;






export default DimensionUrl;

