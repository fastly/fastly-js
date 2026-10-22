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
 * The BotManagementError model module.
 * @module model/BotManagementError
 * @version 17.0.0
 */
class BotManagementError {
    /**
     * Constructs a new <code>BotManagementError</code>.
     * An error response, formatted as a problem details object.
     * @alias module:model/BotManagementError
     * @param title {String} A short summary of the problem.
     * @param status {Number} The HTTP status code of the response.
     */
    constructor(title, status) { 
        
        BotManagementError.initialize(this, title, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, title, status) { 
        obj['title'] = title;
        obj['status'] = status;
    }

    /**
     * Constructs a <code>BotManagementError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BotManagementError} obj Optional instance to populate.
     * @return {module:model/BotManagementError} The populated <code>BotManagementError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BotManagementError();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
            }
            if (data.hasOwnProperty('detail')) {
                obj['detail'] = ApiClient.convertToType(data['detail'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A short summary of the problem.
 * @member {String} title
 */
BotManagementError.prototype['title'] = undefined;

/**
 * The HTTP status code of the response.
 * @member {Number} status
 */
BotManagementError.prototype['status'] = undefined;

/**
 * An explanation of the problem, specific to this occurrence.
 * @member {String} detail
 */
BotManagementError.prototype['detail'] = undefined;






export default BotManagementError;

