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
import NgwafResponseLinks from './NgwafResponseLinks';
import NgwafResponseLinksLinks from './NgwafResponseLinksLinks';
import NgwafResponseProduct from './NgwafResponseProduct';
import NgwafResponseProductProduct from './NgwafResponseProductProduct';
import NgwafResponseService from './NgwafResponseService';

/**
 * The NgwafResponseEnable model module.
 * @module model/NgwafResponseEnable
 * @version 15.0.0-beta.2
 */
class NgwafResponseEnable {
    /**
     * Constructs a new <code>NgwafResponseEnable</code>.
     * @alias module:model/NgwafResponseEnable
     * @implements module:model/NgwafResponseProduct
     * @implements module:model/NgwafResponseService
     * @implements module:model/NgwafResponseLinks
     */
    constructor() { 
        NgwafResponseProduct.initialize(this);NgwafResponseService.initialize(this);NgwafResponseLinks.initialize(this);
        NgwafResponseEnable.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NgwafResponseEnable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NgwafResponseEnable} obj Optional instance to populate.
     * @return {module:model/NgwafResponseEnable} The populated <code>NgwafResponseEnable</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NgwafResponseEnable();
            NgwafResponseProduct.constructFromObject(data, obj);
            NgwafResponseService.constructFromObject(data, obj);
            NgwafResponseLinks.constructFromObject(data, obj);

            if (data.hasOwnProperty('product')) {
                obj['product'] = NgwafResponseProductProduct.constructFromObject(data['product']);
            }
            if (data.hasOwnProperty('service')) {
                obj['service'] = ApiDiscoveryResponseServiceService.constructFromObject(data['service']);
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
NgwafResponseEnable.prototype['product'] = undefined;

/**
 * @member {module:model/ApiDiscoveryResponseServiceService} service
 */
NgwafResponseEnable.prototype['service'] = undefined;

/**
 * @member {module:model/NgwafResponseLinksLinks} _links
 */
NgwafResponseEnable.prototype['_links'] = undefined;


// Implement NgwafResponseProduct interface:
/**
 * @member {module:model/NgwafResponseProductProduct} product
 */
NgwafResponseProduct.prototype['product'] = undefined;
// Implement NgwafResponseService interface:
/**
 * @member {module:model/ApiDiscoveryResponseServiceService} service
 */
NgwafResponseService.prototype['service'] = undefined;
// Implement NgwafResponseLinks interface:
/**
 * @member {module:model/NgwafResponseLinksLinks} _links
 */
NgwafResponseLinks.prototype['_links'] = undefined;




export default NgwafResponseEnable;

