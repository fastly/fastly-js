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
import BotManagementWorkspace from './BotManagementWorkspace';
import BotManagementWorkspaceResponseExtra from './BotManagementWorkspaceResponseExtra';

/**
 * The BotManagementWorkspaceResponse model module.
 * @module model/BotManagementWorkspaceResponse
 * @version 17.0.0
 */
class BotManagementWorkspaceResponse {
    /**
     * Constructs a new <code>BotManagementWorkspaceResponse</code>.
     * @alias module:model/BotManagementWorkspaceResponse
     * @implements module:model/BotManagementWorkspace
     * @implements module:model/BotManagementWorkspaceResponseExtra
     * @param name {String} The display name of the workspace.
     * @param protection_mode {module:model/BotManagementProtectionMode} 
     * @param id {String} A UUID used to uniquely identify the workspace.
     * @param created_at {Date} The date and time the workspace was created, in RFC 3339 format.
     * @param updated_at {Date} The date and time the workspace was last updated, in RFC 3339 format.
     */
    constructor(name, protection_mode, id, created_at, updated_at) { 
        BotManagementWorkspace.initialize(this);BotManagementWorkspaceResponseExtra.initialize(this, id, created_at, updated_at);
        BotManagementWorkspaceResponse.initialize(this, name, protection_mode, id, created_at, updated_at);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, protection_mode, id, created_at, updated_at) { 
        obj['name'] = name;
        obj['protection_mode'] = protection_mode;
        obj['id'] = id;
        obj['created_at'] = created_at;
        obj['updated_at'] = updated_at;
    }

    /**
     * Constructs a <code>BotManagementWorkspaceResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BotManagementWorkspaceResponse} obj Optional instance to populate.
     * @return {module:model/BotManagementWorkspaceResponse} The populated <code>BotManagementWorkspaceResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BotManagementWorkspaceResponse();
            BotManagementWorkspace.constructFromObject(data, obj);
            BotManagementWorkspaceResponseExtra.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('protection_mode')) {
                obj['protection_mode'] = BotManagementProtectionMode.constructFromObject(data['protection_mode']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('services')) {
                obj['services'] = ApiClient.convertToType(data['services'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * The display name of the workspace.
 * @member {String} name
 */
BotManagementWorkspaceResponse.prototype['name'] = undefined;

/**
 * @member {module:model/BotManagementProtectionMode} protection_mode
 */
BotManagementWorkspaceResponse.prototype['protection_mode'] = undefined;

/**
 * A UUID used to uniquely identify the workspace.
 * @member {String} id
 */
BotManagementWorkspaceResponse.prototype['id'] = undefined;

/**
 * The date and time the workspace was created, in RFC 3339 format.
 * @member {Date} created_at
 */
BotManagementWorkspaceResponse.prototype['created_at'] = undefined;

/**
 * The date and time the workspace was last updated, in RFC 3339 format.
 * @member {Date} updated_at
 */
BotManagementWorkspaceResponse.prototype['updated_at'] = undefined;

/**
 * A description of the workspace.
 * @member {String} description
 */
BotManagementWorkspaceResponse.prototype['description'] = undefined;

/**
 * The IDs of the services attached to this workspace.
 * @member {Array.<String>} services
 */
BotManagementWorkspaceResponse.prototype['services'] = undefined;


// Implement BotManagementWorkspace interface:
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
// Implement BotManagementWorkspaceResponseExtra interface:
/**
 * A UUID used to uniquely identify the workspace.
 * @member {String} id
 */
BotManagementWorkspaceResponseExtra.prototype['id'] = undefined;
/**
 * The date and time the workspace was created, in RFC 3339 format.
 * @member {Date} created_at
 */
BotManagementWorkspaceResponseExtra.prototype['created_at'] = undefined;
/**
 * The date and time the workspace was last updated, in RFC 3339 format.
 * @member {Date} updated_at
 */
BotManagementWorkspaceResponseExtra.prototype['updated_at'] = undefined;
/**
 * The IDs of the services attached to this workspace.
 * @member {Array.<String>} services
 */
BotManagementWorkspaceResponseExtra.prototype['services'] = undefined;




export default BotManagementWorkspaceResponse;

