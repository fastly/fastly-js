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
import AutomationToken from './AutomationToken';
import AutomationTokenCreateResponseAllOf from './AutomationTokenCreateResponseAllOf';
import AutomationTokenRole from './AutomationTokenRole';
import ReadOnlyCustomerId from './ReadOnlyCustomerId';
import ReadOnlyId from './ReadOnlyId';
import ReadOnlyUserId from './ReadOnlyUserId';

/**
 * The AutomationTokenCreateResponse model module.
 * @module model/AutomationTokenCreateResponse
 * @version 17.0.0
 */
class AutomationTokenCreateResponse {
    /**
     * Constructs a new <code>AutomationTokenCreateResponse</code>.
     * @alias module:model/AutomationTokenCreateResponse
     * @implements module:model/AutomationToken
     * @implements module:model/AutomationTokenCreateResponseAllOf
     */
    constructor() { 
        AutomationToken.initialize(this);AutomationTokenCreateResponseAllOf.initialize(this);
        AutomationTokenCreateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AutomationTokenCreateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutomationTokenCreateResponse} obj Optional instance to populate.
     * @return {module:model/AutomationTokenCreateResponse} The populated <code>AutomationTokenCreateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AutomationTokenCreateResponse();
            AutomationToken.constructFromObject(data, obj);
            AutomationTokenCreateResponseAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('id')) {
                obj['id'] = ReadOnlyId.constructFromObject(data['id']);
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ReadOnlyUserId.constructFromObject(data['user_id']);
            }
            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ReadOnlyCustomerId.constructFromObject(data['customer_id']);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('access_token')) {
                obj['access_token'] = ApiClient.convertToType(data['access_token'], 'String');
            }
            if (data.hasOwnProperty('tls_access')) {
                obj['tls_access'] = ApiClient.convertToType(data['tls_access'], 'Boolean');
            }
            if (data.hasOwnProperty('last_used_at')) {
                obj['last_used_at'] = ApiClient.convertToType(data['last_used_at'], 'Date');
            }
            if (data.hasOwnProperty('user_agent')) {
                obj['user_agent'] = ApiClient.convertToType(data['user_agent'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of the token.
 * @member {String} name
 */
AutomationTokenCreateResponse.prototype['name'] = undefined;

/**
 * The primary role on the token. For tokens with multiple roles, this returns the highest-priority role for backwards compatibility.
 * @member {module:model/AutomationTokenCreateResponse.RoleEnum} role
 */
AutomationTokenCreateResponse.prototype['role'] = undefined;

/**
 * All roles assigned to the token. Each role includes an `id` and `name`.
 * @member {Array.<module:model/AutomationTokenRole>} roles
 */
AutomationTokenCreateResponse.prototype['roles'] = undefined;

/**
 * The service IDs of the services the token has access to. Empty when `limit_services` is `false` (full access) or when the token has no service access.
 * @member {Array.<String>} services
 */
AutomationTokenCreateResponse.prototype['services'] = undefined;

/**
 * When `true`, the token is restricted to only the services in the `services` array. When `false`, the token has access to all services.
 * @member {Boolean} limit_services
 */
AutomationTokenCreateResponse.prototype['limit_services'] = undefined;

/**
 * When `true`, the token is restricted to only the workspaces in the `workspaces` array. When `false`, the token has access to all workspaces. Only applies to roles that support workspace access.
 * @member {Boolean} limit_workspaces
 */
AutomationTokenCreateResponse.prototype['limit_workspaces'] = undefined;

/**
 * The workspace IDs of the workspaces the token has access to. Returns an empty array for tokens without workspace access.
 * @member {Array.<String>} workspaces
 */
AutomationTokenCreateResponse.prototype['workspaces'] = undefined;

/**
 * A space-delimited list of authorization scope.
 * @member {module:model/AutomationTokenCreateResponse.ScopeEnum} scope
 * @default 'global'
 */
AutomationTokenCreateResponse.prototype['scope'] = undefined;

/**
 * A UTC timestamp of when the token expires.
 * @member {String} expires_at
 */
AutomationTokenCreateResponse.prototype['expires_at'] = undefined;

/**
 * @member {module:model/ReadOnlyId} id
 */
AutomationTokenCreateResponse.prototype['id'] = undefined;

/**
 * @member {module:model/ReadOnlyUserId} user_id
 */
AutomationTokenCreateResponse.prototype['user_id'] = undefined;

/**
 * @member {module:model/ReadOnlyCustomerId} customer_id
 */
AutomationTokenCreateResponse.prototype['customer_id'] = undefined;

/**
 * A UTC timestamp of when the token was created. 
 * @member {Date} created_at
 */
AutomationTokenCreateResponse.prototype['created_at'] = undefined;

/**
 * @member {String} access_token
 */
AutomationTokenCreateResponse.prototype['access_token'] = undefined;

/**
 * Indicates whether TLS access is enabled for the token.
 * @member {Boolean} tls_access
 */
AutomationTokenCreateResponse.prototype['tls_access'] = undefined;

/**
 * A UTC timestamp of when the token was last used.
 * @member {Date} last_used_at
 */
AutomationTokenCreateResponse.prototype['last_used_at'] = undefined;

/**
 * The User-Agent header of the client that last used the token.
 * @member {String} user_agent
 */
AutomationTokenCreateResponse.prototype['user_agent'] = undefined;


// Implement AutomationToken interface:
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
// Implement AutomationTokenCreateResponseAllOf interface:
/**
 * @member {module:model/ReadOnlyId} id
 */
AutomationTokenCreateResponseAllOf.prototype['id'] = undefined;
/**
 * @member {module:model/ReadOnlyUserId} user_id
 */
AutomationTokenCreateResponseAllOf.prototype['user_id'] = undefined;
/**
 * @member {module:model/ReadOnlyCustomerId} customer_id
 */
AutomationTokenCreateResponseAllOf.prototype['customer_id'] = undefined;
/**
 * A UTC timestamp of when the token was created. 
 * @member {Date} created_at
 */
AutomationTokenCreateResponseAllOf.prototype['created_at'] = undefined;
/**
 * @member {String} access_token
 */
AutomationTokenCreateResponseAllOf.prototype['access_token'] = undefined;
/**
 * Indicates whether TLS access is enabled for the token.
 * @member {Boolean} tls_access
 */
AutomationTokenCreateResponseAllOf.prototype['tls_access'] = undefined;
/**
 * A UTC timestamp of when the token was last used.
 * @member {Date} last_used_at
 */
AutomationTokenCreateResponseAllOf.prototype['last_used_at'] = undefined;
/**
 * The User-Agent header of the client that last used the token.
 * @member {String} user_agent
 */
AutomationTokenCreateResponseAllOf.prototype['user_agent'] = undefined;



/**
 * Allowed values for the <code>role</code> property.
 * @enum {String}
 * @readonly
 */
AutomationTokenCreateResponse['RoleEnum'] = {

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
AutomationTokenCreateResponse['ScopeEnum'] = {

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



export default AutomationTokenCreateResponse;

