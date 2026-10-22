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
 * The BotManagementBotResponseExtra model module.
 * @module model/BotManagementBotResponseExtra
 * @version 17.0.0
 */
class BotManagementBotResponseExtra {
    /**
     * Constructs a new <code>BotManagementBotResponseExtra</code>.
     * @alias module:model/BotManagementBotResponseExtra
     * @param bot_id {String} The unique identifier of the bot.
     * @param name {String} The display name of the bot.
     */
    constructor(bot_id, name) { 
        
        BotManagementBotResponseExtra.initialize(this, bot_id, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, bot_id, name) { 
        obj['bot_id'] = bot_id;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>BotManagementBotResponseExtra</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BotManagementBotResponseExtra} obj Optional instance to populate.
     * @return {module:model/BotManagementBotResponseExtra} The populated <code>BotManagementBotResponseExtra</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BotManagementBotResponseExtra();

            if (data.hasOwnProperty('bot_id')) {
                obj['bot_id'] = ApiClient.convertToType(data['bot_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The unique identifier of the bot.
 * @member {String} bot_id
 */
BotManagementBotResponseExtra.prototype['bot_id'] = undefined;

/**
 * The display name of the bot.
 * @member {String} name
 */
BotManagementBotResponseExtra.prototype['name'] = undefined;






export default BotManagementBotResponseExtra;

