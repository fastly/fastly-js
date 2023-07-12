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
import Pagination from './Pagination';
import PaginationLinks from './PaginationLinks';
import PaginationMeta from './PaginationMeta';
import WafRule from './WafRule';
import WafRuleRevisionResponseData from './WafRuleRevisionResponseData';
import WafRuleRevisionsResponseAllOf from './WafRuleRevisionsResponseAllOf';

/**
 * The WafRuleRevisionsResponse model module.
 * @module model/WafRuleRevisionsResponse
 * @version 5.0.1
 */
class WafRuleRevisionsResponse {
    /**
     * Constructs a new <code>WafRuleRevisionsResponse</code>.
     * @alias module:model/WafRuleRevisionsResponse
     * @implements module:model/Pagination
     * @implements module:model/WafRuleRevisionsResponseAllOf
     */
    constructor() { 
        Pagination.initialize(this);WafRuleRevisionsResponseAllOf.initialize(this);
        WafRuleRevisionsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WafRuleRevisionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafRuleRevisionsResponse} obj Optional instance to populate.
     * @return {module:model/WafRuleRevisionsResponse} The populated <code>WafRuleRevisionsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WafRuleRevisionsResponse();
            Pagination.constructFromObject(data, obj);
            WafRuleRevisionsResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('links')) {
                obj['links'] = PaginationLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = PaginationMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [WafRuleRevisionResponseData]);
            }
            if (data.hasOwnProperty('included')) {
                obj['included'] = ApiClient.convertToType(data['included'], [WafRule]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PaginationLinks} links
 */
WafRuleRevisionsResponse.prototype['links'] = undefined;

/**
 * @member {module:model/PaginationMeta} meta
 */
WafRuleRevisionsResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/WafRuleRevisionResponseData>} data
 */
WafRuleRevisionsResponse.prototype['data'] = undefined;

/**
 * @member {Array.<module:model/WafRule>} included
 */
WafRuleRevisionsResponse.prototype['included'] = undefined;


// Implement Pagination interface:
/**
 * @member {module:model/PaginationLinks} links
 */
Pagination.prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */
Pagination.prototype['meta'] = undefined;
// Implement WafRuleRevisionsResponseAllOf interface:
/**
 * @member {Array.<module:model/WafRuleRevisionResponseData>} data
 */
WafRuleRevisionsResponseAllOf.prototype['data'] = undefined;
/**
 * @member {Array.<module:model/WafRule>} included
 */
WafRuleRevisionsResponseAllOf.prototype['included'] = undefined;




export default WafRuleRevisionsResponse;

