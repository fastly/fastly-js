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
import AutomationToken from './AutomationToken';
import AutomationTokenResponseAllOf from './AutomationTokenResponseAllOf';
import ReadOnlyCustomerId from './ReadOnlyCustomerId';
import ReadOnlyId from './ReadOnlyId';
import Timestamps from './Timestamps';

/**
 * The AutomationTokenResponse model module.
 * @module model/AutomationTokenResponse
 * @version 6.1.1
 */
class AutomationTokenResponse {
    /**
     * Constructs a new <code>AutomationTokenResponse</code>.
     * @alias module:model/AutomationTokenResponse
     * @implements module:model/AutomationToken
     * @implements module:model/Timestamps
     * @implements module:model/AutomationTokenResponseAllOf
     */
    constructor() { 
        AutomationToken.initialize(this);Timestamps.initialize(this);AutomationTokenResponseAllOf.initialize(this);
        AutomationTokenResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AutomationTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutomationTokenResponse} obj Optional instance to populate.
     * @return {module:model/AutomationTokenResponse} The populated <code>AutomationTokenResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AutomationTokenResponse();
            AutomationToken.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);
            AutomationTokenResponseAllOf.constructFromObject(data, obj);

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
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
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
            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ReadOnlyCustomerId.constructFromObject(data['customer_id']);
            }
            if (data.hasOwnProperty('ip')) {
                obj['ip'] = ApiClient.convertToType(data['ip'], 'String');
            }
            if (data.hasOwnProperty('user_agent')) {
                obj['user_agent'] = ApiClient.convertToType(data['user_agent'], 'String');
            }
            if (data.hasOwnProperty('sudo_expires_at')) {
                obj['sudo_expires_at'] = ApiClient.convertToType(data['sudo_expires_at'], 'String');
            }
            if (data.hasOwnProperty('last_used_at')) {
                obj['last_used_at'] = ApiClient.convertToType(data['last_used_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * The name of the token.
 * @member {String} name
 */
AutomationTokenResponse.prototype['name'] = undefined;

/**
 * @member {String} role
 */
AutomationTokenResponse.prototype['role'] = undefined;

/**
 * (Optional) The service IDs of the services the token will have access to. Separate service IDs with a space. If no services are specified, the token will have access to all services on the account. 
 * @member {Array.<String>} services
 */
AutomationTokenResponse.prototype['services'] = undefined;

/**
 * A space-delimited list of authorization scope.
 * @member {module:model/AutomationTokenResponse.ScopeEnum} scope
 * @default 'global'
 */
AutomationTokenResponse.prototype['scope'] = undefined;

/**
 * (optional) A UTC time-stamp of when the token will expire.
 * @member {String} expires_at
 */
AutomationTokenResponse.prototype['expires_at'] = undefined;

/**
 * A UTC time-stamp of when the token was created.
 * @member {String} created_at
 */
AutomationTokenResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
AutomationTokenResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
AutomationTokenResponse.prototype['updated_at'] = undefined;

/**
 * @member {module:model/ReadOnlyId} id
 */
AutomationTokenResponse.prototype['id'] = undefined;

/**
 * @member {module:model/ReadOnlyCustomerId} customer_id
 */
AutomationTokenResponse.prototype['customer_id'] = undefined;

/**
 * The IP address of the client that last used the token.
 * @member {String} ip
 */
AutomationTokenResponse.prototype['ip'] = undefined;

/**
 * The User-Agent header of the client that last used the token.
 * @member {String} user_agent
 */
AutomationTokenResponse.prototype['user_agent'] = undefined;

/**
 * @member {String} sudo_expires_at
 */
AutomationTokenResponse.prototype['sudo_expires_at'] = undefined;

/**
 * A UTC time-stamp of when the token was last used.
 * @member {Date} last_used_at
 */
AutomationTokenResponse.prototype['last_used_at'] = undefined;


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
// Implement AutomationTokenResponseAllOf interface:
/**
 * @member {module:model/ReadOnlyId} id
 */
AutomationTokenResponseAllOf.prototype['id'] = undefined;
/**
 * @member {module:model/ReadOnlyCustomerId} customer_id
 */
AutomationTokenResponseAllOf.prototype['customer_id'] = undefined;
/**
 * @member {String} role
 */
AutomationTokenResponseAllOf.prototype['role'] = undefined;
/**
 * The IP address of the client that last used the token.
 * @member {String} ip
 */
AutomationTokenResponseAllOf.prototype['ip'] = undefined;
/**
 * The User-Agent header of the client that last used the token.
 * @member {String} user_agent
 */
AutomationTokenResponseAllOf.prototype['user_agent'] = undefined;
/**
 * @member {String} sudo_expires_at
 */
AutomationTokenResponseAllOf.prototype['sudo_expires_at'] = undefined;
/**
 * A UTC time-stamp of when the token was last used.
 * @member {Date} last_used_at
 */
AutomationTokenResponseAllOf.prototype['last_used_at'] = undefined;
/**
 * A UTC time-stamp of when the token was created.
 * @member {String} created_at
 */
AutomationTokenResponseAllOf.prototype['created_at'] = undefined;
/**
 * (optional) A UTC time-stamp of when the token will expire.
 * @member {String} expires_at
 */
AutomationTokenResponseAllOf.prototype['expires_at'] = undefined;



/**
 * Allowed values for the <code>scope</code> property.
 * @enum {String}
 * @readonly
 */
AutomationTokenResponse['ScopeEnum'] = {

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



export default AutomationTokenResponse;

