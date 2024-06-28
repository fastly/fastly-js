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
import ReadOnlyCustomerId from './ReadOnlyCustomerId';
import ReadOnlyId from './ReadOnlyId';
import ReadOnlyUserId from './ReadOnlyUserId';
import Timestamps from './Timestamps';

/**
 * The AutomationTokenCreateResponse model module.
 * @module model/AutomationTokenCreateResponse
 * @version 7.4.0
 */
class AutomationTokenCreateResponse {
    /**
     * Constructs a new <code>AutomationTokenCreateResponse</code>.
     * @alias module:model/AutomationTokenCreateResponse
     * @implements module:model/AutomationToken
     * @implements module:model/Timestamps
     * @implements module:model/AutomationTokenCreateResponseAllOf
     */
    constructor() { 
        AutomationToken.initialize(this);Timestamps.initialize(this);AutomationTokenCreateResponseAllOf.initialize(this);
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
            Timestamps.constructFromObject(data, obj);
            AutomationTokenCreateResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
            if (data.hasOwnProperty('services')) {
                obj['services'] = ApiClient.convertToType(data['services'], ['String']);
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
            }
            if (data.hasOwnProperty('expires_at')) {
                obj['expires_at'] = ApiClient.convertToType(data['expires_at'], 'String');
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
                obj['id'] = ReadOnlyId.constructFromObject(data['id']);
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ReadOnlyUserId.constructFromObject(data['user_id']);
            }
            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ReadOnlyCustomerId.constructFromObject(data['customer_id']);
            }
            if (data.hasOwnProperty('sudo_expires_at')) {
                obj['sudo_expires_at'] = ApiClient.convertToType(data['sudo_expires_at'], 'Date');
            }
            if (data.hasOwnProperty('access_token')) {
                obj['access_token'] = ApiClient.convertToType(data['access_token'], 'String');
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
 * The role on the token.
 * @member {module:model/AutomationTokenCreateResponse.RoleEnum} role
 */
AutomationTokenCreateResponse.prototype['role'] = undefined;

/**
 * (Optional) The service IDs of the services the token will have access to. Separate service IDs with a space. If no services are specified, the token will have access to all services on the account. 
 * @member {Array.<String>} services
 */
AutomationTokenCreateResponse.prototype['services'] = undefined;

/**
 * A space-delimited list of authorization scope.
 * @member {module:model/AutomationTokenCreateResponse.ScopeEnum} scope
 * @default 'global'
 */
AutomationTokenCreateResponse.prototype['scope'] = undefined;

/**
 * A UTC time-stamp of when the token expires.
 * @member {String} expires_at
 */
AutomationTokenCreateResponse.prototype['expires_at'] = undefined;

/**
 * A UTC time-stamp of when the token was created. 
 * @member {Date} created_at
 */
AutomationTokenCreateResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
AutomationTokenCreateResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
AutomationTokenCreateResponse.prototype['updated_at'] = undefined;

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
 * @member {Date} sudo_expires_at
 */
AutomationTokenCreateResponse.prototype['sudo_expires_at'] = undefined;

/**
 * @member {String} access_token
 */
AutomationTokenCreateResponse.prototype['access_token'] = undefined;

/**
 * A UTC time-stamp of when the token was last used.
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
 * The role on the token.
 * @member {module:model/AutomationToken.RoleEnum} role
 */
AutomationToken.prototype['role'] = undefined;
/**
 * (Optional) The service IDs of the services the token will have access to. Separate service IDs with a space. If no services are specified, the token will have access to all services on the account. 
 * @member {Array.<String>} services
 */
AutomationToken.prototype['services'] = undefined;
/**
 * A space-delimited list of authorization scope.
 * @member {module:model/AutomationToken.ScopeEnum} scope
 * @default 'global'
 */
AutomationToken.prototype['scope'] = undefined;
/**
 * A UTC time-stamp of when the token expires.
 * @member {String} expires_at
 */
AutomationToken.prototype['expires_at'] = undefined;
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
 * @member {Date} sudo_expires_at
 */
AutomationTokenCreateResponseAllOf.prototype['sudo_expires_at'] = undefined;
/**
 * A UTC time-stamp of when the token was created. 
 * @member {Date} created_at
 */
AutomationTokenCreateResponseAllOf.prototype['created_at'] = undefined;
/**
 * @member {String} access_token
 */
AutomationTokenCreateResponseAllOf.prototype['access_token'] = undefined;
/**
 * A UTC time-stamp of when the token was last used.
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
    "user": "user"
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

