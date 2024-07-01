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
import RoleUser from './RoleUser';
import Timestamps from './Timestamps';
import User from './User';
import UserResponseReadOnly from './UserResponseReadOnly';

/**
 * The UserResponse model module.
 * @module model/UserResponse
 * @version 7.5.0
 */
class UserResponse {
    /**
     * Constructs a new <code>UserResponse</code>.
     * @alias module:model/UserResponse
     * @implements module:model/User
     * @implements module:model/Timestamps
     * @implements module:model/UserResponseReadOnly
     */
    constructor() { 
        User.initialize(this);Timestamps.initialize(this);UserResponseReadOnly.initialize(this);
        UserResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserResponse} obj Optional instance to populate.
     * @return {module:model/UserResponse} The populated <code>UserResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserResponse();
            User.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);
            UserResponseReadOnly.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('email_hash')) {
                obj['email_hash'] = ApiClient.convertToType(data['email_hash'], 'String');
            }
            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} login
 */
UserResponse.prototype['login'] = undefined;

/**
 * The real life name of the user.
 * @member {String} name
 */
UserResponse.prototype['name'] = undefined;

/**
 * Indicates that the user has limited access to the customer's services.
 * @member {Boolean} limit_services
 */
UserResponse.prototype['limit_services'] = undefined;

/**
 * Indicates whether the is account is locked for editing or not.
 * @member {Boolean} locked
 */
UserResponse.prototype['locked'] = undefined;

/**
 * Indicates if a new password is required at next login.
 * @member {Boolean} require_new_password
 */
UserResponse.prototype['require_new_password'] = undefined;

/**
 * @member {module:model/RoleUser} role
 */
UserResponse.prototype['role'] = undefined;

/**
 * Indicates if 2FA is enabled on the user.
 * @member {Boolean} two_factor_auth_enabled
 */
UserResponse.prototype['two_factor_auth_enabled'] = undefined;

/**
 * Indicates if 2FA is required by the user's customer account.
 * @member {Boolean} two_factor_setup_required
 */
UserResponse.prototype['two_factor_setup_required'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
UserResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
UserResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
UserResponse.prototype['updated_at'] = undefined;

/**
 * @member {String} id
 */
UserResponse.prototype['id'] = undefined;

/**
 * The alphanumeric string identifying a email login.
 * @member {String} email_hash
 */
UserResponse.prototype['email_hash'] = undefined;

/**
 * @member {String} customer_id
 */
UserResponse.prototype['customer_id'] = undefined;


// Implement User interface:
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
// Implement Timestamps interface:
/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
Timestamps.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
Timestamps.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
Timestamps.prototype['updated_at'] = undefined;
// Implement UserResponseReadOnly interface:
/**
 * @member {String} id
 */
UserResponseReadOnly.prototype['id'] = undefined;
/**
 * The alphanumeric string identifying a email login.
 * @member {String} email_hash
 */
UserResponseReadOnly.prototype['email_hash'] = undefined;
/**
 * @member {String} customer_id
 */
UserResponseReadOnly.prototype['customer_id'] = undefined;




export default UserResponse;

