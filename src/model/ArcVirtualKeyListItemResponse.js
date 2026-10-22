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
import ArcVirtualKey from './ArcVirtualKey';
import ArcVirtualKeyListItemResponseExtra from './ArcVirtualKeyListItemResponseExtra';

/**
 * The ArcVirtualKeyListItemResponse model module.
 * @module model/ArcVirtualKeyListItemResponse
 * @version 17.0.0
 */
class ArcVirtualKeyListItemResponse {
    /**
     * Constructs a new <code>ArcVirtualKeyListItemResponse</code>.
     * @alias module:model/ArcVirtualKeyListItemResponse
     * @implements module:model/ArcVirtualKey
     * @implements module:model/ArcVirtualKeyListItemResponseExtra
     * @param name {String} A display name for the virtual key.
     * @param id {String} The unique identifier of the virtual key.
     * @param customer_id {String} The ID of the customer account that owns the key.
     * @param type {String} The type of the resource.
     * @param user_id {String} The ID of the user who created the key.
     * @param created_at {Date} The date and time the key was created, in RFC 3339 format.
     * @param updated_at {Date} The date and time the key was last updated, in RFC 3339 format.
     */
    constructor(name, id, customer_id, type, user_id, created_at, updated_at) { 
        ArcVirtualKey.initialize(this, name);ArcVirtualKeyListItemResponseExtra.initialize(this, id, customer_id, type, user_id, created_at, updated_at);
        ArcVirtualKeyListItemResponse.initialize(this, name, id, customer_id, type, user_id, created_at, updated_at);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, id, customer_id, type, user_id, created_at, updated_at) { 
        obj['name'] = name;
        obj['id'] = id;
        obj['customer_id'] = customer_id;
        obj['type'] = type;
        obj['user_id'] = user_id;
        obj['created_at'] = created_at;
        obj['updated_at'] = updated_at;
    }

    /**
     * Constructs a <code>ArcVirtualKeyListItemResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArcVirtualKeyListItemResponse} obj Optional instance to populate.
     * @return {module:model/ArcVirtualKeyListItemResponse} The populated <code>ArcVirtualKeyListItemResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArcVirtualKeyListItemResponse();
            ArcVirtualKey.constructFromObject(data, obj);
            ArcVirtualKeyListItemResponseExtra.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('expires_at')) {
                obj['expires_at'] = ApiClient.convertToType(data['expires_at'], 'Date');
            }
            if (data.hasOwnProperty('security_enabled')) {
                obj['security_enabled'] = ApiClient.convertToType(data['security_enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('security_action')) {
                obj['security_action'] = ApiClient.convertToType(data['security_action'], 'String');
            }
            if (data.hasOwnProperty('rpm_limit')) {
                obj['rpm_limit'] = ApiClient.convertToType(data['rpm_limit'], 'Number');
            }
            if (data.hasOwnProperty('tpm_limit')) {
                obj['tpm_limit'] = ApiClient.convertToType(data['tpm_limit'], 'Number');
            }
            if (data.hasOwnProperty('user_name')) {
                obj['user_name'] = ApiClient.convertToType(data['user_name'], 'String');
            }
            if (data.hasOwnProperty('last_used_at')) {
                obj['last_used_at'] = ApiClient.convertToType(data['last_used_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('spend_limit_enabled')) {
                obj['spend_limit_enabled'] = ApiClient.convertToType(data['spend_limit_enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('spend_limit_enabled_on')) {
                obj['spend_limit_enabled_on'] = ApiClient.convertToType(data['spend_limit_enabled_on'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * A display name for the virtual key.
 * @member {String} name
 */
ArcVirtualKeyListItemResponse.prototype['name'] = undefined;

/**
 * The unique identifier of the virtual key.
 * @member {String} id
 */
ArcVirtualKeyListItemResponse.prototype['id'] = undefined;

/**
 * The ID of the customer account that owns the key.
 * @member {String} customer_id
 */
ArcVirtualKeyListItemResponse.prototype['customer_id'] = undefined;

/**
 * The type of the resource.
 * @member {String} type
 */
ArcVirtualKeyListItemResponse.prototype['type'] = undefined;

/**
 * The ID of the user who created the key.
 * @member {String} user_id
 */
ArcVirtualKeyListItemResponse.prototype['user_id'] = undefined;

/**
 * The date and time the key was created, in RFC 3339 format.
 * @member {Date} created_at
 */
ArcVirtualKeyListItemResponse.prototype['created_at'] = undefined;

/**
 * The date and time the key was last updated, in RFC 3339 format.
 * @member {Date} updated_at
 */
ArcVirtualKeyListItemResponse.prototype['updated_at'] = undefined;

/**
 * The date and time the key expires, in RFC 3339 format. Omit for a key that doesn't expire.
 * @member {Date} expires_at
 */
ArcVirtualKeyListItemResponse.prototype['expires_at'] = undefined;

/**
 * Whether AI Firewall security is enabled for requests made with this key.
 * @member {Boolean} security_enabled
 * @default false
 */
ArcVirtualKeyListItemResponse.prototype['security_enabled'] = false;

/**
 * The action AI Firewall takes when it detects a violation on a request made with this key. Only meaningful when `security_enabled` is `true`.
 * @member {module:model/ArcVirtualKeyListItemResponse.SecurityActionEnum} security_action
 */
ArcVirtualKeyListItemResponse.prototype['security_action'] = undefined;

/**
 * The requests-per-minute limit for this key. Omit for no limit.
 * @member {Number} rpm_limit
 */
ArcVirtualKeyListItemResponse.prototype['rpm_limit'] = undefined;

/**
 * The tokens-per-minute limit for this key. Omit for no limit.
 * @member {Number} tpm_limit
 */
ArcVirtualKeyListItemResponse.prototype['tpm_limit'] = undefined;

/**
 * The display name of the user who created the key.
 * @member {String} user_name
 */
ArcVirtualKeyListItemResponse.prototype['user_name'] = undefined;

/**
 * The date and time the key was last used to make a request, in RFC 3339 format. `null` if the key has never been used.
 * @member {Date} last_used_at
 */
ArcVirtualKeyListItemResponse.prototype['last_used_at'] = undefined;

/**
 * The date and time the key was deleted, in RFC 3339 format. `null` unless the key was deleted and `include_deleted` was used to retrieve it.
 * @member {Date} deleted_at
 */
ArcVirtualKeyListItemResponse.prototype['deleted_at'] = undefined;

/**
 * Whether a spend limit is enabled for this key.
 * @member {Boolean} spend_limit_enabled
 */
ArcVirtualKeyListItemResponse.prototype['spend_limit_enabled'] = undefined;

/**
 * The date and time `spend_limit_enabled` was last set to `true`, in RFC 3339 format. `null` if the spend limit has never been enabled. This timestamp is not cleared when `spend_limit_enabled` is later set back to `false`, so it can be non-null even when the spend limit is currently disabled. 
 * @member {Date} spend_limit_enabled_on
 */
ArcVirtualKeyListItemResponse.prototype['spend_limit_enabled_on'] = undefined;


// Implement ArcVirtualKey interface:
/**
 * A display name for the virtual key.
 * @member {String} name
 */
ArcVirtualKey.prototype['name'] = undefined;
/**
 * The date and time the key expires, in RFC 3339 format. Omit for a key that doesn't expire.
 * @member {Date} expires_at
 */
ArcVirtualKey.prototype['expires_at'] = undefined;
/**
 * Whether AI Firewall security is enabled for requests made with this key.
 * @member {Boolean} security_enabled
 * @default false
 */
ArcVirtualKey.prototype['security_enabled'] = false;
/**
 * The action AI Firewall takes when it detects a violation on a request made with this key. Only meaningful when `security_enabled` is `true`.
 * @member {module:model/ArcVirtualKey.SecurityActionEnum} security_action
 */
ArcVirtualKey.prototype['security_action'] = undefined;
/**
 * The requests-per-minute limit for this key. Omit for no limit.
 * @member {Number} rpm_limit
 */
ArcVirtualKey.prototype['rpm_limit'] = undefined;
/**
 * The tokens-per-minute limit for this key. Omit for no limit.
 * @member {Number} tpm_limit
 */
ArcVirtualKey.prototype['tpm_limit'] = undefined;
// Implement ArcVirtualKeyListItemResponseExtra interface:
/**
 * The unique identifier of the virtual key.
 * @member {String} id
 */
ArcVirtualKeyListItemResponseExtra.prototype['id'] = undefined;
/**
 * The ID of the customer account that owns the key.
 * @member {String} customer_id
 */
ArcVirtualKeyListItemResponseExtra.prototype['customer_id'] = undefined;
/**
 * The type of the resource.
 * @member {String} type
 */
ArcVirtualKeyListItemResponseExtra.prototype['type'] = undefined;
/**
 * The ID of the user who created the key.
 * @member {String} user_id
 */
ArcVirtualKeyListItemResponseExtra.prototype['user_id'] = undefined;
/**
 * The date and time the key was created, in RFC 3339 format.
 * @member {Date} created_at
 */
ArcVirtualKeyListItemResponseExtra.prototype['created_at'] = undefined;
/**
 * The date and time the key was last updated, in RFC 3339 format.
 * @member {Date} updated_at
 */
ArcVirtualKeyListItemResponseExtra.prototype['updated_at'] = undefined;
/**
 * The display name of the user who created the key.
 * @member {String} user_name
 */
ArcVirtualKeyListItemResponseExtra.prototype['user_name'] = undefined;
/**
 * The date and time the key was last used to make a request, in RFC 3339 format. `null` if the key has never been used.
 * @member {Date} last_used_at
 */
ArcVirtualKeyListItemResponseExtra.prototype['last_used_at'] = undefined;
/**
 * The date and time the key was deleted, in RFC 3339 format. `null` unless the key was deleted and `include_deleted` was used to retrieve it.
 * @member {Date} deleted_at
 */
ArcVirtualKeyListItemResponseExtra.prototype['deleted_at'] = undefined;
/**
 * Whether a spend limit is enabled for this key.
 * @member {Boolean} spend_limit_enabled
 */
ArcVirtualKeyListItemResponseExtra.prototype['spend_limit_enabled'] = undefined;
/**
 * The date and time `spend_limit_enabled` was last set to `true`, in RFC 3339 format. `null` if the spend limit has never been enabled. This timestamp is not cleared when `spend_limit_enabled` is later set back to `false`, so it can be non-null even when the spend limit is currently disabled. 
 * @member {Date} spend_limit_enabled_on
 */
ArcVirtualKeyListItemResponseExtra.prototype['spend_limit_enabled_on'] = undefined;



/**
 * Allowed values for the <code>security_action</code> property.
 * @enum {String}
 * @readonly
 */
ArcVirtualKeyListItemResponse['SecurityActionEnum'] = {

    /**
     * value: "log"
     * @const
     */
    "log": "log",

    /**
     * value: "block"
     * @const
     */
    "block": "block",

    /**
     * value: "replace"
     * @const
     */
    "replace": "replace"
};



export default ArcVirtualKeyListItemResponse;

