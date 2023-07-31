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
import TlsBulkCertificateResponseData from './TlsBulkCertificateResponseData';
import TlsBulkCertificatesResponseAllOf from './TlsBulkCertificatesResponseAllOf';

/**
 * The TlsBulkCertificatesResponse model module.
 * @module model/TlsBulkCertificatesResponse
 * @version 6.0.0
 */
class TlsBulkCertificatesResponse {
    /**
     * Constructs a new <code>TlsBulkCertificatesResponse</code>.
     * @alias module:model/TlsBulkCertificatesResponse
     * @implements module:model/Pagination
     * @implements module:model/TlsBulkCertificatesResponseAllOf
     */
    constructor() { 
        Pagination.initialize(this);TlsBulkCertificatesResponseAllOf.initialize(this);
        TlsBulkCertificatesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TlsBulkCertificatesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsBulkCertificatesResponse} obj Optional instance to populate.
     * @return {module:model/TlsBulkCertificatesResponse} The populated <code>TlsBulkCertificatesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TlsBulkCertificatesResponse();
            Pagination.constructFromObject(data, obj);
            TlsBulkCertificatesResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('links')) {
                obj['links'] = PaginationLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = PaginationMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [TlsBulkCertificateResponseData]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PaginationLinks} links
 */
TlsBulkCertificatesResponse.prototype['links'] = undefined;

/**
 * @member {module:model/PaginationMeta} meta
 */
TlsBulkCertificatesResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/TlsBulkCertificateResponseData>} data
 */
TlsBulkCertificatesResponse.prototype['data'] = undefined;


// Implement Pagination interface:
/**
 * @member {module:model/PaginationLinks} links
 */
Pagination.prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */
Pagination.prototype['meta'] = undefined;
// Implement TlsBulkCertificatesResponseAllOf interface:
/**
 * @member {Array.<module:model/TlsBulkCertificateResponseData>} data
 */
TlsBulkCertificatesResponseAllOf.prototype['data'] = undefined;




export default TlsBulkCertificatesResponse;

