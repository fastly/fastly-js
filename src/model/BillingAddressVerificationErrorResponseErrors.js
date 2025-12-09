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
import BillingAddressAttributes from './BillingAddressAttributes';

/**
 * The BillingAddressVerificationErrorResponseErrors model module.
 * @module model/BillingAddressVerificationErrorResponseErrors
 * @version 14.1.0
 */
class BillingAddressVerificationErrorResponseErrors {
    /**
     * Constructs a new <code>BillingAddressVerificationErrorResponseErrors</code>.
     * @alias module:model/BillingAddressVerificationErrorResponseErrors
     * @param type {String} The error type.
     * @param title {String} 
     * @param detail {String} 
     * @param status {Number} 
     */
    constructor(type, title, detail, status) { 
        
        BillingAddressVerificationErrorResponseErrors.initialize(this, type, title, detail, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, title, detail, status) { 
        obj['type'] = type;
        obj['title'] = title;
        obj['detail'] = detail;
        obj['status'] = status;
    }

    /**
     * Constructs a <code>BillingAddressVerificationErrorResponseErrors</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillingAddressVerificationErrorResponseErrors} obj Optional instance to populate.
     * @return {module:model/BillingAddressVerificationErrorResponseErrors} The populated <code>BillingAddressVerificationErrorResponseErrors</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillingAddressVerificationErrorResponseErrors();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('detail')) {
                obj['detail'] = ApiClient.convertToType(data['detail'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
            }
            if (data.hasOwnProperty('candidates')) {
                obj['candidates'] = ApiClient.convertToType(data['candidates'], [BillingAddressAttributes]);
            }
        }
        return obj;
    }


}

/**
 * The error type.
 * @member {String} type
 */
BillingAddressVerificationErrorResponseErrors.prototype['type'] = undefined;

/**
 * @member {String} title
 */
BillingAddressVerificationErrorResponseErrors.prototype['title'] = undefined;

/**
 * @member {String} detail
 */
BillingAddressVerificationErrorResponseErrors.prototype['detail'] = undefined;

/**
 * @member {Number} status
 */
BillingAddressVerificationErrorResponseErrors.prototype['status'] = undefined;

/**
 * @member {Array.<module:model/BillingAddressAttributes>} candidates
 */
BillingAddressVerificationErrorResponseErrors.prototype['candidates'] = undefined;






export default BillingAddressVerificationErrorResponseErrors;

