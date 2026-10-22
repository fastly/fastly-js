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
 * The BotManagementCategoryResponseExtra model module.
 * @module model/BotManagementCategoryResponseExtra
 * @version 17.0.0
 */
class BotManagementCategoryResponseExtra {
    /**
     * Constructs a new <code>BotManagementCategoryResponseExtra</code>.
     * @alias module:model/BotManagementCategoryResponseExtra
     * @param category_id {String} The unique identifier of the category.
     * @param name {String} The display name of the category.
     */
    constructor(category_id, name) { 
        
        BotManagementCategoryResponseExtra.initialize(this, category_id, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, category_id, name) { 
        obj['category_id'] = category_id;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>BotManagementCategoryResponseExtra</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BotManagementCategoryResponseExtra} obj Optional instance to populate.
     * @return {module:model/BotManagementCategoryResponseExtra} The populated <code>BotManagementCategoryResponseExtra</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BotManagementCategoryResponseExtra();

            if (data.hasOwnProperty('category_id')) {
                obj['category_id'] = ApiClient.convertToType(data['category_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The unique identifier of the category.
 * @member {String} category_id
 */
BotManagementCategoryResponseExtra.prototype['category_id'] = undefined;

/**
 * The display name of the category.
 * @member {String} name
 */
BotManagementCategoryResponseExtra.prototype['name'] = undefined;

/**
 * A description of the bots the category contains.
 * @member {String} description
 */
BotManagementCategoryResponseExtra.prototype['description'] = undefined;






export default BotManagementCategoryResponseExtra;

