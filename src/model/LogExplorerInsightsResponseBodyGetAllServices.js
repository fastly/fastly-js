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
import LogExplorerInsightsResponseCustomer from './LogExplorerInsightsResponseCustomer';
import LogExplorerInsightsResponseEnabledServices from './LogExplorerInsightsResponseEnabledServices';
import LogExplorerInsightsResponseLinksGetAllServices from './LogExplorerInsightsResponseLinksGetAllServices';
import LogExplorerInsightsResponseLinksGetAllServicesLinks from './LogExplorerInsightsResponseLinksGetAllServicesLinks';
import LogExplorerInsightsResponseProduct from './LogExplorerInsightsResponseProduct';
import LogExplorerInsightsResponseProductProduct from './LogExplorerInsightsResponseProductProduct';

/**
 * The LogExplorerInsightsResponseBodyGetAllServices model module.
 * @module model/LogExplorerInsightsResponseBodyGetAllServices
 * @version 11.0.0
 */
class LogExplorerInsightsResponseBodyGetAllServices {
    /**
     * Constructs a new <code>LogExplorerInsightsResponseBodyGetAllServices</code>.
     * @alias module:model/LogExplorerInsightsResponseBodyGetAllServices
     * @implements module:model/LogExplorerInsightsResponseProduct
     * @implements module:model/LogExplorerInsightsResponseCustomer
     * @implements module:model/LogExplorerInsightsResponseEnabledServices
     * @implements module:model/LogExplorerInsightsResponseLinksGetAllServices
     */
    constructor() { 
        LogExplorerInsightsResponseProduct.initialize(this);LogExplorerInsightsResponseCustomer.initialize(this);LogExplorerInsightsResponseEnabledServices.initialize(this);LogExplorerInsightsResponseLinksGetAllServices.initialize(this);
        LogExplorerInsightsResponseBodyGetAllServices.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LogExplorerInsightsResponseBodyGetAllServices</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LogExplorerInsightsResponseBodyGetAllServices} obj Optional instance to populate.
     * @return {module:model/LogExplorerInsightsResponseBodyGetAllServices} The populated <code>LogExplorerInsightsResponseBodyGetAllServices</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogExplorerInsightsResponseBodyGetAllServices();
            LogExplorerInsightsResponseProduct.constructFromObject(data, obj);
            LogExplorerInsightsResponseCustomer.constructFromObject(data, obj);
            LogExplorerInsightsResponseEnabledServices.constructFromObject(data, obj);
            LogExplorerInsightsResponseLinksGetAllServices.constructFromObject(data, obj);

            if (data.hasOwnProperty('product')) {
                obj['product'] = LogExplorerInsightsResponseProductProduct.constructFromObject(data['product']);
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = BotManagementResponseCustomerCustomer.constructFromObject(data['customer']);
            }
            if (data.hasOwnProperty('services')) {
                obj['services'] = ApiClient.convertToType(data['services'], ['String']);
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = LogExplorerInsightsResponseLinksGetAllServicesLinks.constructFromObject(data['_links']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/LogExplorerInsightsResponseProductProduct} product
 */
LogExplorerInsightsResponseBodyGetAllServices.prototype['product'] = undefined;

/**
 * @member {module:model/BotManagementResponseCustomerCustomer} customer
 */
LogExplorerInsightsResponseBodyGetAllServices.prototype['customer'] = undefined;

/**
 * A ist of services with Log Explorer & Insights enabled.
 * @member {Array.<String>} services
 */
LogExplorerInsightsResponseBodyGetAllServices.prototype['services'] = undefined;

/**
 * @member {module:model/LogExplorerInsightsResponseLinksGetAllServicesLinks} _links
 */
LogExplorerInsightsResponseBodyGetAllServices.prototype['_links'] = undefined;


// Implement LogExplorerInsightsResponseProduct interface:
/**
 * @member {module:model/LogExplorerInsightsResponseProductProduct} product
 */
LogExplorerInsightsResponseProduct.prototype['product'] = undefined;
// Implement LogExplorerInsightsResponseCustomer interface:
/**
 * @member {module:model/BotManagementResponseCustomerCustomer} customer
 */
LogExplorerInsightsResponseCustomer.prototype['customer'] = undefined;
// Implement LogExplorerInsightsResponseEnabledServices interface:
/**
 * A ist of services with Log Explorer & Insights enabled.
 * @member {Array.<String>} services
 */
LogExplorerInsightsResponseEnabledServices.prototype['services'] = undefined;
// Implement LogExplorerInsightsResponseLinksGetAllServices interface:
/**
 * @member {module:model/LogExplorerInsightsResponseLinksGetAllServicesLinks} _links
 */
LogExplorerInsightsResponseLinksGetAllServices.prototype['_links'] = undefined;




export default LogExplorerInsightsResponseBodyGetAllServices;

