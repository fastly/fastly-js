/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
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
 * The IamUserGroupAllOf model module.
 * @module model/IamUserGroupAllOf
 * @version 4.0.0
 */
class IamUserGroupAllOf {
    /**
     * Constructs a new <code>IamUserGroupAllOf</code>.
     * @alias module:model/IamUserGroupAllOf
     */
    constructor() { 
        
        IamUserGroupAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IamUserGroupAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IamUserGroupAllOf} obj Optional instance to populate.
     * @return {module:model/IamUserGroupAllOf} The populated <code>IamUserGroupAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IamUserGroupAllOf();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('invitations_count')) {
                obj['invitations_count'] = ApiClient.convertToType(data['invitations_count'], 'Number');
            }
            if (data.hasOwnProperty('users_count')) {
                obj['users_count'] = ApiClient.convertToType(data['users_count'], 'Number');
            }
            if (data.hasOwnProperty('roles_count')) {
                obj['roles_count'] = ApiClient.convertToType(data['roles_count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Alphanumeric string identifying the user group.
 * @member {String} id
 */
IamUserGroupAllOf.prototype['id'] = undefined;

/**
 * Name of the user group.
 * @member {String} name
 */
IamUserGroupAllOf.prototype['name'] = undefined;

/**
 * Description of the user group.
 * @member {String} description
 */
IamUserGroupAllOf.prototype['description'] = undefined;

/**
 * Number of invitations added to the user group.
 * @member {Number} invitations_count
 */
IamUserGroupAllOf.prototype['invitations_count'] = undefined;

/**
 * Number of users added to the user group.
 * @member {Number} users_count
 */
IamUserGroupAllOf.prototype['users_count'] = undefined;

/**
 * Number of roles added to the user group.
 * @member {Number} roles_count
 */
IamUserGroupAllOf.prototype['roles_count'] = undefined;






export default IamUserGroupAllOf;

