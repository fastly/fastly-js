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
import WafActiveRuleData from './WafActiveRuleData';

/**
 * The WafActiveRule model module.
 * @module model/WafActiveRule
 * @version 5.0.0
 */
class WafActiveRule {
    /**
     * Constructs a new <code>WafActiveRule</code>.
     * @alias module:model/WafActiveRule
     */
    constructor() { 
        
        WafActiveRule.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WafActiveRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafActiveRule} obj Optional instance to populate.
     * @return {module:model/WafActiveRule} The populated <code>WafActiveRule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WafActiveRule();

            if (data.hasOwnProperty('data')) {
                obj['data'] = WafActiveRuleData.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/WafActiveRuleData} data
 */
WafActiveRule.prototype['data'] = undefined;






export default WafActiveRule;

