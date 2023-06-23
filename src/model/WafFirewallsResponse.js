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
import SchemasWafFirewallVersion from './SchemasWafFirewallVersion';
import WafFirewallResponseData from './WafFirewallResponseData';
import WafFirewallsResponseAllOf from './WafFirewallsResponseAllOf';

/**
 * The WafFirewallsResponse model module.
 * @module model/WafFirewallsResponse
 * @version 4.2.2
 */
class WafFirewallsResponse {
    /**
     * Constructs a new <code>WafFirewallsResponse</code>.
     * @alias module:model/WafFirewallsResponse
     * @implements module:model/Pagination
     * @implements module:model/WafFirewallsResponseAllOf
     */
    constructor() { 
        Pagination.initialize(this);WafFirewallsResponseAllOf.initialize(this);
        WafFirewallsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WafFirewallsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafFirewallsResponse} obj Optional instance to populate.
     * @return {module:model/WafFirewallsResponse} The populated <code>WafFirewallsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WafFirewallsResponse();
            Pagination.constructFromObject(data, obj);
            WafFirewallsResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('links')) {
                obj['links'] = PaginationLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = PaginationMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [WafFirewallResponseData]);
            }
            if (data.hasOwnProperty('included')) {
                obj['included'] = ApiClient.convertToType(data['included'], [SchemasWafFirewallVersion]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PaginationLinks} links
 */
WafFirewallsResponse.prototype['links'] = undefined;

/**
 * @member {module:model/PaginationMeta} meta
 */
WafFirewallsResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/WafFirewallResponseData>} data
 */
WafFirewallsResponse.prototype['data'] = undefined;

/**
 * @member {Array.<module:model/SchemasWafFirewallVersion>} included
 */
WafFirewallsResponse.prototype['included'] = undefined;


// Implement Pagination interface:
/**
 * @member {module:model/PaginationLinks} links
 */
Pagination.prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */
Pagination.prototype['meta'] = undefined;
// Implement WafFirewallsResponseAllOf interface:
/**
 * @member {Array.<module:model/WafFirewallResponseData>} data
 */
WafFirewallsResponseAllOf.prototype['data'] = undefined;
/**
 * @member {Array.<module:model/SchemasWafFirewallVersion>} included
 */
WafFirewallsResponseAllOf.prototype['included'] = undefined;




export default WafFirewallsResponse;

