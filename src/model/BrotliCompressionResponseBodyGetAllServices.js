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
import BrotliCompressionResponseCustomer from './BrotliCompressionResponseCustomer';
import BrotliCompressionResponseEnabledServices from './BrotliCompressionResponseEnabledServices';
import BrotliCompressionResponseLinksGetAllServices from './BrotliCompressionResponseLinksGetAllServices';
import BrotliCompressionResponseLinksGetAllServicesLinks from './BrotliCompressionResponseLinksGetAllServicesLinks';
import BrotliCompressionResponseProduct from './BrotliCompressionResponseProduct';
import BrotliCompressionResponseProductProduct from './BrotliCompressionResponseProductProduct';

/**
 * The BrotliCompressionResponseBodyGetAllServices model module.
 * @module model/BrotliCompressionResponseBodyGetAllServices
 * @version 15.0.0
 */
class BrotliCompressionResponseBodyGetAllServices {
    /**
     * Constructs a new <code>BrotliCompressionResponseBodyGetAllServices</code>.
     * @alias module:model/BrotliCompressionResponseBodyGetAllServices
     * @implements module:model/BrotliCompressionResponseProduct
     * @implements module:model/BrotliCompressionResponseCustomer
     * @implements module:model/BrotliCompressionResponseEnabledServices
     * @implements module:model/BrotliCompressionResponseLinksGetAllServices
     */
    constructor() { 
        BrotliCompressionResponseProduct.initialize(this);BrotliCompressionResponseCustomer.initialize(this);BrotliCompressionResponseEnabledServices.initialize(this);BrotliCompressionResponseLinksGetAllServices.initialize(this);
        BrotliCompressionResponseBodyGetAllServices.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BrotliCompressionResponseBodyGetAllServices</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BrotliCompressionResponseBodyGetAllServices} obj Optional instance to populate.
     * @return {module:model/BrotliCompressionResponseBodyGetAllServices} The populated <code>BrotliCompressionResponseBodyGetAllServices</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BrotliCompressionResponseBodyGetAllServices();
            BrotliCompressionResponseProduct.constructFromObject(data, obj);
            BrotliCompressionResponseCustomer.constructFromObject(data, obj);
            BrotliCompressionResponseEnabledServices.constructFromObject(data, obj);
            BrotliCompressionResponseLinksGetAllServices.constructFromObject(data, obj);

            if (data.hasOwnProperty('product')) {
                obj['product'] = BrotliCompressionResponseProductProduct.constructFromObject(data['product']);
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = BotManagementResponseCustomerCustomer.constructFromObject(data['customer']);
            }
            if (data.hasOwnProperty('services')) {
                obj['services'] = ApiClient.convertToType(data['services'], ['String']);
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = BrotliCompressionResponseLinksGetAllServicesLinks.constructFromObject(data['_links']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BrotliCompressionResponseProductProduct} product
 */
BrotliCompressionResponseBodyGetAllServices.prototype['product'] = undefined;

/**
 * @member {module:model/BotManagementResponseCustomerCustomer} customer
 */
BrotliCompressionResponseBodyGetAllServices.prototype['customer'] = undefined;

/**
 * A list of services with Brotli Compression enabled.
 * @member {Array.<String>} services
 */
BrotliCompressionResponseBodyGetAllServices.prototype['services'] = undefined;

/**
 * @member {module:model/BrotliCompressionResponseLinksGetAllServicesLinks} _links
 */
BrotliCompressionResponseBodyGetAllServices.prototype['_links'] = undefined;


// Implement BrotliCompressionResponseProduct interface:
/**
 * @member {module:model/BrotliCompressionResponseProductProduct} product
 */
BrotliCompressionResponseProduct.prototype['product'] = undefined;
// Implement BrotliCompressionResponseCustomer interface:
/**
 * @member {module:model/BotManagementResponseCustomerCustomer} customer
 */
BrotliCompressionResponseCustomer.prototype['customer'] = undefined;
// Implement BrotliCompressionResponseEnabledServices interface:
/**
 * A list of services with Brotli Compression enabled.
 * @member {Array.<String>} services
 */
BrotliCompressionResponseEnabledServices.prototype['services'] = undefined;
// Implement BrotliCompressionResponseLinksGetAllServices interface:
/**
 * @member {module:model/BrotliCompressionResponseLinksGetAllServicesLinks} _links
 */
BrotliCompressionResponseLinksGetAllServices.prototype['_links'] = undefined;




export default BrotliCompressionResponseBodyGetAllServices;

