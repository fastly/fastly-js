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
 * The HistoricalFieldResultsAttributesAllOf model module.
 * @module model/HistoricalFieldResultsAttributesAllOf
 * @version 4.2.0
 */
class HistoricalFieldResultsAttributesAllOf {
    /**
     * Constructs a new <code>HistoricalFieldResultsAttributesAllOf</code>.
     * @alias module:model/HistoricalFieldResultsAttributesAllOf
     */
    constructor() { 
        
        HistoricalFieldResultsAttributesAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HistoricalFieldResultsAttributesAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoricalFieldResultsAttributesAllOf} obj Optional instance to populate.
     * @return {module:model/HistoricalFieldResultsAttributesAllOf} The populated <code>HistoricalFieldResultsAttributesAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HistoricalFieldResultsAttributesAllOf();

            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('start_time')) {
                obj['start_time'] = ApiClient.convertToType(data['start_time'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} service_id
 */
HistoricalFieldResultsAttributesAllOf.prototype['service_id'] = undefined;

/**
 * @member {Number} start_time
 */
HistoricalFieldResultsAttributesAllOf.prototype['start_time'] = undefined;






export default HistoricalFieldResultsAttributesAllOf;

