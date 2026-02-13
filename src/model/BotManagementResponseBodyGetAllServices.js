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
import BotManagementResponseCustomer from './BotManagementResponseCustomer';
import BotManagementResponseCustomerCustomer from './BotManagementResponseCustomerCustomer';
import BotManagementResponseEnabledServices from './BotManagementResponseEnabledServices';
import BotManagementResponseLinksGetAllServices from './BotManagementResponseLinksGetAllServices';
import BotManagementResponseLinksGetAllServicesLinks from './BotManagementResponseLinksGetAllServicesLinks';
import BotManagementResponseProduct from './BotManagementResponseProduct';
import BotManagementResponseProductProduct from './BotManagementResponseProductProduct';

/**
 * The BotManagementResponseBodyGetAllServices model module.
 * @module model/BotManagementResponseBodyGetAllServices
 * @version 15.0.0-beta.1
 */
class BotManagementResponseBodyGetAllServices {
    /**
     * Constructs a new <code>BotManagementResponseBodyGetAllServices</code>.
     * @alias module:model/BotManagementResponseBodyGetAllServices
     * @implements module:model/BotManagementResponseProduct
     * @implements module:model/BotManagementResponseCustomer
     * @implements module:model/BotManagementResponseEnabledServices
     * @implements module:model/BotManagementResponseLinksGetAllServices
     */
    constructor() { 
        BotManagementResponseProduct.initialize(this);BotManagementResponseCustomer.initialize(this);BotManagementResponseEnabledServices.initialize(this);BotManagementResponseLinksGetAllServices.initialize(this);
        BotManagementResponseBodyGetAllServices.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BotManagementResponseBodyGetAllServices</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BotManagementResponseBodyGetAllServices} obj Optional instance to populate.
     * @return {module:model/BotManagementResponseBodyGetAllServices} The populated <code>BotManagementResponseBodyGetAllServices</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BotManagementResponseBodyGetAllServices();
            BotManagementResponseProduct.constructFromObject(data, obj);
            BotManagementResponseCustomer.constructFromObject(data, obj);
            BotManagementResponseEnabledServices.constructFromObject(data, obj);
            BotManagementResponseLinksGetAllServices.constructFromObject(data, obj);

            if (data.hasOwnProperty('product')) {
                obj['product'] = BotManagementResponseProductProduct.constructFromObject(data['product']);
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = BotManagementResponseCustomerCustomer.constructFromObject(data['customer']);
            }
            if (data.hasOwnProperty('services')) {
                obj['services'] = ApiClient.convertToType(data['services'], ['String']);
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = BotManagementResponseLinksGetAllServicesLinks.constructFromObject(data['_links']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BotManagementResponseProductProduct} product
 */
BotManagementResponseBodyGetAllServices.prototype['product'] = undefined;

/**
 * @member {module:model/BotManagementResponseCustomerCustomer} customer
 */
BotManagementResponseBodyGetAllServices.prototype['customer'] = undefined;

/**
 * A list of services with Bot Management enabled.
 * @member {Array.<String>} services
 */
BotManagementResponseBodyGetAllServices.prototype['services'] = undefined;

/**
 * @member {module:model/BotManagementResponseLinksGetAllServicesLinks} _links
 */
BotManagementResponseBodyGetAllServices.prototype['_links'] = undefined;


// Implement BotManagementResponseProduct interface:
/**
 * @member {module:model/BotManagementResponseProductProduct} product
 */
BotManagementResponseProduct.prototype['product'] = undefined;
// Implement BotManagementResponseCustomer interface:
/**
 * @member {module:model/BotManagementResponseCustomerCustomer} customer
 */
BotManagementResponseCustomer.prototype['customer'] = undefined;
// Implement BotManagementResponseEnabledServices interface:
/**
 * A list of services with Bot Management enabled.
 * @member {Array.<String>} services
 */
BotManagementResponseEnabledServices.prototype['services'] = undefined;
// Implement BotManagementResponseLinksGetAllServices interface:
/**
 * @member {module:model/BotManagementResponseLinksGetAllServicesLinks} _links
 */
BotManagementResponseLinksGetAllServices.prototype['_links'] = undefined;




export default BotManagementResponseBodyGetAllServices;

