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
import BotManagementResponseCustomerCustomer from './BotManagementResponseCustomerCustomer';
import NgwafResponseCustomer from './NgwafResponseCustomer';
import NgwafResponseEnabledServices from './NgwafResponseEnabledServices';
import NgwafResponseLinksGetAllServices from './NgwafResponseLinksGetAllServices';
import NgwafResponseLinksGetAllServicesLinks from './NgwafResponseLinksGetAllServicesLinks';
import NgwafResponseProduct from './NgwafResponseProduct';
import NgwafResponseProductProduct from './NgwafResponseProductProduct';

/**
 * The NgwafResponseBodyGetAllServices model module.
 * @module model/NgwafResponseBodyGetAllServices
 * @version 15.0.0-beta.2
 */
class NgwafResponseBodyGetAllServices {
    /**
     * Constructs a new <code>NgwafResponseBodyGetAllServices</code>.
     * @alias module:model/NgwafResponseBodyGetAllServices
     * @implements module:model/NgwafResponseProduct
     * @implements module:model/NgwafResponseCustomer
     * @implements module:model/NgwafResponseEnabledServices
     * @implements module:model/NgwafResponseLinksGetAllServices
     */
    constructor() { 
        NgwafResponseProduct.initialize(this);NgwafResponseCustomer.initialize(this);NgwafResponseEnabledServices.initialize(this);NgwafResponseLinksGetAllServices.initialize(this);
        NgwafResponseBodyGetAllServices.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NgwafResponseBodyGetAllServices</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NgwafResponseBodyGetAllServices} obj Optional instance to populate.
     * @return {module:model/NgwafResponseBodyGetAllServices} The populated <code>NgwafResponseBodyGetAllServices</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NgwafResponseBodyGetAllServices();
            NgwafResponseProduct.constructFromObject(data, obj);
            NgwafResponseCustomer.constructFromObject(data, obj);
            NgwafResponseEnabledServices.constructFromObject(data, obj);
            NgwafResponseLinksGetAllServices.constructFromObject(data, obj);

            if (data.hasOwnProperty('product')) {
                obj['product'] = NgwafResponseProductProduct.constructFromObject(data['product']);
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = BotManagementResponseCustomerCustomer.constructFromObject(data['customer']);
            }
            if (data.hasOwnProperty('services')) {
                obj['services'] = ApiClient.convertToType(data['services'], ['String']);
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = NgwafResponseLinksGetAllServicesLinks.constructFromObject(data['_links']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/NgwafResponseProductProduct} product
 */
NgwafResponseBodyGetAllServices.prototype['product'] = undefined;

/**
 * @member {module:model/BotManagementResponseCustomerCustomer} customer
 */
NgwafResponseBodyGetAllServices.prototype['customer'] = undefined;

/**
 * A list of services with the Next-Gen WAF enabled.
 * @member {Array.<String>} services
 */
NgwafResponseBodyGetAllServices.prototype['services'] = undefined;

/**
 * @member {module:model/NgwafResponseLinksGetAllServicesLinks} _links
 */
NgwafResponseBodyGetAllServices.prototype['_links'] = undefined;


// Implement NgwafResponseProduct interface:
/**
 * @member {module:model/NgwafResponseProductProduct} product
 */
NgwafResponseProduct.prototype['product'] = undefined;
// Implement NgwafResponseCustomer interface:
/**
 * @member {module:model/BotManagementResponseCustomerCustomer} customer
 */
NgwafResponseCustomer.prototype['customer'] = undefined;
// Implement NgwafResponseEnabledServices interface:
/**
 * A list of services with the Next-Gen WAF enabled.
 * @member {Array.<String>} services
 */
NgwafResponseEnabledServices.prototype['services'] = undefined;
// Implement NgwafResponseLinksGetAllServices interface:
/**
 * @member {module:model/NgwafResponseLinksGetAllServicesLinks} _links
 */
NgwafResponseLinksGetAllServices.prototype['_links'] = undefined;




export default NgwafResponseBodyGetAllServices;

