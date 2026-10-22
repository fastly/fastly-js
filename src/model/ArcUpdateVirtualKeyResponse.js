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
 * The ArcUpdateVirtualKeyResponse model module.
 * @module model/ArcUpdateVirtualKeyResponse
 * @version 17.0.0
 */
class ArcUpdateVirtualKeyResponse {
    /**
     * Constructs a new <code>ArcUpdateVirtualKeyResponse</code>.
     * The virtual key after the update.
     * @alias module:model/ArcUpdateVirtualKeyResponse
     * @param id {String} The unique identifier of the virtual key.
     * @param customer_id {String} The ID of the customer account that owns the key.
     * @param name {String} The display name of the virtual key.
     * @param user_id {String} The ID of the user who created the key.
     * @param created_at {Date} The date and time the key was created, in RFC 3339 format.
     * @param updated_at {Date} The date and time the key was last updated, in RFC 3339 format.
     */
    constructor(id, customer_id, name, user_id, created_at, updated_at) { 
        
        ArcUpdateVirtualKeyResponse.initialize(this, id, customer_id, name, user_id, created_at, updated_at);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, customer_id, name, user_id, created_at, updated_at) { 
        obj['id'] = id;
        obj['customer_id'] = customer_id;
        obj['name'] = name;
        obj['user_id'] = user_id;
        obj['created_at'] = created_at;
        obj['updated_at'] = updated_at;
    }

    /**
     * Constructs a <code>ArcUpdateVirtualKeyResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArcUpdateVirtualKeyResponse} obj Optional instance to populate.
     * @return {module:model/ArcUpdateVirtualKeyResponse} The populated <code>ArcUpdateVirtualKeyResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArcUpdateVirtualKeyResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
            if (data.hasOwnProperty('rpm_limit')) {
                obj['rpm_limit'] = ApiClient.convertToType(data['rpm_limit'], 'Number');
            }
            if (data.hasOwnProperty('tpm_limit')) {
                obj['tpm_limit'] = ApiClient.convertToType(data['tpm_limit'], 'Number');
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
ArcUpdateVirtualKeyResponse.prototype['id'] = undefined;

/**
 * The ID of the customer account that owns the key.
 * @member {String} customer_id
 */
ArcUpdateVirtualKeyResponse.prototype['customer_id'] = undefined;

/**
 * The display name of the virtual key.
 * @member {String} name
 */
ArcUpdateVirtualKeyResponse.prototype['name'] = undefined;

/**
 * The ID of the user who created the key.
 * @member {String} user_id
 */
ArcUpdateVirtualKeyResponse.prototype['user_id'] = undefined;

/**
 * The date and time the key was created, in RFC 3339 format.
 * @member {Date} created_at
 */
ArcUpdateVirtualKeyResponse.prototype['created_at'] = undefined;

/**
 * The date and time the key was last updated, in RFC 3339 format.
 * @member {Date} updated_at
 */
ArcUpdateVirtualKeyResponse.prototype['updated_at'] = undefined;

/**
 * The date and time the key expires, in RFC 3339 format. `null` if the key doesn't expire.
 * @member {Date} expires_at
 */
ArcUpdateVirtualKeyResponse.prototype['expires_at'] = undefined;

/**
 * The requests-per-minute limit for this key. `null` if there is no limit.
 * @member {Number} rpm_limit
 */
ArcUpdateVirtualKeyResponse.prototype['rpm_limit'] = undefined;

/**
 * The tokens-per-minute limit for this key. `null` if there is no limit.
 * @member {Number} tpm_limit
 */
ArcUpdateVirtualKeyResponse.prototype['tpm_limit'] = undefined;

/**
 * Whether a spend limit is enabled for this key.
 * @member {Boolean} spend_limit_enabled
 */
ArcUpdateVirtualKeyResponse.prototype['spend_limit_enabled'] = undefined;

/**
 * The date and time `spend_limit_enabled` was last set to `true`, in RFC 3339 format. `null` if the spend limit has never been enabled. This timestamp is not cleared when `spend_limit_enabled` is later set back to `false`, so it can be non-null even when the spend limit is currently disabled. 
 * @member {Date} spend_limit_enabled_on
 */
ArcUpdateVirtualKeyResponse.prototype['spend_limit_enabled_on'] = undefined;






export default ArcUpdateVirtualKeyResponse;

