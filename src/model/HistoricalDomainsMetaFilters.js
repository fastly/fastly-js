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
 * The HistoricalDomainsMetaFilters model module.
 * @module model/HistoricalDomainsMetaFilters
 * @version 7.2.0
 */
class HistoricalDomainsMetaFilters {
    /**
     * Constructs a new <code>HistoricalDomainsMetaFilters</code>.
     * Filters that were applied when calculating the results for this query.
     * @alias module:model/HistoricalDomainsMetaFilters
     */
    constructor() { 
        
        HistoricalDomainsMetaFilters.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HistoricalDomainsMetaFilters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoricalDomainsMetaFilters} obj Optional instance to populate.
     * @return {module:model/HistoricalDomainsMetaFilters} The populated <code>HistoricalDomainsMetaFilters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HistoricalDomainsMetaFilters();

            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('datacenter')) {
                obj['datacenter'] = ApiClient.convertToType(data['datacenter'], 'String');
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} region
 */
HistoricalDomainsMetaFilters.prototype['region'] = undefined;

/**
 * @member {String} datacenter
 */
HistoricalDomainsMetaFilters.prototype['datacenter'] = undefined;

/**
 * @member {String} domain
 */
HistoricalDomainsMetaFilters.prototype['domain'] = undefined;






export default HistoricalDomainsMetaFilters;

