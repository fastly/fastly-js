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
 * The ValuesCountryStats model module.
 * @module model/ValuesCountryStats
 * @version 12.1.0
 */
class ValuesCountryStats {
    /**
     * Constructs a new <code>ValuesCountryStats</code>.
     * @alias module:model/ValuesCountryStats
     */
    constructor() { 
        
        ValuesCountryStats.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ValuesCountryStats</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValuesCountryStats} obj Optional instance to populate.
     * @return {module:model/ValuesCountryStats} The populated <code>ValuesCountryStats</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValuesCountryStats();

            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('region_chr')) {
                obj['region_chr'] = ApiClient.convertToType(data['region_chr'], 'Number');
            }
            if (data.hasOwnProperty('region_error_rate')) {
                obj['region_error_rate'] = ApiClient.convertToType(data['region_error_rate'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The client's country subdivision code as defined by ISO 3166-2.
 * @member {String} region
 */
ValuesCountryStats.prototype['region'] = undefined;

/**
 * The cache hit ratio for the region.
 * @member {Number} region_chr
 */
ValuesCountryStats.prototype['region_chr'] = undefined;

/**
 * The error rate for the region.
 * @member {Number} region_error_rate
 */
ValuesCountryStats.prototype['region_error_rate'] = undefined;






export default ValuesCountryStats;

