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
import DdosProtectionRuleWithStats from './DdosProtectionRuleWithStats';
import PaginationCursorMeta from './PaginationCursorMeta';

/**
 * The InlineResponse2006 model module.
 * @module model/InlineResponse2006
 * @version 15.0.0-beta.0
 */
class InlineResponse2006 {
    /**
     * Constructs a new <code>InlineResponse2006</code>.
     * @alias module:model/InlineResponse2006
     * @param data {Array.<module:model/DdosProtectionRuleWithStats>} 
     * @param meta {module:model/PaginationCursorMeta} 
     */
    constructor(data, meta) { 
        
        InlineResponse2006.initialize(this, data, meta);
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
     * Constructs a <code>InlineResponse2006</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2006} obj Optional instance to populate.
     * @return {module:model/InlineResponse2006} The populated <code>InlineResponse2006</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2006();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [DdosProtectionRuleWithStats]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = PaginationCursorMeta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/DdosProtectionRuleWithStats>} data
 */
InlineResponse2006.prototype['data'] = undefined;

/**
 * @member {module:model/PaginationCursorMeta} meta
 */
InlineResponse2006.prototype['meta'] = undefined;






export default InlineResponse2006;

