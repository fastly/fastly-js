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
import BotManagementProtectionMode from './BotManagementProtectionMode';

/**
 * The BotManagementWorkspace model module.
 * @module model/BotManagementWorkspace
 * @version 17.0.0
 */
class BotManagementWorkspace {
    /**
     * Constructs a new <code>BotManagementWorkspace</code>.
     * A container for bot management settings and policy.
     * @alias module:model/BotManagementWorkspace
     */
    constructor() { 
        
        BotManagementWorkspace.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BotManagementWorkspace</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BotManagementWorkspace} obj Optional instance to populate.
     * @return {module:model/BotManagementWorkspace} The populated <code>BotManagementWorkspace</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BotManagementWorkspace();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('protection_mode')) {
                obj['protection_mode'] = BotManagementProtectionMode.constructFromObject(data['protection_mode']);
            }
        }
        return obj;
    }


}

/**
 * The display name of the workspace.
 * @member {String} name
 */
BotManagementWorkspace.prototype['name'] = undefined;

/**
 * A description of the workspace.
 * @member {String} description
 */
BotManagementWorkspace.prototype['description'] = undefined;

/**
 * @member {module:model/BotManagementProtectionMode} protection_mode
 */
BotManagementWorkspace.prototype['protection_mode'] = undefined;






export default BotManagementWorkspace;

