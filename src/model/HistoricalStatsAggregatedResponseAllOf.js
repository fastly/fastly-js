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
import Results from './Results';

/**
 * The HistoricalStatsAggregatedResponseAllOf model module.
 * @module model/HistoricalStatsAggregatedResponseAllOf
 * @version 7.3.0
 */
class HistoricalStatsAggregatedResponseAllOf {
    /**
     * Constructs a new <code>HistoricalStatsAggregatedResponseAllOf</code>.
     * @alias module:model/HistoricalStatsAggregatedResponseAllOf
     */
    constructor() { 
        
        HistoricalStatsAggregatedResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HistoricalStatsAggregatedResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoricalStatsAggregatedResponseAllOf} obj Optional instance to populate.
     * @return {module:model/HistoricalStatsAggregatedResponseAllOf} The populated <code>HistoricalStatsAggregatedResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HistoricalStatsAggregatedResponseAllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Results]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Results>} data
 */
HistoricalStatsAggregatedResponseAllOf.prototype['data'] = undefined;






export default HistoricalStatsAggregatedResponseAllOf;

