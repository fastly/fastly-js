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
import Timestamps from './Timestamps';
import WafActiveRuleResponseDataAttributesAllOf from './WafActiveRuleResponseDataAttributesAllOf';

/**
 * The WafActiveRuleResponseDataAttributes model module.
 * @module model/WafActiveRuleResponseDataAttributes
 * @version 5.0.2
 */
class WafActiveRuleResponseDataAttributes {
    /**
     * Constructs a new <code>WafActiveRuleResponseDataAttributes</code>.
     * @alias module:model/WafActiveRuleResponseDataAttributes
     * @implements module:model/Timestamps
     * @implements module:model/WafActiveRuleResponseDataAttributesAllOf
     */
    constructor() { 
        Timestamps.initialize(this);WafActiveRuleResponseDataAttributesAllOf.initialize(this);
        WafActiveRuleResponseDataAttributes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WafActiveRuleResponseDataAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafActiveRuleResponseDataAttributes} obj Optional instance to populate.
     * @return {module:model/WafActiveRuleResponseDataAttributes} The populated <code>WafActiveRuleResponseDataAttributes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WafActiveRuleResponseDataAttributes();
            Timestamps.constructFromObject(data, obj);
            WafActiveRuleResponseDataAttributesAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('latest_revision')) {
                obj['latest_revision'] = ApiClient.convertToType(data['latest_revision'], 'Number');
            }
            if (data.hasOwnProperty('outdated')) {
                obj['outdated'] = ApiClient.convertToType(data['outdated'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
WafActiveRuleResponseDataAttributes.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
WafActiveRuleResponseDataAttributes.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
WafActiveRuleResponseDataAttributes.prototype['updated_at'] = undefined;

/**
 * The latest rule revision number that is available for the associated rule revision.
 * @member {Number} latest_revision
 */
WafActiveRuleResponseDataAttributes.prototype['latest_revision'] = undefined;

/**
 * Indicates if the associated rule revision is up to date or not.
 * @member {Boolean} outdated
 */
WafActiveRuleResponseDataAttributes.prototype['outdated'] = undefined;


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
// Implement WafActiveRuleResponseDataAttributesAllOf interface:
/**
 * The latest rule revision number that is available for the associated rule revision.
 * @member {Number} latest_revision
 */
WafActiveRuleResponseDataAttributesAllOf.prototype['latest_revision'] = undefined;
/**
 * Indicates if the associated rule revision is up to date or not.
 * @member {Boolean} outdated
 */
WafActiveRuleResponseDataAttributesAllOf.prototype['outdated'] = undefined;




export default WafActiveRuleResponseDataAttributes;

