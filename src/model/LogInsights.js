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
import LogInsightsDimensionAttributes from './LogInsightsDimensionAttributes';
import LogInsightsDimensions from './LogInsightsDimensions';
import LogInsightsValues from './LogInsightsValues';

/**
 * The LogInsights model module.
 * @module model/LogInsights
 * @version 15.0.0-beta.0
 */
class LogInsights {
    /**
     * Constructs a new <code>LogInsights</code>.
     * @alias module:model/LogInsights
     */
    constructor() { 
        
        LogInsights.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LogInsights</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LogInsights} obj Optional instance to populate.
     * @return {module:model/LogInsights} The populated <code>LogInsights</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogInsights();

            if (data.hasOwnProperty('dimensions')) {
                obj['dimensions'] = LogInsightsDimensions.constructFromObject(data['dimensions']);
            }
            if (data.hasOwnProperty('dimension_attributes')) {
                obj['dimension_attributes'] = LogInsightsDimensionAttributes.constructFromObject(data['dimension_attributes']);
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], [LogInsightsValues]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/LogInsightsDimensions} dimensions
 */
LogInsights.prototype['dimensions'] = undefined;

/**
 * @member {module:model/LogInsightsDimensionAttributes} dimension_attributes
 */
LogInsights.prototype['dimension_attributes'] = undefined;

/**
 * @member {Array.<module:model/LogInsightsValues>} values
 */
LogInsights.prototype['values'] = undefined;






export default LogInsights;

