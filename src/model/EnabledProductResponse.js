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
import EnabledProductResponseLinks from './EnabledProductResponseLinks';
import EnabledProductResponseProduct from './EnabledProductResponseProduct';
import EnabledProductResponseService from './EnabledProductResponseService';

/**
 * The EnabledProductResponse model module.
 * @module model/EnabledProductResponse
 * @version 4.2.0
 */
class EnabledProductResponse {
    /**
     * Constructs a new <code>EnabledProductResponse</code>.
     * @alias module:model/EnabledProductResponse
     */
    constructor() { 
        
        EnabledProductResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EnabledProductResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnabledProductResponse} obj Optional instance to populate.
     * @return {module:model/EnabledProductResponse} The populated <code>EnabledProductResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EnabledProductResponse();

            if (data.hasOwnProperty('product')) {
                obj['product'] = EnabledProductResponseProduct.constructFromObject(data['product']);
            }
            if (data.hasOwnProperty('service')) {
                obj['service'] = EnabledProductResponseService.constructFromObject(data['service']);
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = EnabledProductResponseLinks.constructFromObject(data['_links']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/EnabledProductResponseProduct} product
 */
EnabledProductResponse.prototype['product'] = undefined;

/**
 * @member {module:model/EnabledProductResponseService} service
 */
EnabledProductResponse.prototype['service'] = undefined;

/**
 * @member {module:model/EnabledProductResponseLinks} _links
 */
EnabledProductResponse.prototype['_links'] = undefined;






export default EnabledProductResponse;

