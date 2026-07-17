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
 * The ScriptUpdate model module.
 * @module model/ScriptUpdate
 * @version 16.0.0
 */
class ScriptUpdate {
    /**
     * Constructs a new <code>ScriptUpdate</code>.
     * @alias module:model/ScriptUpdate
     */
    constructor() { 
        
        ScriptUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScriptUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScriptUpdate} obj Optional instance to populate.
     * @return {module:model/ScriptUpdate} The populated <code>ScriptUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScriptUpdate();

            if (data.hasOwnProperty('authorization_status')) {
                obj['authorization_status'] = ApiClient.convertToType(data['authorization_status'], 'String');
            }
            if (data.hasOwnProperty('justification')) {
                obj['justification'] = ApiClient.convertToType(data['justification'], 'String');
            }
            if (data.hasOwnProperty('authorized_hash')) {
                obj['authorized_hash'] = ApiClient.convertToType(data['authorized_hash'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Script authorization status
 * @member {module:model/ScriptUpdate.AuthorizationStatusEnum} authorization_status
 */
ScriptUpdate.prototype['authorization_status'] = undefined;

/**
 * Reason for authorization decision
 * @member {String} justification
 */
ScriptUpdate.prototype['justification'] = undefined;

/**
 * Hash of authorized script content
 * @member {String} authorized_hash
 */
ScriptUpdate.prototype['authorized_hash'] = undefined;





/**
 * Allowed values for the <code>authorization_status</code> property.
 * @enum {String}
 * @readonly
 */
ScriptUpdate['AuthorizationStatusEnum'] = {

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



export default ScriptUpdate;

