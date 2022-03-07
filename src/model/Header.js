/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Header model module.
 * @module model/Header
 * @version 3.0.0-beta2
 */
class Header {
    /**
     * Constructs a new <code>Header</code>.
     * @alias module:model/Header
     */
    constructor() { 
        
        Header.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Header</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Header} obj Optional instance to populate.
     * @return {module:model/Header} The populated <code>Header</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Header();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('cache_condition')) {
                obj['cache_condition'] = ApiClient.convertToType(data['cache_condition'], 'String');
            }
            if (data.hasOwnProperty('dst')) {
                obj['dst'] = ApiClient.convertToType(data['dst'], 'String');
            }
            if (data.hasOwnProperty('ignore_if_set')) {
                obj['ignore_if_set'] = ApiClient.convertToType(data['ignore_if_set'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'Number');
            }
            if (data.hasOwnProperty('regex')) {
                obj['regex'] = ApiClient.convertToType(data['regex'], 'String');
            }
            if (data.hasOwnProperty('request_condition')) {
                obj['request_condition'] = ApiClient.convertToType(data['request_condition'], 'String');
            }
            if (data.hasOwnProperty('response_condition')) {
                obj['response_condition'] = ApiClient.convertToType(data['response_condition'], 'String');
            }
            if (data.hasOwnProperty('src')) {
                obj['src'] = ApiClient.convertToType(data['src'], 'String');
            }
            if (data.hasOwnProperty('substitution')) {
                obj['substitution'] = ApiClient.convertToType(data['substitution'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Accepts a string value.
 * @member {module:model/Header.ActionEnum} action
 */
Header.prototype['action'] = undefined;

/**
 * Name of the cache condition controlling when this configuration applies.
 * @member {String} cache_condition
 */
Header.prototype['cache_condition'] = undefined;

/**
 * Header to set.
 * @member {String} dst
 */
Header.prototype['dst'] = undefined;

/**
 * Don't add the header if it is added already. Only applies to 'set' action.
 * @member {Number} ignore_if_set
 */
Header.prototype['ignore_if_set'] = undefined;

/**
 * A handle to refer to this Header object.
 * @member {String} name
 */
Header.prototype['name'] = undefined;

/**
 * Priority determines execution order. Lower numbers execute first.
 * @member {Number} priority
 * @default 100
 */
Header.prototype['priority'] = 100;

/**
 * Regular expression to use. Only applies to `regex` and `regex_repeat` actions.
 * @member {String} regex
 */
Header.prototype['regex'] = undefined;

/**
 * Condition which, if met, will select this configuration during a request. Optional.
 * @member {String} request_condition
 */
Header.prototype['request_condition'] = undefined;

/**
 * Optional name of a response condition to apply.
 * @member {String} response_condition
 */
Header.prototype['response_condition'] = undefined;

/**
 * Variable to be used as a source for the header content. Does not apply to `delete` action.
 * @member {String} src
 */
Header.prototype['src'] = undefined;

/**
 * Value to substitute in place of regular expression. Only applies to `regex` and `regex_repeat` actions.
 * @member {String} substitution
 */
Header.prototype['substitution'] = undefined;

/**
 * Accepts a string value.
 * @member {module:model/Header.TypeEnum} type
 */
Header.prototype['type'] = undefined;





/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
Header['ActionEnum'] = {

    /**
     * value: "set"
     * @const
     */
    "set": "set",

    /**
     * value: "append"
     * @const
     */
    "append": "append",

    /**
     * value: "delete"
     * @const
     */
    "delete": "delete",

    /**
     * value: "regex"
     * @const
     */
    "regex": "regex",

    /**
     * value: "regex_repeat"
     * @const
     */
    "regex_repeat": "regex_repeat"
};


/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Header['TypeEnum'] = {

    /**
     * value: "request"
     * @const
     */
    "request": "request",

    /**
     * value: "cache"
     * @const
     */
    "cache": "cache",

    /**
     * value: "response"
     * @const
     */
    "response": "response"
};



export default Header;

