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
import ReadOnlyServiceId from './ReadOnlyServiceId';
import ReadOnlyVersion from './ReadOnlyVersion';

/**
 * The LegacyWafFirewall model module.
 * @module model/LegacyWafFirewall
 * @version 7.2.0
 */
class LegacyWafFirewall {
    /**
     * Constructs a new <code>LegacyWafFirewall</code>.
     * @alias module:model/LegacyWafFirewall
     */
    constructor() { 
        
        LegacyWafFirewall.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LegacyWafFirewall</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LegacyWafFirewall} obj Optional instance to populate.
     * @return {module:model/LegacyWafFirewall} The populated <code>LegacyWafFirewall</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LegacyWafFirewall();

            if (data.hasOwnProperty('last_push')) {
                obj['last_push'] = ApiClient.convertToType(data['last_push'], 'String');
            }
            if (data.hasOwnProperty('prefetch_condition')) {
                obj['prefetch_condition'] = ApiClient.convertToType(data['prefetch_condition'], 'String');
            }
            if (data.hasOwnProperty('response')) {
                obj['response'] = ApiClient.convertToType(data['response'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ReadOnlyVersion.constructFromObject(data['version']);
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ReadOnlyServiceId.constructFromObject(data['service_id']);
            }
            if (data.hasOwnProperty('disabled')) {
                obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Boolean');
            }
            if (data.hasOwnProperty('rule_statuses_log_count')) {
                obj['rule_statuses_log_count'] = ApiClient.convertToType(data['rule_statuses_log_count'], 'Number');
            }
            if (data.hasOwnProperty('rule_statuses_block_count')) {
                obj['rule_statuses_block_count'] = ApiClient.convertToType(data['rule_statuses_block_count'], 'Number');
            }
            if (data.hasOwnProperty('rule_statuses_disabled_count')) {
                obj['rule_statuses_disabled_count'] = ApiClient.convertToType(data['rule_statuses_disabled_count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Date and time that VCL was last pushed to cache nodes.
 * @member {String} last_push
 */
LegacyWafFirewall.prototype['last_push'] = undefined;

/**
 * Name of the corresponding condition object.
 * @member {String} prefetch_condition
 */
LegacyWafFirewall.prototype['prefetch_condition'] = undefined;

/**
 * Name of the corresponding response object.
 * @member {String} response
 */
LegacyWafFirewall.prototype['response'] = undefined;

/**
 * @member {module:model/ReadOnlyVersion} version
 */
LegacyWafFirewall.prototype['version'] = undefined;

/**
 * @member {module:model/ReadOnlyServiceId} service_id
 */
LegacyWafFirewall.prototype['service_id'] = undefined;

/**
 * The status of the firewall.
 * @member {Boolean} disabled
 * @default false
 */
LegacyWafFirewall.prototype['disabled'] = false;

/**
 * The number of rule statuses set to log.
 * @member {Number} rule_statuses_log_count
 */
LegacyWafFirewall.prototype['rule_statuses_log_count'] = undefined;

/**
 * The number of rule statuses set to block.
 * @member {Number} rule_statuses_block_count
 */
LegacyWafFirewall.prototype['rule_statuses_block_count'] = undefined;

/**
 * The number of rule statuses set to disabled.
 * @member {Number} rule_statuses_disabled_count
 */
LegacyWafFirewall.prototype['rule_statuses_disabled_count'] = undefined;






export default LegacyWafFirewall;

