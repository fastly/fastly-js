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
import BotManagementResponseServiceService from './BotManagementResponseServiceService';
import LogExplorerInsightsResponseLinks from './LogExplorerInsightsResponseLinks';
import LogExplorerInsightsResponseLinksLinks from './LogExplorerInsightsResponseLinksLinks';
import LogExplorerInsightsResponseProduct from './LogExplorerInsightsResponseProduct';
import LogExplorerInsightsResponseProductProduct from './LogExplorerInsightsResponseProductProduct';
import LogExplorerInsightsResponseService from './LogExplorerInsightsResponseService';

/**
 * The LogExplorerInsightsResponseBodyEnable model module.
 * @module model/LogExplorerInsightsResponseBodyEnable
 * @version 12.0.0
 */
class LogExplorerInsightsResponseBodyEnable {
    /**
     * Constructs a new <code>LogExplorerInsightsResponseBodyEnable</code>.
     * @alias module:model/LogExplorerInsightsResponseBodyEnable
     * @implements module:model/LogExplorerInsightsResponseProduct
     * @implements module:model/LogExplorerInsightsResponseService
     * @implements module:model/LogExplorerInsightsResponseLinks
     */
    constructor() { 
        LogExplorerInsightsResponseProduct.initialize(this);LogExplorerInsightsResponseService.initialize(this);LogExplorerInsightsResponseLinks.initialize(this);
        LogExplorerInsightsResponseBodyEnable.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LogExplorerInsightsResponseBodyEnable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LogExplorerInsightsResponseBodyEnable} obj Optional instance to populate.
     * @return {module:model/LogExplorerInsightsResponseBodyEnable} The populated <code>LogExplorerInsightsResponseBodyEnable</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogExplorerInsightsResponseBodyEnable();
            LogExplorerInsightsResponseProduct.constructFromObject(data, obj);
            LogExplorerInsightsResponseService.constructFromObject(data, obj);
            LogExplorerInsightsResponseLinks.constructFromObject(data, obj);

            if (data.hasOwnProperty('product')) {
                obj['product'] = LogExplorerInsightsResponseProductProduct.constructFromObject(data['product']);
            }
            if (data.hasOwnProperty('service')) {
                obj['service'] = BotManagementResponseServiceService.constructFromObject(data['service']);
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = LogExplorerInsightsResponseLinksLinks.constructFromObject(data['_links']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/LogExplorerInsightsResponseProductProduct} product
 */
LogExplorerInsightsResponseBodyEnable.prototype['product'] = undefined;

/**
 * @member {module:model/BotManagementResponseServiceService} service
 */
LogExplorerInsightsResponseBodyEnable.prototype['service'] = undefined;

/**
 * @member {module:model/LogExplorerInsightsResponseLinksLinks} _links
 */
LogExplorerInsightsResponseBodyEnable.prototype['_links'] = undefined;


// Implement LogExplorerInsightsResponseProduct interface:
/**
 * @member {module:model/LogExplorerInsightsResponseProductProduct} product
 */
LogExplorerInsightsResponseProduct.prototype['product'] = undefined;
// Implement LogExplorerInsightsResponseService interface:
/**
 * @member {module:model/BotManagementResponseServiceService} service
 */
LogExplorerInsightsResponseService.prototype['service'] = undefined;
// Implement LogExplorerInsightsResponseLinks interface:
/**
 * @member {module:model/LogExplorerInsightsResponseLinksLinks} _links
 */
LogExplorerInsightsResponseLinks.prototype['_links'] = undefined;




export default LogExplorerInsightsResponseBodyEnable;

