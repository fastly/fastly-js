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
 * The InlineResponse400 model module.
 * @module model/InlineResponse400
 * @version 7.3.0
 */
class InlineResponse400 {
    /**
     * Constructs a new <code>InlineResponse400</code>.
     * @alias module:model/InlineResponse400
     */
    constructor() { 
        
        InlineResponse400.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse400</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse400} obj Optional instance to populate.
     * @return {module:model/InlineResponse400} The populated <code>InlineResponse400</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse400();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse400.CodeEnum} code
 */
InlineResponse400.prototype['code'] = undefined;





/**
 * Allowed values for the <code>code</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse400['CodeEnum'] = {

    /**
     * value: "invalid_grant"
     * @const
     */
    "invalid_grant": "invalid_grant",

    /**
     * value: "invalid_request"
     * @const
     */
    "invalid_request": "invalid_request",

    /**
     * value: "invalid_scope"
     * @const
     */
    "invalid_scope": "invalid_scope",

    /**
     * value: "account_locked"
     * @const
     */
    "account_locked": "account_locked",

    /**
     * value: "2fa.verify"
     * @const
     */
    "mfa_verify": "2fa.verify"
};



export default InlineResponse400;

