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
 * The OfferAllOf model module.
 * @module model/OfferAllOf
 * @version 15.0.0-beta.0
 */
class OfferAllOf {
    /**
     * Constructs a new <code>OfferAllOf</code>.
     * @alias module:model/OfferAllOf
     */
    constructor() { 
        
        OfferAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OfferAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OfferAllOf} obj Optional instance to populate.
     * @return {module:model/OfferAllOf} The populated <code>OfferAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OfferAllOf();

            if (data.hasOwnProperty('vendor')) {
                obj['vendor'] = ApiClient.convertToType(data['vendor'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The aftermarket vendor.
 * @member {String} vendor
 */
OfferAllOf.prototype['vendor'] = undefined;

/**
 * The price for the domain from the aftermarket vendor.
 * @member {String} price
 */
OfferAllOf.prototype['price'] = undefined;

/**
 * The currency for the aftermarket offer.
 * @member {String} currency
 */
OfferAllOf.prototype['currency'] = undefined;






export default OfferAllOf;

