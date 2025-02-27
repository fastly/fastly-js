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
import BillingBandwidth from './BillingBandwidth';

/**
 * The BillingRegions model module.
 * @module model/BillingRegions
 * @version 9.0.0
 */
class BillingRegions {
    /**
     * Constructs a new <code>BillingRegions</code>.
     * @alias module:model/BillingRegions
     */
    constructor() { 
        
        BillingRegions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BillingRegions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillingRegions} obj Optional instance to populate.
     * @return {module:model/BillingRegions} The populated <code>BillingRegions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillingRegions();

            if (data.hasOwnProperty('cost')) {
                obj['cost'] = ApiClient.convertToType(data['cost'], 'Number');
            }
            if (data.hasOwnProperty('bandwidth')) {
                obj['bandwidth'] = BillingBandwidth.constructFromObject(data['bandwidth']);
            }
            if (data.hasOwnProperty('percentile')) {
                obj['percentile'] = BillingBandwidth.constructFromObject(data['percentile']);
            }
            if (data.hasOwnProperty('requests')) {
                obj['requests'] = BillingBandwidth.constructFromObject(data['requests']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} cost
 */
BillingRegions.prototype['cost'] = undefined;

/**
 * @member {module:model/BillingBandwidth} bandwidth
 */
BillingRegions.prototype['bandwidth'] = undefined;

/**
 * @member {module:model/BillingBandwidth} percentile
 */
BillingRegions.prototype['percentile'] = undefined;

/**
 * @member {module:model/BillingBandwidth} requests
 */
BillingRegions.prototype['requests'] = undefined;






export default BillingRegions;

