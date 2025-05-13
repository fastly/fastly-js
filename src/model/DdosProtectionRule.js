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
import DdosProtectionAction from './DdosProtectionAction';
import DdosProtectionRuleAllOf from './DdosProtectionRuleAllOf';
import TimestampsNoDelete from './TimestampsNoDelete';

/**
 * The DdosProtectionRule model module.
 * @module model/DdosProtectionRule
 * @version 11.0.0
 */
class DdosProtectionRule {
    /**
     * Constructs a new <code>DdosProtectionRule</code>.
     * @alias module:model/DdosProtectionRule
     * @implements module:model/TimestampsNoDelete
     * @implements module:model/DdosProtectionRuleAllOf
     */
    constructor() { 
        TimestampsNoDelete.initialize(this);DdosProtectionRuleAllOf.initialize(this);
        DdosProtectionRule.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DdosProtectionRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DdosProtectionRule} obj Optional instance to populate.
     * @return {module:model/DdosProtectionRule} The populated <code>DdosProtectionRule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DdosProtectionRule();
            TimestampsNoDelete.constructFromObject(data, obj);
            DdosProtectionRuleAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('action')) {
                obj['action'] = DdosProtectionAction.constructFromObject(data['action']);
            }
            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('source_ip')) {
                obj['source_ip'] = ApiClient.convertToType(data['source_ip'], 'String');
            }
            if (data.hasOwnProperty('country_code')) {
                obj['country_code'] = ApiClient.convertToType(data['country_code'], 'String');
            }
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('asn')) {
                obj['asn'] = ApiClient.convertToType(data['asn'], 'String');
            }
            if (data.hasOwnProperty('source_ip_prefix')) {
                obj['source_ip_prefix'] = ApiClient.convertToType(data['source_ip_prefix'], 'String');
            }
            if (data.hasOwnProperty('additional_attributes')) {
                obj['additional_attributes'] = ApiClient.convertToType(data['additional_attributes'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
DdosProtectionRule.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
DdosProtectionRule.prototype['updated_at'] = undefined;

/**
 * Unique ID of the rule.
 * @member {String} id
 */
DdosProtectionRule.prototype['id'] = undefined;

/**
 * A human-readable name for the rule.
 * @member {String} name
 */
DdosProtectionRule.prototype['name'] = undefined;

/**
 * @member {module:model/DdosProtectionAction} action
 */
DdosProtectionRule.prototype['action'] = undefined;

/**
 * Alphanumeric string identifying the customer.
 * @member {String} customer_id
 */
DdosProtectionRule.prototype['customer_id'] = undefined;

/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */
DdosProtectionRule.prototype['service_id'] = undefined;

/**
 * Source IP address attribute.
 * @member {String} source_ip
 */
DdosProtectionRule.prototype['source_ip'] = undefined;

/**
 * Country code attribute.
 * @member {String} country_code
 */
DdosProtectionRule.prototype['country_code'] = undefined;

/**
 * Host attribute.
 * @member {String} host
 */
DdosProtectionRule.prototype['host'] = undefined;

/**
 * ASN attribute.
 * @member {String} asn
 */
DdosProtectionRule.prototype['asn'] = undefined;

/**
 * Source IP prefix attribute.
 * @member {String} source_ip_prefix
 */
DdosProtectionRule.prototype['source_ip_prefix'] = undefined;

/**
 * Attribute category for additional, unlisted attributes used in a rule.
 * @member {Array.<String>} additional_attributes
 */
DdosProtectionRule.prototype['additional_attributes'] = undefined;


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
// Implement DdosProtectionRuleAllOf interface:
/**
 * Unique ID of the rule.
 * @member {String} id
 */
DdosProtectionRuleAllOf.prototype['id'] = undefined;
/**
 * A human-readable name for the rule.
 * @member {String} name
 */
DdosProtectionRuleAllOf.prototype['name'] = undefined;
/**
 * @member {module:model/DdosProtectionAction} action
 */
DdosProtectionRuleAllOf.prototype['action'] = undefined;
/**
 * Alphanumeric string identifying the customer.
 * @member {String} customer_id
 */
DdosProtectionRuleAllOf.prototype['customer_id'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */
DdosProtectionRuleAllOf.prototype['service_id'] = undefined;
/**
 * Source IP address attribute.
 * @member {String} source_ip
 */
DdosProtectionRuleAllOf.prototype['source_ip'] = undefined;
/**
 * Country code attribute.
 * @member {String} country_code
 */
DdosProtectionRuleAllOf.prototype['country_code'] = undefined;
/**
 * Host attribute.
 * @member {String} host
 */
DdosProtectionRuleAllOf.prototype['host'] = undefined;
/**
 * ASN attribute.
 * @member {String} asn
 */
DdosProtectionRuleAllOf.prototype['asn'] = undefined;
/**
 * Source IP prefix attribute.
 * @member {String} source_ip_prefix
 */
DdosProtectionRuleAllOf.prototype['source_ip_prefix'] = undefined;
/**
 * Attribute category for additional, unlisted attributes used in a rule.
 * @member {Array.<String>} additional_attributes
 */
DdosProtectionRuleAllOf.prototype['additional_attributes'] = undefined;




export default DdosProtectionRule;

