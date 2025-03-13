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
import FanoutResponseLinks from './FanoutResponseLinks';
import FanoutResponseLinksLinks from './FanoutResponseLinksLinks';
import FanoutResponseProduct from './FanoutResponseProduct';
import FanoutResponseProductProduct from './FanoutResponseProductProduct';
import FanoutResponseService from './FanoutResponseService';

/**
 * The FanoutResponseBodyEnable model module.
 * @module model/FanoutResponseBodyEnable
 * @version 10.0.0
 */
class FanoutResponseBodyEnable {
    /**
     * Constructs a new <code>FanoutResponseBodyEnable</code>.
     * @alias module:model/FanoutResponseBodyEnable
     * @implements module:model/FanoutResponseProduct
     * @implements module:model/FanoutResponseService
     * @implements module:model/FanoutResponseLinks
     */
    constructor() { 
        FanoutResponseProduct.initialize(this);FanoutResponseService.initialize(this);FanoutResponseLinks.initialize(this);
        FanoutResponseBodyEnable.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FanoutResponseBodyEnable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FanoutResponseBodyEnable} obj Optional instance to populate.
     * @return {module:model/FanoutResponseBodyEnable} The populated <code>FanoutResponseBodyEnable</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FanoutResponseBodyEnable();
            FanoutResponseProduct.constructFromObject(data, obj);
            FanoutResponseService.constructFromObject(data, obj);
            FanoutResponseLinks.constructFromObject(data, obj);

            if (data.hasOwnProperty('product')) {
                obj['product'] = FanoutResponseProductProduct.constructFromObject(data['product']);
            }
            if (data.hasOwnProperty('service')) {
                obj['service'] = BotManagementResponseServiceService.constructFromObject(data['service']);
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = FanoutResponseLinksLinks.constructFromObject(data['_links']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/FanoutResponseProductProduct} product
 */
FanoutResponseBodyEnable.prototype['product'] = undefined;

/**
 * @member {module:model/BotManagementResponseServiceService} service
 */
FanoutResponseBodyEnable.prototype['service'] = undefined;

/**
 * @member {module:model/FanoutResponseLinksLinks} _links
 */
FanoutResponseBodyEnable.prototype['_links'] = undefined;


// Implement FanoutResponseProduct interface:
/**
 * @member {module:model/FanoutResponseProductProduct} product
 */
FanoutResponseProduct.prototype['product'] = undefined;
// Implement FanoutResponseService interface:
/**
 * @member {module:model/BotManagementResponseServiceService} service
 */
FanoutResponseService.prototype['service'] = undefined;
// Implement FanoutResponseLinks interface:
/**
 * @member {module:model/FanoutResponseLinksLinks} _links
 */
FanoutResponseLinks.prototype['_links'] = undefined;




export default FanoutResponseBodyEnable;

