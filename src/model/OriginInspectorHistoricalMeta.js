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
import OriginInspectorHistoricalMetaFilters from './OriginInspectorHistoricalMetaFilters';

/**
 * The OriginInspectorHistoricalMeta model module.
 * @module model/OriginInspectorHistoricalMeta
 * @version 7.8.0
 */
class OriginInspectorHistoricalMeta {
    /**
     * Constructs a new <code>OriginInspectorHistoricalMeta</code>.
     * Meta information about the scope of the query in a human readable format.
     * @alias module:model/OriginInspectorHistoricalMeta
     */
    constructor() { 
        
        OriginInspectorHistoricalMeta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OriginInspectorHistoricalMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OriginInspectorHistoricalMeta} obj Optional instance to populate.
     * @return {module:model/OriginInspectorHistoricalMeta} The populated <code>OriginInspectorHistoricalMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OriginInspectorHistoricalMeta();

            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'String');
            }
            if (data.hasOwnProperty('end')) {
                obj['end'] = ApiClient.convertToType(data['end'], 'String');
            }
            if (data.hasOwnProperty('downsample')) {
                obj['downsample'] = ApiClient.convertToType(data['downsample'], 'String');
            }
            if (data.hasOwnProperty('metrics')) {
                obj['metrics'] = ApiClient.convertToType(data['metrics'], 'String');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('next_cursor')) {
                obj['next_cursor'] = ApiClient.convertToType(data['next_cursor'], 'String');
            }
            if (data.hasOwnProperty('sort')) {
                obj['sort'] = ApiClient.convertToType(data['sort'], 'String');
            }
            if (data.hasOwnProperty('group_by')) {
                obj['group_by'] = ApiClient.convertToType(data['group_by'], 'String');
            }
            if (data.hasOwnProperty('filters')) {
                obj['filters'] = OriginInspectorHistoricalMetaFilters.constructFromObject(data['filters']);
            }
        }
        return obj;
    }


}

/**
 * Start time that was used to perform the query as an ISO-8601-formatted date and time.
 * @member {String} start
 */
OriginInspectorHistoricalMeta.prototype['start'] = undefined;

/**
 * End time that was used to perform the query as an ISO-8601-formatted date and time.
 * @member {String} end
 */
OriginInspectorHistoricalMeta.prototype['end'] = undefined;

/**
 * Downsample that was used to perform the query. One of `minute`, `hour` or `day`.
 * @member {String} downsample
 */
OriginInspectorHistoricalMeta.prototype['downsample'] = undefined;

/**
 * A comma-separated list of the metrics that were requested.
 * @member {String} metrics
 */
OriginInspectorHistoricalMeta.prototype['metrics'] = undefined;

/**
 * The maximum number of results shown per page.
 * @member {Number} limit
 */
OriginInspectorHistoricalMeta.prototype['limit'] = undefined;

/**
 * A string that can be used to request the next page of results, if any.
 * @member {String} next_cursor
 */
OriginInspectorHistoricalMeta.prototype['next_cursor'] = undefined;

/**
 * A comma-separated list of keys the results are sorted by.
 * @member {String} sort
 */
OriginInspectorHistoricalMeta.prototype['sort'] = undefined;

/**
 * A comma-separated list of dimensions being summed over in the query.
 * @member {String} group_by
 */
OriginInspectorHistoricalMeta.prototype['group_by'] = undefined;

/**
 * @member {module:model/OriginInspectorHistoricalMetaFilters} filters
 */
OriginInspectorHistoricalMeta.prototype['filters'] = undefined;






export default OriginInspectorHistoricalMeta;

