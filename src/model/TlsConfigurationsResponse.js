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
import TlsConfigurationResponseData from './TlsConfigurationResponseData';
import TlsConfigurationsResponseAllOf from './TlsConfigurationsResponseAllOf';

/**
 * The TlsConfigurationsResponse model module.
 * @module model/TlsConfigurationsResponse
 * @version 4.3.0
 */
class TlsConfigurationsResponse {
    /**
     * Constructs a new <code>TlsConfigurationsResponse</code>.
     * @alias module:model/TlsConfigurationsResponse
     * @implements module:model/Pagination
     * @implements module:model/TlsConfigurationsResponseAllOf
     */
    constructor() { 
        Pagination.initialize(this);TlsConfigurationsResponseAllOf.initialize(this);
        TlsConfigurationsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TlsConfigurationsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsConfigurationsResponse} obj Optional instance to populate.
     * @return {module:model/TlsConfigurationsResponse} The populated <code>TlsConfigurationsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TlsConfigurationsResponse();
            Pagination.constructFromObject(data, obj);
            TlsConfigurationsResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('links')) {
                obj['links'] = PaginationLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = PaginationMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [TlsConfigurationResponseData]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PaginationLinks} links
 */
TlsConfigurationsResponse.prototype['links'] = undefined;

/**
 * @member {module:model/PaginationMeta} meta
 */
TlsConfigurationsResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/TlsConfigurationResponseData>} data
 */
TlsConfigurationsResponse.prototype['data'] = undefined;


// Implement Pagination interface:
/**
 * @member {module:model/PaginationLinks} links
 */
Pagination.prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */
Pagination.prototype['meta'] = undefined;
// Implement TlsConfigurationsResponseAllOf interface:
/**
 * @member {Array.<module:model/TlsConfigurationResponseData>} data
 */
TlsConfigurationsResponseAllOf.prototype['data'] = undefined;




export default TlsConfigurationsResponse;

