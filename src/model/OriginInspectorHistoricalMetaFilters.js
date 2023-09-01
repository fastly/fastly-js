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

/**
 * The OriginInspectorHistoricalMetaFilters model module.
 * @module model/OriginInspectorHistoricalMetaFilters
 * @version 6.1.0
 */
class OriginInspectorHistoricalMetaFilters {
    /**
     * Constructs a new <code>OriginInspectorHistoricalMetaFilters</code>.
     * Filters that were applied when calculating the results for this query.
     * @alias module:model/OriginInspectorHistoricalMetaFilters
     */
    constructor() { 
        
        OriginInspectorHistoricalMetaFilters.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OriginInspectorHistoricalMetaFilters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OriginInspectorHistoricalMetaFilters} obj Optional instance to populate.
     * @return {module:model/OriginInspectorHistoricalMetaFilters} The populated <code>OriginInspectorHistoricalMetaFilters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OriginInspectorHistoricalMetaFilters();

            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('datacenter')) {
                obj['datacenter'] = ApiClient.convertToType(data['datacenter'], 'String');
            }
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} region
 */
OriginInspectorHistoricalMetaFilters.prototype['region'] = undefined;

/**
 * @member {String} datacenter
 */
OriginInspectorHistoricalMetaFilters.prototype['datacenter'] = undefined;

/**
 * @member {String} host
 */
OriginInspectorHistoricalMetaFilters.prototype['host'] = undefined;






export default OriginInspectorHistoricalMetaFilters;

