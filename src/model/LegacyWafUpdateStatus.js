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

/**
 * The LegacyWafUpdateStatus model module.
 * @module model/LegacyWafUpdateStatus
 * @version 7.0.0
 */
class LegacyWafUpdateStatus {
    /**
     * Constructs a new <code>LegacyWafUpdateStatus</code>.
     * @alias module:model/LegacyWafUpdateStatus
     */
    constructor() { 
        
        LegacyWafUpdateStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LegacyWafUpdateStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LegacyWafUpdateStatus} obj Optional instance to populate.
     * @return {module:model/LegacyWafUpdateStatus} The populated <code>LegacyWafUpdateStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LegacyWafUpdateStatus();

            if (data.hasOwnProperty('completed_at')) {
                obj['completed_at'] = ApiClient.convertToType(data['completed_at'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Date and time that job was completed.
 * @member {String} completed_at
 */
LegacyWafUpdateStatus.prototype['completed_at'] = undefined;

/**
 * Date and time that job was created.
 * @member {String} created_at
 */
LegacyWafUpdateStatus.prototype['created_at'] = undefined;

/**
 * This field can contain data passed to the background worker as well as output from the background job.
 * @member {String} data
 */
LegacyWafUpdateStatus.prototype['data'] = undefined;

/**
 * Message with information about the status of the update.
 * @member {String} message
 */
LegacyWafUpdateStatus.prototype['message'] = undefined;

/**
 * Current status of the update.
 * @member {String} status
 */
LegacyWafUpdateStatus.prototype['status'] = undefined;

/**
 * Date and time that job was last updated.
 * @member {String} updated_at
 */
LegacyWafUpdateStatus.prototype['updated_at'] = undefined;






export default LegacyWafUpdateStatus;

