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
 * The AttackSignal model module.
 * @module model/AttackSignal
 * @version 14.0.0
 */
class AttackSignal {
    /**
     * Constructs a new <code>AttackSignal</code>.
     * @alias module:model/AttackSignal
     * @param tag_name {String} Name of the attack signal tag
     * @param tag_count {Number} Count of requests with this attack signal
     * @param total_count {Number} Total number of attacks considered
     */
    constructor(tag_name, tag_count, total_count) { 
        
        AttackSignal.initialize(this, tag_name, tag_count, total_count);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, tag_name, tag_count, total_count) { 
        obj['tag_name'] = tag_name;
        obj['tag_count'] = tag_count;
        obj['total_count'] = total_count;
    }

    /**
     * Constructs a <code>AttackSignal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttackSignal} obj Optional instance to populate.
     * @return {module:model/AttackSignal} The populated <code>AttackSignal</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AttackSignal();

            if (data.hasOwnProperty('tag_name')) {
                obj['tag_name'] = ApiClient.convertToType(data['tag_name'], 'String');
            }
            if (data.hasOwnProperty('tag_count')) {
                obj['tag_count'] = ApiClient.convertToType(data['tag_count'], 'Number');
            }
            if (data.hasOwnProperty('total_count')) {
                obj['total_count'] = ApiClient.convertToType(data['total_count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Name of the attack signal tag
 * @member {String} tag_name
 */
AttackSignal.prototype['tag_name'] = undefined;

/**
 * Count of requests with this attack signal
 * @member {Number} tag_count
 */
AttackSignal.prototype['tag_count'] = undefined;

/**
 * Total number of attacks considered
 * @member {Number} total_count
 */
AttackSignal.prototype['total_count'] = undefined;






export default AttackSignal;

