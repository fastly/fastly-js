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
 * The AutomationTokenWorkspacesMeta model module.
 * @module model/AutomationTokenWorkspacesMeta
 * @version 17.0.0
 */
class AutomationTokenWorkspacesMeta {
    /**
     * Constructs a new <code>AutomationTokenWorkspacesMeta</code>.
     * @alias module:model/AutomationTokenWorkspacesMeta
     * @param limit {Number} Number of results requested.
     */
    constructor(limit) { 
        
        AutomationTokenWorkspacesMeta.initialize(this, limit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, limit) { 
        obj['limit'] = limit;
    }

    /**
     * Constructs a <code>AutomationTokenWorkspacesMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutomationTokenWorkspacesMeta} obj Optional instance to populate.
     * @return {module:model/AutomationTokenWorkspacesMeta} The populated <code>AutomationTokenWorkspacesMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AutomationTokenWorkspacesMeta();

            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('next_cursor')) {
                obj['next_cursor'] = ApiClient.convertToType(data['next_cursor'], 'String');
            }
            if (data.hasOwnProperty('previous_cursor')) {
                obj['previous_cursor'] = ApiClient.convertToType(data['previous_cursor'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Number of results requested.
 * @member {Number} limit
 */
AutomationTokenWorkspacesMeta.prototype['limit'] = undefined;

/**
 * Cursor for the next page. Empty string when there are no more results.
 * @member {String} next_cursor
 */
AutomationTokenWorkspacesMeta.prototype['next_cursor'] = undefined;

/**
 * Cursor for the previous page. Empty string when on the first page.
 * @member {String} previous_cursor
 */
AutomationTokenWorkspacesMeta.prototype['previous_cursor'] = undefined;






export default AutomationTokenWorkspacesMeta;

