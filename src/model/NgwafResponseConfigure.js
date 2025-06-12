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
import NgwafResponseConfiguration from './NgwafResponseConfiguration';
import NgwafResponseConfigurationConfiguration from './NgwafResponseConfigurationConfiguration';
import NgwafResponseLinks from './NgwafResponseLinks';
import NgwafResponseLinksLinks from './NgwafResponseLinksLinks';
import NgwafResponseProduct from './NgwafResponseProduct';
import NgwafResponseProductProduct from './NgwafResponseProductProduct';
import NgwafResponseService from './NgwafResponseService';

/**
 * The NgwafResponseConfigure model module.
 * @module model/NgwafResponseConfigure
 * @version 12.0.0
 */
class NgwafResponseConfigure {
    /**
     * Constructs a new <code>NgwafResponseConfigure</code>.
     * @alias module:model/NgwafResponseConfigure
     * @implements module:model/NgwafResponseProduct
     * @implements module:model/NgwafResponseService
     * @implements module:model/NgwafResponseConfiguration
     * @implements module:model/NgwafResponseLinks
     */
    constructor() { 
        NgwafResponseProduct.initialize(this);NgwafResponseService.initialize(this);NgwafResponseConfiguration.initialize(this);NgwafResponseLinks.initialize(this);
        NgwafResponseConfigure.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NgwafResponseConfigure</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NgwafResponseConfigure} obj Optional instance to populate.
     * @return {module:model/NgwafResponseConfigure} The populated <code>NgwafResponseConfigure</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NgwafResponseConfigure();
            NgwafResponseProduct.constructFromObject(data, obj);
            NgwafResponseService.constructFromObject(data, obj);
            NgwafResponseConfiguration.constructFromObject(data, obj);
            NgwafResponseLinks.constructFromObject(data, obj);

            if (data.hasOwnProperty('product')) {
                obj['product'] = NgwafResponseProductProduct.constructFromObject(data['product']);
            }
            if (data.hasOwnProperty('service')) {
                obj['service'] = BotManagementResponseServiceService.constructFromObject(data['service']);
            }
            if (data.hasOwnProperty('configuration')) {
                obj['configuration'] = NgwafResponseConfigurationConfiguration.constructFromObject(data['configuration']);
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = NgwafResponseLinksLinks.constructFromObject(data['_links']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/NgwafResponseProductProduct} product
 */
NgwafResponseConfigure.prototype['product'] = undefined;

/**
 * @member {module:model/BotManagementResponseServiceService} service
 */
NgwafResponseConfigure.prototype['service'] = undefined;

/**
 * @member {module:model/NgwafResponseConfigurationConfiguration} configuration
 */
NgwafResponseConfigure.prototype['configuration'] = undefined;

/**
 * @member {module:model/NgwafResponseLinksLinks} _links
 */
NgwafResponseConfigure.prototype['_links'] = undefined;


// Implement NgwafResponseProduct interface:
/**
 * @member {module:model/NgwafResponseProductProduct} product
 */
NgwafResponseProduct.prototype['product'] = undefined;
// Implement NgwafResponseService interface:
/**
 * @member {module:model/BotManagementResponseServiceService} service
 */
NgwafResponseService.prototype['service'] = undefined;
// Implement NgwafResponseConfiguration interface:
/**
 * @member {module:model/NgwafResponseConfigurationConfiguration} configuration
 */
NgwafResponseConfiguration.prototype['configuration'] = undefined;
// Implement NgwafResponseLinks interface:
/**
 * @member {module:model/NgwafResponseLinksLinks} _links
 */
NgwafResponseLinks.prototype['_links'] = undefined;




export default NgwafResponseConfigure;

