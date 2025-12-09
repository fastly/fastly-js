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
import DimensionAttributesCountryStats from './DimensionAttributesCountryStats';
import DimensionAttributesRate from './DimensionAttributesRate';

/**
 * The LogInsightsDimensionAttributes model module.
 * @module model/LogInsightsDimensionAttributes
 * @version 14.1.0
 */
class LogInsightsDimensionAttributes {
    /**
     * Constructs a new <code>LogInsightsDimensionAttributes</code>.
     * @alias module:model/LogInsightsDimensionAttributes
     * @implements module:model/DimensionAttributesRate
     * @implements module:model/DimensionAttributesCountryStats
     */
    constructor() { 
        DimensionAttributesRate.initialize(this);DimensionAttributesCountryStats.initialize(this);
        LogInsightsDimensionAttributes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LogInsightsDimensionAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LogInsightsDimensionAttributes} obj Optional instance to populate.
     * @return {module:model/LogInsightsDimensionAttributes} The populated <code>LogInsightsDimensionAttributes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogInsightsDimensionAttributes();
            DimensionAttributesRate.constructFromObject(data, obj);
            DimensionAttributesCountryStats.constructFromObject(data, obj);

            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], 'Number');
            }
            if (data.hasOwnProperty('country_chr')) {
                obj['country_chr'] = ApiClient.convertToType(data['country_chr'], 'Number');
            }
            if (data.hasOwnProperty('country_error_rate')) {
                obj['country_error_rate'] = ApiClient.convertToType(data['country_error_rate'], 'Number');
            }
            if (data.hasOwnProperty('country_request_rate')) {
                obj['country_request_rate'] = ApiClient.convertToType(data['country_request_rate'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The rate at which the value in the current dimension occurs.
 * @member {Number} rate
 */
LogInsightsDimensionAttributes.prototype['rate'] = undefined;

/**
 * The cache hit ratio for the country.
 * @member {Number} country_chr
 */
LogInsightsDimensionAttributes.prototype['country_chr'] = undefined;

/**
 * The error rate for the country.
 * @member {Number} country_error_rate
 */
LogInsightsDimensionAttributes.prototype['country_error_rate'] = undefined;

/**
 * This country's percentage of the total requests.
 * @member {Number} country_request_rate
 */
LogInsightsDimensionAttributes.prototype['country_request_rate'] = undefined;


// Implement DimensionAttributesRate interface:
/**
 * The rate at which the value in the current dimension occurs.
 * @member {Number} rate
 */
DimensionAttributesRate.prototype['rate'] = undefined;
// Implement DimensionAttributesCountryStats interface:
/**
 * The cache hit ratio for the country.
 * @member {Number} country_chr
 */
DimensionAttributesCountryStats.prototype['country_chr'] = undefined;
/**
 * The error rate for the country.
 * @member {Number} country_error_rate
 */
DimensionAttributesCountryStats.prototype['country_error_rate'] = undefined;
/**
 * This country's percentage of the total requests.
 * @member {Number} country_request_rate
 */
DimensionAttributesCountryStats.prototype['country_request_rate'] = undefined;




export default LogInsightsDimensionAttributes;

