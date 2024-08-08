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
import TlsCertificateResponseData from './TlsCertificateResponseData';
import TlsCertificatesResponseAllOf from './TlsCertificatesResponseAllOf';

/**
 * The TlsCertificatesResponse model module.
 * @module model/TlsCertificatesResponse
 * @version 7.7.0
 */
class TlsCertificatesResponse {
    /**
     * Constructs a new <code>TlsCertificatesResponse</code>.
     * @alias module:model/TlsCertificatesResponse
     * @implements module:model/Pagination
     * @implements module:model/TlsCertificatesResponseAllOf
     */
    constructor() { 
        Pagination.initialize(this);TlsCertificatesResponseAllOf.initialize(this);
        TlsCertificatesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TlsCertificatesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsCertificatesResponse} obj Optional instance to populate.
     * @return {module:model/TlsCertificatesResponse} The populated <code>TlsCertificatesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TlsCertificatesResponse();
            Pagination.constructFromObject(data, obj);
            TlsCertificatesResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('links')) {
                obj['links'] = PaginationLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = PaginationMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [TlsCertificateResponseData]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PaginationLinks} links
 */
TlsCertificatesResponse.prototype['links'] = undefined;

/**
 * @member {module:model/PaginationMeta} meta
 */
TlsCertificatesResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/TlsCertificateResponseData>} data
 */
TlsCertificatesResponse.prototype['data'] = undefined;


// Implement Pagination interface:
/**
 * @member {module:model/PaginationLinks} links
 */
Pagination.prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */
Pagination.prototype['meta'] = undefined;
// Implement TlsCertificatesResponseAllOf interface:
/**
 * @member {Array.<module:model/TlsCertificateResponseData>} data
 */
TlsCertificatesResponseAllOf.prototype['data'] = undefined;




export default TlsCertificatesResponse;

