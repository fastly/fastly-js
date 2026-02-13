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
import WebsocketsResponseLinks from './WebsocketsResponseLinks';
import WebsocketsResponseLinksLinks from './WebsocketsResponseLinksLinks';
import WebsocketsResponseProduct from './WebsocketsResponseProduct';
import WebsocketsResponseProductProduct from './WebsocketsResponseProductProduct';
import WebsocketsResponseService from './WebsocketsResponseService';

/**
 * The WebsocketsResponseBodyEnable model module.
 * @module model/WebsocketsResponseBodyEnable
 * @version 15.0.0-beta.2
 */
class WebsocketsResponseBodyEnable {
    /**
     * Constructs a new <code>WebsocketsResponseBodyEnable</code>.
     * @alias module:model/WebsocketsResponseBodyEnable
     * @implements module:model/WebsocketsResponseProduct
     * @implements module:model/WebsocketsResponseService
     * @implements module:model/WebsocketsResponseLinks
     */
    constructor() { 
        WebsocketsResponseProduct.initialize(this);WebsocketsResponseService.initialize(this);WebsocketsResponseLinks.initialize(this);
        WebsocketsResponseBodyEnable.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebsocketsResponseBodyEnable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebsocketsResponseBodyEnable} obj Optional instance to populate.
     * @return {module:model/WebsocketsResponseBodyEnable} The populated <code>WebsocketsResponseBodyEnable</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebsocketsResponseBodyEnable();
            WebsocketsResponseProduct.constructFromObject(data, obj);
            WebsocketsResponseService.constructFromObject(data, obj);
            WebsocketsResponseLinks.constructFromObject(data, obj);

            if (data.hasOwnProperty('product')) {
                obj['product'] = WebsocketsResponseProductProduct.constructFromObject(data['product']);
            }
            if (data.hasOwnProperty('service')) {
                obj['service'] = ApiDiscoveryResponseServiceService.constructFromObject(data['service']);
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = WebsocketsResponseLinksLinks.constructFromObject(data['_links']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/WebsocketsResponseProductProduct} product
 */
WebsocketsResponseBodyEnable.prototype['product'] = undefined;

/**
 * @member {module:model/ApiDiscoveryResponseServiceService} service
 */
WebsocketsResponseBodyEnable.prototype['service'] = undefined;

/**
 * @member {module:model/WebsocketsResponseLinksLinks} _links
 */
WebsocketsResponseBodyEnable.prototype['_links'] = undefined;


// Implement WebsocketsResponseProduct interface:
/**
 * @member {module:model/WebsocketsResponseProductProduct} product
 */
WebsocketsResponseProduct.prototype['product'] = undefined;
// Implement WebsocketsResponseService interface:
/**
 * @member {module:model/ApiDiscoveryResponseServiceService} service
 */
WebsocketsResponseService.prototype['service'] = undefined;
// Implement WebsocketsResponseLinks interface:
/**
 * @member {module:model/WebsocketsResponseLinksLinks} _links
 */
WebsocketsResponseLinks.prototype['_links'] = undefined;




export default WebsocketsResponseBodyEnable;

