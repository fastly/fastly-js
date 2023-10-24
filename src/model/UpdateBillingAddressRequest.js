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
import UpdateBillingAddressRequestData from './UpdateBillingAddressRequestData';

/**
 * The UpdateBillingAddressRequest model module.
 * @module model/UpdateBillingAddressRequest
 * @version 6.2.0
 */
class UpdateBillingAddressRequest {
    /**
     * Constructs a new <code>UpdateBillingAddressRequest</code>.
     * @alias module:model/UpdateBillingAddressRequest
     */
    constructor() { 
        
        UpdateBillingAddressRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateBillingAddressRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateBillingAddressRequest} obj Optional instance to populate.
     * @return {module:model/UpdateBillingAddressRequest} The populated <code>UpdateBillingAddressRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateBillingAddressRequest();

            if (data.hasOwnProperty('skip_verification')) {
                obj['skip_verification'] = ApiClient.convertToType(data['skip_verification'], 'Boolean');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = UpdateBillingAddressRequestData.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * When set to true, the address will be saved without verification
 * @member {Boolean} skip_verification
 */
UpdateBillingAddressRequest.prototype['skip_verification'] = undefined;

/**
 * @member {module:model/UpdateBillingAddressRequestData} data
 */
UpdateBillingAddressRequest.prototype['data'] = undefined;






export default UpdateBillingAddressRequest;

