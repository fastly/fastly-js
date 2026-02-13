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
import DdosProtectionResponseConfiguration from './DdosProtectionResponseConfiguration';
import DdosProtectionResponseConfigurationConfiguration from './DdosProtectionResponseConfigurationConfiguration';
import DdosProtectionResponseLinks from './DdosProtectionResponseLinks';
import DdosProtectionResponseLinksLinks from './DdosProtectionResponseLinksLinks';
import DdosProtectionResponseProduct from './DdosProtectionResponseProduct';
import DdosProtectionResponseProductProduct from './DdosProtectionResponseProductProduct';
import DdosProtectionResponseService from './DdosProtectionResponseService';

/**
 * The DdosProtectionResponseConfigure model module.
 * @module model/DdosProtectionResponseConfigure
 * @version 15.0.0-beta.0
 */
class DdosProtectionResponseConfigure {
    /**
     * Constructs a new <code>DdosProtectionResponseConfigure</code>.
     * @alias module:model/DdosProtectionResponseConfigure
     * @implements module:model/DdosProtectionResponseProduct
     * @implements module:model/DdosProtectionResponseService
     * @implements module:model/DdosProtectionResponseConfiguration
     * @implements module:model/DdosProtectionResponseLinks
     */
    constructor() { 
        DdosProtectionResponseProduct.initialize(this);DdosProtectionResponseService.initialize(this);DdosProtectionResponseConfiguration.initialize(this);DdosProtectionResponseLinks.initialize(this);
        DdosProtectionResponseConfigure.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DdosProtectionResponseConfigure</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DdosProtectionResponseConfigure} obj Optional instance to populate.
     * @return {module:model/DdosProtectionResponseConfigure} The populated <code>DdosProtectionResponseConfigure</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DdosProtectionResponseConfigure();
            DdosProtectionResponseProduct.constructFromObject(data, obj);
            DdosProtectionResponseService.constructFromObject(data, obj);
            DdosProtectionResponseConfiguration.constructFromObject(data, obj);
            DdosProtectionResponseLinks.constructFromObject(data, obj);

            if (data.hasOwnProperty('product')) {
                obj['product'] = DdosProtectionResponseProductProduct.constructFromObject(data['product']);
            }
            if (data.hasOwnProperty('service')) {
                obj['service'] = ApiDiscoveryResponseServiceService.constructFromObject(data['service']);
            }
            if (data.hasOwnProperty('configuration')) {
                obj['configuration'] = DdosProtectionResponseConfigurationConfiguration.constructFromObject(data['configuration']);
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
DdosProtectionResponseConfigure.prototype['product'] = undefined;

/**
 * @member {module:model/ApiDiscoveryResponseServiceService} service
 */
DdosProtectionResponseConfigure.prototype['service'] = undefined;

/**
 * @member {module:model/DdosProtectionResponseConfigurationConfiguration} configuration
 */
DdosProtectionResponseConfigure.prototype['configuration'] = undefined;

/**
 * @member {module:model/DdosProtectionResponseLinksLinks} _links
 */
DdosProtectionResponseConfigure.prototype['_links'] = undefined;


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
// Implement DdosProtectionResponseConfiguration interface:
/**
 * @member {module:model/DdosProtectionResponseConfigurationConfiguration} configuration
 */
DdosProtectionResponseConfiguration.prototype['configuration'] = undefined;
// Implement DdosProtectionResponseLinks interface:
/**
 * @member {module:model/DdosProtectionResponseLinksLinks} _links
 */
DdosProtectionResponseLinks.prototype['_links'] = undefined;




export default DdosProtectionResponseConfigure;

