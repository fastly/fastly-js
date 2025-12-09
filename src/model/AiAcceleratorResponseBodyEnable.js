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
import AiAcceleratorResponseCustomer from './AiAcceleratorResponseCustomer';
import AiAcceleratorResponseCustomerCustomer from './AiAcceleratorResponseCustomerCustomer';
import AiAcceleratorResponseLinks from './AiAcceleratorResponseLinks';
import AiAcceleratorResponseLinksLinks from './AiAcceleratorResponseLinksLinks';
import AiAcceleratorResponseProduct from './AiAcceleratorResponseProduct';
import AiAcceleratorResponseProductProduct from './AiAcceleratorResponseProductProduct';

/**
 * The AiAcceleratorResponseBodyEnable model module.
 * @module model/AiAcceleratorResponseBodyEnable
 * @version 14.1.0
 */
class AiAcceleratorResponseBodyEnable {
    /**
     * Constructs a new <code>AiAcceleratorResponseBodyEnable</code>.
     * @alias module:model/AiAcceleratorResponseBodyEnable
     * @implements module:model/AiAcceleratorResponseProduct
     * @implements module:model/AiAcceleratorResponseCustomer
     * @implements module:model/AiAcceleratorResponseLinks
     */
    constructor() { 
        AiAcceleratorResponseProduct.initialize(this);AiAcceleratorResponseCustomer.initialize(this);AiAcceleratorResponseLinks.initialize(this);
        AiAcceleratorResponseBodyEnable.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AiAcceleratorResponseBodyEnable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AiAcceleratorResponseBodyEnable} obj Optional instance to populate.
     * @return {module:model/AiAcceleratorResponseBodyEnable} The populated <code>AiAcceleratorResponseBodyEnable</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AiAcceleratorResponseBodyEnable();
            AiAcceleratorResponseProduct.constructFromObject(data, obj);
            AiAcceleratorResponseCustomer.constructFromObject(data, obj);
            AiAcceleratorResponseLinks.constructFromObject(data, obj);

            if (data.hasOwnProperty('product')) {
                obj['product'] = AiAcceleratorResponseProductProduct.constructFromObject(data['product']);
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = AiAcceleratorResponseCustomerCustomer.constructFromObject(data['customer']);
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = AiAcceleratorResponseLinksLinks.constructFromObject(data['_links']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/AiAcceleratorResponseProductProduct} product
 */
AiAcceleratorResponseBodyEnable.prototype['product'] = undefined;

/**
 * @member {module:model/AiAcceleratorResponseCustomerCustomer} customer
 */
AiAcceleratorResponseBodyEnable.prototype['customer'] = undefined;

/**
 * @member {module:model/AiAcceleratorResponseLinksLinks} _links
 */
AiAcceleratorResponseBodyEnable.prototype['_links'] = undefined;


// Implement AiAcceleratorResponseProduct interface:
/**
 * @member {module:model/AiAcceleratorResponseProductProduct} product
 */
AiAcceleratorResponseProduct.prototype['product'] = undefined;
// Implement AiAcceleratorResponseCustomer interface:
/**
 * @member {module:model/AiAcceleratorResponseCustomerCustomer} customer
 */
AiAcceleratorResponseCustomer.prototype['customer'] = undefined;
// Implement AiAcceleratorResponseLinks interface:
/**
 * @member {module:model/AiAcceleratorResponseLinksLinks} _links
 */
AiAcceleratorResponseLinks.prototype['_links'] = undefined;




export default AiAcceleratorResponseBodyEnable;

