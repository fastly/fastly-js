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
import HistoricalUsageData from './HistoricalUsageData';
import HistoricalUsageService from './HistoricalUsageService';

/**
 * The HistoricalUsageMonthResponseData model module.
 * @module model/HistoricalUsageMonthResponseData
 * @version 12.1.0
 */
class HistoricalUsageMonthResponseData {
    /**
     * Constructs a new <code>HistoricalUsageMonthResponseData</code>.
     * @alias module:model/HistoricalUsageMonthResponseData
     */
    constructor() { 
        
        HistoricalUsageMonthResponseData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HistoricalUsageMonthResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoricalUsageMonthResponseData} obj Optional instance to populate.
     * @return {module:model/HistoricalUsageMonthResponseData} The populated <code>HistoricalUsageMonthResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HistoricalUsageMonthResponseData();

            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
            }
            if (data.hasOwnProperty('services')) {
                obj['services'] = ApiClient.convertToType(data['services'], {'String': HistoricalUsageService});
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], {'String': HistoricalUsageData});
            }
        }
        return obj;
    }


}

/**
 * @member {String} customer_id
 */
HistoricalUsageMonthResponseData.prototype['customer_id'] = undefined;

/**
 * Organized by *service id*.
 * @member {Object.<String, module:model/HistoricalUsageService>} services
 */
HistoricalUsageMonthResponseData.prototype['services'] = undefined;

/**
 * Organized by *region*.
 * @member {Object.<String, module:model/HistoricalUsageData>} total
 */
HistoricalUsageMonthResponseData.prototype['total'] = undefined;






export default HistoricalUsageMonthResponseData;

