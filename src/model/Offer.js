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
import OfferAllOf from './OfferAllOf';

/**
 * The Offer model module.
 * @module model/Offer
 * @version 15.0.0
 */
class Offer {
    /**
     * Constructs a new <code>Offer</code>.
     * An offer from a domain aftermarket vendor.
     * @alias module:model/Offer
     * @implements module:model/OfferAllOf
     */
    constructor() { 
        OfferAllOf.initialize(this);
        Offer.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Offer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Offer} obj Optional instance to populate.
     * @return {module:model/Offer} The populated <code>Offer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Offer();
            OfferAllOf.constructFromObject(data, obj);

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
Offer.prototype['vendor'] = undefined;

/**
 * The price for the domain from the aftermarket vendor.
 * @member {String} price
 */
Offer.prototype['price'] = undefined;

/**
 * The currency for the aftermarket offer.
 * @member {String} currency
 */
Offer.prototype['currency'] = undefined;


// Implement OfferAllOf interface:
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




export default Offer;

