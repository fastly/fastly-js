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
import BillingAddressAttributes from './BillingAddressAttributes';
import RelationshipCustomer from './RelationshipCustomer';
import TypeBillingAddress from './TypeBillingAddress';

/**
 * The BillingAddressResponseData model module.
 * @module model/BillingAddressResponseData
 * @version 6.1.0
 */
class BillingAddressResponseData {
    /**
     * Constructs a new <code>BillingAddressResponseData</code>.
     * @alias module:model/BillingAddressResponseData
     */
    constructor() { 
        
        BillingAddressResponseData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BillingAddressResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillingAddressResponseData} obj Optional instance to populate.
     * @return {module:model/BillingAddressResponseData} The populated <code>BillingAddressResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillingAddressResponseData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = BillingAddressAttributes.constructFromObject(data['attributes']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = TypeBillingAddress.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('relationships')) {
                obj['relationships'] = RelationshipCustomer.constructFromObject(data['relationships']);
            }
        }
        return obj;
    }


}

/**
 * Alphanumeric string identifying the billing address.
 * @member {String} id
 */
BillingAddressResponseData.prototype['id'] = undefined;

/**
 * @member {module:model/BillingAddressAttributes} attributes
 */
BillingAddressResponseData.prototype['attributes'] = undefined;

/**
 * @member {module:model/TypeBillingAddress} type
 */
BillingAddressResponseData.prototype['type'] = undefined;

/**
 * @member {module:model/RelationshipCustomer} relationships
 */
BillingAddressResponseData.prototype['relationships'] = undefined;






export default BillingAddressResponseData;

