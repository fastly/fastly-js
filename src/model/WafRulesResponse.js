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
import IncludedWithWafRuleItem from './IncludedWithWafRuleItem';
import Pagination from './Pagination';
import PaginationLinks from './PaginationLinks';
import PaginationMeta from './PaginationMeta';
import WafRuleResponseData from './WafRuleResponseData';
import WafRulesResponseAllOf from './WafRulesResponseAllOf';

/**
 * The WafRulesResponse model module.
 * @module model/WafRulesResponse
 * @version 10.0.0
 */
class WafRulesResponse {
    /**
     * Constructs a new <code>WafRulesResponse</code>.
     * @alias module:model/WafRulesResponse
     * @implements module:model/Pagination
     * @implements module:model/WafRulesResponseAllOf
     */
    constructor() { 
        Pagination.initialize(this);WafRulesResponseAllOf.initialize(this);
        WafRulesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WafRulesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafRulesResponse} obj Optional instance to populate.
     * @return {module:model/WafRulesResponse} The populated <code>WafRulesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WafRulesResponse();
            Pagination.constructFromObject(data, obj);
            WafRulesResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('links')) {
                obj['links'] = PaginationLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = PaginationMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [WafRuleResponseData]);
            }
            if (data.hasOwnProperty('included')) {
                obj['included'] = ApiClient.convertToType(data['included'], [IncludedWithWafRuleItem]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PaginationLinks} links
 */
WafRulesResponse.prototype['links'] = undefined;

/**
 * @member {module:model/PaginationMeta} meta
 */
WafRulesResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/WafRuleResponseData>} data
 */
WafRulesResponse.prototype['data'] = undefined;

/**
 * @member {Array.<module:model/IncludedWithWafRuleItem>} included
 */
WafRulesResponse.prototype['included'] = undefined;


// Implement Pagination interface:
/**
 * @member {module:model/PaginationLinks} links
 */
Pagination.prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */
Pagination.prototype['meta'] = undefined;
// Implement WafRulesResponseAllOf interface:
/**
 * @member {Array.<module:model/WafRuleResponseData>} data
 */
WafRulesResponseAllOf.prototype['data'] = undefined;
/**
 * @member {Array.<module:model/IncludedWithWafRuleItem>} included
 */
WafRulesResponseAllOf.prototype['included'] = undefined;




export default WafRulesResponse;

