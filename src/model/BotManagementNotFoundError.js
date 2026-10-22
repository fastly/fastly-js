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
import BotManagementError from './BotManagementError';
import BotManagementNotFoundErrorExtra from './BotManagementNotFoundErrorExtra';

/**
 * The BotManagementNotFoundError model module.
 * @module model/BotManagementNotFoundError
 * @version 17.0.0
 */
class BotManagementNotFoundError {
    /**
     * Constructs a new <code>BotManagementNotFoundError</code>.
     * @alias module:model/BotManagementNotFoundError
     * @implements module:model/BotManagementError
     * @implements module:model/BotManagementNotFoundErrorExtra
     * @param title {String} 
     * @param status {module:model/BotManagementNotFoundError.StatusEnum} 
     */
    constructor(title, status) { 
        BotManagementError.initialize(this, title, status);BotManagementNotFoundErrorExtra.initialize(this);
        BotManagementNotFoundError.initialize(this, title, status);
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
     * Constructs a <code>BotManagementNotFoundError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BotManagementNotFoundError} obj Optional instance to populate.
     * @return {module:model/BotManagementNotFoundError} The populated <code>BotManagementNotFoundError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BotManagementNotFoundError();
            BotManagementError.constructFromObject(data, obj);
            BotManagementNotFoundErrorExtra.constructFromObject(data, obj);

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
 * @member {String} title
 */
BotManagementNotFoundError.prototype['title'] = undefined;

/**
 * @member {module:model/BotManagementNotFoundError.StatusEnum} status
 */
BotManagementNotFoundError.prototype['status'] = undefined;

/**
 * An explanation of the problem, specific to this occurrence.
 * @member {String} detail
 */
BotManagementNotFoundError.prototype['detail'] = undefined;


// Implement BotManagementError interface:
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
// Implement BotManagementNotFoundErrorExtra interface:
/**
 * @member {String} title
 */
BotManagementNotFoundErrorExtra.prototype['title'] = undefined;
/**
 * @member {module:model/BotManagementNotFoundErrorExtra.StatusEnum} status
 */
BotManagementNotFoundErrorExtra.prototype['status'] = undefined;



/**
 * Allowed values for the <code>status</code> property.
 * @enum {Number}
 * @readonly
 */
BotManagementNotFoundError['StatusEnum'] = {

    /**
     * value: 404
     * @const
     */
    "404": 404
};



export default BotManagementNotFoundError;

