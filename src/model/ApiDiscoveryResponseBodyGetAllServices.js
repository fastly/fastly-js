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
import ApiDiscoveryResponseCustomer from './ApiDiscoveryResponseCustomer';
import ApiDiscoveryResponseCustomerCustomer from './ApiDiscoveryResponseCustomerCustomer';
import ApiDiscoveryResponseEnabledServices from './ApiDiscoveryResponseEnabledServices';
import ApiDiscoveryResponseLinksGetAllServices from './ApiDiscoveryResponseLinksGetAllServices';
import ApiDiscoveryResponseLinksGetAllServicesLinks from './ApiDiscoveryResponseLinksGetAllServicesLinks';
import ApiDiscoveryResponseProduct from './ApiDiscoveryResponseProduct';
import ApiDiscoveryResponseProductProduct from './ApiDiscoveryResponseProductProduct';

/**
 * The ApiDiscoveryResponseBodyGetAllServices model module.
 * @module model/ApiDiscoveryResponseBodyGetAllServices
 * @version 15.0.0-beta.3
 */
class ApiDiscoveryResponseBodyGetAllServices {
    /**
     * Constructs a new <code>ApiDiscoveryResponseBodyGetAllServices</code>.
     * @alias module:model/ApiDiscoveryResponseBodyGetAllServices
     * @implements module:model/ApiDiscoveryResponseProduct
     * @implements module:model/ApiDiscoveryResponseCustomer
     * @implements module:model/ApiDiscoveryResponseEnabledServices
     * @implements module:model/ApiDiscoveryResponseLinksGetAllServices
     */
    constructor() { 
        ApiDiscoveryResponseProduct.initialize(this);ApiDiscoveryResponseCustomer.initialize(this);ApiDiscoveryResponseEnabledServices.initialize(this);ApiDiscoveryResponseLinksGetAllServices.initialize(this);
        ApiDiscoveryResponseBodyGetAllServices.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApiDiscoveryResponseBodyGetAllServices</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiDiscoveryResponseBodyGetAllServices} obj Optional instance to populate.
     * @return {module:model/ApiDiscoveryResponseBodyGetAllServices} The populated <code>ApiDiscoveryResponseBodyGetAllServices</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiDiscoveryResponseBodyGetAllServices();
            ApiDiscoveryResponseProduct.constructFromObject(data, obj);
            ApiDiscoveryResponseCustomer.constructFromObject(data, obj);
            ApiDiscoveryResponseEnabledServices.constructFromObject(data, obj);
            ApiDiscoveryResponseLinksGetAllServices.constructFromObject(data, obj);

            if (data.hasOwnProperty('product')) {
                obj['product'] = ApiDiscoveryResponseProductProduct.constructFromObject(data['product']);
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = ApiDiscoveryResponseCustomerCustomer.constructFromObject(data['customer']);
            }
            if (data.hasOwnProperty('services')) {
                obj['services'] = ApiClient.convertToType(data['services'], ['String']);
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = ApiDiscoveryResponseLinksGetAllServicesLinks.constructFromObject(data['_links']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ApiDiscoveryResponseProductProduct} product
 */
ApiDiscoveryResponseBodyGetAllServices.prototype['product'] = undefined;

/**
 * @member {module:model/ApiDiscoveryResponseCustomerCustomer} customer
 */
ApiDiscoveryResponseBodyGetAllServices.prototype['customer'] = undefined;

/**
 * A list of services for a customer with API Discovery enabled.
 * @member {Array.<String>} services
 */
ApiDiscoveryResponseBodyGetAllServices.prototype['services'] = undefined;

/**
 * @member {module:model/ApiDiscoveryResponseLinksGetAllServicesLinks} _links
 */
ApiDiscoveryResponseBodyGetAllServices.prototype['_links'] = undefined;


// Implement ApiDiscoveryResponseProduct interface:
/**
 * @member {module:model/ApiDiscoveryResponseProductProduct} product
 */
ApiDiscoveryResponseProduct.prototype['product'] = undefined;
// Implement ApiDiscoveryResponseCustomer interface:
/**
 * @member {module:model/ApiDiscoveryResponseCustomerCustomer} customer
 */
ApiDiscoveryResponseCustomer.prototype['customer'] = undefined;
// Implement ApiDiscoveryResponseEnabledServices interface:
/**
 * A list of services for a customer with API Discovery enabled.
 * @member {Array.<String>} services
 */
ApiDiscoveryResponseEnabledServices.prototype['services'] = undefined;
// Implement ApiDiscoveryResponseLinksGetAllServices interface:
/**
 * @member {module:model/ApiDiscoveryResponseLinksGetAllServicesLinks} _links
 */
ApiDiscoveryResponseLinksGetAllServices.prototype['_links'] = undefined;




export default ApiDiscoveryResponseBodyGetAllServices;

