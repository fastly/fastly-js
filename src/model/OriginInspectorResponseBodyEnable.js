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
import OriginInspectorResponseLinks from './OriginInspectorResponseLinks';
import OriginInspectorResponseLinksLinks from './OriginInspectorResponseLinksLinks';
import OriginInspectorResponseProduct from './OriginInspectorResponseProduct';
import OriginInspectorResponseProductProduct from './OriginInspectorResponseProductProduct';
import OriginInspectorResponseService from './OriginInspectorResponseService';

/**
 * The OriginInspectorResponseBodyEnable model module.
 * @module model/OriginInspectorResponseBodyEnable
 * @version 12.1.0
 */
class OriginInspectorResponseBodyEnable {
    /**
     * Constructs a new <code>OriginInspectorResponseBodyEnable</code>.
     * @alias module:model/OriginInspectorResponseBodyEnable
     * @implements module:model/OriginInspectorResponseProduct
     * @implements module:model/OriginInspectorResponseService
     * @implements module:model/OriginInspectorResponseLinks
     */
    constructor() { 
        OriginInspectorResponseProduct.initialize(this);OriginInspectorResponseService.initialize(this);OriginInspectorResponseLinks.initialize(this);
        OriginInspectorResponseBodyEnable.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OriginInspectorResponseBodyEnable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OriginInspectorResponseBodyEnable} obj Optional instance to populate.
     * @return {module:model/OriginInspectorResponseBodyEnable} The populated <code>OriginInspectorResponseBodyEnable</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OriginInspectorResponseBodyEnable();
            OriginInspectorResponseProduct.constructFromObject(data, obj);
            OriginInspectorResponseService.constructFromObject(data, obj);
            OriginInspectorResponseLinks.constructFromObject(data, obj);

            if (data.hasOwnProperty('product')) {
                obj['product'] = OriginInspectorResponseProductProduct.constructFromObject(data['product']);
            }
            if (data.hasOwnProperty('service')) {
                obj['service'] = BotManagementResponseServiceService.constructFromObject(data['service']);
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = OriginInspectorResponseLinksLinks.constructFromObject(data['_links']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/OriginInspectorResponseProductProduct} product
 */
OriginInspectorResponseBodyEnable.prototype['product'] = undefined;

/**
 * @member {module:model/BotManagementResponseServiceService} service
 */
OriginInspectorResponseBodyEnable.prototype['service'] = undefined;

/**
 * @member {module:model/OriginInspectorResponseLinksLinks} _links
 */
OriginInspectorResponseBodyEnable.prototype['_links'] = undefined;


// Implement OriginInspectorResponseProduct interface:
/**
 * @member {module:model/OriginInspectorResponseProductProduct} product
 */
OriginInspectorResponseProduct.prototype['product'] = undefined;
// Implement OriginInspectorResponseService interface:
/**
 * @member {module:model/BotManagementResponseServiceService} service
 */
OriginInspectorResponseService.prototype['service'] = undefined;
// Implement OriginInspectorResponseLinks interface:
/**
 * @member {module:model/OriginInspectorResponseLinksLinks} _links
 */
OriginInspectorResponseLinks.prototype['_links'] = undefined;




export default OriginInspectorResponseBodyEnable;

