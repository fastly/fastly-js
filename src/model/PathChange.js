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
import RuleChange from './RuleChange';
import RuleResponse from './RuleResponse';

/**
 * The PathChange model module.
 * @module model/PathChange
 * @version 16.0.0
 */
class PathChange {
    /**
     * Constructs a new <code>PathChange</code>.
     * Modifications to an existing path between versions.
     * @alias module:model/PathChange
     */
    constructor() { 
        
        PathChange.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PathChange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PathChange} obj Optional instance to populate.
     * @return {module:model/PathChange} The populated <code>PathChange</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PathChange();

            if (data.hasOwnProperty('path_id')) {
                obj['path_id'] = ApiClient.convertToType(data['path_id'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('old_path')) {
                obj['old_path'] = ApiClient.convertToType(data['old_path'], 'String');
            }
            if (data.hasOwnProperty('rules_added')) {
                obj['rules_added'] = ApiClient.convertToType(data['rules_added'], [RuleResponse]);
            }
            if (data.hasOwnProperty('rules_changed')) {
                obj['rules_changed'] = ApiClient.convertToType(data['rules_changed'], [RuleChange]);
            }
            if (data.hasOwnProperty('rules_deleted')) {
                obj['rules_deleted'] = ApiClient.convertToType(data['rules_deleted'], [RuleResponse]);
            }
        }
        return obj;
    }


}

/**
 * Alphanumeric string identifying the path. Stable across versions of the routing config.
 * @member {String} path_id
 */
PathChange.prototype['path_id'] = undefined;

/**
 * The current path pattern.
 * @member {String} path
 */
PathChange.prototype['path'] = undefined;

/**
 * The previous path pattern, if it changed.
 * @member {String} old_path
 */
PathChange.prototype['old_path'] = undefined;

/**
 * Rules that were added to this path.
 * @member {Array.<module:model/RuleResponse>} rules_added
 */
PathChange.prototype['rules_added'] = undefined;

/**
 * Rules that were modified on this path.
 * @member {Array.<module:model/RuleChange>} rules_changed
 */
PathChange.prototype['rules_changed'] = undefined;

/**
 * Rules that were removed from this path.
 * @member {Array.<module:model/RuleResponse>} rules_deleted
 */
PathChange.prototype['rules_deleted'] = undefined;






export default PathChange;

