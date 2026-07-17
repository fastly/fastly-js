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
 * The Report model module.
 * @module model/Report
 * @version 16.0.0
 */
class Report {
    /**
     * Constructs a new <code>Report</code>.
     * @alias module:model/Report
     */
    constructor() { 
        
        Report.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Report</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Report} obj Optional instance to populate.
     * @return {module:model/Report} The populated <code>Report</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Report();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('policy_id')) {
                obj['policy_id'] = ApiClient.convertToType(data['policy_id'], 'String');
            }
            if (data.hasOwnProperty('blocked_uri')) {
                obj['blocked_uri'] = ApiClient.convertToType(data['blocked_uri'], 'String');
            }
            if (data.hasOwnProperty('document_uri')) {
                obj['document_uri'] = ApiClient.convertToType(data['document_uri'], 'String');
            }
            if (data.hasOwnProperty('violated_directive')) {
                obj['violated_directive'] = ApiClient.convertToType(data['violated_directive'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Report.prototype['id'] = undefined;

/**
 * @member {String} policy_id
 */
Report.prototype['policy_id'] = undefined;

/**
 * @member {String} blocked_uri
 */
Report.prototype['blocked_uri'] = undefined;

/**
 * @member {String} document_uri
 */
Report.prototype['document_uri'] = undefined;

/**
 * @member {String} violated_directive
 */
Report.prototype['violated_directive'] = undefined;

/**
 * @member {Date} created_at
 */
Report.prototype['created_at'] = undefined;






export default Report;

