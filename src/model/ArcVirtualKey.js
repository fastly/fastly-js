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
 * The ArcVirtualKey model module.
 * @module model/ArcVirtualKey
 * @version 17.0.0
 */
class ArcVirtualKey {
    /**
     * Constructs a new <code>ArcVirtualKey</code>.
     * A virtual key used to authenticate requests through the AI Runtime Control gateway.
     * @alias module:model/ArcVirtualKey
     * @param name {String} A display name for the virtual key.
     */
    constructor(name) { 
        
        ArcVirtualKey.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>ArcVirtualKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArcVirtualKey} obj Optional instance to populate.
     * @return {module:model/ArcVirtualKey} The populated <code>ArcVirtualKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArcVirtualKey();

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
        }
        return obj;
    }


}

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





/**
 * Allowed values for the <code>security_action</code> property.
 * @enum {String}
 * @readonly
 */
ArcVirtualKey['SecurityActionEnum'] = {

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



export default ArcVirtualKey;

