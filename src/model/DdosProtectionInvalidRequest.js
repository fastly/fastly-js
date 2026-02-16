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
import DdosProtectionErrorErrors from './DdosProtectionErrorErrors';

/**
 * The DdosProtectionInvalidRequest model module.
 * @module model/DdosProtectionInvalidRequest
 * @version 15.0.0
 */
class DdosProtectionInvalidRequest {
    /**
     * Constructs a new <code>DdosProtectionInvalidRequest</code>.
     * @alias module:model/DdosProtectionInvalidRequest
     * @param title {String} 
     * @param status {module:model/DdosProtectionInvalidRequest.StatusEnum} 
     * @param detail {String} 
     * @param errors {Array.<module:model/DdosProtectionErrorErrors>} 
     */
    constructor(title, status, detail, errors) { 
        
        DdosProtectionInvalidRequest.initialize(this, title, status, detail, errors);
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
     * Constructs a <code>DdosProtectionInvalidRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DdosProtectionInvalidRequest} obj Optional instance to populate.
     * @return {module:model/DdosProtectionInvalidRequest} The populated <code>DdosProtectionInvalidRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DdosProtectionInvalidRequest();

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
                obj['errors'] = ApiClient.convertToType(data['errors'], [DdosProtectionErrorErrors]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} title
 */
DdosProtectionInvalidRequest.prototype['title'] = undefined;

/**
 * @member {module:model/DdosProtectionInvalidRequest.StatusEnum} status
 */
DdosProtectionInvalidRequest.prototype['status'] = undefined;

/**
 * @member {String} detail
 */
DdosProtectionInvalidRequest.prototype['detail'] = undefined;

/**
 * @member {Array.<module:model/DdosProtectionErrorErrors>} errors
 */
DdosProtectionInvalidRequest.prototype['errors'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {Number}
 * @readonly
 */
DdosProtectionInvalidRequest['StatusEnum'] = {

    /**
     * value: 400
     * @const
     */
    "400": 400
};



export default DdosProtectionInvalidRequest;

