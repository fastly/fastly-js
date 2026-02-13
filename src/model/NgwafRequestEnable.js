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
 * The NgwafRequestEnable model module.
 * @module model/NgwafRequestEnable
 * @version 15.0.0-beta.2
 */
class NgwafRequestEnable {
    /**
     * Constructs a new <code>NgwafRequestEnable</code>.
     * @alias module:model/NgwafRequestEnable
     * @param workspace_id {String} The workspace to link.
     */
    constructor(workspace_id) { 
        
        NgwafRequestEnable.initialize(this, workspace_id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, workspace_id) { 
        obj['workspace_id'] = workspace_id;
    }

    /**
     * Constructs a <code>NgwafRequestEnable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NgwafRequestEnable} obj Optional instance to populate.
     * @return {module:model/NgwafRequestEnable} The populated <code>NgwafRequestEnable</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NgwafRequestEnable();

            if (data.hasOwnProperty('workspace_id')) {
                obj['workspace_id'] = ApiClient.convertToType(data['workspace_id'], 'String');
            }
            if (data.hasOwnProperty('traffic_ramp')) {
                obj['traffic_ramp'] = ApiClient.convertToType(data['traffic_ramp'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The workspace to link.
 * @member {String} workspace_id
 */
NgwafRequestEnable.prototype['workspace_id'] = undefined;

/**
 * The percentage of traffic to inspect.
 * @member {String} traffic_ramp
 */
NgwafRequestEnable.prototype['traffic_ramp'] = undefined;






export default NgwafRequestEnable;

