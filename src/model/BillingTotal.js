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
import BillingTotalExtras from './BillingTotalExtras';

/**
 * The BillingTotal model module.
 * @module model/BillingTotal
 * @version 7.10.0
 */
class BillingTotal {
    /**
     * Constructs a new <code>BillingTotal</code>.
     * Complete summary of the billing information.
     * @alias module:model/BillingTotal
     */
    constructor() { 
        
        BillingTotal.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BillingTotal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillingTotal} obj Optional instance to populate.
     * @return {module:model/BillingTotal} The populated <code>BillingTotal</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillingTotal();

            if (data.hasOwnProperty('bandwidth')) {
                obj['bandwidth'] = ApiClient.convertToType(data['bandwidth'], 'Number');
            }
            if (data.hasOwnProperty('bandwidth_cost')) {
                obj['bandwidth_cost'] = ApiClient.convertToType(data['bandwidth_cost'], 'Number');
            }
            if (data.hasOwnProperty('bandwidth_units')) {
                obj['bandwidth_units'] = ApiClient.convertToType(data['bandwidth_units'], 'String');
            }
            if (data.hasOwnProperty('cost')) {
                obj['cost'] = ApiClient.convertToType(data['cost'], 'Number');
            }
            if (data.hasOwnProperty('cost_before_discount')) {
                obj['cost_before_discount'] = ApiClient.convertToType(data['cost_before_discount'], 'Number');
            }
            if (data.hasOwnProperty('discount')) {
                obj['discount'] = ApiClient.convertToType(data['discount'], 'Number');
            }
            if (data.hasOwnProperty('extras')) {
                obj['extras'] = ApiClient.convertToType(data['extras'], [BillingTotalExtras]);
            }
            if (data.hasOwnProperty('extras_cost')) {
                obj['extras_cost'] = ApiClient.convertToType(data['extras_cost'], 'Number');
            }
            if (data.hasOwnProperty('incurred_cost')) {
                obj['incurred_cost'] = ApiClient.convertToType(data['incurred_cost'], 'Number');
            }
            if (data.hasOwnProperty('overage')) {
                obj['overage'] = ApiClient.convertToType(data['overage'], 'Number');
            }
            if (data.hasOwnProperty('plan_code')) {
                obj['plan_code'] = ApiClient.convertToType(data['plan_code'], 'String');
            }
            if (data.hasOwnProperty('plan_minimum')) {
                obj['plan_minimum'] = ApiClient.convertToType(data['plan_minimum'], 'Number');
            }
            if (data.hasOwnProperty('plan_name')) {
                obj['plan_name'] = ApiClient.convertToType(data['plan_name'], 'String');
            }
            if (data.hasOwnProperty('requests')) {
                obj['requests'] = ApiClient.convertToType(data['requests'], 'Number');
            }
            if (data.hasOwnProperty('requests_cost')) {
                obj['requests_cost'] = ApiClient.convertToType(data['requests_cost'], 'Number');
            }
            if (data.hasOwnProperty('terms')) {
                obj['terms'] = ApiClient.convertToType(data['terms'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The total amount of bandwidth used this month (See bandwidth_units for measurement).
 * @member {Number} bandwidth
 */
BillingTotal.prototype['bandwidth'] = undefined;

/**
 * The cost of the bandwidth used this month in USD.
 * @member {Number} bandwidth_cost
 */
BillingTotal.prototype['bandwidth_cost'] = undefined;

/**
 * Bandwidth measurement units based on billing plan.
 * @member {String} bandwidth_units
 */
BillingTotal.prototype['bandwidth_units'] = undefined;

/**
 * The final amount to be paid.
 * @member {Number} cost
 */
BillingTotal.prototype['cost'] = undefined;

/**
 * Total incurred cost plus extras cost.
 * @member {Number} cost_before_discount
 */
BillingTotal.prototype['cost_before_discount'] = undefined;

/**
 * Calculated discount rate.
 * @member {Number} discount
 */
BillingTotal.prototype['discount'] = undefined;

/**
 * A list of any extras for this invoice.
 * @member {Array.<module:model/BillingTotalExtras>} extras
 */
BillingTotal.prototype['extras'] = undefined;

/**
 * Total cost of all extras.
 * @member {Number} extras_cost
 */
BillingTotal.prototype['extras_cost'] = undefined;

/**
 * The total cost of bandwidth and requests used this month.
 * @member {Number} incurred_cost
 */
BillingTotal.prototype['incurred_cost'] = undefined;

/**
 * How much over the plan minimum has been incurred.
 * @member {Number} overage
 */
BillingTotal.prototype['overage'] = undefined;

/**
 * The short code the plan this invoice was generated under.
 * @member {String} plan_code
 */
BillingTotal.prototype['plan_code'] = undefined;

/**
 * The minimum cost of this plan.
 * @member {Number} plan_minimum
 */
BillingTotal.prototype['plan_minimum'] = undefined;

/**
 * The name of the plan this invoice was generated under.
 * @member {String} plan_name
 */
BillingTotal.prototype['plan_name'] = undefined;

/**
 * The total number of requests used this month.
 * @member {Number} requests
 */
BillingTotal.prototype['requests'] = undefined;

/**
 * The cost of the requests used this month.
 * @member {Number} requests_cost
 */
BillingTotal.prototype['requests_cost'] = undefined;

/**
 * Payment terms. Almost always Net15.
 * @member {String} terms
 */
BillingTotal.prototype['terms'] = undefined;






export default BillingTotal;

