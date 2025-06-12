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
import LogAggregationsFilterFieldItem from './LogAggregationsFilterFieldItem';

/**
 * The LogAggregationsGetResponseMetaFilters model module.
 * @module model/LogAggregationsGetResponseMetaFilters
 * @version 12.0.0
 */
class LogAggregationsGetResponseMetaFilters {
    /**
     * Constructs a new <code>LogAggregationsGetResponseMetaFilters</code>.
     * Echoes the filters that were supplied in the request.
     * @alias module:model/LogAggregationsGetResponseMetaFilters
     */
    constructor() { 
        
        LogAggregationsGetResponseMetaFilters.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LogAggregationsGetResponseMetaFilters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LogAggregationsGetResponseMetaFilters} obj Optional instance to populate.
     * @return {module:model/LogAggregationsGetResponseMetaFilters} The populated <code>LogAggregationsGetResponseMetaFilters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogAggregationsGetResponseMetaFilters();

            if (data.hasOwnProperty('filter_fields')) {
                obj['filter_fields'] = ApiClient.convertToType(data['filter_fields'], [LogAggregationsFilterFieldItem]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/LogAggregationsFilterFieldItem>} filter_fields
 */
LogAggregationsGetResponseMetaFilters.prototype['filter_fields'] = undefined;






export default LogAggregationsGetResponseMetaFilters;

