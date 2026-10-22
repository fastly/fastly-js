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
import BotManagementBotAction from './BotManagementBotAction';

/**
 * The BotManagementBot model module.
 * @module model/BotManagementBot
 * @version 17.0.0
 */
class BotManagementBot {
    /**
     * Constructs a new <code>BotManagementBot</code>.
     * A single bot within a category. Bots are defined by Fastly and cannot be created or deleted.
     * @alias module:model/BotManagementBot
     * @param action {module:model/BotManagementBotAction} 
     */
    constructor(action) { 
        
        BotManagementBot.initialize(this, action);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action) { 
        obj['action'] = action;
    }

    /**
     * Constructs a <code>BotManagementBot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BotManagementBot} obj Optional instance to populate.
     * @return {module:model/BotManagementBot} The populated <code>BotManagementBot</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BotManagementBot();

            if (data.hasOwnProperty('action')) {
                obj['action'] = BotManagementBotAction.constructFromObject(data['action']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BotManagementBotAction} action
 */
BotManagementBot.prototype['action'] = undefined;






export default BotManagementBot;

