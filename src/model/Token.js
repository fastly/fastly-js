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
 * The Token model module.
 * @module model/Token
 * @version 7.8.0
 */
class Token {
    /**
     * Constructs a new <code>Token</code>.
     * @alias module:model/Token
     */
    constructor() { 
        
        Token.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Token</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Token} obj Optional instance to populate.
     * @return {module:model/Token} The populated <code>Token</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Token();

            if (data.hasOwnProperty('services')) {
                obj['services'] = ApiClient.convertToType(data['services'], ['String']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
            }
        }
        return obj;
    }


}

/**
 * List of alphanumeric strings identifying services (optional). If no services are specified, the token will have access to all services on the account. 
 * @member {Array.<String>} services
 */
Token.prototype['services'] = undefined;

/**
 * Name of the token.
 * @member {String} name
 */
Token.prototype['name'] = undefined;

/**
 * Space-delimited list of authorization scope.
 * @member {module:model/Token.ScopeEnum} scope
 * @default 'global'
 */
Token.prototype['scope'] = undefined;





/**
 * Allowed values for the <code>scope</code> property.
 * @enum {String}
 * @readonly
 */
Token['ScopeEnum'] = {

    /**
     * value: "global"
     * @const
     */
    "global": "global",

    /**
     * value: "purge_select"
     * @const
     */
    "purge_select": "purge_select",

    /**
     * value: "purge_all"
     * @const
     */
    "purge_all": "purge_all",

    /**
     * value: "global:read"
     * @const
     */
    "global:read": "global:read"
};



export default Token;

