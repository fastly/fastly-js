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
import AutomationTokenRole from './AutomationTokenRole';

/**
 * The AutomationToken model module.
 * @module model/AutomationToken
 * @version 17.0.0
 */
class AutomationToken {
    /**
     * Constructs a new <code>AutomationToken</code>.
     * @alias module:model/AutomationToken
     */
    constructor() { 
        
        AutomationToken.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AutomationToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutomationToken} obj Optional instance to populate.
     * @return {module:model/AutomationToken} The populated <code>AutomationToken</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AutomationToken();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], [AutomationTokenRole]);
            }
            if (data.hasOwnProperty('services')) {
                obj['services'] = ApiClient.convertToType(data['services'], ['String']);
            }
            if (data.hasOwnProperty('limit_services')) {
                obj['limit_services'] = ApiClient.convertToType(data['limit_services'], 'Boolean');
            }
            if (data.hasOwnProperty('limit_workspaces')) {
                obj['limit_workspaces'] = ApiClient.convertToType(data['limit_workspaces'], 'Boolean');
            }
            if (data.hasOwnProperty('workspaces')) {
                obj['workspaces'] = ApiClient.convertToType(data['workspaces'], ['String']);
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
            }
            if (data.hasOwnProperty('expires_at')) {
                obj['expires_at'] = ApiClient.convertToType(data['expires_at'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of the token.
 * @member {String} name
 */
AutomationToken.prototype['name'] = undefined;

/**
 * The primary role on the token. For tokens with multiple roles, this returns the highest-priority role for backwards compatibility.
 * @member {module:model/AutomationToken.RoleEnum} role
 */
AutomationToken.prototype['role'] = undefined;

/**
 * All roles assigned to the token. Each role includes an `id` and `name`.
 * @member {Array.<module:model/AutomationTokenRole>} roles
 */
AutomationToken.prototype['roles'] = undefined;

/**
 * The service IDs of the services the token has access to. Empty when `limit_services` is `false` (full access) or when the token has no service access.
 * @member {Array.<String>} services
 */
AutomationToken.prototype['services'] = undefined;

/**
 * When `true`, the token is restricted to only the services in the `services` array. When `false`, the token has access to all services.
 * @member {Boolean} limit_services
 */
AutomationToken.prototype['limit_services'] = undefined;

/**
 * When `true`, the token is restricted to only the workspaces in the `workspaces` array. When `false`, the token has access to all workspaces. Only applies to roles that support workspace access.
 * @member {Boolean} limit_workspaces
 */
AutomationToken.prototype['limit_workspaces'] = undefined;

/**
 * The workspace IDs of the workspaces the token has access to. Returns an empty array for tokens without workspace access.
 * @member {Array.<String>} workspaces
 */
AutomationToken.prototype['workspaces'] = undefined;

/**
 * A space-delimited list of authorization scope.
 * @member {module:model/AutomationToken.ScopeEnum} scope
 * @default 'global'
 */
AutomationToken.prototype['scope'] = undefined;

/**
 * A UTC timestamp of when the token expires.
 * @member {String} expires_at
 */
AutomationToken.prototype['expires_at'] = undefined;





/**
 * Allowed values for the <code>role</code> property.
 * @enum {String}
 * @readonly
 */
AutomationToken['RoleEnum'] = {

    /**
     * value: "billing"
     * @const
     */
    "billing": "billing",

    /**
     * value: "engineer"
     * @const
     */
    "engineer": "engineer",

    /**
     * value: "user"
     * @const
     */
    "user": "user",

    /**
     * value: "ngwaf_user_imported"
     * @const
     */
    "ngwaf_user_imported": "ngwaf_user_imported",

    /**
     * value: "ngwaf_admin_imported"
     * @const
     */
    "ngwaf_admin_imported": "ngwaf_admin_imported",

    /**
     * value: "ngwaf_owner_imported"
     * @const
     */
    "ngwaf_owner_imported": "ngwaf_owner_imported",

    /**
     * value: "ngwaf_observer_imported"
     * @const
     */
    "ngwaf_observer_imported": "ngwaf_observer_imported",

    /**
     * value: "tls_admin"
     * @const
     */
    "tls_admin": "tls_admin",

    /**
     * value: "tls_viewer"
     * @const
     */
    "tls_viewer": "tls_viewer"
};


/**
 * Allowed values for the <code>scope</code> property.
 * @enum {String}
 * @readonly
 */
AutomationToken['ScopeEnum'] = {

    /**
     * value: "global"
     * @const
     */
    "global": "global",

    /**
     * value: "purge_select"
     * @const
     */
    "purge_select": "purge_select",

    /**
     * value: "purge_all"
     * @const
     */
    "purge_all": "purge_all",

    /**
     * value: "global:read"
     * @const
     */
    "global:read": "global:read"
};



export default AutomationToken;

