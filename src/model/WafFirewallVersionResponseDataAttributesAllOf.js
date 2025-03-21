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
 * The WafFirewallVersionResponseDataAttributesAllOf model module.
 * @module model/WafFirewallVersionResponseDataAttributesAllOf
 * @version 10.0.0
 */
class WafFirewallVersionResponseDataAttributesAllOf {
    /**
     * Constructs a new <code>WafFirewallVersionResponseDataAttributesAllOf</code>.
     * @alias module:model/WafFirewallVersionResponseDataAttributesAllOf
     */
    constructor() { 
        
        WafFirewallVersionResponseDataAttributesAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WafFirewallVersionResponseDataAttributesAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafFirewallVersionResponseDataAttributesAllOf} obj Optional instance to populate.
     * @return {module:model/WafFirewallVersionResponseDataAttributesAllOf} The populated <code>WafFirewallVersionResponseDataAttributesAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WafFirewallVersionResponseDataAttributesAllOf();

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
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
            if (data.hasOwnProperty('last_deployment_status')) {
                obj['last_deployment_status'] = ApiClient.convertToType(data['last_deployment_status'], 'String');
            }
            if (data.hasOwnProperty('deployed_at')) {
                obj['deployed_at'] = ApiClient.convertToType(data['deployed_at'], 'String');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Whether a specific firewall version is currently deployed.
 * @member {Boolean} active
 */
WafFirewallVersionResponseDataAttributesAllOf.prototype['active'] = undefined;

/**
 * The number of active Fastly rules set to block.
 * @member {Number} active_rules_fastly_block_count
 */
WafFirewallVersionResponseDataAttributesAllOf.prototype['active_rules_fastly_block_count'] = undefined;

/**
 * The number of active Fastly rules set to log.
 * @member {Number} active_rules_fastly_log_count
 */
WafFirewallVersionResponseDataAttributesAllOf.prototype['active_rules_fastly_log_count'] = undefined;

/**
 * The number of active Fastly rules set to score.
 * @member {Number} active_rules_fastly_score_count
 */
WafFirewallVersionResponseDataAttributesAllOf.prototype['active_rules_fastly_score_count'] = undefined;

/**
 * The number of active OWASP rules set to block.
 * @member {Number} active_rules_owasp_block_count
 */
WafFirewallVersionResponseDataAttributesAllOf.prototype['active_rules_owasp_block_count'] = undefined;

/**
 * The number of active OWASP rules set to log.
 * @member {Number} active_rules_owasp_log_count
 */
WafFirewallVersionResponseDataAttributesAllOf.prototype['active_rules_owasp_log_count'] = undefined;

/**
 * The number of active OWASP rules set to score.
 * @member {Number} active_rules_owasp_score_count
 */
WafFirewallVersionResponseDataAttributesAllOf.prototype['active_rules_owasp_score_count'] = undefined;

/**
 * The number of active Trustwave rules set to block.
 * @member {Number} active_rules_trustwave_block_count
 */
WafFirewallVersionResponseDataAttributesAllOf.prototype['active_rules_trustwave_block_count'] = undefined;

/**
 * The number of active Trustwave rules set to log.
 * @member {Number} active_rules_trustwave_log_count
 */
WafFirewallVersionResponseDataAttributesAllOf.prototype['active_rules_trustwave_log_count'] = undefined;

/**
 * The status of the last deployment of this firewall version.
 * @member {module:model/WafFirewallVersionResponseDataAttributesAllOf.LastDeploymentStatusEnum} last_deployment_status
 */
WafFirewallVersionResponseDataAttributesAllOf.prototype['last_deployment_status'] = undefined;

/**
 * Time-stamp (GMT) indicating when the firewall version was last deployed.
 * @member {String} deployed_at
 */
WafFirewallVersionResponseDataAttributesAllOf.prototype['deployed_at'] = undefined;

/**
 * Contains error message if the firewall version fails to deploy.
 * @member {String} error
 */
WafFirewallVersionResponseDataAttributesAllOf.prototype['error'] = undefined;





/**
 * Allowed values for the <code>last_deployment_status</code> property.
 * @enum {String}
 * @readonly
 */
WafFirewallVersionResponseDataAttributesAllOf['LastDeploymentStatusEnum'] = {

    /**
     * value: "null"
     * @const
     */
    "null": "null",

    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",

    /**
     * value: "in progress"
     * @const
     */
    "in progress": "in progress",

    /**
     * value: "completed"
     * @const
     */
    "completed": "completed",

    /**
     * value: "failed"
     * @const
     */
    "failed": "failed"
};



export default WafFirewallVersionResponseDataAttributesAllOf;

