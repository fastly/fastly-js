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
import KvStoreResponseCustomer from './KvStoreResponseCustomer';
import KvStoreResponseLinks from './KvStoreResponseLinks';
import KvStoreResponseLinksLinks from './KvStoreResponseLinksLinks';
import KvStoreResponseProduct from './KvStoreResponseProduct';
import KvStoreResponseProductProduct from './KvStoreResponseProductProduct';

/**
 * The KvStoreResponseBodyEnable model module.
 * @module model/KvStoreResponseBodyEnable
 * @version 16.1.0
 */
class KvStoreResponseBodyEnable {
    /**
     * Constructs a new <code>KvStoreResponseBodyEnable</code>.
     * @alias module:model/KvStoreResponseBodyEnable
     * @implements module:model/KvStoreResponseProduct
     * @implements module:model/KvStoreResponseCustomer
     * @implements module:model/KvStoreResponseLinks
     */
    constructor() { 
        KvStoreResponseProduct.initialize(this);KvStoreResponseCustomer.initialize(this);KvStoreResponseLinks.initialize(this);
        KvStoreResponseBodyEnable.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KvStoreResponseBodyEnable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KvStoreResponseBodyEnable} obj Optional instance to populate.
     * @return {module:model/KvStoreResponseBodyEnable} The populated <code>KvStoreResponseBodyEnable</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KvStoreResponseBodyEnable();
            KvStoreResponseProduct.constructFromObject(data, obj);
            KvStoreResponseCustomer.constructFromObject(data, obj);
            KvStoreResponseLinks.constructFromObject(data, obj);

            if (data.hasOwnProperty('product')) {
                obj['product'] = KvStoreResponseProductProduct.constructFromObject(data['product']);
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = AiAcceleratorResponseCustomerCustomer.constructFromObject(data['customer']);
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = KvStoreResponseLinksLinks.constructFromObject(data['_links']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/KvStoreResponseProductProduct} product
 */
KvStoreResponseBodyEnable.prototype['product'] = undefined;

/**
 * @member {module:model/AiAcceleratorResponseCustomerCustomer} customer
 */
KvStoreResponseBodyEnable.prototype['customer'] = undefined;

/**
 * @member {module:model/KvStoreResponseLinksLinks} _links
 */
KvStoreResponseBodyEnable.prototype['_links'] = undefined;


// Implement KvStoreResponseProduct interface:
/**
 * @member {module:model/KvStoreResponseProductProduct} product
 */
KvStoreResponseProduct.prototype['product'] = undefined;
// Implement KvStoreResponseCustomer interface:
/**
 * @member {module:model/AiAcceleratorResponseCustomerCustomer} customer
 */
KvStoreResponseCustomer.prototype['customer'] = undefined;
// Implement KvStoreResponseLinks interface:
/**
 * @member {module:model/KvStoreResponseLinksLinks} _links
 */
KvStoreResponseLinks.prototype['_links'] = undefined;




export default KvStoreResponseBodyEnable;

