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
 * The HistoricalStatsByServiceResponseAllOf model module.
 * @module model/HistoricalStatsByServiceResponseAllOf
 * @version 15.0.0-beta.3
 */
class HistoricalStatsByServiceResponseAllOf {
    /**
     * Constructs a new <code>HistoricalStatsByServiceResponseAllOf</code>.
     * @alias module:model/HistoricalStatsByServiceResponseAllOf
     */
    constructor() { 
        
        HistoricalStatsByServiceResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HistoricalStatsByServiceResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoricalStatsByServiceResponseAllOf} obj Optional instance to populate.
     * @return {module:model/HistoricalStatsByServiceResponseAllOf} The populated <code>HistoricalStatsByServiceResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HistoricalStatsByServiceResponseAllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], {'String': Array});
            }
        }
        return obj;
    }


}

/**
 * Contains the results of the query, organized by *service ID*, into arrays where each element describes one service over a *time span*.
 * @member {Object.<String, Array.<module:model/Results>>} data
 */
HistoricalStatsByServiceResponseAllOf.prototype['data'] = undefined;






export default HistoricalStatsByServiceResponseAllOf;

