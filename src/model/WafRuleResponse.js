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
import IncludedWithWafRuleItem from './IncludedWithWafRuleItem';
import WafRuleResponseData from './WafRuleResponseData';

/**
 * The WafRuleResponse model module.
 * @module model/WafRuleResponse
 * @version 7.0.0
 */
class WafRuleResponse {
    /**
     * Constructs a new <code>WafRuleResponse</code>.
     * @alias module:model/WafRuleResponse
     */
    constructor() { 
        
        WafRuleResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WafRuleResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafRuleResponse} obj Optional instance to populate.
     * @return {module:model/WafRuleResponse} The populated <code>WafRuleResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WafRuleResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = WafRuleResponseData.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('included')) {
                obj['included'] = ApiClient.convertToType(data['included'], [IncludedWithWafRuleItem]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/WafRuleResponseData} data
 */
WafRuleResponse.prototype['data'] = undefined;

/**
 * @member {Array.<module:model/IncludedWithWafRuleItem>} included
 */
WafRuleResponse.prototype['included'] = undefined;






export default WafRuleResponse;

