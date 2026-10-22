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
 * The ArcUsageMetric model module.
 * @module model/ArcUsageMetric
 * @version 17.0.0
 */
class ArcUsageMetric {
    /**
     * Constructs a new <code>ArcUsageMetric</code>.
     * A usage metric measured for a single date (or hour, when &#x60;granularity&#x60; is &#x60;hourly&#x60;).
     * @alias module:model/ArcUsageMetric
     * @param date {String} The date (or hour) the usage was measured. Formatted as `YYYY-MM-DD` when `granularity` is `daily`, or `YYYY-MM-DD HH:00:00` when `granularity` is `hourly`. 
     * @param usage_type {module:model/ArcUsageMetric.UsageTypeEnum} The type of usage being measured.
     * @param quantity {Number} The quantity of the usage type for this date.
     */
    constructor(date, usage_type, quantity) { 
        
        ArcUsageMetric.initialize(this, date, usage_type, quantity);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, date, usage_type, quantity) { 
        obj['date'] = date;
        obj['usage_type'] = usage_type;
        obj['quantity'] = quantity;
    }

    /**
     * Constructs a <code>ArcUsageMetric</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArcUsageMetric} obj Optional instance to populate.
     * @return {module:model/ArcUsageMetric} The populated <code>ArcUsageMetric</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArcUsageMetric();

            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
            if (data.hasOwnProperty('usage_type')) {
                obj['usage_type'] = ApiClient.convertToType(data['usage_type'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('virtual_key_id')) {
                obj['virtual_key_id'] = ApiClient.convertToType(data['virtual_key_id'], 'String');
            }
            if (data.hasOwnProperty('virtual_key_name')) {
                obj['virtual_key_name'] = ApiClient.convertToType(data['virtual_key_name'], 'String');
            }
            if (data.hasOwnProperty('primary_provider')) {
                obj['primary_provider'] = ApiClient.convertToType(data['primary_provider'], 'String');
            }
            if (data.hasOwnProperty('provider')) {
                obj['provider'] = ApiClient.convertToType(data['provider'], 'String');
            }
            if (data.hasOwnProperty('provider_connection_id')) {
                obj['provider_connection_id'] = ApiClient.convertToType(data['provider_connection_id'], 'String');
            }
            if (data.hasOwnProperty('model')) {
                obj['model'] = ApiClient.convertToType(data['model'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The date (or hour) the usage was measured. Formatted as `YYYY-MM-DD` when `granularity` is `daily`, or `YYYY-MM-DD HH:00:00` when `granularity` is `hourly`. 
 * @member {String} date
 */
ArcUsageMetric.prototype['date'] = undefined;

/**
 * The type of usage being measured.
 * @member {module:model/ArcUsageMetric.UsageTypeEnum} usage_type
 */
ArcUsageMetric.prototype['usage_type'] = undefined;

/**
 * The quantity of the usage type for this date.
 * @member {Number} quantity
 */
ArcUsageMetric.prototype['quantity'] = undefined;

/**
 * The ID of the virtual key this usage is attributed to.
 * @member {String} virtual_key_id
 */
ArcUsageMetric.prototype['virtual_key_id'] = undefined;

/**
 * The display name of the virtual key this usage is attributed to.
 * @member {String} virtual_key_name
 */
ArcUsageMetric.prototype['virtual_key_name'] = undefined;

/**
 * The ID of the provider connection originally requested, before any failover occurred.
 * @member {String} primary_provider
 */
ArcUsageMetric.prototype['primary_provider'] = undefined;

/**
 * The name of the provider connection that ultimately served the request.
 * @member {String} provider
 */
ArcUsageMetric.prototype['provider'] = undefined;

/**
 * The ID of the provider connection that ultimately served the request.
 * @member {String} provider_connection_id
 */
ArcUsageMetric.prototype['provider_connection_id'] = undefined;

/**
 * The AI model identifier used.
 * @member {String} model
 */
ArcUsageMetric.prototype['model'] = undefined;





/**
 * Allowed values for the <code>usage_type</code> property.
 * @enum {String}
 * @readonly
 */
ArcUsageMetric['UsageTypeEnum'] = {

    /**
     * value: "requests"
     * @const
     */
    "requests": "requests",

    /**
     * value: "sessions"
     * @const
     */
    "sessions": "sessions",

    /**
     * value: "input_tokens"
     * @const
     */
    "input_tokens": "input_tokens",

    /**
     * value: "output_tokens"
     * @const
     */
    "output_tokens": "output_tokens"
};



export default ArcUsageMetric;

