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
import Mtdlineitems from './Mtdlineitems';

/**
 * The Mtdinvoice model module.
 * @module model/Mtdinvoice
 * @version 15.0.0-beta.0
 */
class Mtdinvoice {
    /**
     * Constructs a new <code>Mtdinvoice</code>.
     * @alias module:model/Mtdinvoice
     */
    constructor() { 
        
        Mtdinvoice.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Mtdinvoice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Mtdinvoice} obj Optional instance to populate.
     * @return {module:model/Mtdinvoice} The populated <code>Mtdinvoice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Mtdinvoice();

            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
            }
            if (data.hasOwnProperty('invoice_id')) {
                obj['invoice_id'] = ApiClient.convertToType(data['invoice_id'], 'String');
            }
            if (data.hasOwnProperty('billing_start_date')) {
                obj['billing_start_date'] = ApiClient.convertToType(data['billing_start_date'], 'Date');
            }
            if (data.hasOwnProperty('billing_end_date')) {
                obj['billing_end_date'] = ApiClient.convertToType(data['billing_end_date'], 'Date');
            }
            if (data.hasOwnProperty('monthly_transaction_amount')) {
                obj['monthly_transaction_amount'] = ApiClient.convertToType(data['monthly_transaction_amount'], 'String');
            }
            if (data.hasOwnProperty('transaction_line_items')) {
                obj['transaction_line_items'] = ApiClient.convertToType(data['transaction_line_items'], [Mtdlineitems]);
            }
        }
        return obj;
    }


}

/**
 * The Customer ID associated with the invoice.
 * @member {String} customer_id
 */
Mtdinvoice.prototype['customer_id'] = undefined;

/**
 * An alphanumeric string identifying the invoice.
 * @member {String} invoice_id
 */
Mtdinvoice.prototype['invoice_id'] = undefined;

/**
 * The date and time (in ISO 8601 format) for the initiation point of a billing cycle, signifying the start of charges for a service or subscription.
 * @member {Date} billing_start_date
 */
Mtdinvoice.prototype['billing_start_date'] = undefined;

/**
 * The date and time (in ISO 8601 format) for the termination point of a billing cycle, signifying the end of charges for a service or subscription.
 * @member {Date} billing_end_date
 */
Mtdinvoice.prototype['billing_end_date'] = undefined;

/**
 * The total billable amount for invoiced services charged within a single month.
 * @member {String} monthly_transaction_amount
 */
Mtdinvoice.prototype['monthly_transaction_amount'] = undefined;

/**
 * @member {Array.<module:model/Mtdlineitems>} transaction_line_items
 */
Mtdinvoice.prototype['transaction_line_items'] = undefined;






export default Mtdinvoice;

