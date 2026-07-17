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
import RuleResponseAllOf from './RuleResponseAllOf';
import TimestampsNoDelete from './TimestampsNoDelete';

/**
 * The RuleResponse model module.
 * @module model/RuleResponse
 * @version 16.0.0
 */
class RuleResponse {
    /**
     * Constructs a new <code>RuleResponse</code>.
     * All attributes for a rule response.
     * @alias module:model/RuleResponse
     * @implements module:model/TimestampsNoDelete
     * @implements module:model/RuleResponseAllOf
     */
    constructor() { 
        TimestampsNoDelete.initialize(this);RuleResponseAllOf.initialize(this);
        RuleResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RuleResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RuleResponse} obj Optional instance to populate.
     * @return {module:model/RuleResponse} The populated <code>RuleResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RuleResponse();
            TimestampsNoDelete.constructFromObject(data, obj);
            RuleResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
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
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
RuleResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
RuleResponse.prototype['updated_at'] = undefined;

/**
 * Alphanumeric string identifying the rule. Stable across versions of the routing config.
 * @member {String} id
 */
RuleResponse.prototype['id'] = undefined;

/**
 * Whether this is the default (catch-all) rule for the path.
 * @member {Boolean} is_default
 */
RuleResponse.prototype['is_default'] = undefined;

/**
 * @member {module:model/Action} action
 */
RuleResponse.prototype['action'] = undefined;

/**
 * The conditions a request must satisfy for this rule to match. Empty for the default rule.
 * @member {Array.<module:model/RoutingConfigCondition>} conditions
 */
RuleResponse.prototype['conditions'] = undefined;


// Implement TimestampsNoDelete interface:
/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
TimestampsNoDelete.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
TimestampsNoDelete.prototype['updated_at'] = undefined;
// Implement RuleResponseAllOf interface:
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




export default RuleResponse;

