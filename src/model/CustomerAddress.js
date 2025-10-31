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
 * The CustomerAddress model module.
 * @module model/CustomerAddress
 * @version 14.0.0
 */
class CustomerAddress {
    /**
     * Constructs a new <code>CustomerAddress</code>.
     * @alias module:model/CustomerAddress
     */
    constructor() { 
        
        CustomerAddress.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomerAddress} obj Optional instance to populate.
     * @return {module:model/CustomerAddress} The populated <code>CustomerAddress</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerAddress();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('address_1')) {
                obj['address_1'] = ApiClient.convertToType(data['address_1'], 'String');
            }
            if (data.hasOwnProperty('address_2')) {
                obj['address_2'] = ApiClient.convertToType(data['address_2'], 'String');
            }
            if (data.hasOwnProperty('locality')) {
                obj['locality'] = ApiClient.convertToType(data['locality'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('postal_code')) {
                obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The type of the address.
 * @member {String} type
 */
CustomerAddress.prototype['type'] = undefined;

/**
 * The street number and name of the address.
 * @member {String} address_1
 */
CustomerAddress.prototype['address_1'] = undefined;

/**
 * Additional address line for unit number, P.O. Box, etc.
 * @member {String} address_2
 */
CustomerAddress.prototype['address_2'] = undefined;

/**
 * City, town, or locality name the address is located.
 * @member {String} locality
 */
CustomerAddress.prototype['locality'] = undefined;

/**
 * State, province, or region of the address.
 * @member {String} region
 */
CustomerAddress.prototype['region'] = undefined;

/**
 * ISO 3166-1 alpha-2 country code (e.g., \"US\", \"CA\", \"NZ\")
 * @member {String} country
 */
CustomerAddress.prototype['country'] = undefined;

/**
 * Postal or Zip code of the address.
 * @member {String} postal_code
 */
CustomerAddress.prototype['postal_code'] = undefined;






export default CustomerAddress;

