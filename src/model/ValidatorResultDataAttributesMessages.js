/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import TokensAdditionalProps from './TokensAdditionalProps';

/**
 * The ValidatorResultDataAttributesMessages model module.
 * @module model/ValidatorResultDataAttributesMessages
 * @version 6.1.0
 */
class ValidatorResultDataAttributesMessages {
    /**
     * Constructs a new <code>ValidatorResultDataAttributesMessages</code>.
     * @alias module:model/ValidatorResultDataAttributesMessages
     * @param type {String} 
     * @param warning {Boolean} 
     * @param message {String} 
     * @param tokens {Array.<Object.<String, module:model/TokensAdditionalProps>>} 
     */
    constructor(type, warning, message, tokens) { 
        
        ValidatorResultDataAttributesMessages.initialize(this, type, warning, message, tokens);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, warning, message, tokens) { 
        obj['type'] = type;
        obj['warning'] = warning;
        obj['message'] = message;
        obj['tokens'] = tokens;
    }

    /**
     * Constructs a <code>ValidatorResultDataAttributesMessages</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidatorResultDataAttributesMessages} obj Optional instance to populate.
     * @return {module:model/ValidatorResultDataAttributesMessages} The populated <code>ValidatorResultDataAttributesMessages</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValidatorResultDataAttributesMessages();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('warning')) {
                obj['warning'] = ApiClient.convertToType(data['warning'], 'Boolean');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('tokens')) {
                obj['tokens'] = ApiClient.convertToType(data['tokens'], [{'String': TokensAdditionalProps}]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} type
 */
ValidatorResultDataAttributesMessages.prototype['type'] = undefined;

/**
 * @member {Boolean} warning
 */
ValidatorResultDataAttributesMessages.prototype['warning'] = undefined;

/**
 * @member {String} message
 */
ValidatorResultDataAttributesMessages.prototype['message'] = undefined;

/**
 * @member {Array.<Object.<String, module:model/TokensAdditionalProps>>} tokens
 */
ValidatorResultDataAttributesMessages.prototype['tokens'] = undefined;






export default ValidatorResultDataAttributesMessages;

