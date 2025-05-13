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
import ImageOptimizerResponseLinks from './ImageOptimizerResponseLinks';
import ImageOptimizerResponseLinksLinks from './ImageOptimizerResponseLinksLinks';
import ImageOptimizerResponseProduct from './ImageOptimizerResponseProduct';
import ImageOptimizerResponseProductProduct from './ImageOptimizerResponseProductProduct';
import ImageOptimizerResponseService from './ImageOptimizerResponseService';

/**
 * The ImageOptimizerResponseBodyEnable model module.
 * @module model/ImageOptimizerResponseBodyEnable
 * @version 11.0.0
 */
class ImageOptimizerResponseBodyEnable {
    /**
     * Constructs a new <code>ImageOptimizerResponseBodyEnable</code>.
     * @alias module:model/ImageOptimizerResponseBodyEnable
     * @implements module:model/ImageOptimizerResponseProduct
     * @implements module:model/ImageOptimizerResponseService
     * @implements module:model/ImageOptimizerResponseLinks
     */
    constructor() { 
        ImageOptimizerResponseProduct.initialize(this);ImageOptimizerResponseService.initialize(this);ImageOptimizerResponseLinks.initialize(this);
        ImageOptimizerResponseBodyEnable.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ImageOptimizerResponseBodyEnable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImageOptimizerResponseBodyEnable} obj Optional instance to populate.
     * @return {module:model/ImageOptimizerResponseBodyEnable} The populated <code>ImageOptimizerResponseBodyEnable</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ImageOptimizerResponseBodyEnable();
            ImageOptimizerResponseProduct.constructFromObject(data, obj);
            ImageOptimizerResponseService.constructFromObject(data, obj);
            ImageOptimizerResponseLinks.constructFromObject(data, obj);

            if (data.hasOwnProperty('product')) {
                obj['product'] = ImageOptimizerResponseProductProduct.constructFromObject(data['product']);
            }
            if (data.hasOwnProperty('service')) {
                obj['service'] = BotManagementResponseServiceService.constructFromObject(data['service']);
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = ImageOptimizerResponseLinksLinks.constructFromObject(data['_links']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ImageOptimizerResponseProductProduct} product
 */
ImageOptimizerResponseBodyEnable.prototype['product'] = undefined;

/**
 * @member {module:model/BotManagementResponseServiceService} service
 */
ImageOptimizerResponseBodyEnable.prototype['service'] = undefined;

/**
 * @member {module:model/ImageOptimizerResponseLinksLinks} _links
 */
ImageOptimizerResponseBodyEnable.prototype['_links'] = undefined;


// Implement ImageOptimizerResponseProduct interface:
/**
 * @member {module:model/ImageOptimizerResponseProductProduct} product
 */
ImageOptimizerResponseProduct.prototype['product'] = undefined;
// Implement ImageOptimizerResponseService interface:
/**
 * @member {module:model/BotManagementResponseServiceService} service
 */
ImageOptimizerResponseService.prototype['service'] = undefined;
// Implement ImageOptimizerResponseLinks interface:
/**
 * @member {module:model/ImageOptimizerResponseLinksLinks} _links
 */
ImageOptimizerResponseLinks.prototype['_links'] = undefined;




export default ImageOptimizerResponseBodyEnable;

