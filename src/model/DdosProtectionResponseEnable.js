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
import ApiDiscoveryResponseServiceService from './ApiDiscoveryResponseServiceService';
import DdosProtectionResponseLinks from './DdosProtectionResponseLinks';
import DdosProtectionResponseLinksLinks from './DdosProtectionResponseLinksLinks';
import DdosProtectionResponseProduct from './DdosProtectionResponseProduct';
import DdosProtectionResponseProductProduct from './DdosProtectionResponseProductProduct';
import DdosProtectionResponseService from './DdosProtectionResponseService';

/**
 * The DdosProtectionResponseEnable model module.
 * @module model/DdosProtectionResponseEnable
 * @version 15.0.0-beta.1
 */
class DdosProtectionResponseEnable {
    /**
     * Constructs a new <code>DdosProtectionResponseEnable</code>.
     * @alias module:model/DdosProtectionResponseEnable
     * @implements module:model/DdosProtectionResponseProduct
     * @implements module:model/DdosProtectionResponseService
     * @implements module:model/DdosProtectionResponseLinks
     */
    constructor() { 
        DdosProtectionResponseProduct.initialize(this);DdosProtectionResponseService.initialize(this);DdosProtectionResponseLinks.initialize(this);
        DdosProtectionResponseEnable.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DdosProtectionResponseEnable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DdosProtectionResponseEnable} obj Optional instance to populate.
     * @return {module:model/DdosProtectionResponseEnable} The populated <code>DdosProtectionResponseEnable</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DdosProtectionResponseEnable();
            DdosProtectionResponseProduct.constructFromObject(data, obj);
            DdosProtectionResponseService.constructFromObject(data, obj);
            DdosProtectionResponseLinks.constructFromObject(data, obj);

            if (data.hasOwnProperty('product')) {
                obj['product'] = DdosProtectionResponseProductProduct.constructFromObject(data['product']);
            }
            if (data.hasOwnProperty('service')) {
                obj['service'] = ApiDiscoveryResponseServiceService.constructFromObject(data['service']);
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = DdosProtectionResponseLinksLinks.constructFromObject(data['_links']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/DdosProtectionResponseProductProduct} product
 */
DdosProtectionResponseEnable.prototype['product'] = undefined;

/**
 * @member {module:model/ApiDiscoveryResponseServiceService} service
 */
DdosProtectionResponseEnable.prototype['service'] = undefined;

/**
 * @member {module:model/DdosProtectionResponseLinksLinks} _links
 */
DdosProtectionResponseEnable.prototype['_links'] = undefined;


// Implement DdosProtectionResponseProduct interface:
/**
 * @member {module:model/DdosProtectionResponseProductProduct} product
 */
DdosProtectionResponseProduct.prototype['product'] = undefined;
// Implement DdosProtectionResponseService interface:
/**
 * @member {module:model/ApiDiscoveryResponseServiceService} service
 */
DdosProtectionResponseService.prototype['service'] = undefined;
// Implement DdosProtectionResponseLinks interface:
/**
 * @member {module:model/DdosProtectionResponseLinksLinks} _links
 */
DdosProtectionResponseLinks.prototype['_links'] = undefined;




export default DdosProtectionResponseEnable;

