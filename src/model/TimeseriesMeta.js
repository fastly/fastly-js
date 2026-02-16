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
 * The TimeseriesMeta model module.
 * @module model/TimeseriesMeta
 * @version 15.0.0
 */
class TimeseriesMeta {
    /**
     * Constructs a new <code>TimeseriesMeta</code>.
     * @alias module:model/TimeseriesMeta
     */
    constructor() { 
        
        TimeseriesMeta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TimeseriesMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimeseriesMeta} obj Optional instance to populate.
     * @return {module:model/TimeseriesMeta} The populated <code>TimeseriesMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TimeseriesMeta();

            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'String');
            }
            if (data.hasOwnProperty('granularity')) {
                obj['granularity'] = ApiClient.convertToType(data['granularity'], 'String');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Start time for the query as supplied in the request.
 * @member {String} from
 */
TimeseriesMeta.prototype['from'] = undefined;

/**
 * End time for the query as supplied in the request.
 * @member {String} to
 */
TimeseriesMeta.prototype['to'] = undefined;

/**
 * The granularity of the time buckets in the response.
 * @member {String} granularity
 */
TimeseriesMeta.prototype['granularity'] = undefined;

/**
 * Maximum number of results returned in the request.
 * @member {String} limit
 */
TimeseriesMeta.prototype['limit'] = undefined;






export default TimeseriesMeta;

