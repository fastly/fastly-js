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
import TopWorkspace from './TopWorkspace';

/**
 * The SignalReport model module.
 * @module model/SignalReport
 * @version 15.0.0-beta.3
 */
class SignalReport {
    /**
     * Constructs a new <code>SignalReport</code>.
     * @alias module:model/SignalReport
     */
    constructor() { 
        
        SignalReport.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SignalReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SignalReport} obj Optional instance to populate.
     * @return {module:model/SignalReport} The populated <code>SignalReport</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignalReport();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('display_name')) {
                obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('top_workspaces')) {
                obj['top_workspaces'] = ApiClient.convertToType(data['top_workspaces'], [TopWorkspace]);
            }
        }
        return obj;
    }


}

/**
 * Name of the attack type.
 * @member {String} name
 */
SignalReport.prototype['name'] = undefined;

/**
 * Display name of the attack type.
 * @member {String} display_name
 */
SignalReport.prototype['display_name'] = undefined;

/**
 * Total count of attacks of this type.
 * @member {Number} count
 */
SignalReport.prototype['count'] = undefined;

/**
 * Top workspaces affected by this attack type.
 * @member {Array.<module:model/TopWorkspace>} top_workspaces
 */
SignalReport.prototype['top_workspaces'] = undefined;






export default SignalReport;

