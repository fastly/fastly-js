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
 * The ArcVirtualKeyResponseExtra model module.
 * @module model/ArcVirtualKeyResponseExtra
 * @version 17.0.0
 */
class ArcVirtualKeyResponseExtra {
    /**
     * Constructs a new <code>ArcVirtualKeyResponseExtra</code>.
     * @alias module:model/ArcVirtualKeyResponseExtra
     * @param id {String} The unique identifier of the virtual key.
     * @param type {String} The type of the resource.
     * @param user_id {String} The ID of the user who created the key.
     * @param created_at {Date} The date and time the key was created, in RFC 3339 format.
     * @param updated_at {Date} The date and time the key was last updated, in RFC 3339 format.
     */
    constructor(id, type, user_id, created_at, updated_at) { 
        
        ArcVirtualKeyResponseExtra.initialize(this, id, type, user_id, created_at, updated_at);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, type, user_id, created_at, updated_at) { 
        obj['id'] = id;
        obj['type'] = type;
        obj['user_id'] = user_id;
        obj['created_at'] = created_at;
        obj['updated_at'] = updated_at;
    }

    /**
     * Constructs a <code>ArcVirtualKeyResponseExtra</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArcVirtualKeyResponseExtra} obj Optional instance to populate.
     * @return {module:model/ArcVirtualKeyResponseExtra} The populated <code>ArcVirtualKeyResponseExtra</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArcVirtualKeyResponseExtra();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
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
            if (data.hasOwnProperty('created_by')) {
                obj['created_by'] = ApiClient.convertToType(data['created_by'], 'String');
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
 * The unique identifier of the virtual key.
 * @member {String} id
 */
ArcVirtualKeyResponseExtra.prototype['id'] = undefined;

/**
 * The type of the resource.
 * @member {String} type
 */
ArcVirtualKeyResponseExtra.prototype['type'] = undefined;

/**
 * The ID of the user who created the key.
 * @member {String} user_id
 */
ArcVirtualKeyResponseExtra.prototype['user_id'] = undefined;

/**
 * The date and time the key was created, in RFC 3339 format.
 * @member {Date} created_at
 */
ArcVirtualKeyResponseExtra.prototype['created_at'] = undefined;

/**
 * The date and time the key was last updated, in RFC 3339 format.
 * @member {Date} updated_at
 */
ArcVirtualKeyResponseExtra.prototype['updated_at'] = undefined;

/**
 * The display name of the user who created the key.
 * @member {String} created_by
 */
ArcVirtualKeyResponseExtra.prototype['created_by'] = undefined;

/**
 * The date and time the key was last used to make a request, in RFC 3339 format. `null` if the key has never been used.
 * @member {Date} last_used_at
 */
ArcVirtualKeyResponseExtra.prototype['last_used_at'] = undefined;

/**
 * The date and time the key was deleted, in RFC 3339 format. `null` unless the key was deleted and `include_deleted` was used to retrieve it.
 * @member {Date} deleted_at
 */
ArcVirtualKeyResponseExtra.prototype['deleted_at'] = undefined;

/**
 * Whether a spend limit is enabled for this key.
 * @member {Boolean} spend_limit_enabled
 */
ArcVirtualKeyResponseExtra.prototype['spend_limit_enabled'] = undefined;

/**
 * The date and time `spend_limit_enabled` was last set to `true`, in RFC 3339 format. `null` if the spend limit has never been enabled. This timestamp is not cleared when `spend_limit_enabled` is later set back to `false`, so it can be non-null even when the spend limit is currently disabled. 
 * @member {Date} spend_limit_enabled_on
 */
ArcVirtualKeyResponseExtra.prototype['spend_limit_enabled_on'] = undefined;






export default ArcVirtualKeyResponseExtra;

