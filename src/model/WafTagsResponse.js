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
import WafTagsResponseAllOf from './WafTagsResponseAllOf';
import WafTagsResponseDataItem from './WafTagsResponseDataItem';

/**
 * The WafTagsResponse model module.
 * @module model/WafTagsResponse
 * @version 7.0.1
 */
class WafTagsResponse {
    /**
     * Constructs a new <code>WafTagsResponse</code>.
     * @alias module:model/WafTagsResponse
     * @implements module:model/Pagination
     * @implements module:model/WafTagsResponseAllOf
     */
    constructor() { 
        Pagination.initialize(this);WafTagsResponseAllOf.initialize(this);
        WafTagsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WafTagsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafTagsResponse} obj Optional instance to populate.
     * @return {module:model/WafTagsResponse} The populated <code>WafTagsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WafTagsResponse();
            Pagination.constructFromObject(data, obj);
            WafTagsResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('links')) {
                obj['links'] = PaginationLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = PaginationMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [WafTagsResponseDataItem]);
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
WafTagsResponse.prototype['links'] = undefined;

/**
 * @member {module:model/PaginationMeta} meta
 */
WafTagsResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/WafTagsResponseDataItem>} data
 */
WafTagsResponse.prototype['data'] = undefined;

/**
 * @member {Array.<module:model/WafRule>} included
 */
WafTagsResponse.prototype['included'] = undefined;


// Implement Pagination interface:
/**
 * @member {module:model/PaginationLinks} links
 */
Pagination.prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */
Pagination.prototype['meta'] = undefined;
// Implement WafTagsResponseAllOf interface:
/**
 * @member {Array.<module:model/WafTagsResponseDataItem>} data
 */
WafTagsResponseAllOf.prototype['data'] = undefined;
/**
 * @member {Array.<module:model/WafRule>} included
 */
WafTagsResponseAllOf.prototype['included'] = undefined;




export default WafTagsResponse;

