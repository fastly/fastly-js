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
import RoleUser from './RoleUser';

/**
 * The User model module.
 * @module model/User
 * @version 3.0.0
 */
class User {
    /**
     * Constructs a new <code>User</code>.
     * @alias module:model/User
     */
    constructor() { 
        
        User.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/User} obj Optional instance to populate.
     * @return {module:model/User} The populated <code>User</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new User();

            if (data.hasOwnProperty('login')) {
                obj['login'] = ApiClient.convertToType(data['login'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('limit_services')) {
                obj['limit_services'] = ApiClient.convertToType(data['limit_services'], 'Boolean');
            }
            if (data.hasOwnProperty('locked')) {
                obj['locked'] = ApiClient.convertToType(data['locked'], 'Boolean');
            }
            if (data.hasOwnProperty('require_new_password')) {
                obj['require_new_password'] = ApiClient.convertToType(data['require_new_password'], 'Boolean');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = RoleUser.constructFromObject(data['role']);
            }
            if (data.hasOwnProperty('two_factor_auth_enabled')) {
                obj['two_factor_auth_enabled'] = ApiClient.convertToType(data['two_factor_auth_enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('two_factor_setup_required')) {
                obj['two_factor_setup_required'] = ApiClient.convertToType(data['two_factor_setup_required'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} login
 */
User.prototype['login'] = undefined;

/**
 * The real life name of the user.
 * @member {String} name
 */
User.prototype['name'] = undefined;

/**
 * Indicates that the user has limited access to the customer's services.
 * @member {Boolean} limit_services
 */
User.prototype['limit_services'] = undefined;

/**
 * Indicates whether the is account is locked for editing or not.
 * @member {Boolean} locked
 */
User.prototype['locked'] = undefined;

/**
 * Indicates if a new password is required at next login.
 * @member {Boolean} require_new_password
 */
User.prototype['require_new_password'] = undefined;

/**
 * @member {module:model/RoleUser} role
 */
User.prototype['role'] = undefined;

/**
 * Indicates if 2FA is enabled on the user.
 * @member {Boolean} two_factor_auth_enabled
 */
User.prototype['two_factor_auth_enabled'] = undefined;

/**
 * Indicates if 2FA is required by the user's customer account.
 * @member {Boolean} two_factor_setup_required
 */
User.prototype['two_factor_setup_required'] = undefined;






export default User;

