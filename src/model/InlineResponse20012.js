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
import PaginationCursorMeta from './PaginationCursorMeta';
import SecretStoreResponse from './SecretStoreResponse';

/**
 * The InlineResponse20012 model module.
 * @module model/InlineResponse20012
 * @version 15.0.0-beta.3
 */
class InlineResponse20012 {
    /**
     * Constructs a new <code>InlineResponse20012</code>.
     * @alias module:model/InlineResponse20012
     */
    constructor() { 
        
        InlineResponse20012.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20012</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20012} obj Optional instance to populate.
     * @return {module:model/InlineResponse20012} The populated <code>InlineResponse20012</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20012();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [SecretStoreResponse]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = PaginationCursorMeta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/SecretStoreResponse>} data
 */
InlineResponse20012.prototype['data'] = undefined;

/**
 * @member {module:model/PaginationCursorMeta} meta
 */
InlineResponse20012.prototype['meta'] = undefined;






export default InlineResponse20012;

