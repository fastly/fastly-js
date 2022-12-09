/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EnabledProductLinks from './EnabledProductLinks';
import EnabledProductProduct from './EnabledProductProduct';

/**
 * The EnabledProduct model module.
 * @module model/EnabledProduct
 * @version 3.0.0
 */
class EnabledProduct {
    /**
     * Constructs a new <code>EnabledProduct</code>.
     * @alias module:model/EnabledProduct
     */
    constructor() { 
        
        EnabledProduct.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EnabledProduct</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnabledProduct} obj Optional instance to populate.
     * @return {module:model/EnabledProduct} The populated <code>EnabledProduct</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnabledProduct();

            if (data.hasOwnProperty('product')) {
                obj['product'] = EnabledProductProduct.constructFromObject(data['product']);
            }
            if (data.hasOwnProperty('service')) {
                obj['service'] = EnabledProductProduct.constructFromObject(data['service']);
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = EnabledProductLinks.constructFromObject(data['_links']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/EnabledProductProduct} product
 */
EnabledProduct.prototype['product'] = undefined;

/**
 * @member {module:model/EnabledProductProduct} service
 */
EnabledProduct.prototype['service'] = undefined;

/**
 * @member {module:model/EnabledProductLinks} _links
 */
EnabledProduct.prototype['_links'] = undefined;






export default EnabledProduct;

