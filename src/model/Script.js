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
 * The Script model module.
 * @module model/Script
 * @version 16.0.0
 */
class Script {
    /**
     * Constructs a new <code>Script</code>.
     * @alias module:model/Script
     */
    constructor() { 
        
        Script.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Script</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Script} obj Optional instance to populate.
     * @return {module:model/Script} The populated <code>Script</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Script();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('page_id')) {
                obj['page_id'] = ApiClient.convertToType(data['page_id'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
            if (data.hasOwnProperty('urls')) {
                obj['urls'] = ApiClient.convertToType(data['urls'], ['String']);
            }
            if (data.hasOwnProperty('first_seen_at')) {
                obj['first_seen_at'] = ApiClient.convertToType(data['first_seen_at'], 'Date');
            }
            if (data.hasOwnProperty('last_seen_at')) {
                obj['last_seen_at'] = ApiClient.convertToType(data['last_seen_at'], 'Date');
            }
            if (data.hasOwnProperty('justification')) {
                obj['justification'] = ApiClient.convertToType(data['justification'], 'String');
            }
            if (data.hasOwnProperty('current_hash')) {
                obj['current_hash'] = ApiClient.convertToType(data['current_hash'], 'String');
            }
            if (data.hasOwnProperty('authorized_hash')) {
                obj['authorized_hash'] = ApiClient.convertToType(data['authorized_hash'], 'String');
            }
            if (data.hasOwnProperty('authorization_status')) {
                obj['authorization_status'] = ApiClient.convertToType(data['authorization_status'], 'String');
            }
            if (data.hasOwnProperty('authorized_at')) {
                obj['authorized_at'] = ApiClient.convertToType(data['authorized_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * Unique script identifier
 * @member {String} id
 */
Script.prototype['id'] = undefined;

/**
 * Parent page ID
 * @member {String} page_id
 */
Script.prototype['page_id'] = undefined;

/**
 * Script source (inline or external URL)
 * @member {String} source
 */
Script.prototype['source'] = undefined;

/**
 * URLs where this script was observed
 * @member {Array.<String>} urls
 */
Script.prototype['urls'] = undefined;

/**
 * @member {Date} first_seen_at
 */
Script.prototype['first_seen_at'] = undefined;

/**
 * @member {Date} last_seen_at
 */
Script.prototype['last_seen_at'] = undefined;

/**
 * Reason for authorization decision
 * @member {String} justification
 */
Script.prototype['justification'] = undefined;

/**
 * Current script content hash
 * @member {String} current_hash
 */
Script.prototype['current_hash'] = undefined;

/**
 * Hash of authorized script content
 * @member {String} authorized_hash
 */
Script.prototype['authorized_hash'] = undefined;

/**
 * Script authorization status
 * @member {module:model/Script.AuthorizationStatusEnum} authorization_status
 */
Script.prototype['authorization_status'] = undefined;

/**
 * @member {Date} authorized_at
 */
Script.prototype['authorized_at'] = undefined;





/**
 * Allowed values for the <code>authorization_status</code> property.
 * @enum {String}
 * @readonly
 */
Script['AuthorizationStatusEnum'] = {

    /**
     * value: "authorized"
     * @const
     */
    "authorized": "authorized",

    /**
     * value: "unauthorized"
     * @const
     */
    "unauthorized": "unauthorized"
};



export default Script;

