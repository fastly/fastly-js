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
 * The ArcUpdateVirtualKeyRequest model module.
 * @module model/ArcUpdateVirtualKeyRequest
 * @version 17.0.0
 */
class ArcUpdateVirtualKeyRequest {
    /**
     * Constructs a new <code>ArcUpdateVirtualKeyRequest</code>.
     * A partial update to a virtual key. Only the fields you include are changed.
     * @alias module:model/ArcUpdateVirtualKeyRequest
     */
    constructor() { 
        
        ArcUpdateVirtualKeyRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ArcUpdateVirtualKeyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArcUpdateVirtualKeyRequest} obj Optional instance to populate.
     * @return {module:model/ArcUpdateVirtualKeyRequest} The populated <code>ArcUpdateVirtualKeyRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArcUpdateVirtualKeyRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
            if (data.hasOwnProperty('spend_limit_enabled')) {
                obj['spend_limit_enabled'] = ApiClient.convertToType(data['spend_limit_enabled'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * A display name for the virtual key.
 * @member {String} name
 */
ArcUpdateVirtualKeyRequest.prototype['name'] = undefined;

/**
 * The date and time the key expires, in RFC 3339 format. Set explicitly to `null` to clear the expiration. 
 * @member {Date} expires_at
 */
ArcUpdateVirtualKeyRequest.prototype['expires_at'] = undefined;

/**
 * Whether AI Firewall security is enabled for requests made with this key.
 * @member {Boolean} security_enabled
 */
ArcUpdateVirtualKeyRequest.prototype['security_enabled'] = undefined;

/**
 * The action AI Firewall takes when it detects a violation on a request made with this key.
 * @member {module:model/ArcUpdateVirtualKeyRequest.SecurityActionEnum} security_action
 */
ArcUpdateVirtualKeyRequest.prototype['security_action'] = undefined;

/**
 * The requests-per-minute limit for this key. Omit this field to leave the limit unchanged, set it to a positive integer to set a limit, or set it explicitly to `null` to remove the limit. 
 * @member {Number} rpm_limit
 */
ArcUpdateVirtualKeyRequest.prototype['rpm_limit'] = undefined;

/**
 * The tokens-per-minute limit for this key. Omit this field to leave the limit unchanged, set it to a positive integer to set a limit, or set it explicitly to `null` to remove the limit. 
 * @member {Number} tpm_limit
 */
ArcUpdateVirtualKeyRequest.prototype['tpm_limit'] = undefined;

/**
 * Whether a spend limit is enabled for this key. This field cannot be set when the key is created; it can only be changed with this endpoint.
 * @member {Boolean} spend_limit_enabled
 */
ArcUpdateVirtualKeyRequest.prototype['spend_limit_enabled'] = undefined;





/**
 * Allowed values for the <code>security_action</code> property.
 * @enum {String}
 * @readonly
 */
ArcUpdateVirtualKeyRequest['SecurityActionEnum'] = {

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



export default ArcUpdateVirtualKeyRequest;

