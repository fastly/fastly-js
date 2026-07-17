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
import PathResponse from './PathResponse';
import RuleResponse from './RuleResponse';

/**
 * The PathWithRules model module.
 * @module model/PathWithRules
 * @version 16.0.0
 */
class PathWithRules {
    /**
     * Constructs a new <code>PathWithRules</code>.
     * A path together with all of its rules.
     * @alias module:model/PathWithRules
     */
    constructor() { 
        
        PathWithRules.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PathWithRules</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PathWithRules} obj Optional instance to populate.
     * @return {module:model/PathWithRules} The populated <code>PathWithRules</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PathWithRules();

            if (data.hasOwnProperty('path')) {
                obj['path'] = PathResponse.constructFromObject(data['path']);
            }
            if (data.hasOwnProperty('rules')) {
                obj['rules'] = ApiClient.convertToType(data['rules'], [RuleResponse]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PathResponse} path
 */
PathWithRules.prototype['path'] = undefined;

/**
 * @member {Array.<module:model/RuleResponse>} rules
 */
PathWithRules.prototype['rules'] = undefined;






export default PathWithRules;

