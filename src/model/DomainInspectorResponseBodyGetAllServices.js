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
import DomainInspectorResponseCustomer from './DomainInspectorResponseCustomer';
import DomainInspectorResponseEnabledServices from './DomainInspectorResponseEnabledServices';
import DomainInspectorResponseLinksGetAllServices from './DomainInspectorResponseLinksGetAllServices';
import DomainInspectorResponseLinksGetAllServicesLinks from './DomainInspectorResponseLinksGetAllServicesLinks';
import DomainInspectorResponseProduct from './DomainInspectorResponseProduct';
import DomainInspectorResponseProductProduct from './DomainInspectorResponseProductProduct';

/**
 * The DomainInspectorResponseBodyGetAllServices model module.
 * @module model/DomainInspectorResponseBodyGetAllServices
 * @version 12.1.0
 */
class DomainInspectorResponseBodyGetAllServices {
    /**
     * Constructs a new <code>DomainInspectorResponseBodyGetAllServices</code>.
     * @alias module:model/DomainInspectorResponseBodyGetAllServices
     * @implements module:model/DomainInspectorResponseProduct
     * @implements module:model/DomainInspectorResponseCustomer
     * @implements module:model/DomainInspectorResponseEnabledServices
     * @implements module:model/DomainInspectorResponseLinksGetAllServices
     */
    constructor() { 
        DomainInspectorResponseProduct.initialize(this);DomainInspectorResponseCustomer.initialize(this);DomainInspectorResponseEnabledServices.initialize(this);DomainInspectorResponseLinksGetAllServices.initialize(this);
        DomainInspectorResponseBodyGetAllServices.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DomainInspectorResponseBodyGetAllServices</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DomainInspectorResponseBodyGetAllServices} obj Optional instance to populate.
     * @return {module:model/DomainInspectorResponseBodyGetAllServices} The populated <code>DomainInspectorResponseBodyGetAllServices</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DomainInspectorResponseBodyGetAllServices();
            DomainInspectorResponseProduct.constructFromObject(data, obj);
            DomainInspectorResponseCustomer.constructFromObject(data, obj);
            DomainInspectorResponseEnabledServices.constructFromObject(data, obj);
            DomainInspectorResponseLinksGetAllServices.constructFromObject(data, obj);

            if (data.hasOwnProperty('product')) {
                obj['product'] = DomainInspectorResponseProductProduct.constructFromObject(data['product']);
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = BotManagementResponseCustomerCustomer.constructFromObject(data['customer']);
            }
            if (data.hasOwnProperty('services')) {
                obj['services'] = ApiClient.convertToType(data['services'], ['String']);
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = DomainInspectorResponseLinksGetAllServicesLinks.constructFromObject(data['_links']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/DomainInspectorResponseProductProduct} product
 */
DomainInspectorResponseBodyGetAllServices.prototype['product'] = undefined;

/**
 * @member {module:model/BotManagementResponseCustomerCustomer} customer
 */
DomainInspectorResponseBodyGetAllServices.prototype['customer'] = undefined;

/**
 * A list of services with Domain Inspector enabled.
 * @member {Array.<String>} services
 */
DomainInspectorResponseBodyGetAllServices.prototype['services'] = undefined;

/**
 * @member {module:model/DomainInspectorResponseLinksGetAllServicesLinks} _links
 */
DomainInspectorResponseBodyGetAllServices.prototype['_links'] = undefined;


// Implement DomainInspectorResponseProduct interface:
/**
 * @member {module:model/DomainInspectorResponseProductProduct} product
 */
DomainInspectorResponseProduct.prototype['product'] = undefined;
// Implement DomainInspectorResponseCustomer interface:
/**
 * @member {module:model/BotManagementResponseCustomerCustomer} customer
 */
DomainInspectorResponseCustomer.prototype['customer'] = undefined;
// Implement DomainInspectorResponseEnabledServices interface:
/**
 * A list of services with Domain Inspector enabled.
 * @member {Array.<String>} services
 */
DomainInspectorResponseEnabledServices.prototype['services'] = undefined;
// Implement DomainInspectorResponseLinksGetAllServices interface:
/**
 * @member {module:model/DomainInspectorResponseLinksGetAllServicesLinks} _links
 */
DomainInspectorResponseLinksGetAllServices.prototype['_links'] = undefined;




export default DomainInspectorResponseBodyGetAllServices;

