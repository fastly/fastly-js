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
 * The TopWorkspace model module.
 * @module model/TopWorkspace
 * @version 14.1.0
 */
class TopWorkspace {
    /**
     * Constructs a new <code>TopWorkspace</code>.
     * This object, found within the &#x60;top_workspaces&#x60; array, contains the workspace information and count for the requested signal.
     * @alias module:model/TopWorkspace
     */
    constructor() { 
        
        TopWorkspace.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TopWorkspace</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TopWorkspace} obj Optional instance to populate.
     * @return {module:model/TopWorkspace} The populated <code>TopWorkspace</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TopWorkspace();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * ID of the workspace.
 * @member {String} id
 */
TopWorkspace.prototype['id'] = undefined;

/**
 * Name of the workspace.
 * @member {String} name
 */
TopWorkspace.prototype['name'] = undefined;

/**
 * Count of attacks on this workspace for the specific attack type.
 * @member {Number} count
 */
TopWorkspace.prototype['count'] = undefined;






export default TopWorkspace;

