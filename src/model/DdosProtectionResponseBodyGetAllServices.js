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
import DdosProtectionResponseCustomer from './DdosProtectionResponseCustomer';
import DdosProtectionResponseEnabledServices from './DdosProtectionResponseEnabledServices';
import DdosProtectionResponseLinksGetAllServices from './DdosProtectionResponseLinksGetAllServices';
import DdosProtectionResponseLinksGetAllServicesLinks from './DdosProtectionResponseLinksGetAllServicesLinks';
import DdosProtectionResponseProduct from './DdosProtectionResponseProduct';
import DdosProtectionResponseProductProduct from './DdosProtectionResponseProductProduct';

/**
 * The DdosProtectionResponseBodyGetAllServices model module.
 * @module model/DdosProtectionResponseBodyGetAllServices
 * @version 15.0.0-beta.4
 */
class DdosProtectionResponseBodyGetAllServices {
    /**
     * Constructs a new <code>DdosProtectionResponseBodyGetAllServices</code>.
     * @alias module:model/DdosProtectionResponseBodyGetAllServices
     * @implements module:model/DdosProtectionResponseProduct
     * @implements module:model/DdosProtectionResponseCustomer
     * @implements module:model/DdosProtectionResponseEnabledServices
     * @implements module:model/DdosProtectionResponseLinksGetAllServices
     */
    constructor() { 
        DdosProtectionResponseProduct.initialize(this);DdosProtectionResponseCustomer.initialize(this);DdosProtectionResponseEnabledServices.initialize(this);DdosProtectionResponseLinksGetAllServices.initialize(this);
        DdosProtectionResponseBodyGetAllServices.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DdosProtectionResponseBodyGetAllServices</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DdosProtectionResponseBodyGetAllServices} obj Optional instance to populate.
     * @return {module:model/DdosProtectionResponseBodyGetAllServices} The populated <code>DdosProtectionResponseBodyGetAllServices</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DdosProtectionResponseBodyGetAllServices();
            DdosProtectionResponseProduct.constructFromObject(data, obj);
            DdosProtectionResponseCustomer.constructFromObject(data, obj);
            DdosProtectionResponseEnabledServices.constructFromObject(data, obj);
            DdosProtectionResponseLinksGetAllServices.constructFromObject(data, obj);

            if (data.hasOwnProperty('product')) {
                obj['product'] = DdosProtectionResponseProductProduct.constructFromObject(data['product']);
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = BotManagementResponseCustomerCustomer.constructFromObject(data['customer']);
            }
            if (data.hasOwnProperty('services')) {
                obj['services'] = ApiClient.convertToType(data['services'], ['String']);
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = DdosProtectionResponseLinksGetAllServicesLinks.constructFromObject(data['_links']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/DdosProtectionResponseProductProduct} product
 */
DdosProtectionResponseBodyGetAllServices.prototype['product'] = undefined;

/**
 * @member {module:model/BotManagementResponseCustomerCustomer} customer
 */
DdosProtectionResponseBodyGetAllServices.prototype['customer'] = undefined;

/**
 * A list of services with DDoS Protection enabled.
 * @member {Array.<String>} services
 */
DdosProtectionResponseBodyGetAllServices.prototype['services'] = undefined;

/**
 * @member {module:model/DdosProtectionResponseLinksGetAllServicesLinks} _links
 */
DdosProtectionResponseBodyGetAllServices.prototype['_links'] = undefined;


// Implement DdosProtectionResponseProduct interface:
/**
 * @member {module:model/DdosProtectionResponseProductProduct} product
 */
DdosProtectionResponseProduct.prototype['product'] = undefined;
// Implement DdosProtectionResponseCustomer interface:
/**
 * @member {module:model/BotManagementResponseCustomerCustomer} customer
 */
DdosProtectionResponseCustomer.prototype['customer'] = undefined;
// Implement DdosProtectionResponseEnabledServices interface:
/**
 * A list of services with DDoS Protection enabled.
 * @member {Array.<String>} services
 */
DdosProtectionResponseEnabledServices.prototype['services'] = undefined;
// Implement DdosProtectionResponseLinksGetAllServices interface:
/**
 * @member {module:model/DdosProtectionResponseLinksGetAllServicesLinks} _links
 */
DdosProtectionResponseLinksGetAllServices.prototype['_links'] = undefined;




export default DdosProtectionResponseBodyGetAllServices;

