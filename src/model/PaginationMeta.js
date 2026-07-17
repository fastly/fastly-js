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
 * The PaginationMeta model module.
 * @module model/PaginationMeta
 * @version 16.0.0
 */
class PaginationMeta {
    /**
     * Constructs a new <code>PaginationMeta</code>.
     * Cursor-based pagination metadata.
     * @alias module:model/PaginationMeta
     */
    constructor() { 
        
        PaginationMeta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaginationMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginationMeta} obj Optional instance to populate.
     * @return {module:model/PaginationMeta} The populated <code>PaginationMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaginationMeta();

            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('next_cursor')) {
                obj['next_cursor'] = ApiClient.convertToType(data['next_cursor'], 'String');
            }
            if (data.hasOwnProperty('previous_cursor')) {
                obj['previous_cursor'] = ApiClient.convertToType(data['previous_cursor'], 'String');
            }
            if (data.hasOwnProperty('sort')) {
                obj['sort'] = ApiClient.convertToType(data['sort'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The number of records returned per page.
 * @member {Number} limit
 */
PaginationMeta.prototype['limit'] = undefined;

/**
 * Cursor value used to retrieve the next page of results. Empty if there are no more results.
 * @member {String} next_cursor
 */
PaginationMeta.prototype['next_cursor'] = undefined;

/**
 * Cursor value used to retrieve the previous page of results. Empty if there is no previous page.
 * @member {String} previous_cursor
 */
PaginationMeta.prototype['previous_cursor'] = undefined;

/**
 * The sort order applied to the results.
 * @member {String} sort
 */
PaginationMeta.prototype['sort'] = undefined;






export default PaginationMeta;

