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
import InlineResponse2004Meta from './InlineResponse2004Meta';

/**
 * The InlineResponse2004 model module.
 * @module model/InlineResponse2004
 * @version 6.0.0
 */
class InlineResponse2004 {
    /**
     * Constructs a new <code>InlineResponse2004</code>.
     * @alias module:model/InlineResponse2004
     */
    constructor() { 
        
        InlineResponse2004.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2004</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004} The populated <code>InlineResponse2004</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], ['String']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = InlineResponse2004Meta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} data
 */
InlineResponse2004.prototype['data'] = undefined;

/**
 * @member {module:model/InlineResponse2004Meta} meta
 */
InlineResponse2004.prototype['meta'] = undefined;






export default InlineResponse2004;

