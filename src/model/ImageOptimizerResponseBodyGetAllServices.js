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
import ImageOptimizerResponseCustomer from './ImageOptimizerResponseCustomer';
import ImageOptimizerResponseEnabledServices from './ImageOptimizerResponseEnabledServices';
import ImageOptimizerResponseLinksGetAllServices from './ImageOptimizerResponseLinksGetAllServices';
import ImageOptimizerResponseLinksGetAllServicesLinks from './ImageOptimizerResponseLinksGetAllServicesLinks';
import ImageOptimizerResponseProduct from './ImageOptimizerResponseProduct';
import ImageOptimizerResponseProductProduct from './ImageOptimizerResponseProductProduct';

/**
 * The ImageOptimizerResponseBodyGetAllServices model module.
 * @module model/ImageOptimizerResponseBodyGetAllServices
 * @version 15.0.0-beta.0
 */
class ImageOptimizerResponseBodyGetAllServices {
    /**
     * Constructs a new <code>ImageOptimizerResponseBodyGetAllServices</code>.
     * @alias module:model/ImageOptimizerResponseBodyGetAllServices
     * @implements module:model/ImageOptimizerResponseProduct
     * @implements module:model/ImageOptimizerResponseCustomer
     * @implements module:model/ImageOptimizerResponseEnabledServices
     * @implements module:model/ImageOptimizerResponseLinksGetAllServices
     */
    constructor() { 
        ImageOptimizerResponseProduct.initialize(this);ImageOptimizerResponseCustomer.initialize(this);ImageOptimizerResponseEnabledServices.initialize(this);ImageOptimizerResponseLinksGetAllServices.initialize(this);
        ImageOptimizerResponseBodyGetAllServices.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ImageOptimizerResponseBodyGetAllServices</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImageOptimizerResponseBodyGetAllServices} obj Optional instance to populate.
     * @return {module:model/ImageOptimizerResponseBodyGetAllServices} The populated <code>ImageOptimizerResponseBodyGetAllServices</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ImageOptimizerResponseBodyGetAllServices();
            ImageOptimizerResponseProduct.constructFromObject(data, obj);
            ImageOptimizerResponseCustomer.constructFromObject(data, obj);
            ImageOptimizerResponseEnabledServices.constructFromObject(data, obj);
            ImageOptimizerResponseLinksGetAllServices.constructFromObject(data, obj);

            if (data.hasOwnProperty('product')) {
                obj['product'] = ImageOptimizerResponseProductProduct.constructFromObject(data['product']);
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = BotManagementResponseCustomerCustomer.constructFromObject(data['customer']);
            }
            if (data.hasOwnProperty('services')) {
                obj['services'] = ApiClient.convertToType(data['services'], ['String']);
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = ImageOptimizerResponseLinksGetAllServicesLinks.constructFromObject(data['_links']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ImageOptimizerResponseProductProduct} product
 */
ImageOptimizerResponseBodyGetAllServices.prototype['product'] = undefined;

/**
 * @member {module:model/BotManagementResponseCustomerCustomer} customer
 */
ImageOptimizerResponseBodyGetAllServices.prototype['customer'] = undefined;

/**
 * A list of services with Image Optimizer enabled.
 * @member {Array.<String>} services
 */
ImageOptimizerResponseBodyGetAllServices.prototype['services'] = undefined;

/**
 * @member {module:model/ImageOptimizerResponseLinksGetAllServicesLinks} _links
 */
ImageOptimizerResponseBodyGetAllServices.prototype['_links'] = undefined;


// Implement ImageOptimizerResponseProduct interface:
/**
 * @member {module:model/ImageOptimizerResponseProductProduct} product
 */
ImageOptimizerResponseProduct.prototype['product'] = undefined;
// Implement ImageOptimizerResponseCustomer interface:
/**
 * @member {module:model/BotManagementResponseCustomerCustomer} customer
 */
ImageOptimizerResponseCustomer.prototype['customer'] = undefined;
// Implement ImageOptimizerResponseEnabledServices interface:
/**
 * A list of services with Image Optimizer enabled.
 * @member {Array.<String>} services
 */
ImageOptimizerResponseEnabledServices.prototype['services'] = undefined;
// Implement ImageOptimizerResponseLinksGetAllServices interface:
/**
 * @member {module:model/ImageOptimizerResponseLinksGetAllServicesLinks} _links
 */
ImageOptimizerResponseLinksGetAllServices.prototype['_links'] = undefined;




export default ImageOptimizerResponseBodyGetAllServices;

