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
 * The DimensionContentType model module.
 * @module model/DimensionContentType
 * @version 9.0.0
 */
class DimensionContentType {
    /**
     * Constructs a new <code>DimensionContentType</code>.
     * @alias module:model/DimensionContentType
     */
    constructor() { 
        
        DimensionContentType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DimensionContentType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DimensionContentType} obj Optional instance to populate.
     * @return {module:model/DimensionContentType} The populated <code>DimensionContentType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DimensionContentType();

            if (data.hasOwnProperty('content_type')) {
                obj['content_type'] = ApiClient.convertToType(data['content_type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The content type of the response for this dimension.
 * @member {String} content_type
 */
DimensionContentType.prototype['content_type'] = undefined;






export default DimensionContentType;

