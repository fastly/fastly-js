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
 * The HistoricalUsageData model module.
 * @module model/HistoricalUsageData
 * @version 7.10.0
 */
class HistoricalUsageData {
    /**
     * Constructs a new <code>HistoricalUsageData</code>.
     * The results of usage related queries, grouped by service and/or region depending on endpoint, and aggregated over the appropriate time span.
     * @alias module:model/HistoricalUsageData
     */
    constructor() { 
        
        HistoricalUsageData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HistoricalUsageData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoricalUsageData} obj Optional instance to populate.
     * @return {module:model/HistoricalUsageData} The populated <code>HistoricalUsageData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HistoricalUsageData();

            if (data.hasOwnProperty('bandwidth')) {
                obj['bandwidth'] = ApiClient.convertToType(data['bandwidth'], 'Number');
            }
            if (data.hasOwnProperty('requests')) {
                obj['requests'] = ApiClient.convertToType(data['requests'], 'Number');
            }
            if (data.hasOwnProperty('compute_requests')) {
                obj['compute_requests'] = ApiClient.convertToType(data['compute_requests'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} bandwidth
 */
HistoricalUsageData.prototype['bandwidth'] = undefined;

/**
 * @member {Number} requests
 */
HistoricalUsageData.prototype['requests'] = undefined;

/**
 * @member {Number} compute_requests
 */
HistoricalUsageData.prototype['compute_requests'] = undefined;






export default HistoricalUsageData;

