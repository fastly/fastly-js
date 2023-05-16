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
import MutualAuthenticationResponseData from './MutualAuthenticationResponseData';
import MutualAuthenticationsResponseAllOf from './MutualAuthenticationsResponseAllOf';
import Pagination from './Pagination';
import PaginationLinks from './PaginationLinks';
import PaginationMeta from './PaginationMeta';

/**
 * The MutualAuthenticationsResponse model module.
 * @module model/MutualAuthenticationsResponse
 * @version 4.0.0
 */
class MutualAuthenticationsResponse {
    /**
     * Constructs a new <code>MutualAuthenticationsResponse</code>.
     * @alias module:model/MutualAuthenticationsResponse
     * @implements module:model/Pagination
     * @implements module:model/MutualAuthenticationsResponseAllOf
     */
    constructor() { 
        Pagination.initialize(this);MutualAuthenticationsResponseAllOf.initialize(this);
        MutualAuthenticationsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MutualAuthenticationsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MutualAuthenticationsResponse} obj Optional instance to populate.
     * @return {module:model/MutualAuthenticationsResponse} The populated <code>MutualAuthenticationsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MutualAuthenticationsResponse();
            Pagination.constructFromObject(data, obj);
            MutualAuthenticationsResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('links')) {
                obj['links'] = PaginationLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = PaginationMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [MutualAuthenticationResponseData]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PaginationLinks} links
 */
MutualAuthenticationsResponse.prototype['links'] = undefined;

/**
 * @member {module:model/PaginationMeta} meta
 */
MutualAuthenticationsResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/MutualAuthenticationResponseData>} data
 */
MutualAuthenticationsResponse.prototype['data'] = undefined;


// Implement Pagination interface:
/**
 * @member {module:model/PaginationLinks} links
 */
Pagination.prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */
Pagination.prototype['meta'] = undefined;
// Implement MutualAuthenticationsResponseAllOf interface:
/**
 * @member {Array.<module:model/MutualAuthenticationResponseData>} data
 */
MutualAuthenticationsResponseAllOf.prototype['data'] = undefined;




export default MutualAuthenticationsResponse;

