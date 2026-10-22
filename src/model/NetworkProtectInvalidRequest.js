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
import NetworkProtectErrorDetail from './NetworkProtectErrorDetail';

/**
 * The NetworkProtectInvalidRequest model module.
 * @module model/NetworkProtectInvalidRequest
 * @version 17.0.0
 */
class NetworkProtectInvalidRequest {
    /**
     * Constructs a new <code>NetworkProtectInvalidRequest</code>.
     * Validation error returned for an invalid request.
     * @alias module:model/NetworkProtectInvalidRequest
     * @param title {String} Short summary of the validation problem.
     * @param status {module:model/NetworkProtectInvalidRequest.StatusEnum} HTTP status code for this error.
     * @param detail {String} Corrective explanation for the invalid request.
     * @param errors {Array.<module:model/NetworkProtectErrorDetail>} Field-level validation errors, when available.
     */
    constructor(title, status, detail, errors) { 
        
        NetworkProtectInvalidRequest.initialize(this, title, status, detail, errors);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, title, status, detail, errors) { 
        obj['title'] = title;
        obj['status'] = status;
        obj['detail'] = detail;
        obj['errors'] = errors;
    }

    /**
     * Constructs a <code>NetworkProtectInvalidRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkProtectInvalidRequest} obj Optional instance to populate.
     * @return {module:model/NetworkProtectInvalidRequest} The populated <code>NetworkProtectInvalidRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkProtectInvalidRequest();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
            }
            if (data.hasOwnProperty('detail')) {
                obj['detail'] = ApiClient.convertToType(data['detail'], 'String');
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [NetworkProtectErrorDetail]);
            }
        }
        return obj;
    }


}

/**
 * Short summary of the validation problem.
 * @member {String} title
 */
NetworkProtectInvalidRequest.prototype['title'] = undefined;

/**
 * HTTP status code for this error.
 * @member {module:model/NetworkProtectInvalidRequest.StatusEnum} status
 */
NetworkProtectInvalidRequest.prototype['status'] = undefined;

/**
 * Corrective explanation for the invalid request.
 * @member {String} detail
 */
NetworkProtectInvalidRequest.prototype['detail'] = undefined;

/**
 * Field-level validation errors, when available.
 * @member {Array.<module:model/NetworkProtectErrorDetail>} errors
 */
NetworkProtectInvalidRequest.prototype['errors'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {Number}
 * @readonly
 */
NetworkProtectInvalidRequest['StatusEnum'] = {

    /**
     * value: 400
     * @const
     */
    "400": 400
};



export default NetworkProtectInvalidRequest;

