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
import FanoutResponseCustomer from './FanoutResponseCustomer';
import FanoutResponseEnabledServices from './FanoutResponseEnabledServices';
import FanoutResponseLinksGetAllServices from './FanoutResponseLinksGetAllServices';
import FanoutResponseLinksGetAllServicesLinks from './FanoutResponseLinksGetAllServicesLinks';
import FanoutResponseProduct from './FanoutResponseProduct';
import FanoutResponseProductProduct from './FanoutResponseProductProduct';

/**
 * The FanoutResponseBodyGetAllServices model module.
 * @module model/FanoutResponseBodyGetAllServices
 * @version 12.1.0
 */
class FanoutResponseBodyGetAllServices {
    /**
     * Constructs a new <code>FanoutResponseBodyGetAllServices</code>.
     * @alias module:model/FanoutResponseBodyGetAllServices
     * @implements module:model/FanoutResponseProduct
     * @implements module:model/FanoutResponseCustomer
     * @implements module:model/FanoutResponseEnabledServices
     * @implements module:model/FanoutResponseLinksGetAllServices
     */
    constructor() { 
        FanoutResponseProduct.initialize(this);FanoutResponseCustomer.initialize(this);FanoutResponseEnabledServices.initialize(this);FanoutResponseLinksGetAllServices.initialize(this);
        FanoutResponseBodyGetAllServices.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FanoutResponseBodyGetAllServices</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FanoutResponseBodyGetAllServices} obj Optional instance to populate.
     * @return {module:model/FanoutResponseBodyGetAllServices} The populated <code>FanoutResponseBodyGetAllServices</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FanoutResponseBodyGetAllServices();
            FanoutResponseProduct.constructFromObject(data, obj);
            FanoutResponseCustomer.constructFromObject(data, obj);
            FanoutResponseEnabledServices.constructFromObject(data, obj);
            FanoutResponseLinksGetAllServices.constructFromObject(data, obj);

            if (data.hasOwnProperty('product')) {
                obj['product'] = FanoutResponseProductProduct.constructFromObject(data['product']);
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = BotManagementResponseCustomerCustomer.constructFromObject(data['customer']);
            }
            if (data.hasOwnProperty('services')) {
                obj['services'] = ApiClient.convertToType(data['services'], ['String']);
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = FanoutResponseLinksGetAllServicesLinks.constructFromObject(data['_links']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/FanoutResponseProductProduct} product
 */
FanoutResponseBodyGetAllServices.prototype['product'] = undefined;

/**
 * @member {module:model/BotManagementResponseCustomerCustomer} customer
 */
FanoutResponseBodyGetAllServices.prototype['customer'] = undefined;

/**
 * A list of services with Fanout enabled.
 * @member {Array.<String>} services
 */
FanoutResponseBodyGetAllServices.prototype['services'] = undefined;

/**
 * @member {module:model/FanoutResponseLinksGetAllServicesLinks} _links
 */
FanoutResponseBodyGetAllServices.prototype['_links'] = undefined;


// Implement FanoutResponseProduct interface:
/**
 * @member {module:model/FanoutResponseProductProduct} product
 */
FanoutResponseProduct.prototype['product'] = undefined;
// Implement FanoutResponseCustomer interface:
/**
 * @member {module:model/BotManagementResponseCustomerCustomer} customer
 */
FanoutResponseCustomer.prototype['customer'] = undefined;
// Implement FanoutResponseEnabledServices interface:
/**
 * A list of services with Fanout enabled.
 * @member {Array.<String>} services
 */
FanoutResponseEnabledServices.prototype['services'] = undefined;
// Implement FanoutResponseLinksGetAllServices interface:
/**
 * @member {module:model/FanoutResponseLinksGetAllServicesLinks} _links
 */
FanoutResponseLinksGetAllServices.prototype['_links'] = undefined;




export default FanoutResponseBodyGetAllServices;

