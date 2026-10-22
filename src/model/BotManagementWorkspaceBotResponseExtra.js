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
 * The BotManagementWorkspaceBotResponseExtra model module.
 * @module model/BotManagementWorkspaceBotResponseExtra
 * @version 17.0.0
 */
class BotManagementWorkspaceBotResponseExtra {
    /**
     * Constructs a new <code>BotManagementWorkspaceBotResponseExtra</code>.
     * @alias module:model/BotManagementWorkspaceBotResponseExtra
     * @param category_id {String} The ID of the category the bot belongs to.
     */
    constructor(category_id) { 
        
        BotManagementWorkspaceBotResponseExtra.initialize(this, category_id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, category_id) { 
        obj['category_id'] = category_id;
    }

    /**
     * Constructs a <code>BotManagementWorkspaceBotResponseExtra</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BotManagementWorkspaceBotResponseExtra} obj Optional instance to populate.
     * @return {module:model/BotManagementWorkspaceBotResponseExtra} The populated <code>BotManagementWorkspaceBotResponseExtra</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BotManagementWorkspaceBotResponseExtra();

            if (data.hasOwnProperty('category_id')) {
                obj['category_id'] = ApiClient.convertToType(data['category_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The ID of the category the bot belongs to.
 * @member {String} category_id
 */
BotManagementWorkspaceBotResponseExtra.prototype['category_id'] = undefined;






export default BotManagementWorkspaceBotResponseExtra;

