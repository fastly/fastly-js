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
 * The BillingStatus model module.
 * @module model/BillingStatus
 * @version 4.2.2
 */
class BillingStatus {
    /**
     * Constructs a new <code>BillingStatus</code>.
     * @alias module:model/BillingStatus
     */
    constructor() { 
        
        BillingStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BillingStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillingStatus} obj Optional instance to populate.
     * @return {module:model/BillingStatus} The populated <code>BillingStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillingStatus();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('sent_at')) {
                obj['sent_at'] = ApiClient.convertToType(data['sent_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * What the current status of this invoice can be.
 * @member {module:model/BillingStatus.StatusEnum} status
 */
BillingStatus.prototype['status'] = undefined;

/**
 * @member {Date} sent_at
 */
BillingStatus.prototype['sent_at'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
BillingStatus['StatusEnum'] = {

    /**
     * value: "Pending"
     * @const
     */
    "Pending": "Pending",

    /**
     * value: "Outstanding"
     * @const
     */
    "Outstanding": "Outstanding",

    /**
     * value: "Paid"
     * @const
     */
    "Paid": "Paid",

    /**
     * value: "MTD"
     * @const
     */
    "MTD": "MTD"
};



export default BillingStatus;

