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
import IncludedWithWafExclusionItem from './IncludedWithWafExclusionItem';
import Pagination from './Pagination';
import PaginationLinks from './PaginationLinks';
import PaginationMeta from './PaginationMeta';
import WafExclusionResponseData from './WafExclusionResponseData';
import WafExclusionsResponseAllOf from './WafExclusionsResponseAllOf';

/**
 * The WafExclusionsResponse model module.
 * @module model/WafExclusionsResponse
 * @version 6.2.2
 */
class WafExclusionsResponse {
    /**
     * Constructs a new <code>WafExclusionsResponse</code>.
     * @alias module:model/WafExclusionsResponse
     * @implements module:model/Pagination
     * @implements module:model/WafExclusionsResponseAllOf
     */
    constructor() { 
        Pagination.initialize(this);WafExclusionsResponseAllOf.initialize(this);
        WafExclusionsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WafExclusionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafExclusionsResponse} obj Optional instance to populate.
     * @return {module:model/WafExclusionsResponse} The populated <code>WafExclusionsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WafExclusionsResponse();
            Pagination.constructFromObject(data, obj);
            WafExclusionsResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('links')) {
                obj['links'] = PaginationLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = PaginationMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [WafExclusionResponseData]);
            }
            if (data.hasOwnProperty('included')) {
                obj['included'] = ApiClient.convertToType(data['included'], [IncludedWithWafExclusionItem]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PaginationLinks} links
 */
WafExclusionsResponse.prototype['links'] = undefined;

/**
 * @member {module:model/PaginationMeta} meta
 */
WafExclusionsResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/WafExclusionResponseData>} data
 */
WafExclusionsResponse.prototype['data'] = undefined;

/**
 * @member {Array.<module:model/IncludedWithWafExclusionItem>} included
 */
WafExclusionsResponse.prototype['included'] = undefined;


// Implement Pagination interface:
/**
 * @member {module:model/PaginationLinks} links
 */
Pagination.prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */
Pagination.prototype['meta'] = undefined;
// Implement WafExclusionsResponseAllOf interface:
/**
 * @member {Array.<module:model/WafExclusionResponseData>} data
 */
WafExclusionsResponseAllOf.prototype['data'] = undefined;
/**
 * @member {Array.<module:model/IncludedWithWafExclusionItem>} included
 */
WafExclusionsResponseAllOf.prototype['included'] = undefined;




export default WafExclusionsResponse;

