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
import AttackSignal from './AttackSignal';
import AttackSource from './AttackSource';

/**
 * The AttackReport model module.
 * @module model/AttackReport
 * @version 15.0.0-beta.1
 */
class AttackReport {
    /**
     * Constructs a new <code>AttackReport</code>.
     * @alias module:model/AttackReport
     * @param id {String} ID of the workspace.
     * @param name {String} Name of the workspace.
     * @param total_count {Number} Total request count
     * @param blocked_count {Number} Blocked request count
     * @param flagged_count {Number} Flagged request count
     * @param attack_count {Number} Attack request count
     * @param all_flagged_ip_count {Number} Count of IPs that have been flagged
     * @param flagged_ip_count {Number} Count of currently flagged IPs
     * @param top_attack_signals {Array.<module:model/AttackSignal>} 
     * @param top_attack_sources {Array.<module:model/AttackSource>} 
     */
    constructor(id, name, total_count, blocked_count, flagged_count, attack_count, all_flagged_ip_count, flagged_ip_count, top_attack_signals, top_attack_sources) { 
        
        AttackReport.initialize(this, id, name, total_count, blocked_count, flagged_count, attack_count, all_flagged_ip_count, flagged_ip_count, top_attack_signals, top_attack_sources);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, total_count, blocked_count, flagged_count, attack_count, all_flagged_ip_count, flagged_ip_count, top_attack_signals, top_attack_sources) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['total_count'] = total_count;
        obj['blocked_count'] = blocked_count;
        obj['flagged_count'] = flagged_count;
        obj['attack_count'] = attack_count;
        obj['all_flagged_ip_count'] = all_flagged_ip_count;
        obj['flagged_ip_count'] = flagged_ip_count;
        obj['top_attack_signals'] = top_attack_signals;
        obj['top_attack_sources'] = top_attack_sources;
    }

    /**
     * Constructs a <code>AttackReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttackReport} obj Optional instance to populate.
     * @return {module:model/AttackReport} The populated <code>AttackReport</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AttackReport();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('total_count')) {
                obj['total_count'] = ApiClient.convertToType(data['total_count'], 'Number');
            }
            if (data.hasOwnProperty('blocked_count')) {
                obj['blocked_count'] = ApiClient.convertToType(data['blocked_count'], 'Number');
            }
            if (data.hasOwnProperty('flagged_count')) {
                obj['flagged_count'] = ApiClient.convertToType(data['flagged_count'], 'Number');
            }
            if (data.hasOwnProperty('attack_count')) {
                obj['attack_count'] = ApiClient.convertToType(data['attack_count'], 'Number');
            }
            if (data.hasOwnProperty('all_flagged_ip_count')) {
                obj['all_flagged_ip_count'] = ApiClient.convertToType(data['all_flagged_ip_count'], 'Number');
            }
            if (data.hasOwnProperty('flagged_ip_count')) {
                obj['flagged_ip_count'] = ApiClient.convertToType(data['flagged_ip_count'], 'Number');
            }
            if (data.hasOwnProperty('top_attack_signals')) {
                obj['top_attack_signals'] = ApiClient.convertToType(data['top_attack_signals'], [AttackSignal]);
            }
            if (data.hasOwnProperty('top_attack_sources')) {
                obj['top_attack_sources'] = ApiClient.convertToType(data['top_attack_sources'], [AttackSource]);
            }
        }
        return obj;
    }


}

/**
 * ID of the workspace.
 * @member {String} id
 */
AttackReport.prototype['id'] = undefined;

/**
 * Name of the workspace.
 * @member {String} name
 */
AttackReport.prototype['name'] = undefined;

/**
 * Total request count
 * @member {Number} total_count
 */
AttackReport.prototype['total_count'] = undefined;

/**
 * Blocked request count
 * @member {Number} blocked_count
 */
AttackReport.prototype['blocked_count'] = undefined;

/**
 * Flagged request count
 * @member {Number} flagged_count
 */
AttackReport.prototype['flagged_count'] = undefined;

/**
 * Attack request count
 * @member {Number} attack_count
 */
AttackReport.prototype['attack_count'] = undefined;

/**
 * Count of IPs that have been flagged
 * @member {Number} all_flagged_ip_count
 */
AttackReport.prototype['all_flagged_ip_count'] = undefined;

/**
 * Count of currently flagged IPs
 * @member {Number} flagged_ip_count
 */
AttackReport.prototype['flagged_ip_count'] = undefined;

/**
 * @member {Array.<module:model/AttackSignal>} top_attack_signals
 */
AttackReport.prototype['top_attack_signals'] = undefined;

/**
 * @member {Array.<module:model/AttackSource>} top_attack_sources
 */
AttackReport.prototype['top_attack_sources'] = undefined;






export default AttackReport;

