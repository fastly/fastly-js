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
import NetworkProtectConflictError from './NetworkProtectConflictError';

/**
 * The NetworkProtectConflict model module.
 * @module model/NetworkProtectConflict
 * @version 17.0.0
 */
class NetworkProtectConflict {
    /**
     * Constructs a new <code>NetworkProtectConflict</code>.
     * Conflict returned when resource state prevents the request.
     * @alias module:model/NetworkProtectConflict
     * @param title {String} Short summary of the conflict.
     * @param status {module:model/NetworkProtectConflict.StatusEnum} HTTP status code for this error.
     * @param detail {String} Explanation of the conflicting resource state.
     */
    constructor(title, status, detail) { 
        
        NetworkProtectConflict.initialize(this, title, status, detail);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, title, status, detail) { 
        obj['title'] = title;
        obj['status'] = status;
        obj['detail'] = detail;
    }

    /**
     * Constructs a <code>NetworkProtectConflict</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkProtectConflict} obj Optional instance to populate.
     * @return {module:model/NetworkProtectConflict} The populated <code>NetworkProtectConflict</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkProtectConflict();

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
                obj['errors'] = ApiClient.convertToType(data['errors'], [NetworkProtectConflictError]);
            }
        }
        return obj;
    }


}

/**
 * Short summary of the conflict.
 * @member {String} title
 */
NetworkProtectConflict.prototype['title'] = undefined;

/**
 * HTTP status code for this error.
 * @member {module:model/NetworkProtectConflict.StatusEnum} status
 */
NetworkProtectConflict.prototype['status'] = undefined;

/**
 * Explanation of the conflicting resource state.
 * @member {String} detail
 */
NetworkProtectConflict.prototype['detail'] = undefined;

/**
 * Optional conflict error details.
 * @member {Array.<module:model/NetworkProtectConflictError>} errors
 */
NetworkProtectConflict.prototype['errors'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {Number}
 * @readonly
 */
NetworkProtectConflict['StatusEnum'] = {

    /**
     * value: 409
     * @const
     */
    "409": 409
};



export default NetworkProtectConflict;

