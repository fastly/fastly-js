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
import ApiDiscoveryResponseLinks from './ApiDiscoveryResponseLinks';
import ApiDiscoveryResponseLinksLinks from './ApiDiscoveryResponseLinksLinks';
import ApiDiscoveryResponseProduct from './ApiDiscoveryResponseProduct';
import ApiDiscoveryResponseProductProduct from './ApiDiscoveryResponseProductProduct';
import ApiDiscoveryResponseService from './ApiDiscoveryResponseService';
import ApiDiscoveryResponseServiceService from './ApiDiscoveryResponseServiceService';

/**
 * The ApiDiscoveryResponseEnable model module.
 * @module model/ApiDiscoveryResponseEnable
 * @version 15.0.0-beta.2
 */
class ApiDiscoveryResponseEnable {
    /**
     * Constructs a new <code>ApiDiscoveryResponseEnable</code>.
     * @alias module:model/ApiDiscoveryResponseEnable
     * @implements module:model/ApiDiscoveryResponseProduct
     * @implements module:model/ApiDiscoveryResponseService
     * @implements module:model/ApiDiscoveryResponseLinks
     */
    constructor() { 
        ApiDiscoveryResponseProduct.initialize(this);ApiDiscoveryResponseService.initialize(this);ApiDiscoveryResponseLinks.initialize(this);
        ApiDiscoveryResponseEnable.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApiDiscoveryResponseEnable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiDiscoveryResponseEnable} obj Optional instance to populate.
     * @return {module:model/ApiDiscoveryResponseEnable} The populated <code>ApiDiscoveryResponseEnable</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiDiscoveryResponseEnable();
            ApiDiscoveryResponseProduct.constructFromObject(data, obj);
            ApiDiscoveryResponseService.constructFromObject(data, obj);
            ApiDiscoveryResponseLinks.constructFromObject(data, obj);

            if (data.hasOwnProperty('product')) {
                obj['product'] = ApiDiscoveryResponseProductProduct.constructFromObject(data['product']);
            }
            if (data.hasOwnProperty('service')) {
                obj['service'] = ApiDiscoveryResponseServiceService.constructFromObject(data['service']);
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = ApiDiscoveryResponseLinksLinks.constructFromObject(data['_links']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ApiDiscoveryResponseProductProduct} product
 */
ApiDiscoveryResponseEnable.prototype['product'] = undefined;

/**
 * @member {module:model/ApiDiscoveryResponseServiceService} service
 */
ApiDiscoveryResponseEnable.prototype['service'] = undefined;

/**
 * @member {module:model/ApiDiscoveryResponseLinksLinks} _links
 */
ApiDiscoveryResponseEnable.prototype['_links'] = undefined;


// Implement ApiDiscoveryResponseProduct interface:
/**
 * @member {module:model/ApiDiscoveryResponseProductProduct} product
 */
ApiDiscoveryResponseProduct.prototype['product'] = undefined;
// Implement ApiDiscoveryResponseService interface:
/**
 * @member {module:model/ApiDiscoveryResponseServiceService} service
 */
ApiDiscoveryResponseService.prototype['service'] = undefined;
// Implement ApiDiscoveryResponseLinks interface:
/**
 * @member {module:model/ApiDiscoveryResponseLinksLinks} _links
 */
ApiDiscoveryResponseLinks.prototype['_links'] = undefined;




export default ApiDiscoveryResponseEnable;

