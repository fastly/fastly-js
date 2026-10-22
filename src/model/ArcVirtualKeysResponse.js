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
import ArcVirtualKeyListItemResponse from './ArcVirtualKeyListItemResponse';
import ArcVirtualKeysMeta from './ArcVirtualKeysMeta';

/**
 * The ArcVirtualKeysResponse model module.
 * @module model/ArcVirtualKeysResponse
 * @version 17.0.0
 */
class ArcVirtualKeysResponse {
    /**
     * Constructs a new <code>ArcVirtualKeysResponse</code>.
     * @alias module:model/ArcVirtualKeysResponse
     * @param data {Array.<module:model/ArcVirtualKeyListItemResponse>} The virtual keys returned by the request.
     * @param meta {module:model/ArcVirtualKeysMeta} 
     */
    constructor(data, meta) { 
        
        ArcVirtualKeysResponse.initialize(this, data, meta);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, data, meta) { 
        obj['data'] = data;
        obj['meta'] = meta;
    }

    /**
     * Constructs a <code>ArcVirtualKeysResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArcVirtualKeysResponse} obj Optional instance to populate.
     * @return {module:model/ArcVirtualKeysResponse} The populated <code>ArcVirtualKeysResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArcVirtualKeysResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ArcVirtualKeyListItemResponse]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ArcVirtualKeysMeta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * The virtual keys returned by the request.
 * @member {Array.<module:model/ArcVirtualKeyListItemResponse>} data
 */
ArcVirtualKeysResponse.prototype['data'] = undefined;

/**
 * @member {module:model/ArcVirtualKeysMeta} meta
 */
ArcVirtualKeysResponse.prototype['meta'] = undefined;






export default ArcVirtualKeysResponse;

