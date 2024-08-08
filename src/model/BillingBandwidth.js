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
import BillingBandwidthTiers from './BillingBandwidthTiers';

/**
 * The BillingBandwidth model module.
 * @module model/BillingBandwidth
 * @version 7.7.0
 */
class BillingBandwidth {
    /**
     * Constructs a new <code>BillingBandwidth</code>.
     * @alias module:model/BillingBandwidth
     */
    constructor() { 
        
        BillingBandwidth.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BillingBandwidth</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillingBandwidth} obj Optional instance to populate.
     * @return {module:model/BillingBandwidth} The populated <code>BillingBandwidth</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillingBandwidth();

            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('tiers')) {
                obj['tiers'] = ApiClient.convertToType(data['tiers'], [BillingBandwidthTiers]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} total
 */
BillingBandwidth.prototype['total'] = undefined;

/**
 * @member {Array.<module:model/BillingBandwidthTiers>} tiers
 */
BillingBandwidth.prototype['tiers'] = undefined;






export default BillingBandwidth;

