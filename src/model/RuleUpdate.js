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
 * The RuleUpdate model module.
 * @module model/RuleUpdate
 * @version 16.0.0
 */
class RuleUpdate {
    /**
     * Constructs a new <code>RuleUpdate</code>.
     * All attributes for updating a rule. At least one of &#x60;action&#x60;, &#x60;conditions&#x60;, or &#x60;position&#x60; must be provided.
     * @alias module:model/RuleUpdate
     */
    constructor() { 
        
        RuleUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RuleUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RuleUpdate} obj Optional instance to populate.
     * @return {module:model/RuleUpdate} The populated <code>RuleUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RuleUpdate();

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
RuleUpdate.prototype['action'] = undefined;

/**
 * @member {Array.<module:model/RoutingConfigCondition>} conditions
 */
RuleUpdate.prototype['conditions'] = undefined;

/**
 * @member {module:model/Position} position
 */
RuleUpdate.prototype['position'] = undefined;






export default RuleUpdate;

