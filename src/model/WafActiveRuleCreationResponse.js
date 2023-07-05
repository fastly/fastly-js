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
import IncludedWithWafActiveRuleItem from './IncludedWithWafActiveRuleItem';
import PaginationLinks from './PaginationLinks';
import PaginationMeta from './PaginationMeta';
import WafActiveRuleResponse from './WafActiveRuleResponse';
import WafActiveRuleResponseData from './WafActiveRuleResponseData';
import WafActiveRulesResponse from './WafActiveRulesResponse';

/**
 * The WafActiveRuleCreationResponse model module.
 * @module model/WafActiveRuleCreationResponse
 * @version 4.4.0
 */
class WafActiveRuleCreationResponse {
    /**
     * Constructs a new <code>WafActiveRuleCreationResponse</code>.
     * @alias module:model/WafActiveRuleCreationResponse
     * @implements module:model/WafActiveRuleResponse
     * @implements module:model/WafActiveRulesResponse
     */
    constructor() { 
        WafActiveRuleResponse.initialize(this);WafActiveRulesResponse.initialize(this);
        WafActiveRuleCreationResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WafActiveRuleCreationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafActiveRuleCreationResponse} obj Optional instance to populate.
     * @return {module:model/WafActiveRuleCreationResponse} The populated <code>WafActiveRuleCreationResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WafActiveRuleCreationResponse();
            WafActiveRuleResponse.constructFromObject(data, obj);
            WafActiveRulesResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [WafActiveRuleResponseData]);
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = PaginationLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = PaginationMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('included')) {
                obj['included'] = ApiClient.convertToType(data['included'], [IncludedWithWafActiveRuleItem]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/WafActiveRuleResponseData>} data
 */
WafActiveRuleCreationResponse.prototype['data'] = undefined;

/**
 * @member {module:model/PaginationLinks} links
 */
WafActiveRuleCreationResponse.prototype['links'] = undefined;

/**
 * @member {module:model/PaginationMeta} meta
 */
WafActiveRuleCreationResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/IncludedWithWafActiveRuleItem>} included
 */
WafActiveRuleCreationResponse.prototype['included'] = undefined;


// Implement WafActiveRuleResponse interface:
/**
 * @member {module:model/WafActiveRuleResponseData} data
 */
WafActiveRuleResponse.prototype['data'] = undefined;
// Implement WafActiveRulesResponse interface:
/**
 * @member {module:model/PaginationLinks} links
 */
WafActiveRulesResponse.prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */
WafActiveRulesResponse.prototype['meta'] = undefined;
/**
 * @member {Array.<module:model/WafActiveRuleResponseData>} data
 */
WafActiveRulesResponse.prototype['data'] = undefined;
/**
 * @member {Array.<module:model/IncludedWithWafActiveRuleItem>} included
 */
WafActiveRulesResponse.prototype['included'] = undefined;




export default WafActiveRuleCreationResponse;

