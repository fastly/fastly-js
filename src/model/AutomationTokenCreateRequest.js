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
 * The AutomationTokenCreateRequest model module.
 * @module model/AutomationTokenCreateRequest
 * @version 17.0.0
 */
class AutomationTokenCreateRequest {
    /**
     * Constructs a new <code>AutomationTokenCreateRequest</code>.
     * @alias module:model/AutomationTokenCreateRequest
     * @param name {String} The name of the token.
     * @param expires_at {Date} A UTC timestamp of when the token will expire.
     */
    constructor(name, expires_at) { 
        
        AutomationTokenCreateRequest.initialize(this, name, expires_at);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, expires_at) { 
        obj['name'] = name;
        obj['expires_at'] = expires_at;
    }

    /**
     * Constructs a <code>AutomationTokenCreateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutomationTokenCreateRequest} obj Optional instance to populate.
     * @return {module:model/AutomationTokenCreateRequest} The populated <code>AutomationTokenCreateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AutomationTokenCreateRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('expires_at')) {
                obj['expires_at'] = ApiClient.convertToType(data['expires_at'], 'Date');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], ['String']);
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
            if (data.hasOwnProperty('tls_access')) {
                obj['tls_access'] = ApiClient.convertToType(data['tls_access'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The name of the token.
 * @member {String} name
 */
AutomationTokenCreateRequest.prototype['name'] = undefined;

/**
 * A UTC timestamp of when the token will expire.
 * @member {Date} expires_at
 */
AutomationTokenCreateRequest.prototype['expires_at'] = undefined;

/**
 * The role for the token. The `roles` field is the preferred way to assign roles. This field is supported for backwards compatibility with single-role tokens.
 * @member {module:model/AutomationTokenCreateRequest.RoleEnum} role
 */
AutomationTokenCreateRequest.prototype['role'] = undefined;

/**
 * Array of role IDs to assign to the token. Use this field for tokens with multiple roles. When provided, this takes precedence over the `role` field. To get available role IDs, use [GET /roles](https://www.fastly.com/documentation/reference/api/account/roles/).
 * @member {Array.<String>} roles
 */
AutomationTokenCreateRequest.prototype['roles'] = undefined;

/**
 * List of service IDs the token can access. Only used when `limit_services` is `true`.
 * @member {Array.<String>} services
 */
AutomationTokenCreateRequest.prototype['services'] = undefined;

/**
 * When `true`, restricts the token to only the services specified in the `services` array. When `false` (default), the token has access to all services.
 * @member {Boolean} limit_services
 * @default false
 */
AutomationTokenCreateRequest.prototype['limit_services'] = false;

/**
 * When `true` (default), restricts the token to only the workspaces specified in the `workspaces` array. When `false`, the token has access to all workspaces. Only applies to roles that support workspace access (such as Next-Gen WAF roles). For roles without workspace support, this field has no effect.
 * @member {Boolean} limit_workspaces
 * @default true
 */
AutomationTokenCreateRequest.prototype['limit_workspaces'] = true;

/**
 * List of workspace IDs the token can access. Only used when `limit_workspaces` is `true` and the token has roles that support workspace access.
 * @member {Array.<String>} workspaces
 */
AutomationTokenCreateRequest.prototype['workspaces'] = undefined;

/**
 * @member {module:model/AutomationTokenCreateRequest.ScopeEnum} scope
 * @default 'global'
 */
AutomationTokenCreateRequest.prototype['scope'] = undefined;

/**
 * Indicates whether TLS access is enabled for the token. Only applicable when using the single-role `role` field. For tokens with multiple roles, assign TLS roles (`tls_admin` or `tls_viewer`) via the `roles` field instead.
 * @member {Boolean} tls_access
 */
AutomationTokenCreateRequest.prototype['tls_access'] = undefined;





/**
 * Allowed values for the <code>role</code> property.
 * @enum {String}
 * @readonly
 */
AutomationTokenCreateRequest['RoleEnum'] = {

    /**
     * value: "engineer"
     * @const
     */
    "engineer": "engineer",

    /**
     * value: "billing"
     * @const
     */
    "billing": "billing",

    /**
     * value: "user"
     * @const
     */
    "user": "user"
};


/**
 * Allowed values for the <code>scope</code> property.
 * @enum {String}
 * @readonly
 */
AutomationTokenCreateRequest['ScopeEnum'] = {

    /**
     * value: "global"
     * @const
     */
    "global": "global",

    /**
     * value: "global:read"
     * @const
     */
    "global:read": "global:read",

    /**
     * value: "purge_all"
     * @const
     */
    "purge_all": "purge_all",

    /**
     * value: "purge_select"
     * @const
     */
    "purge_select": "purge_select"
};



export default AutomationTokenCreateRequest;

