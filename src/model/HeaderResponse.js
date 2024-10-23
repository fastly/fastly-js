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
import Header from './Header';
import HeaderResponseAdditional from './HeaderResponseAdditional';
import ServiceIdAndVersionString from './ServiceIdAndVersionString';
import Timestamps from './Timestamps';

/**
 * The HeaderResponse model module.
 * @module model/HeaderResponse
 * @version 7.10.0
 */
class HeaderResponse {
    /**
     * Constructs a new <code>HeaderResponse</code>.
     * @alias module:model/HeaderResponse
     * @implements module:model/Header
     * @implements module:model/HeaderResponseAdditional
     * @implements module:model/ServiceIdAndVersionString
     * @implements module:model/Timestamps
     */
    constructor() { 
        Header.initialize(this);HeaderResponseAdditional.initialize(this);ServiceIdAndVersionString.initialize(this);Timestamps.initialize(this);
        HeaderResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HeaderResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HeaderResponse} obj Optional instance to populate.
     * @return {module:model/HeaderResponse} The populated <code>HeaderResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HeaderResponse();
            Header.constructFromObject(data, obj);
            HeaderResponseAdditional.constructFromObject(data, obj);
            ServiceIdAndVersionString.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('cache_condition')) {
                obj['cache_condition'] = ApiClient.convertToType(data['cache_condition'], 'String');
            }
            if (data.hasOwnProperty('dst')) {
                obj['dst'] = ApiClient.convertToType(data['dst'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
            if (data.hasOwnProperty('ignore_if_set')) {
                obj['ignore_if_set'] = ApiClient.convertToType(data['ignore_if_set'], 'String');
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'String');
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * Accepts a string value.
 * @member {module:model/HeaderResponse.ActionEnum} action
 */
HeaderResponse.prototype['action'] = undefined;

/**
 * Name of the cache condition controlling when this configuration applies.
 * @member {String} cache_condition
 */
HeaderResponse.prototype['cache_condition'] = undefined;

/**
 * Header to set.
 * @member {String} dst
 */
HeaderResponse.prototype['dst'] = undefined;

/**
 * A handle to refer to this Header object.
 * @member {String} name
 */
HeaderResponse.prototype['name'] = undefined;

/**
 * Regular expression to use. Only applies to `regex` and `regex_repeat` actions.
 * @member {String} regex
 */
HeaderResponse.prototype['regex'] = undefined;

/**
 * Condition which, if met, will select this configuration during a request. Optional.
 * @member {String} request_condition
 */
HeaderResponse.prototype['request_condition'] = undefined;

/**
 * Optional name of a response condition to apply.
 * @member {String} response_condition
 */
HeaderResponse.prototype['response_condition'] = undefined;

/**
 * Variable to be used as a source for the header content. Does not apply to `delete` action.
 * @member {String} src
 */
HeaderResponse.prototype['src'] = undefined;

/**
 * Value to substitute in place of regular expression. Only applies to `regex` and `regex_repeat` actions.
 * @member {String} substitution
 */
HeaderResponse.prototype['substitution'] = undefined;

/**
 * Accepts a string value.
 * @member {module:model/HeaderResponse.TypeEnum} type
 */
HeaderResponse.prototype['type'] = undefined;

/**
 * Don't add the header if it is added already. Only applies to 'set' action. Numerical value (\"0\" = false, \"1\" = true)
 * @member {String} ignore_if_set
 */
HeaderResponse.prototype['ignore_if_set'] = undefined;

/**
 * Priority determines execution order. Lower numbers execute first.
 * @member {String} priority
 * @default '100'
 */
HeaderResponse.prototype['priority'] = '100';

/**
 * @member {String} service_id
 */
HeaderResponse.prototype['service_id'] = undefined;

/**
 * @member {String} version
 */
HeaderResponse.prototype['version'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
HeaderResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
HeaderResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
HeaderResponse.prototype['updated_at'] = undefined;


// Implement Header interface:
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
 * A handle to refer to this Header object.
 * @member {String} name
 */
Header.prototype['name'] = undefined;
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
// Implement HeaderResponseAdditional interface:
/**
 * Don't add the header if it is added already. Only applies to 'set' action. Numerical value (\"0\" = false, \"1\" = true)
 * @member {String} ignore_if_set
 */
HeaderResponseAdditional.prototype['ignore_if_set'] = undefined;
/**
 * Priority determines execution order. Lower numbers execute first.
 * @member {String} priority
 * @default '100'
 */
HeaderResponseAdditional.prototype['priority'] = '100';
// Implement ServiceIdAndVersionString interface:
/**
 * @member {String} service_id
 */
ServiceIdAndVersionString.prototype['service_id'] = undefined;
/**
 * @member {String} version
 */
ServiceIdAndVersionString.prototype['version'] = undefined;
// Implement Timestamps interface:
/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
Timestamps.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
Timestamps.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
Timestamps.prototype['updated_at'] = undefined;



/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
HeaderResponse['ActionEnum'] = {

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
HeaderResponse['TypeEnum'] = {

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



export default HeaderResponse;

