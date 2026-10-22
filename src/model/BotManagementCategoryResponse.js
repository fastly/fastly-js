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
import BotManagementAction from './BotManagementAction';
import BotManagementCategory from './BotManagementCategory';
import BotManagementCategoryResponseExtra from './BotManagementCategoryResponseExtra';

/**
 * The BotManagementCategoryResponse model module.
 * @module model/BotManagementCategoryResponse
 * @version 17.0.0
 */
class BotManagementCategoryResponse {
    /**
     * Constructs a new <code>BotManagementCategoryResponse</code>.
     * @alias module:model/BotManagementCategoryResponse
     * @implements module:model/BotManagementCategory
     * @implements module:model/BotManagementCategoryResponseExtra
     * @param action {module:model/BotManagementAction} 
     * @param category_id {String} The unique identifier of the category.
     * @param name {String} The display name of the category.
     */
    constructor(action, category_id, name) { 
        BotManagementCategory.initialize(this, action);BotManagementCategoryResponseExtra.initialize(this, category_id, name);
        BotManagementCategoryResponse.initialize(this, action, category_id, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action, category_id, name) { 
        obj['action'] = action;
        obj['category_id'] = category_id;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>BotManagementCategoryResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BotManagementCategoryResponse} obj Optional instance to populate.
     * @return {module:model/BotManagementCategoryResponse} The populated <code>BotManagementCategoryResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BotManagementCategoryResponse();
            BotManagementCategory.constructFromObject(data, obj);
            BotManagementCategoryResponseExtra.constructFromObject(data, obj);

            if (data.hasOwnProperty('action')) {
                obj['action'] = BotManagementAction.constructFromObject(data['action']);
            }
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
 * @member {module:model/BotManagementAction} action
 */
BotManagementCategoryResponse.prototype['action'] = undefined;

/**
 * The unique identifier of the category.
 * @member {String} category_id
 */
BotManagementCategoryResponse.prototype['category_id'] = undefined;

/**
 * The display name of the category.
 * @member {String} name
 */
BotManagementCategoryResponse.prototype['name'] = undefined;

/**
 * A description of the bots the category contains.
 * @member {String} description
 */
BotManagementCategoryResponse.prototype['description'] = undefined;


// Implement BotManagementCategory interface:
/**
 * @member {module:model/BotManagementAction} action
 */
BotManagementCategory.prototype['action'] = undefined;
// Implement BotManagementCategoryResponseExtra interface:
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




export default BotManagementCategoryResponse;

