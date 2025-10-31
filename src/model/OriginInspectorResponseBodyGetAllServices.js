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
import OriginInspectorResponseCustomer from './OriginInspectorResponseCustomer';
import OriginInspectorResponseEnabledServices from './OriginInspectorResponseEnabledServices';
import OriginInspectorResponseLinksGetAllServices from './OriginInspectorResponseLinksGetAllServices';
import OriginInspectorResponseLinksGetAllServicesLinks from './OriginInspectorResponseLinksGetAllServicesLinks';
import OriginInspectorResponseProduct from './OriginInspectorResponseProduct';
import OriginInspectorResponseProductProduct from './OriginInspectorResponseProductProduct';

/**
 * The OriginInspectorResponseBodyGetAllServices model module.
 * @module model/OriginInspectorResponseBodyGetAllServices
 * @version 14.0.0
 */
class OriginInspectorResponseBodyGetAllServices {
    /**
     * Constructs a new <code>OriginInspectorResponseBodyGetAllServices</code>.
     * @alias module:model/OriginInspectorResponseBodyGetAllServices
     * @implements module:model/OriginInspectorResponseProduct
     * @implements module:model/OriginInspectorResponseCustomer
     * @implements module:model/OriginInspectorResponseEnabledServices
     * @implements module:model/OriginInspectorResponseLinksGetAllServices
     */
    constructor() { 
        OriginInspectorResponseProduct.initialize(this);OriginInspectorResponseCustomer.initialize(this);OriginInspectorResponseEnabledServices.initialize(this);OriginInspectorResponseLinksGetAllServices.initialize(this);
        OriginInspectorResponseBodyGetAllServices.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OriginInspectorResponseBodyGetAllServices</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OriginInspectorResponseBodyGetAllServices} obj Optional instance to populate.
     * @return {module:model/OriginInspectorResponseBodyGetAllServices} The populated <code>OriginInspectorResponseBodyGetAllServices</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OriginInspectorResponseBodyGetAllServices();
            OriginInspectorResponseProduct.constructFromObject(data, obj);
            OriginInspectorResponseCustomer.constructFromObject(data, obj);
            OriginInspectorResponseEnabledServices.constructFromObject(data, obj);
            OriginInspectorResponseLinksGetAllServices.constructFromObject(data, obj);

            if (data.hasOwnProperty('product')) {
                obj['product'] = OriginInspectorResponseProductProduct.constructFromObject(data['product']);
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = BotManagementResponseCustomerCustomer.constructFromObject(data['customer']);
            }
            if (data.hasOwnProperty('services')) {
                obj['services'] = ApiClient.convertToType(data['services'], ['String']);
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = OriginInspectorResponseLinksGetAllServicesLinks.constructFromObject(data['_links']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/OriginInspectorResponseProductProduct} product
 */
OriginInspectorResponseBodyGetAllServices.prototype['product'] = undefined;

/**
 * @member {module:model/BotManagementResponseCustomerCustomer} customer
 */
OriginInspectorResponseBodyGetAllServices.prototype['customer'] = undefined;

/**
 * A list of services with Origin Inspector enabled.
 * @member {Array.<String>} services
 */
OriginInspectorResponseBodyGetAllServices.prototype['services'] = undefined;

/**
 * @member {module:model/OriginInspectorResponseLinksGetAllServicesLinks} _links
 */
OriginInspectorResponseBodyGetAllServices.prototype['_links'] = undefined;


// Implement OriginInspectorResponseProduct interface:
/**
 * @member {module:model/OriginInspectorResponseProductProduct} product
 */
OriginInspectorResponseProduct.prototype['product'] = undefined;
// Implement OriginInspectorResponseCustomer interface:
/**
 * @member {module:model/BotManagementResponseCustomerCustomer} customer
 */
OriginInspectorResponseCustomer.prototype['customer'] = undefined;
// Implement OriginInspectorResponseEnabledServices interface:
/**
 * A list of services with Origin Inspector enabled.
 * @member {Array.<String>} services
 */
OriginInspectorResponseEnabledServices.prototype['services'] = undefined;
// Implement OriginInspectorResponseLinksGetAllServices interface:
/**
 * @member {module:model/OriginInspectorResponseLinksGetAllServicesLinks} _links
 */
OriginInspectorResponseLinksGetAllServices.prototype['_links'] = undefined;




export default OriginInspectorResponseBodyGetAllServices;

