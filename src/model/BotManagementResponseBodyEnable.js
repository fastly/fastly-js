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
import BotManagementResponseLinks from './BotManagementResponseLinks';
import BotManagementResponseLinksLinks from './BotManagementResponseLinksLinks';
import BotManagementResponseProduct from './BotManagementResponseProduct';
import BotManagementResponseProductProduct from './BotManagementResponseProductProduct';
import BotManagementResponseService from './BotManagementResponseService';
import BotManagementResponseServiceService from './BotManagementResponseServiceService';

/**
 * The BotManagementResponseBodyEnable model module.
 * @module model/BotManagementResponseBodyEnable
 * @version 12.1.0
 */
class BotManagementResponseBodyEnable {
    /**
     * Constructs a new <code>BotManagementResponseBodyEnable</code>.
     * @alias module:model/BotManagementResponseBodyEnable
     * @implements module:model/BotManagementResponseProduct
     * @implements module:model/BotManagementResponseService
     * @implements module:model/BotManagementResponseLinks
     */
    constructor() { 
        BotManagementResponseProduct.initialize(this);BotManagementResponseService.initialize(this);BotManagementResponseLinks.initialize(this);
        BotManagementResponseBodyEnable.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BotManagementResponseBodyEnable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BotManagementResponseBodyEnable} obj Optional instance to populate.
     * @return {module:model/BotManagementResponseBodyEnable} The populated <code>BotManagementResponseBodyEnable</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BotManagementResponseBodyEnable();
            BotManagementResponseProduct.constructFromObject(data, obj);
            BotManagementResponseService.constructFromObject(data, obj);
            BotManagementResponseLinks.constructFromObject(data, obj);

            if (data.hasOwnProperty('product')) {
                obj['product'] = BotManagementResponseProductProduct.constructFromObject(data['product']);
            }
            if (data.hasOwnProperty('service')) {
                obj['service'] = BotManagementResponseServiceService.constructFromObject(data['service']);
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = BotManagementResponseLinksLinks.constructFromObject(data['_links']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BotManagementResponseProductProduct} product
 */
BotManagementResponseBodyEnable.prototype['product'] = undefined;

/**
 * @member {module:model/BotManagementResponseServiceService} service
 */
BotManagementResponseBodyEnable.prototype['service'] = undefined;

/**
 * @member {module:model/BotManagementResponseLinksLinks} _links
 */
BotManagementResponseBodyEnable.prototype['_links'] = undefined;


// Implement BotManagementResponseProduct interface:
/**
 * @member {module:model/BotManagementResponseProductProduct} product
 */
BotManagementResponseProduct.prototype['product'] = undefined;
// Implement BotManagementResponseService interface:
/**
 * @member {module:model/BotManagementResponseServiceService} service
 */
BotManagementResponseService.prototype['service'] = undefined;
// Implement BotManagementResponseLinks interface:
/**
 * @member {module:model/BotManagementResponseLinksLinks} _links
 */
BotManagementResponseLinks.prototype['_links'] = undefined;




export default BotManagementResponseBodyEnable;

