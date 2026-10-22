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
 * The ArcCreateVirtualKeyResponse model module.
 * @module model/ArcCreateVirtualKeyResponse
 * @version 17.0.0
 */
class ArcCreateVirtualKeyResponse {
    /**
     * Constructs a new <code>ArcCreateVirtualKeyResponse</code>.
     * The virtual key that was created, including its access token.
     * @alias module:model/ArcCreateVirtualKeyResponse
     * @param id {String} The unique identifier of the virtual key.
     * @param customer_id {String} The ID of the customer account that owns the key.
     * @param name {String} The display name of the virtual key.
     * @param user_id {String} The ID of the user who created the key.
     * @param created_at {Date} The date and time the key was created, in RFC 3339 format.
     * @param updated_at {Date} The date and time the key was last updated, in RFC 3339 format.
     * @param access_token {String} The access token for this virtual key. This is only returned when the key is created or rotated, and cannot be retrieved again afterward.
     */
    constructor(id, customer_id, name, user_id, created_at, updated_at, access_token) { 
        
        ArcCreateVirtualKeyResponse.initialize(this, id, customer_id, name, user_id, created_at, updated_at, access_token);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, customer_id, name, user_id, created_at, updated_at, access_token) { 
        obj['id'] = id;
        obj['customer_id'] = customer_id;
        obj['name'] = name;
        obj['user_id'] = user_id;
        obj['created_at'] = created_at;
        obj['updated_at'] = updated_at;
        obj['access_token'] = access_token;
    }

    /**
     * Constructs a <code>ArcCreateVirtualKeyResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArcCreateVirtualKeyResponse} obj Optional instance to populate.
     * @return {module:model/ArcCreateVirtualKeyResponse} The populated <code>ArcCreateVirtualKeyResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArcCreateVirtualKeyResponse();

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
            if (data.hasOwnProperty('access_token')) {
                obj['access_token'] = ApiClient.convertToType(data['access_token'], 'String');
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
        }
        return obj;
    }


}

/**
 * The unique identifier of the virtual key.
 * @member {String} id
 */
ArcCreateVirtualKeyResponse.prototype['id'] = undefined;

/**
 * The ID of the customer account that owns the key.
 * @member {String} customer_id
 */
ArcCreateVirtualKeyResponse.prototype['customer_id'] = undefined;

/**
 * The display name of the virtual key.
 * @member {String} name
 */
ArcCreateVirtualKeyResponse.prototype['name'] = undefined;

/**
 * The ID of the user who created the key.
 * @member {String} user_id
 */
ArcCreateVirtualKeyResponse.prototype['user_id'] = undefined;

/**
 * The date and time the key was created, in RFC 3339 format.
 * @member {Date} created_at
 */
ArcCreateVirtualKeyResponse.prototype['created_at'] = undefined;

/**
 * The date and time the key was last updated, in RFC 3339 format.
 * @member {Date} updated_at
 */
ArcCreateVirtualKeyResponse.prototype['updated_at'] = undefined;

/**
 * The access token for this virtual key. This is only returned when the key is created or rotated, and cannot be retrieved again afterward.
 * @member {String} access_token
 */
ArcCreateVirtualKeyResponse.prototype['access_token'] = undefined;

/**
 * The date and time the key expires, in RFC 3339 format. `null` if the key doesn't expire.
 * @member {Date} expires_at
 */
ArcCreateVirtualKeyResponse.prototype['expires_at'] = undefined;

/**
 * The requests-per-minute limit for this key. `null` if there is no limit.
 * @member {Number} rpm_limit
 */
ArcCreateVirtualKeyResponse.prototype['rpm_limit'] = undefined;

/**
 * The tokens-per-minute limit for this key. `null` if there is no limit.
 * @member {Number} tpm_limit
 */
ArcCreateVirtualKeyResponse.prototype['tpm_limit'] = undefined;






export default ArcCreateVirtualKeyResponse;

