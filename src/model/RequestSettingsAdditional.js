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
 * The RequestSettingsAdditional model module.
 * @module model/RequestSettingsAdditional
 * @version 7.9.0
 */
class RequestSettingsAdditional {
    /**
     * Constructs a new <code>RequestSettingsAdditional</code>.
     * @alias module:model/RequestSettingsAdditional
     */
    constructor() { 
        
        RequestSettingsAdditional.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RequestSettingsAdditional</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestSettingsAdditional} obj Optional instance to populate.
     * @return {module:model/RequestSettingsAdditional} The populated <code>RequestSettingsAdditional</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RequestSettingsAdditional();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('default_host')) {
                obj['default_host'] = ApiClient.convertToType(data['default_host'], 'String');
            }
            if (data.hasOwnProperty('hash_keys')) {
                obj['hash_keys'] = ApiClient.convertToType(data['hash_keys'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('request_condition')) {
                obj['request_condition'] = ApiClient.convertToType(data['request_condition'], 'String');
            }
            if (data.hasOwnProperty('xff')) {
                obj['xff'] = ApiClient.convertToType(data['xff'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Allows you to terminate request handling and immediately perform an action.
 * @member {module:model/RequestSettingsAdditional.ActionEnum} action
 */
RequestSettingsAdditional.prototype['action'] = undefined;

/**
 * Sets the host header.
 * @member {String} default_host
 */
RequestSettingsAdditional.prototype['default_host'] = undefined;

/**
 * Comma separated list of varnish request object fields that should be in the hash key.
 * @member {String} hash_keys
 */
RequestSettingsAdditional.prototype['hash_keys'] = undefined;

/**
 * Name for the request settings.
 * @member {String} name
 */
RequestSettingsAdditional.prototype['name'] = undefined;

/**
 * Condition which, if met, will select this configuration during a request. Optional.
 * @member {String} request_condition
 */
RequestSettingsAdditional.prototype['request_condition'] = undefined;

/**
 * Short for X-Forwarded-For.
 * @member {module:model/RequestSettingsAdditional.XffEnum} xff
 */
RequestSettingsAdditional.prototype['xff'] = undefined;





/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
RequestSettingsAdditional['ActionEnum'] = {

    /**
     * value: "lookup"
     * @const
     */
    "lookup": "lookup",

    /**
     * value: "pass"
     * @const
     */
    "pass": "pass"
};


/**
 * Allowed values for the <code>xff</code> property.
 * @enum {String}
 * @readonly
 */
RequestSettingsAdditional['XffEnum'] = {

    /**
     * value: "clear"
     * @const
     */
    "clear": "clear",

    /**
     * value: "leave"
     * @const
     */
    "leave": "leave",

    /**
     * value: "append"
     * @const
     */
    "append": "append",

    /**
     * value: "append_all"
     * @const
     */
    "append_all": "append_all",

    /**
     * value: "overwrite"
     * @const
     */
    "overwrite": "overwrite"
};



export default RequestSettingsAdditional;

