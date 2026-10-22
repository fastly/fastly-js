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
 * The NetworkProtectErrorDetail model module.
 * @module model/NetworkProtectErrorDetail
 * @version 17.0.0
 */
class NetworkProtectErrorDetail {
    /**
     * Constructs a new <code>NetworkProtectErrorDetail</code>.
     * A field-level validation error.
     * @alias module:model/NetworkProtectErrorDetail
     * @param field {String} Request field associated with the error.
     * @param error {String} Explanation of why the field is invalid.
     */
    constructor(field, error) { 
        
        NetworkProtectErrorDetail.initialize(this, field, error);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, field, error) { 
        obj['field'] = field;
        obj['error'] = error;
    }

    /**
     * Constructs a <code>NetworkProtectErrorDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkProtectErrorDetail} obj Optional instance to populate.
     * @return {module:model/NetworkProtectErrorDetail} The populated <code>NetworkProtectErrorDetail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkProtectErrorDetail();

            if (data.hasOwnProperty('field')) {
                obj['field'] = ApiClient.convertToType(data['field'], 'String');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Request field associated with the error.
 * @member {String} field
 */
NetworkProtectErrorDetail.prototype['field'] = undefined;

/**
 * Explanation of why the field is invalid.
 * @member {String} error
 */
NetworkProtectErrorDetail.prototype['error'] = undefined;






export default NetworkProtectErrorDetail;

