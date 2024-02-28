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

/**
 * The AutomationTokenErrorResponse model module.
 * @module model/AutomationTokenErrorResponse
 * @version 7.1.0
 */
class AutomationTokenErrorResponse {
    /**
     * Constructs a new <code>AutomationTokenErrorResponse</code>.
     * @alias module:model/AutomationTokenErrorResponse
     */
    constructor() { 
        
        AutomationTokenErrorResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AutomationTokenErrorResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutomationTokenErrorResponse} obj Optional instance to populate.
     * @return {module:model/AutomationTokenErrorResponse} The populated <code>AutomationTokenErrorResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AutomationTokenErrorResponse();

            if (data.hasOwnProperty('detail')) {
                obj['detail'] = ApiClient.convertToType(data['detail'], 'String');
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [Object]);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} detail
 */
AutomationTokenErrorResponse.prototype['detail'] = undefined;

/**
 * @member {Array.<Object>} errors
 */
AutomationTokenErrorResponse.prototype['errors'] = undefined;

/**
 * @member {Number} status
 */
AutomationTokenErrorResponse.prototype['status'] = undefined;

/**
 * @member {String} title
 */
AutomationTokenErrorResponse.prototype['title'] = undefined;






export default AutomationTokenErrorResponse;

