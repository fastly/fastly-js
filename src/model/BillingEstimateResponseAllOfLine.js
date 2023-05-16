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
 * The BillingEstimateResponseAllOfLine model module.
 * @module model/BillingEstimateResponseAllOfLine
 * @version 4.0.0
 */
class BillingEstimateResponseAllOfLine {
    /**
     * Constructs a new <code>BillingEstimateResponseAllOfLine</code>.
     * @alias module:model/BillingEstimateResponseAllOfLine
     */
    constructor() { 
        
        BillingEstimateResponseAllOfLine.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BillingEstimateResponseAllOfLine</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillingEstimateResponseAllOfLine} obj Optional instance to populate.
     * @return {module:model/BillingEstimateResponseAllOfLine} The populated <code>BillingEstimateResponseAllOfLine</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillingEstimateResponseAllOfLine();

            if (data.hasOwnProperty('plan_no')) {
                obj['plan_no'] = ApiClient.convertToType(data['plan_no'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('units')) {
                obj['units'] = ApiClient.convertToType(data['units'], 'Number');
            }
            if (data.hasOwnProperty('per_unit_cost')) {
                obj['per_unit_cost'] = ApiClient.convertToType(data['per_unit_cost'], 'Number');
            }
            if (data.hasOwnProperty('service_no')) {
                obj['service_no'] = ApiClient.convertToType(data['service_no'], 'Number');
            }
            if (data.hasOwnProperty('service_type')) {
                obj['service_type'] = ApiClient.convertToType(data['service_type'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('client_service_id')) {
                obj['client_service_id'] = ApiClient.convertToType(data['client_service_id'], 'String');
            }
            if (data.hasOwnProperty('client_plan_id')) {
                obj['client_plan_id'] = ApiClient.convertToType(data['client_plan_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} plan_no
 */
BillingEstimateResponseAllOfLine.prototype['plan_no'] = undefined;

/**
 * @member {String} description
 */
BillingEstimateResponseAllOfLine.prototype['description'] = undefined;

/**
 * @member {Number} units
 */
BillingEstimateResponseAllOfLine.prototype['units'] = undefined;

/**
 * @member {Number} per_unit_cost
 */
BillingEstimateResponseAllOfLine.prototype['per_unit_cost'] = undefined;

/**
 * @member {Number} service_no
 */
BillingEstimateResponseAllOfLine.prototype['service_no'] = undefined;

/**
 * @member {String} service_type
 */
BillingEstimateResponseAllOfLine.prototype['service_type'] = undefined;

/**
 * @member {Number} amount
 */
BillingEstimateResponseAllOfLine.prototype['amount'] = undefined;

/**
 * @member {String} client_service_id
 */
BillingEstimateResponseAllOfLine.prototype['client_service_id'] = undefined;

/**
 * @member {String} client_plan_id
 */
BillingEstimateResponseAllOfLine.prototype['client_plan_id'] = undefined;






export default BillingEstimateResponseAllOfLine;

