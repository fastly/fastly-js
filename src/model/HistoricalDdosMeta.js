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
 * The HistoricalDdosMeta model module.
 * @module model/HistoricalDdosMeta
 * @version 7.0.1
 */
class HistoricalDdosMeta {
    /**
     * Constructs a new <code>HistoricalDdosMeta</code>.
     * Meta information about the scope of the query in a human readable format.
     * @alias module:model/HistoricalDdosMeta
     */
    constructor() { 
        
        HistoricalDdosMeta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HistoricalDdosMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoricalDdosMeta} obj Optional instance to populate.
     * @return {module:model/HistoricalDdosMeta} The populated <code>HistoricalDdosMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HistoricalDdosMeta();

            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'String');
            }
            if (data.hasOwnProperty('end')) {
                obj['end'] = ApiClient.convertToType(data['end'], 'String');
            }
            if (data.hasOwnProperty('downsample')) {
                obj['downsample'] = ApiClient.convertToType(data['downsample'], 'String');
            }
            if (data.hasOwnProperty('metric')) {
                obj['metric'] = ApiClient.convertToType(data['metric'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Start time that was used to perform the query as an ISO-8601-formatted date and time.
 * @member {String} start
 */
HistoricalDdosMeta.prototype['start'] = undefined;

/**
 * End time that was used to perform the query as an ISO-8601-formatted date and time.
 * @member {String} end
 */
HistoricalDdosMeta.prototype['end'] = undefined;

/**
 * Downsample that was used to perform the query. One of `hour` or `day`.
 * @member {String} downsample
 */
HistoricalDdosMeta.prototype['downsample'] = undefined;

/**
 * A comma-separated list of the metrics that were requested.
 * @member {String} metric
 */
HistoricalDdosMeta.prototype['metric'] = undefined;






export default HistoricalDdosMeta;

