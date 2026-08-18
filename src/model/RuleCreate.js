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
import Position from './Position';
import RoutingConfigCondition from './RoutingConfigCondition';

/**
 * The RuleCreate model module.
 * @module model/RuleCreate
 * @version 16.1.0
 */
class RuleCreate {
    /**
     * Constructs a new <code>RuleCreate</code>.
     * All attributes for creating a rule. A rule with an empty &#x60;conditions&#x60; array is the default (catch-all) rule for its path.
     * @alias module:model/RuleCreate
     * @param action {module:model/Action} 
     * @param conditions {Array.<module:model/RoutingConfigCondition>} The conditions a request must satisfy for this rule to match. An empty array indicates the default rule for the path.
     */
    constructor(action, conditions) { 
        
        RuleCreate.initialize(this, action, conditions);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action, conditions) { 
        obj['action'] = action;
        obj['conditions'] = conditions;
    }

    /**
     * Constructs a <code>RuleCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RuleCreate} obj Optional instance to populate.
     * @return {module:model/RuleCreate} The populated <code>RuleCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RuleCreate();

            if (data.hasOwnProperty('action')) {
                obj['action'] = Action.constructFromObject(data['action']);
            }
            if (data.hasOwnProperty('conditions')) {
                obj['conditions'] = ApiClient.convertToType(data['conditions'], [RoutingConfigCondition]);
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = Position.constructFromObject(data['position']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Action} action
 */
RuleCreate.prototype['action'] = undefined;

/**
 * The conditions a request must satisfy for this rule to match. An empty array indicates the default rule for the path.
 * @member {Array.<module:model/RoutingConfigCondition>} conditions
 */
RuleCreate.prototype['conditions'] = undefined;

/**
 * @member {module:model/Position} position
 */
RuleCreate.prototype['position'] = undefined;






export default RuleCreate;

