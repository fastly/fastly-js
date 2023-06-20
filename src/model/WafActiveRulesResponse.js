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
import Pagination from './Pagination';
import PaginationLinks from './PaginationLinks';
import PaginationMeta from './PaginationMeta';
import WafActiveRuleResponseData from './WafActiveRuleResponseData';
import WafActiveRulesResponseAllOf from './WafActiveRulesResponseAllOf';

/**
 * The WafActiveRulesResponse model module.
 * @module model/WafActiveRulesResponse
 * @version 4.2.0
 */
class WafActiveRulesResponse {
    /**
     * Constructs a new <code>WafActiveRulesResponse</code>.
     * @alias module:model/WafActiveRulesResponse
     * @implements module:model/Pagination
     * @implements module:model/WafActiveRulesResponseAllOf
     */
    constructor() { 
        Pagination.initialize(this);WafActiveRulesResponseAllOf.initialize(this);
        WafActiveRulesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WafActiveRulesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafActiveRulesResponse} obj Optional instance to populate.
     * @return {module:model/WafActiveRulesResponse} The populated <code>WafActiveRulesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WafActiveRulesResponse();
            Pagination.constructFromObject(data, obj);
            WafActiveRulesResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('links')) {
                obj['links'] = PaginationLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = PaginationMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [WafActiveRuleResponseData]);
            }
            if (data.hasOwnProperty('included')) {
                obj['included'] = ApiClient.convertToType(data['included'], [IncludedWithWafActiveRuleItem]);
            }
        }
        return obj;
    }


}

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


// Implement Pagination interface:
/**
 * @member {module:model/PaginationLinks} links
 */
Pagination.prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */
Pagination.prototype['meta'] = undefined;
// Implement WafActiveRulesResponseAllOf interface:
/**
 * @member {Array.<module:model/WafActiveRuleResponseData>} data
 */
WafActiveRulesResponseAllOf.prototype['data'] = undefined;
/**
 * @member {Array.<module:model/IncludedWithWafActiveRuleItem>} included
 */
WafActiveRulesResponseAllOf.prototype['included'] = undefined;




export default WafActiveRulesResponse;

