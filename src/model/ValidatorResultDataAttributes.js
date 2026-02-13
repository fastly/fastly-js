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
import ValidatorResultDataAttributesMessages from './ValidatorResultDataAttributesMessages';

/**
 * The ValidatorResultDataAttributes model module.
 * @module model/ValidatorResultDataAttributes
 * @version 15.0.0-beta.4
 */
class ValidatorResultDataAttributes {
    /**
     * Constructs a new <code>ValidatorResultDataAttributes</code>.
     * @alias module:model/ValidatorResultDataAttributes
     */
    constructor() { 
        
        ValidatorResultDataAttributes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ValidatorResultDataAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidatorResultDataAttributes} obj Optional instance to populate.
     * @return {module:model/ValidatorResultDataAttributes} The populated <code>ValidatorResultDataAttributes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValidatorResultDataAttributes();

            if (data.hasOwnProperty('msg')) {
                obj['msg'] = ApiClient.convertToType(data['msg'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], ['String']);
            }
            if (data.hasOwnProperty('warnings')) {
                obj['warnings'] = ApiClient.convertToType(data['warnings'], ['String']);
            }
            if (data.hasOwnProperty('messages')) {
                obj['messages'] = ApiClient.convertToType(data['messages'], [ValidatorResultDataAttributesMessages]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} msg
 */
ValidatorResultDataAttributes.prototype['msg'] = undefined;

/**
 * @member {module:model/ValidatorResultDataAttributes.StatusEnum} status
 */
ValidatorResultDataAttributes.prototype['status'] = undefined;

/**
 * @member {Array.<String>} errors
 */
ValidatorResultDataAttributes.prototype['errors'] = undefined;

/**
 * @member {Array.<String>} warnings
 */
ValidatorResultDataAttributes.prototype['warnings'] = undefined;

/**
 * @member {Array.<module:model/ValidatorResultDataAttributesMessages>} messages
 */
ValidatorResultDataAttributes.prototype['messages'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
ValidatorResultDataAttributes['StatusEnum'] = {

    /**
     * value: "error"
     * @const
     */
    "error": "error",

    /**
     * value: "ok"
     * @const
     */
    "ok": "ok"
};



export default ValidatorResultDataAttributes;

