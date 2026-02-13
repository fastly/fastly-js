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

/**
 * The PaginationLinks model module.
 * @module model/PaginationLinks
 * @version 15.0.0-beta.4
 */
class PaginationLinks {
    /**
     * Constructs a new <code>PaginationLinks</code>.
     * @alias module:model/PaginationLinks
     */
    constructor() { 
        
        PaginationLinks.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaginationLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginationLinks} obj Optional instance to populate.
     * @return {module:model/PaginationLinks} The populated <code>PaginationLinks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaginationLinks();

            if (data.hasOwnProperty('first')) {
                obj['first'] = ApiClient.convertToType(data['first'], 'String');
            }
            if (data.hasOwnProperty('last')) {
                obj['last'] = ApiClient.convertToType(data['last'], 'String');
            }
            if (data.hasOwnProperty('prev')) {
                obj['prev'] = ApiClient.convertToType(data['prev'], 'String');
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The first page of data.
 * @member {String} first
 */
PaginationLinks.prototype['first'] = undefined;

/**
 * The last page of data.
 * @member {String} last
 */
PaginationLinks.prototype['last'] = undefined;

/**
 * The previous page of data.
 * @member {String} prev
 */
PaginationLinks.prototype['prev'] = undefined;

/**
 * The next page of data.
 * @member {String} next
 */
PaginationLinks.prototype['next'] = undefined;






export default PaginationLinks;

