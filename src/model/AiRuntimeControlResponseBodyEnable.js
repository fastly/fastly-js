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
import AiAcceleratorResponseCustomerCustomer from './AiAcceleratorResponseCustomerCustomer';
import AiRuntimeControlResponseCustomer from './AiRuntimeControlResponseCustomer';
import AiRuntimeControlResponseLinks from './AiRuntimeControlResponseLinks';
import AiRuntimeControlResponseLinksLinks from './AiRuntimeControlResponseLinksLinks';
import AiRuntimeControlResponseProduct from './AiRuntimeControlResponseProduct';
import AiRuntimeControlResponseProductProduct from './AiRuntimeControlResponseProductProduct';

/**
 * The AiRuntimeControlResponseBodyEnable model module.
 * @module model/AiRuntimeControlResponseBodyEnable
 * @version 17.0.0
 */
class AiRuntimeControlResponseBodyEnable {
    /**
     * Constructs a new <code>AiRuntimeControlResponseBodyEnable</code>.
     * @alias module:model/AiRuntimeControlResponseBodyEnable
     * @implements module:model/AiRuntimeControlResponseProduct
     * @implements module:model/AiRuntimeControlResponseCustomer
     * @implements module:model/AiRuntimeControlResponseLinks
     */
    constructor() { 
        AiRuntimeControlResponseProduct.initialize(this);AiRuntimeControlResponseCustomer.initialize(this);AiRuntimeControlResponseLinks.initialize(this);
        AiRuntimeControlResponseBodyEnable.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AiRuntimeControlResponseBodyEnable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AiRuntimeControlResponseBodyEnable} obj Optional instance to populate.
     * @return {module:model/AiRuntimeControlResponseBodyEnable} The populated <code>AiRuntimeControlResponseBodyEnable</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AiRuntimeControlResponseBodyEnable();
            AiRuntimeControlResponseProduct.constructFromObject(data, obj);
            AiRuntimeControlResponseCustomer.constructFromObject(data, obj);
            AiRuntimeControlResponseLinks.constructFromObject(data, obj);

            if (data.hasOwnProperty('product')) {
                obj['product'] = AiRuntimeControlResponseProductProduct.constructFromObject(data['product']);
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = AiAcceleratorResponseCustomerCustomer.constructFromObject(data['customer']);
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = AiRuntimeControlResponseLinksLinks.constructFromObject(data['_links']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/AiRuntimeControlResponseProductProduct} product
 */
AiRuntimeControlResponseBodyEnable.prototype['product'] = undefined;

/**
 * @member {module:model/AiAcceleratorResponseCustomerCustomer} customer
 */
AiRuntimeControlResponseBodyEnable.prototype['customer'] = undefined;

/**
 * @member {module:model/AiRuntimeControlResponseLinksLinks} _links
 */
AiRuntimeControlResponseBodyEnable.prototype['_links'] = undefined;


// Implement AiRuntimeControlResponseProduct interface:
/**
 * @member {module:model/AiRuntimeControlResponseProductProduct} product
 */
AiRuntimeControlResponseProduct.prototype['product'] = undefined;
// Implement AiRuntimeControlResponseCustomer interface:
/**
 * @member {module:model/AiAcceleratorResponseCustomerCustomer} customer
 */
AiRuntimeControlResponseCustomer.prototype['customer'] = undefined;
// Implement AiRuntimeControlResponseLinks interface:
/**
 * @member {module:model/AiRuntimeControlResponseLinksLinks} _links
 */
AiRuntimeControlResponseLinks.prototype['_links'] = undefined;




export default AiRuntimeControlResponseBodyEnable;

