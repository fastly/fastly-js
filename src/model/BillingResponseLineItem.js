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
import BillingResponseLineItemAllOf from './BillingResponseLineItemAllOf';
import Timestamps from './Timestamps';

/**
 * The BillingResponseLineItem model module.
 * @module model/BillingResponseLineItem
 * @version 4.2.0
 */
class BillingResponseLineItem {
    /**
     * Constructs a new <code>BillingResponseLineItem</code>.
     * @alias module:model/BillingResponseLineItem
     * @implements module:model/Timestamps
     * @implements module:model/BillingResponseLineItemAllOf
     */
    constructor() { 
        Timestamps.initialize(this);BillingResponseLineItemAllOf.initialize(this);
        BillingResponseLineItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BillingResponseLineItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillingResponseLineItem} obj Optional instance to populate.
     * @return {module:model/BillingResponseLineItem} The populated <code>BillingResponseLineItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillingResponseLineItem();
            Timestamps.constructFromObject(data, obj);
            BillingResponseLineItemAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
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
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
BillingResponseLineItem.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
BillingResponseLineItem.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
BillingResponseLineItem.prototype['updated_at'] = undefined;

/**
 * @member {Number} amount
 */
BillingResponseLineItem.prototype['amount'] = undefined;

/**
 * @member {String} aria_invoice_id
 */
BillingResponseLineItem.prototype['aria_invoice_id'] = undefined;

/**
 * @member {String} client_service_id
 */
BillingResponseLineItem.prototype['client_service_id'] = undefined;

/**
 * @member {String} credit_coupon_code
 */
BillingResponseLineItem.prototype['credit_coupon_code'] = undefined;

/**
 * @member {String} description
 */
BillingResponseLineItem.prototype['description'] = undefined;

/**
 * @member {String} id
 */
BillingResponseLineItem.prototype['id'] = undefined;

/**
 * @member {Number} line_number
 */
BillingResponseLineItem.prototype['line_number'] = undefined;

/**
 * @member {String} plan_name
 */
BillingResponseLineItem.prototype['plan_name'] = undefined;

/**
 * @member {Number} plan_no
 */
BillingResponseLineItem.prototype['plan_no'] = undefined;

/**
 * @member {Number} rate_per_unit
 */
BillingResponseLineItem.prototype['rate_per_unit'] = undefined;

/**
 * @member {Number} rate_schedule_no
 */
BillingResponseLineItem.prototype['rate_schedule_no'] = undefined;

/**
 * @member {Number} rate_schedule_tier_no
 */
BillingResponseLineItem.prototype['rate_schedule_tier_no'] = undefined;

/**
 * @member {String} service_name
 */
BillingResponseLineItem.prototype['service_name'] = undefined;

/**
 * @member {Number} service_no
 */
BillingResponseLineItem.prototype['service_no'] = undefined;

/**
 * @member {Number} units
 */
BillingResponseLineItem.prototype['units'] = undefined;

/**
 * @member {String} usage_type_cd
 */
BillingResponseLineItem.prototype['usage_type_cd'] = undefined;

/**
 * @member {Number} usage_type_no
 */
BillingResponseLineItem.prototype['usage_type_no'] = undefined;


// Implement Timestamps interface:
/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
Timestamps.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
Timestamps.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
Timestamps.prototype['updated_at'] = undefined;
// Implement BillingResponseLineItemAllOf interface:
/**
 * @member {Number} amount
 */
BillingResponseLineItemAllOf.prototype['amount'] = undefined;
/**
 * @member {String} aria_invoice_id
 */
BillingResponseLineItemAllOf.prototype['aria_invoice_id'] = undefined;
/**
 * @member {String} client_service_id
 */
BillingResponseLineItemAllOf.prototype['client_service_id'] = undefined;
/**
 * @member {String} credit_coupon_code
 */
BillingResponseLineItemAllOf.prototype['credit_coupon_code'] = undefined;
/**
 * @member {String} description
 */
BillingResponseLineItemAllOf.prototype['description'] = undefined;
/**
 * @member {String} id
 */
BillingResponseLineItemAllOf.prototype['id'] = undefined;
/**
 * @member {Number} line_number
 */
BillingResponseLineItemAllOf.prototype['line_number'] = undefined;
/**
 * @member {String} plan_name
 */
BillingResponseLineItemAllOf.prototype['plan_name'] = undefined;
/**
 * @member {Number} plan_no
 */
BillingResponseLineItemAllOf.prototype['plan_no'] = undefined;
/**
 * @member {Number} rate_per_unit
 */
BillingResponseLineItemAllOf.prototype['rate_per_unit'] = undefined;
/**
 * @member {Number} rate_schedule_no
 */
BillingResponseLineItemAllOf.prototype['rate_schedule_no'] = undefined;
/**
 * @member {Number} rate_schedule_tier_no
 */
BillingResponseLineItemAllOf.prototype['rate_schedule_tier_no'] = undefined;
/**
 * @member {String} service_name
 */
BillingResponseLineItemAllOf.prototype['service_name'] = undefined;
/**
 * @member {Number} service_no
 */
BillingResponseLineItemAllOf.prototype['service_no'] = undefined;
/**
 * @member {Number} units
 */
BillingResponseLineItemAllOf.prototype['units'] = undefined;
/**
 * @member {String} usage_type_cd
 */
BillingResponseLineItemAllOf.prototype['usage_type_cd'] = undefined;
/**
 * @member {Number} usage_type_no
 */
BillingResponseLineItemAllOf.prototype['usage_type_no'] = undefined;




export default BillingResponseLineItem;

