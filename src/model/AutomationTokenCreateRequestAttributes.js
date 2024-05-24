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
 * The AutomationTokenCreateRequestAttributes model module.
 * @module model/AutomationTokenCreateRequestAttributes
 * @version 7.3.0
 */
class AutomationTokenCreateRequestAttributes {
    /**
     * Constructs a new <code>AutomationTokenCreateRequestAttributes</code>.
     * @alias module:model/AutomationTokenCreateRequestAttributes
     */
    constructor() { 
        
        AutomationTokenCreateRequestAttributes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AutomationTokenCreateRequestAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutomationTokenCreateRequestAttributes} obj Optional instance to populate.
     * @return {module:model/AutomationTokenCreateRequestAttributes} The populated <code>AutomationTokenCreateRequestAttributes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AutomationTokenCreateRequestAttributes();

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
                obj['expires_at'] = ApiClient.convertToType(data['expires_at'], 'Date');
            }
            if (data.hasOwnProperty('tls_access')) {
                obj['tls_access'] = ApiClient.convertToType(data['tls_access'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * name of the token
 * @member {String} name
 */
AutomationTokenCreateRequestAttributes.prototype['name'] = undefined;

/**
 * @member {module:model/AutomationTokenCreateRequestAttributes.RoleEnum} role
 */
AutomationTokenCreateRequestAttributes.prototype['role'] = undefined;

/**
 * List of service ids to limit the token
 * @member {Array.<String>} services
 */
AutomationTokenCreateRequestAttributes.prototype['services'] = undefined;

/**
 * @member {module:model/AutomationTokenCreateRequestAttributes.ScopeEnum} scope
 * @default 'global'
 */
AutomationTokenCreateRequestAttributes.prototype['scope'] = undefined;

/**
 * A UTC time-stamp of when the token will expire.
 * @member {Date} expires_at
 */
AutomationTokenCreateRequestAttributes.prototype['expires_at'] = undefined;

/**
 * Indicates whether TLS access is enabled for the token.
 * @member {Boolean} tls_access
 */
AutomationTokenCreateRequestAttributes.prototype['tls_access'] = undefined;





/**
 * Allowed values for the <code>role</code> property.
 * @enum {String}
 * @readonly
 */
AutomationTokenCreateRequestAttributes['RoleEnum'] = {

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
AutomationTokenCreateRequestAttributes['ScopeEnum'] = {

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



export default AutomationTokenCreateRequestAttributes;

