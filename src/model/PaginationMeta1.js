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
 * The PaginationMeta1 model module.
 * @module model/PaginationMeta1
 * @version 16.1.0
 */
class PaginationMeta1 {
    /**
     * Constructs a new <code>PaginationMeta1</code>.
     * @alias module:model/PaginationMeta1
     */
    constructor() { 
        
        PaginationMeta1.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaginationMeta1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginationMeta1} obj Optional instance to populate.
     * @return {module:model/PaginationMeta1} The populated <code>PaginationMeta1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaginationMeta1();

            if (data.hasOwnProperty('current_page')) {
                obj['current_page'] = ApiClient.convertToType(data['current_page'], 'Number');
            }
            if (data.hasOwnProperty('per_page')) {
                obj['per_page'] = ApiClient.convertToType(data['per_page'], 'Number');
            }
            if (data.hasOwnProperty('record_count')) {
                obj['record_count'] = ApiClient.convertToType(data['record_count'], 'Number');
            }
            if (data.hasOwnProperty('total_pages')) {
                obj['total_pages'] = ApiClient.convertToType(data['total_pages'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Current page.
 * @member {Number} current_page
 */
PaginationMeta1.prototype['current_page'] = undefined;

/**
 * Number of records per page.
 * @member {Number} per_page
 * @default 20
 */
PaginationMeta1.prototype['per_page'] = 20;

/**
 * Total records in result set.
 * @member {Number} record_count
 */
PaginationMeta1.prototype['record_count'] = undefined;

/**
 * Total pages in result set.
 * @member {Number} total_pages
 */
PaginationMeta1.prototype['total_pages'] = undefined;






export default PaginationMeta1;

