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
import WebsocketsResponseCustomer from './WebsocketsResponseCustomer';
import WebsocketsResponseEnabledServices from './WebsocketsResponseEnabledServices';
import WebsocketsResponseLinksGetAllServices from './WebsocketsResponseLinksGetAllServices';
import WebsocketsResponseLinksGetAllServicesLinks from './WebsocketsResponseLinksGetAllServicesLinks';
import WebsocketsResponseProduct from './WebsocketsResponseProduct';
import WebsocketsResponseProductProduct from './WebsocketsResponseProductProduct';

/**
 * The WebsocketsResponseBodyGetAllServices model module.
 * @module model/WebsocketsResponseBodyGetAllServices
 * @version 14.1.0
 */
class WebsocketsResponseBodyGetAllServices {
    /**
     * Constructs a new <code>WebsocketsResponseBodyGetAllServices</code>.
     * @alias module:model/WebsocketsResponseBodyGetAllServices
     * @implements module:model/WebsocketsResponseProduct
     * @implements module:model/WebsocketsResponseCustomer
     * @implements module:model/WebsocketsResponseEnabledServices
     * @implements module:model/WebsocketsResponseLinksGetAllServices
     */
    constructor() { 
        WebsocketsResponseProduct.initialize(this);WebsocketsResponseCustomer.initialize(this);WebsocketsResponseEnabledServices.initialize(this);WebsocketsResponseLinksGetAllServices.initialize(this);
        WebsocketsResponseBodyGetAllServices.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebsocketsResponseBodyGetAllServices</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebsocketsResponseBodyGetAllServices} obj Optional instance to populate.
     * @return {module:model/WebsocketsResponseBodyGetAllServices} The populated <code>WebsocketsResponseBodyGetAllServices</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebsocketsResponseBodyGetAllServices();
            WebsocketsResponseProduct.constructFromObject(data, obj);
            WebsocketsResponseCustomer.constructFromObject(data, obj);
            WebsocketsResponseEnabledServices.constructFromObject(data, obj);
            WebsocketsResponseLinksGetAllServices.constructFromObject(data, obj);

            if (data.hasOwnProperty('product')) {
                obj['product'] = WebsocketsResponseProductProduct.constructFromObject(data['product']);
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = BotManagementResponseCustomerCustomer.constructFromObject(data['customer']);
            }
            if (data.hasOwnProperty('services')) {
                obj['services'] = ApiClient.convertToType(data['services'], ['String']);
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = WebsocketsResponseLinksGetAllServicesLinks.constructFromObject(data['_links']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/WebsocketsResponseProductProduct} product
 */
WebsocketsResponseBodyGetAllServices.prototype['product'] = undefined;

/**
 * @member {module:model/BotManagementResponseCustomerCustomer} customer
 */
WebsocketsResponseBodyGetAllServices.prototype['customer'] = undefined;

/**
 * A list of services with Websockets enabled.
 * @member {Array.<String>} services
 */
WebsocketsResponseBodyGetAllServices.prototype['services'] = undefined;

/**
 * @member {module:model/WebsocketsResponseLinksGetAllServicesLinks} _links
 */
WebsocketsResponseBodyGetAllServices.prototype['_links'] = undefined;


// Implement WebsocketsResponseProduct interface:
/**
 * @member {module:model/WebsocketsResponseProductProduct} product
 */
WebsocketsResponseProduct.prototype['product'] = undefined;
// Implement WebsocketsResponseCustomer interface:
/**
 * @member {module:model/BotManagementResponseCustomerCustomer} customer
 */
WebsocketsResponseCustomer.prototype['customer'] = undefined;
// Implement WebsocketsResponseEnabledServices interface:
/**
 * A list of services with Websockets enabled.
 * @member {Array.<String>} services
 */
WebsocketsResponseEnabledServices.prototype['services'] = undefined;
// Implement WebsocketsResponseLinksGetAllServices interface:
/**
 * @member {module:model/WebsocketsResponseLinksGetAllServicesLinks} _links
 */
WebsocketsResponseLinksGetAllServices.prototype['_links'] = undefined;




export default WebsocketsResponseBodyGetAllServices;

