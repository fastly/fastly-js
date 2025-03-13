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
import ServiceAuthorizationResponseData from './ServiceAuthorizationResponseData';
import ServiceAuthorizationsResponseAllOf from './ServiceAuthorizationsResponseAllOf';

/**
 * The ServiceAuthorizationsResponse model module.
 * @module model/ServiceAuthorizationsResponse
 * @version 10.0.0
 */
class ServiceAuthorizationsResponse {
    /**
     * Constructs a new <code>ServiceAuthorizationsResponse</code>.
     * @alias module:model/ServiceAuthorizationsResponse
     * @implements module:model/Pagination
     * @implements module:model/ServiceAuthorizationsResponseAllOf
     */
    constructor() { 
        Pagination.initialize(this);ServiceAuthorizationsResponseAllOf.initialize(this);
        ServiceAuthorizationsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceAuthorizationsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceAuthorizationsResponse} obj Optional instance to populate.
     * @return {module:model/ServiceAuthorizationsResponse} The populated <code>ServiceAuthorizationsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceAuthorizationsResponse();
            Pagination.constructFromObject(data, obj);
            ServiceAuthorizationsResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('links')) {
                obj['links'] = PaginationLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = PaginationMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ServiceAuthorizationResponseData]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PaginationLinks} links
 */
ServiceAuthorizationsResponse.prototype['links'] = undefined;

/**
 * @member {module:model/PaginationMeta} meta
 */
ServiceAuthorizationsResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/ServiceAuthorizationResponseData>} data
 */
ServiceAuthorizationsResponse.prototype['data'] = undefined;


// Implement Pagination interface:
/**
 * @member {module:model/PaginationLinks} links
 */
Pagination.prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */
Pagination.prototype['meta'] = undefined;
// Implement ServiceAuthorizationsResponseAllOf interface:
/**
 * @member {Array.<module:model/ServiceAuthorizationResponseData>} data
 */
ServiceAuthorizationsResponseAllOf.prototype['data'] = undefined;




export default ServiceAuthorizationsResponse;

