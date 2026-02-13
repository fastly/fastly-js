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
 * The PlatformMetadata model module.
 * @module model/PlatformMetadata
 * @version 15.0.0-beta.1
 */
class PlatformMetadata {
    /**
     * Constructs a new <code>PlatformMetadata</code>.
     * Meta information about the scope of the query in a human readable format.
     * @alias module:model/PlatformMetadata
     */
    constructor() { 
        
        PlatformMetadata.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PlatformMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PlatformMetadata} obj Optional instance to populate.
     * @return {module:model/PlatformMetadata} The populated <code>PlatformMetadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PlatformMetadata();

            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'Date');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'Date');
            }
            if (data.hasOwnProperty('next_cursor')) {
                obj['next_cursor'] = ApiClient.convertToType(data['next_cursor'], 'String');
            }
            if (data.hasOwnProperty('group_by')) {
                obj['group_by'] = ApiClient.convertToType(data['group_by'], 'String');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * An RFC-8339-formatted date and time indicating the inclusive start of the query time range.
 * @member {Date} from
 */
PlatformMetadata.prototype['from'] = undefined;

/**
 * An RFC-8339-formatted date and time indicating the exclusive end of the query time range.
 * @member {Date} to
 */
PlatformMetadata.prototype['to'] = undefined;

/**
 * A string that can be used to request the next page of results, if any.
 * @member {String} next_cursor
 */
PlatformMetadata.prototype['next_cursor'] = undefined;

/**
 * A comma-separated list of fields used to group and order the results.
 * @member {String} group_by
 */
PlatformMetadata.prototype['group_by'] = undefined;

/**
 * The maximum number of results to return.
 * @member {Number} limit
 */
PlatformMetadata.prototype['limit'] = undefined;






export default PlatformMetadata;

