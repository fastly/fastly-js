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
import AutomationTokenWorkspace from './AutomationTokenWorkspace';
import AutomationTokenWorkspacesMeta from './AutomationTokenWorkspacesMeta';

/**
 * The AutomationTokenWorkspacesResponse model module.
 * @module model/AutomationTokenWorkspacesResponse
 * @version 17.0.0
 */
class AutomationTokenWorkspacesResponse {
    /**
     * Constructs a new <code>AutomationTokenWorkspacesResponse</code>.
     * @alias module:model/AutomationTokenWorkspacesResponse
     * @param data {Array.<module:model/AutomationTokenWorkspace>} Workspaces the token can access. Empty if the token has no workspace-specific permissions or if `limit_workspaces` is `false` (unrestricted access).
     * @param meta {module:model/AutomationTokenWorkspacesMeta} 
     * @param limit_workspaces {Boolean} Indicates whether workspace access is restricted: - `true`: Token can only access workspaces listed in `data` - `false`: Token has unrestricted access to all workspaces 
     */
    constructor(data, meta, limit_workspaces) { 
        
        AutomationTokenWorkspacesResponse.initialize(this, data, meta, limit_workspaces);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, data, meta, limit_workspaces) { 
        obj['data'] = data;
        obj['meta'] = meta;
        obj['limit_workspaces'] = limit_workspaces;
    }

    /**
     * Constructs a <code>AutomationTokenWorkspacesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutomationTokenWorkspacesResponse} obj Optional instance to populate.
     * @return {module:model/AutomationTokenWorkspacesResponse} The populated <code>AutomationTokenWorkspacesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AutomationTokenWorkspacesResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [AutomationTokenWorkspace]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = AutomationTokenWorkspacesMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('limit_workspaces')) {
                obj['limit_workspaces'] = ApiClient.convertToType(data['limit_workspaces'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Workspaces the token can access. Empty if the token has no workspace-specific permissions or if `limit_workspaces` is `false` (unrestricted access).
 * @member {Array.<module:model/AutomationTokenWorkspace>} data
 */
AutomationTokenWorkspacesResponse.prototype['data'] = undefined;

/**
 * @member {module:model/AutomationTokenWorkspacesMeta} meta
 */
AutomationTokenWorkspacesResponse.prototype['meta'] = undefined;

/**
 * Indicates whether workspace access is restricted: - `true`: Token can only access workspaces listed in `data` - `false`: Token has unrestricted access to all workspaces 
 * @member {Boolean} limit_workspaces
 */
AutomationTokenWorkspacesResponse.prototype['limit_workspaces'] = undefined;






export default AutomationTokenWorkspacesResponse;

