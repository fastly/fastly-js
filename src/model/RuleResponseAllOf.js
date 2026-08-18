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
import Action from './Action';
import RoutingConfigCondition from './RoutingConfigCondition';

/**
 * The RuleResponseAllOf model module.
 * @module model/RuleResponseAllOf
 * @version 16.1.0
 */
class RuleResponseAllOf {
    /**
     * Constructs a new <code>RuleResponseAllOf</code>.
     * @alias module:model/RuleResponseAllOf
     */
    constructor() { 
        
        RuleResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RuleResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RuleResponseAllOf} obj Optional instance to populate.
     * @return {module:model/RuleResponseAllOf} The populated <code>RuleResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RuleResponseAllOf();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('is_default')) {
                obj['is_default'] = ApiClient.convertToType(data['is_default'], 'Boolean');
            }
            if (data.hasOwnProperty('action')) {
                obj['action'] = Action.constructFromObject(data['action']);
            }
            if (data.hasOwnProperty('conditions')) {
                obj['conditions'] = ApiClient.convertToType(data['conditions'], [RoutingConfigCondition]);
            }
        }
        return obj;
    }


}

/**
 * Alphanumeric string identifying the rule. Stable across versions of the routing config.
 * @member {String} id
 */
RuleResponseAllOf.prototype['id'] = undefined;

/**
 * Whether this is the default (catch-all) rule for the path.
 * @member {Boolean} is_default
 */
RuleResponseAllOf.prototype['is_default'] = undefined;

/**
 * @member {module:model/Action} action
 */
RuleResponseAllOf.prototype['action'] = undefined;

/**
 * The conditions a request must satisfy for this rule to match. Empty for the default rule.
 * @member {Array.<module:model/RoutingConfigCondition>} conditions
 */
RuleResponseAllOf.prototype['conditions'] = undefined;






export default RuleResponseAllOf;

