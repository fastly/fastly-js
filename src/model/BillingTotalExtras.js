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
 * The BillingTotalExtras model module.
 * @module model/BillingTotalExtras
 * @version 7.9.0
 */
class BillingTotalExtras {
    /**
     * Constructs a new <code>BillingTotalExtras</code>.
     * @alias module:model/BillingTotalExtras
     */
    constructor() { 
        
        BillingTotalExtras.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BillingTotalExtras</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillingTotalExtras} obj Optional instance to populate.
     * @return {module:model/BillingTotalExtras} The populated <code>BillingTotalExtras</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillingTotalExtras();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('recurring')) {
                obj['recurring'] = ApiClient.convertToType(data['recurring'], 'Number');
            }
            if (data.hasOwnProperty('setup')) {
                obj['setup'] = ApiClient.convertToType(data['setup'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The name of this extra cost.
 * @member {String} name
 */
BillingTotalExtras.prototype['name'] = undefined;

/**
 * Recurring monthly cost in USD. Not present if $0.0.
 * @member {Number} recurring
 */
BillingTotalExtras.prototype['recurring'] = undefined;

/**
 * Initial set up cost in USD. Not present if $0.0 or this is not the month the extra was added.
 * @member {Number} setup
 */
BillingTotalExtras.prototype['setup'] = undefined;






export default BillingTotalExtras;

