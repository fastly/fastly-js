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
import BotManagementBot from './BotManagementBot';
import BotManagementBotAction from './BotManagementBotAction';
import BotManagementBotResponseExtra from './BotManagementBotResponseExtra';
import BotManagementWorkspaceBotResponseExtra from './BotManagementWorkspaceBotResponseExtra';

/**
 * The BotManagementWorkspaceBotResponse model module.
 * @module model/BotManagementWorkspaceBotResponse
 * @version 17.0.0
 */
class BotManagementWorkspaceBotResponse {
    /**
     * Constructs a new <code>BotManagementWorkspaceBotResponse</code>.
     * @alias module:model/BotManagementWorkspaceBotResponse
     * @implements module:model/BotManagementBot
     * @implements module:model/BotManagementBotResponseExtra
     * @implements module:model/BotManagementWorkspaceBotResponseExtra
     * @param action {module:model/BotManagementBotAction} 
     * @param bot_id {String} The unique identifier of the bot.
     * @param name {String} The display name of the bot.
     * @param category_id {String} The ID of the category the bot belongs to.
     */
    constructor(action, bot_id, name, category_id) { 
        BotManagementBot.initialize(this, action);BotManagementBotResponseExtra.initialize(this, bot_id, name);BotManagementWorkspaceBotResponseExtra.initialize(this, category_id);
        BotManagementWorkspaceBotResponse.initialize(this, action, bot_id, name, category_id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action, bot_id, name, category_id) { 
        obj['action'] = action;
        obj['bot_id'] = bot_id;
        obj['name'] = name;
        obj['category_id'] = category_id;
    }

    /**
     * Constructs a <code>BotManagementWorkspaceBotResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BotManagementWorkspaceBotResponse} obj Optional instance to populate.
     * @return {module:model/BotManagementWorkspaceBotResponse} The populated <code>BotManagementWorkspaceBotResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BotManagementWorkspaceBotResponse();
            BotManagementBot.constructFromObject(data, obj);
            BotManagementBotResponseExtra.constructFromObject(data, obj);
            BotManagementWorkspaceBotResponseExtra.constructFromObject(data, obj);

            if (data.hasOwnProperty('action')) {
                obj['action'] = BotManagementBotAction.constructFromObject(data['action']);
            }
            if (data.hasOwnProperty('bot_id')) {
                obj['bot_id'] = ApiClient.convertToType(data['bot_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('category_id')) {
                obj['category_id'] = ApiClient.convertToType(data['category_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BotManagementBotAction} action
 */
BotManagementWorkspaceBotResponse.prototype['action'] = undefined;

/**
 * The unique identifier of the bot.
 * @member {String} bot_id
 */
BotManagementWorkspaceBotResponse.prototype['bot_id'] = undefined;

/**
 * The display name of the bot.
 * @member {String} name
 */
BotManagementWorkspaceBotResponse.prototype['name'] = undefined;

/**
 * The ID of the category the bot belongs to.
 * @member {String} category_id
 */
BotManagementWorkspaceBotResponse.prototype['category_id'] = undefined;


// Implement BotManagementBot interface:
/**
 * @member {module:model/BotManagementBotAction} action
 */
BotManagementBot.prototype['action'] = undefined;
// Implement BotManagementBotResponseExtra interface:
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
// Implement BotManagementWorkspaceBotResponseExtra interface:
/**
 * The ID of the category the bot belongs to.
 * @member {String} category_id
 */
BotManagementWorkspaceBotResponseExtra.prototype['category_id'] = undefined;




export default BotManagementWorkspaceBotResponse;

