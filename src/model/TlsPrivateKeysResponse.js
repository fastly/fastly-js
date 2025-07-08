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
import Pagination from './Pagination';
import PaginationLinks from './PaginationLinks';
import PaginationMeta from './PaginationMeta';
import TlsPrivateKeyResponseData from './TlsPrivateKeyResponseData';
import TlsPrivateKeysResponseAllOf from './TlsPrivateKeysResponseAllOf';

/**
 * The TlsPrivateKeysResponse model module.
 * @module model/TlsPrivateKeysResponse
 * @version 12.1.0
 */
class TlsPrivateKeysResponse {
    /**
     * Constructs a new <code>TlsPrivateKeysResponse</code>.
     * @alias module:model/TlsPrivateKeysResponse
     * @implements module:model/Pagination
     * @implements module:model/TlsPrivateKeysResponseAllOf
     */
    constructor() { 
        Pagination.initialize(this);TlsPrivateKeysResponseAllOf.initialize(this);
        TlsPrivateKeysResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TlsPrivateKeysResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsPrivateKeysResponse} obj Optional instance to populate.
     * @return {module:model/TlsPrivateKeysResponse} The populated <code>TlsPrivateKeysResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TlsPrivateKeysResponse();
            Pagination.constructFromObject(data, obj);
            TlsPrivateKeysResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('links')) {
                obj['links'] = PaginationLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = PaginationMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [TlsPrivateKeyResponseData]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PaginationLinks} links
 */
TlsPrivateKeysResponse.prototype['links'] = undefined;

/**
 * @member {module:model/PaginationMeta} meta
 */
TlsPrivateKeysResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/TlsPrivateKeyResponseData>} data
 */
TlsPrivateKeysResponse.prototype['data'] = undefined;


// Implement Pagination interface:
/**
 * @member {module:model/PaginationLinks} links
 */
Pagination.prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */
Pagination.prototype['meta'] = undefined;
// Implement TlsPrivateKeysResponseAllOf interface:
/**
 * @member {Array.<module:model/TlsPrivateKeyResponseData>} data
 */
TlsPrivateKeysResponseAllOf.prototype['data'] = undefined;




export default TlsPrivateKeysResponse;

