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
import ConditionOperator from './ConditionOperator';
import ConditionType from './ConditionType';

/**
 * The RoutingConfigCondition model module.
 * @module model/RoutingConfigCondition
 * @version 16.1.0
 */
class RoutingConfigCondition {
    /**
     * Constructs a new <code>RoutingConfigCondition</code>.
     * A condition that must be met for a rule to match.
     * @alias module:model/RoutingConfigCondition
     * @param type {module:model/ConditionType} 
     * @param operator {module:model/ConditionOperator} 
     * @param value {String} The value to compare against using the operator.
     */
    constructor(type, operator, value) { 
        
        RoutingConfigCondition.initialize(this, type, operator, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, operator, value) { 
        obj['type'] = type;
        obj['operator'] = operator;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>RoutingConfigCondition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RoutingConfigCondition} obj Optional instance to populate.
     * @return {module:model/RoutingConfigCondition} The populated <code>RoutingConfigCondition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RoutingConfigCondition();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ConditionType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('operator')) {
                obj['operator'] = ConditionOperator.constructFromObject(data['operator']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ConditionType} type
 */
RoutingConfigCondition.prototype['type'] = undefined;

/**
 * @member {module:model/ConditionOperator} operator
 */
RoutingConfigCondition.prototype['operator'] = undefined;

/**
 * The value to compare against using the operator.
 * @member {String} value
 */
RoutingConfigCondition.prototype['value'] = undefined;

/**
 * The key to evaluate. For `header` conditions this is the header name. Required for `header` conditions.
 * @member {String} key
 */
RoutingConfigCondition.prototype['key'] = undefined;






export default RoutingConfigCondition;

