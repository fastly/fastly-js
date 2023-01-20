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
import WafFirewallResponseDataAttributesAllOf from './WafFirewallResponseDataAttributesAllOf';

/**
 * The WafFirewallResponseDataAttributes model module.
 * @module model/WafFirewallResponseDataAttributes
 * @version v3.1.0
 */
class WafFirewallResponseDataAttributes {
    /**
     * Constructs a new <code>WafFirewallResponseDataAttributes</code>.
     * @alias module:model/WafFirewallResponseDataAttributes
     * @implements module:model/Timestamps
     * @implements module:model/WafFirewallResponseDataAttributesAllOf
     */
    constructor() { 
        Timestamps.initialize(this);WafFirewallResponseDataAttributesAllOf.initialize(this);
        WafFirewallResponseDataAttributes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WafFirewallResponseDataAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafFirewallResponseDataAttributes} obj Optional instance to populate.
     * @return {module:model/WafFirewallResponseDataAttributes} The populated <code>WafFirewallResponseDataAttributes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WafFirewallResponseDataAttributes();
            Timestamps.constructFromObject(data, obj);
            WafFirewallResponseDataAttributesAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('active_rules_fastly_block_count')) {
                obj['active_rules_fastly_block_count'] = ApiClient.convertToType(data['active_rules_fastly_block_count'], 'Number');
            }
            if (data.hasOwnProperty('active_rules_fastly_log_count')) {
                obj['active_rules_fastly_log_count'] = ApiClient.convertToType(data['active_rules_fastly_log_count'], 'Number');
            }
            if (data.hasOwnProperty('active_rules_fastly_score_count')) {
                obj['active_rules_fastly_score_count'] = ApiClient.convertToType(data['active_rules_fastly_score_count'], 'Number');
            }
            if (data.hasOwnProperty('active_rules_owasp_block_count')) {
                obj['active_rules_owasp_block_count'] = ApiClient.convertToType(data['active_rules_owasp_block_count'], 'Number');
            }
            if (data.hasOwnProperty('active_rules_owasp_log_count')) {
                obj['active_rules_owasp_log_count'] = ApiClient.convertToType(data['active_rules_owasp_log_count'], 'Number');
            }
            if (data.hasOwnProperty('active_rules_owasp_score_count')) {
                obj['active_rules_owasp_score_count'] = ApiClient.convertToType(data['active_rules_owasp_score_count'], 'Number');
            }
            if (data.hasOwnProperty('active_rules_trustwave_block_count')) {
                obj['active_rules_trustwave_block_count'] = ApiClient.convertToType(data['active_rules_trustwave_block_count'], 'Number');
            }
            if (data.hasOwnProperty('active_rules_trustwave_log_count')) {
                obj['active_rules_trustwave_log_count'] = ApiClient.convertToType(data['active_rules_trustwave_log_count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
WafFirewallResponseDataAttributes.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
WafFirewallResponseDataAttributes.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
WafFirewallResponseDataAttributes.prototype['updated_at'] = undefined;

/**
 * @member {String} service_id
 */
WafFirewallResponseDataAttributes.prototype['service_id'] = undefined;

/**
 * The number of active Fastly rules set to block on the active or latest firewall version.
 * @member {Number} active_rules_fastly_block_count
 */
WafFirewallResponseDataAttributes.prototype['active_rules_fastly_block_count'] = undefined;

/**
 * The number of active Fastly rules set to log on the active or latest firewall version.
 * @member {Number} active_rules_fastly_log_count
 */
WafFirewallResponseDataAttributes.prototype['active_rules_fastly_log_count'] = undefined;

/**
 * The number of active Fastly rules set to score on the active or latest firewall version.
 * @member {Number} active_rules_fastly_score_count
 */
WafFirewallResponseDataAttributes.prototype['active_rules_fastly_score_count'] = undefined;

/**
 * The number of active OWASP rules set to block on the active or latest firewall version.
 * @member {Number} active_rules_owasp_block_count
 */
WafFirewallResponseDataAttributes.prototype['active_rules_owasp_block_count'] = undefined;

/**
 * The number of active OWASP rules set to log on the active or latest firewall version.
 * @member {Number} active_rules_owasp_log_count
 */
WafFirewallResponseDataAttributes.prototype['active_rules_owasp_log_count'] = undefined;

/**
 * The number of active OWASP rules set to score on the active or latest firewall version.
 * @member {Number} active_rules_owasp_score_count
 */
WafFirewallResponseDataAttributes.prototype['active_rules_owasp_score_count'] = undefined;

/**
 * The number of active Trustwave rules set to block on the active or latest firewall version.
 * @member {Number} active_rules_trustwave_block_count
 */
WafFirewallResponseDataAttributes.prototype['active_rules_trustwave_block_count'] = undefined;

/**
 * The number of active Trustwave rules set to log on the active or latest firewall version.
 * @member {Number} active_rules_trustwave_log_count
 */
WafFirewallResponseDataAttributes.prototype['active_rules_trustwave_log_count'] = undefined;


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
// Implement WafFirewallResponseDataAttributesAllOf interface:
/**
 * @member {String} service_id
 */
WafFirewallResponseDataAttributesAllOf.prototype['service_id'] = undefined;
/**
 * The number of active Fastly rules set to block on the active or latest firewall version.
 * @member {Number} active_rules_fastly_block_count
 */
WafFirewallResponseDataAttributesAllOf.prototype['active_rules_fastly_block_count'] = undefined;
/**
 * The number of active Fastly rules set to log on the active or latest firewall version.
 * @member {Number} active_rules_fastly_log_count
 */
WafFirewallResponseDataAttributesAllOf.prototype['active_rules_fastly_log_count'] = undefined;
/**
 * The number of active Fastly rules set to score on the active or latest firewall version.
 * @member {Number} active_rules_fastly_score_count
 */
WafFirewallResponseDataAttributesAllOf.prototype['active_rules_fastly_score_count'] = undefined;
/**
 * The number of active OWASP rules set to block on the active or latest firewall version.
 * @member {Number} active_rules_owasp_block_count
 */
WafFirewallResponseDataAttributesAllOf.prototype['active_rules_owasp_block_count'] = undefined;
/**
 * The number of active OWASP rules set to log on the active or latest firewall version.
 * @member {Number} active_rules_owasp_log_count
 */
WafFirewallResponseDataAttributesAllOf.prototype['active_rules_owasp_log_count'] = undefined;
/**
 * The number of active OWASP rules set to score on the active or latest firewall version.
 * @member {Number} active_rules_owasp_score_count
 */
WafFirewallResponseDataAttributesAllOf.prototype['active_rules_owasp_score_count'] = undefined;
/**
 * The number of active Trustwave rules set to block on the active or latest firewall version.
 * @member {Number} active_rules_trustwave_block_count
 */
WafFirewallResponseDataAttributesAllOf.prototype['active_rules_trustwave_block_count'] = undefined;
/**
 * The number of active Trustwave rules set to log on the active or latest firewall version.
 * @member {Number} active_rules_trustwave_log_count
 */
WafFirewallResponseDataAttributesAllOf.prototype['active_rules_trustwave_log_count'] = undefined;




export default WafFirewallResponseDataAttributes;

