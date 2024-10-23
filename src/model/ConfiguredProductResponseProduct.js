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

/**
 * The ConfiguredProductResponseProduct model module.
 * @module model/ConfiguredProductResponseProduct
 * @version 7.10.0
 */
class ConfiguredProductResponseProduct {
    /**
     * Constructs a new <code>ConfiguredProductResponseProduct</code>.
     * @alias module:model/ConfiguredProductResponseProduct
     */
    constructor() { 
        
        ConfiguredProductResponseProduct.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConfiguredProductResponseProduct</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfiguredProductResponseProduct} obj Optional instance to populate.
     * @return {module:model/ConfiguredProductResponseProduct} The populated <code>ConfiguredProductResponseProduct</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConfiguredProductResponseProduct();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Product identifier
 * @member {String} id
 */
ConfiguredProductResponseProduct.prototype['id'] = undefined;

/**
 * Name of the object
 * @member {String} object
 */
ConfiguredProductResponseProduct.prototype['object'] = undefined;






export default ConfiguredProductResponseProduct;

