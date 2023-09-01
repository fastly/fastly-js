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
import InlineResponse2003Meta from './InlineResponse2003Meta';
import StoreResponse from './StoreResponse';

/**
 * The InlineResponse2003 model module.
 * @module model/InlineResponse2003
 * @version 6.1.0
 */
class InlineResponse2003 {
    /**
     * Constructs a new <code>InlineResponse2003</code>.
     * @alias module:model/InlineResponse2003
     */
    constructor() { 
        
        InlineResponse2003.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2003</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2003} obj Optional instance to populate.
     * @return {module:model/InlineResponse2003} The populated <code>InlineResponse2003</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2003();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [StoreResponse]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = InlineResponse2003Meta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/StoreResponse>} data
 */
InlineResponse2003.prototype['data'] = undefined;

/**
 * @member {module:model/InlineResponse2003Meta} meta
 */
InlineResponse2003.prototype['meta'] = undefined;






export default InlineResponse2003;

