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
import Invoicelineitems from './Invoicelineitems';

/**
 * The Invoice model module.
 * @module model/Invoice
 * @version 11.0.0
 */
class Invoice {
    /**
     * Constructs a new <code>Invoice</code>.
     * @alias module:model/Invoice
     */
    constructor() { 
        
        Invoice.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Invoice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Invoice} obj Optional instance to populate.
     * @return {module:model/Invoice} The populated <code>Invoice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Invoice();

            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
            }
            if (data.hasOwnProperty('invoice_id')) {
                obj['invoice_id'] = ApiClient.convertToType(data['invoice_id'], 'String');
            }
            if (data.hasOwnProperty('invoice_posted_on')) {
                obj['invoice_posted_on'] = ApiClient.convertToType(data['invoice_posted_on'], 'Date');
            }
            if (data.hasOwnProperty('billing_start_date')) {
                obj['billing_start_date'] = ApiClient.convertToType(data['billing_start_date'], 'Date');
            }
            if (data.hasOwnProperty('billing_end_date')) {
                obj['billing_end_date'] = ApiClient.convertToType(data['billing_end_date'], 'Date');
            }
            if (data.hasOwnProperty('statement_number')) {
                obj['statement_number'] = ApiClient.convertToType(data['statement_number'], 'String');
            }
            if (data.hasOwnProperty('currency_code')) {
                obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
            }
            if (data.hasOwnProperty('monthly_transaction_amount')) {
                obj['monthly_transaction_amount'] = ApiClient.convertToType(data['monthly_transaction_amount'], 'Number');
            }
            if (data.hasOwnProperty('transaction_line_items')) {
                obj['transaction_line_items'] = ApiClient.convertToType(data['transaction_line_items'], [Invoicelineitems]);
            }
        }
        return obj;
    }


}

/**
 * Customer ID associated with the invoice.
 * @member {String} customer_id
 */
Invoice.prototype['customer_id'] = undefined;

/**
 * Numeric string identifying the invoice.
 * @member {String} invoice_id
 */
Invoice.prototype['invoice_id'] = undefined;

/**
 * Date and time invoice was posted on, in ISO 8601 format.
 * @member {Date} invoice_posted_on
 */
Invoice.prototype['invoice_posted_on'] = undefined;

/**
 * Date and time (in ISO 8601 format) for initiation point of a billing cycle, signifying the start of charges for a service or subscription.
 * @member {Date} billing_start_date
 */
Invoice.prototype['billing_start_date'] = undefined;

/**
 * Date and time (in ISO 8601 format) for termination point of a billing cycle, signifying the end of charges for a service or subscription.
 * @member {Date} billing_end_date
 */
Invoice.prototype['billing_end_date'] = undefined;

/**
 * Alphanumeric string identifying the statement number.
 * @member {String} statement_number
 */
Invoice.prototype['statement_number'] = undefined;

/**
 * Three-letter code representing a specific currency used for financial transactions.
 * @member {String} currency_code
 */
Invoice.prototype['currency_code'] = undefined;

/**
 * Total billable amount for invoiced services charged within a single month.
 * @member {Number} monthly_transaction_amount
 */
Invoice.prototype['monthly_transaction_amount'] = undefined;

/**
 * @member {Array.<module:model/Invoicelineitems>} transaction_line_items
 */
Invoice.prototype['transaction_line_items'] = undefined;






export default Invoice;

