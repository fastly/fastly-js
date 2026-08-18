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
 * The Position model module.
 * @module model/Position
 * @version 16.1.0
 */
class Position {
    /**
     * Constructs a new <code>Position</code>.
     * The position at which to place a new rule. At most one of &#x60;before&#x60; or &#x60;after&#x60; may be set. Cannot be used when creating a default (empty-conditions) rule.
     * @alias module:model/Position
     */
    constructor() { 
        
        Position.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Position</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Position} obj Optional instance to populate.
     * @return {module:model/Position} The populated <code>Position</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Position();

            if (data.hasOwnProperty('before')) {
                obj['before'] = ApiClient.convertToType(data['before'], 'String');
            }
            if (data.hasOwnProperty('after')) {
                obj['after'] = ApiClient.convertToType(data['after'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The id of the rule that this rule should be placed before.
 * @member {String} before
 */
Position.prototype['before'] = undefined;

/**
 * The id of the rule that this rule should be placed after.
 * @member {String} after
 */
Position.prototype['after'] = undefined;






export default Position;

