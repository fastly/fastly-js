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

/**
 * The LogExplorerInsightsResponseCustomer model module.
 * @module model/LogExplorerInsightsResponseCustomer
 * @version 12.0.0
 */
class LogExplorerInsightsResponseCustomer {
    /**
     * Constructs a new <code>LogExplorerInsightsResponseCustomer</code>.
     * @alias module:model/LogExplorerInsightsResponseCustomer
     */
    constructor() { 
        
        LogExplorerInsightsResponseCustomer.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LogExplorerInsightsResponseCustomer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LogExplorerInsightsResponseCustomer} obj Optional instance to populate.
     * @return {module:model/LogExplorerInsightsResponseCustomer} The populated <code>LogExplorerInsightsResponseCustomer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogExplorerInsightsResponseCustomer();

            if (data.hasOwnProperty('customer')) {
                obj['customer'] = BotManagementResponseCustomerCustomer.constructFromObject(data['customer']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BotManagementResponseCustomerCustomer} customer
 */
LogExplorerInsightsResponseCustomer.prototype['customer'] = undefined;






export default LogExplorerInsightsResponseCustomer;

