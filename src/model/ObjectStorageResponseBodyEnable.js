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
import ObjectStorageResponseCustomer from './ObjectStorageResponseCustomer';
import ObjectStorageResponseLinks from './ObjectStorageResponseLinks';
import ObjectStorageResponseLinksLinks from './ObjectStorageResponseLinksLinks';
import ObjectStorageResponseProduct from './ObjectStorageResponseProduct';
import ObjectStorageResponseProductProduct from './ObjectStorageResponseProductProduct';

/**
 * The ObjectStorageResponseBodyEnable model module.
 * @module model/ObjectStorageResponseBodyEnable
 * @version 9.0.0
 */
class ObjectStorageResponseBodyEnable {
    /**
     * Constructs a new <code>ObjectStorageResponseBodyEnable</code>.
     * @alias module:model/ObjectStorageResponseBodyEnable
     * @implements module:model/ObjectStorageResponseProduct
     * @implements module:model/ObjectStorageResponseCustomer
     * @implements module:model/ObjectStorageResponseLinks
     */
    constructor() { 
        ObjectStorageResponseProduct.initialize(this);ObjectStorageResponseCustomer.initialize(this);ObjectStorageResponseLinks.initialize(this);
        ObjectStorageResponseBodyEnable.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ObjectStorageResponseBodyEnable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ObjectStorageResponseBodyEnable} obj Optional instance to populate.
     * @return {module:model/ObjectStorageResponseBodyEnable} The populated <code>ObjectStorageResponseBodyEnable</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ObjectStorageResponseBodyEnable();
            ObjectStorageResponseProduct.constructFromObject(data, obj);
            ObjectStorageResponseCustomer.constructFromObject(data, obj);
            ObjectStorageResponseLinks.constructFromObject(data, obj);

            if (data.hasOwnProperty('product')) {
                obj['product'] = ObjectStorageResponseProductProduct.constructFromObject(data['product']);
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = AiAcceleratorResponseCustomerCustomer.constructFromObject(data['customer']);
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = ObjectStorageResponseLinksLinks.constructFromObject(data['_links']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ObjectStorageResponseProductProduct} product
 */
ObjectStorageResponseBodyEnable.prototype['product'] = undefined;

/**
 * @member {module:model/AiAcceleratorResponseCustomerCustomer} customer
 */
ObjectStorageResponseBodyEnable.prototype['customer'] = undefined;

/**
 * @member {module:model/ObjectStorageResponseLinksLinks} _links
 */
ObjectStorageResponseBodyEnable.prototype['_links'] = undefined;


// Implement ObjectStorageResponseProduct interface:
/**
 * @member {module:model/ObjectStorageResponseProductProduct} product
 */
ObjectStorageResponseProduct.prototype['product'] = undefined;
// Implement ObjectStorageResponseCustomer interface:
/**
 * @member {module:model/AiAcceleratorResponseCustomerCustomer} customer
 */
ObjectStorageResponseCustomer.prototype['customer'] = undefined;
// Implement ObjectStorageResponseLinks interface:
/**
 * @member {module:model/ObjectStorageResponseLinksLinks} _links
 */
ObjectStorageResponseLinks.prototype['_links'] = undefined;




export default ObjectStorageResponseBodyEnable;

