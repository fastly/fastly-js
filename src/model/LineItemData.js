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
 * The LineItemData model module.
 * @module model/LineItemData
 * @version 7.9.0
 */
class LineItemData {
    /**
     * Constructs a new <code>LineItemData</code>.
     * @alias module:model/LineItemData
     */
    constructor() { 
        
        LineItemData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LineItemData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LineItemData} obj Optional instance to populate.
     * @return {module:model/LineItemData} The populated <code>LineItemData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LineItemData();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('aria_invoice_id')) {
                obj['aria_invoice_id'] = ApiClient.convertToType(data['aria_invoice_id'], 'String');
            }
            if (data.hasOwnProperty('client_service_id')) {
                obj['client_service_id'] = ApiClient.convertToType(data['client_service_id'], 'String');
            }
            if (data.hasOwnProperty('credit_coupon_code')) {
                obj['credit_coupon_code'] = ApiClient.convertToType(data['credit_coupon_code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('line_number')) {
                obj['line_number'] = ApiClient.convertToType(data['line_number'], 'Number');
            }
            if (data.hasOwnProperty('plan_name')) {
                obj['plan_name'] = ApiClient.convertToType(data['plan_name'], 'String');
            }
            if (data.hasOwnProperty('plan_no')) {
                obj['plan_no'] = ApiClient.convertToType(data['plan_no'], 'Number');
            }
            if (data.hasOwnProperty('rate_per_unit')) {
                obj['rate_per_unit'] = ApiClient.convertToType(data['rate_per_unit'], 'Number');
            }
            if (data.hasOwnProperty('rate_schedule_no')) {
                obj['rate_schedule_no'] = ApiClient.convertToType(data['rate_schedule_no'], 'Number');
            }
            if (data.hasOwnProperty('rate_schedule_tier_no')) {
                obj['rate_schedule_tier_no'] = ApiClient.convertToType(data['rate_schedule_tier_no'], 'Number');
            }
            if (data.hasOwnProperty('service_name')) {
                obj['service_name'] = ApiClient.convertToType(data['service_name'], 'String');
            }
            if (data.hasOwnProperty('service_no')) {
                obj['service_no'] = ApiClient.convertToType(data['service_no'], 'Number');
            }
            if (data.hasOwnProperty('units')) {
                obj['units'] = ApiClient.convertToType(data['units'], 'Number');
            }
            if (data.hasOwnProperty('usage_type_cd')) {
                obj['usage_type_cd'] = ApiClient.convertToType(data['usage_type_cd'], 'String');
            }
            if (data.hasOwnProperty('usage_type_no')) {
                obj['usage_type_no'] = ApiClient.convertToType(data['usage_type_no'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} amount
 */
LineItemData.prototype['amount'] = undefined;

/**
 * An alphanumeric string identifying the invoice.
 * @member {String} aria_invoice_id
 */
LineItemData.prototype['aria_invoice_id'] = undefined;

/**
 * @member {String} client_service_id
 */
LineItemData.prototype['client_service_id'] = undefined;

/**
 * @member {String} credit_coupon_code
 */
LineItemData.prototype['credit_coupon_code'] = undefined;

/**
 * @member {String} description
 */
LineItemData.prototype['description'] = undefined;

/**
 * @member {String} id
 */
LineItemData.prototype['id'] = undefined;

/**
 * @member {Number} line_number
 */
LineItemData.prototype['line_number'] = undefined;

/**
 * @member {String} plan_name
 */
LineItemData.prototype['plan_name'] = undefined;

/**
 * @member {Number} plan_no
 */
LineItemData.prototype['plan_no'] = undefined;

/**
 * @member {Number} rate_per_unit
 */
LineItemData.prototype['rate_per_unit'] = undefined;

/**
 * @member {Number} rate_schedule_no
 */
LineItemData.prototype['rate_schedule_no'] = undefined;

/**
 * @member {Number} rate_schedule_tier_no
 */
LineItemData.prototype['rate_schedule_tier_no'] = undefined;

/**
 * @member {String} service_name
 */
LineItemData.prototype['service_name'] = undefined;

/**
 * @member {Number} service_no
 */
LineItemData.prototype['service_no'] = undefined;

/**
 * @member {Number} units
 */
LineItemData.prototype['units'] = undefined;

/**
 * @member {String} usage_type_cd
 */
LineItemData.prototype['usage_type_cd'] = undefined;

/**
 * @member {Number} usage_type_no
 */
LineItemData.prototype['usage_type_no'] = undefined;






export default LineItemData;

