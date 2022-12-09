/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import TypeWafActiveRule from './TypeWafActiveRule';

/**
 * The RelationshipMemberWafActiveRule model module.
 * @module model/RelationshipMemberWafActiveRule
 * @version 3.0.0
 */
class RelationshipMemberWafActiveRule {
    /**
     * Constructs a new <code>RelationshipMemberWafActiveRule</code>.
     * @alias module:model/RelationshipMemberWafActiveRule
     */
    constructor() { 
        
        RelationshipMemberWafActiveRule.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RelationshipMemberWafActiveRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipMemberWafActiveRule} obj Optional instance to populate.
     * @return {module:model/RelationshipMemberWafActiveRule} The populated <code>RelationshipMemberWafActiveRule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RelationshipMemberWafActiveRule();

            if (data.hasOwnProperty('type')) {
                obj['type'] = TypeWafActiveRule.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TypeWafActiveRule} type
 */
RelationshipMemberWafActiveRule.prototype['type'] = undefined;

/**
 * @member {String} id
 */
RelationshipMemberWafActiveRule.prototype['id'] = undefined;






export default RelationshipMemberWafActiveRule;

