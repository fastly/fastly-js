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
import BrotliCompressionResponseLinks from './BrotliCompressionResponseLinks';
import BrotliCompressionResponseLinksLinks from './BrotliCompressionResponseLinksLinks';
import BrotliCompressionResponseProduct from './BrotliCompressionResponseProduct';
import BrotliCompressionResponseProductProduct from './BrotliCompressionResponseProductProduct';
import BrotliCompressionResponseService from './BrotliCompressionResponseService';

/**
 * The BrotliCompressionResponseBodyEnable model module.
 * @module model/BrotliCompressionResponseBodyEnable
 * @version 12.0.0
 */
class BrotliCompressionResponseBodyEnable {
    /**
     * Constructs a new <code>BrotliCompressionResponseBodyEnable</code>.
     * @alias module:model/BrotliCompressionResponseBodyEnable
     * @implements module:model/BrotliCompressionResponseProduct
     * @implements module:model/BrotliCompressionResponseService
     * @implements module:model/BrotliCompressionResponseLinks
     */
    constructor() { 
        BrotliCompressionResponseProduct.initialize(this);BrotliCompressionResponseService.initialize(this);BrotliCompressionResponseLinks.initialize(this);
        BrotliCompressionResponseBodyEnable.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BrotliCompressionResponseBodyEnable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BrotliCompressionResponseBodyEnable} obj Optional instance to populate.
     * @return {module:model/BrotliCompressionResponseBodyEnable} The populated <code>BrotliCompressionResponseBodyEnable</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BrotliCompressionResponseBodyEnable();
            BrotliCompressionResponseProduct.constructFromObject(data, obj);
            BrotliCompressionResponseService.constructFromObject(data, obj);
            BrotliCompressionResponseLinks.constructFromObject(data, obj);

            if (data.hasOwnProperty('product')) {
                obj['product'] = BrotliCompressionResponseProductProduct.constructFromObject(data['product']);
            }
            if (data.hasOwnProperty('service')) {
                obj['service'] = BotManagementResponseServiceService.constructFromObject(data['service']);
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = BrotliCompressionResponseLinksLinks.constructFromObject(data['_links']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BrotliCompressionResponseProductProduct} product
 */
BrotliCompressionResponseBodyEnable.prototype['product'] = undefined;

/**
 * @member {module:model/BotManagementResponseServiceService} service
 */
BrotliCompressionResponseBodyEnable.prototype['service'] = undefined;

/**
 * @member {module:model/BrotliCompressionResponseLinksLinks} _links
 */
BrotliCompressionResponseBodyEnable.prototype['_links'] = undefined;


// Implement BrotliCompressionResponseProduct interface:
/**
 * @member {module:model/BrotliCompressionResponseProductProduct} product
 */
BrotliCompressionResponseProduct.prototype['product'] = undefined;
// Implement BrotliCompressionResponseService interface:
/**
 * @member {module:model/BotManagementResponseServiceService} service
 */
BrotliCompressionResponseService.prototype['service'] = undefined;
// Implement BrotliCompressionResponseLinks interface:
/**
 * @member {module:model/BrotliCompressionResponseLinksLinks} _links
 */
BrotliCompressionResponseLinks.prototype['_links'] = undefined;




export default BrotliCompressionResponseBodyEnable;

