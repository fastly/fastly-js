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
import HistoricalOriginsResponseAllOf from './HistoricalOriginsResponseAllOf';
import OriginInspectorEntry from './OriginInspectorEntry';
import OriginInspectorHistorical from './OriginInspectorHistorical';
import OriginInspectorHistoricalMeta from './OriginInspectorHistoricalMeta';

/**
 * The HistoricalOriginsResponse model module.
 * @module model/HistoricalOriginsResponse
 * @version 14.0.0
 */
class HistoricalOriginsResponse {
    /**
     * Constructs a new <code>HistoricalOriginsResponse</code>.
     * @alias module:model/HistoricalOriginsResponse
     * @implements module:model/OriginInspectorHistorical
     * @implements module:model/HistoricalOriginsResponseAllOf
     */
    constructor() { 
        OriginInspectorHistorical.initialize(this);HistoricalOriginsResponseAllOf.initialize(this);
        HistoricalOriginsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HistoricalOriginsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoricalOriginsResponse} obj Optional instance to populate.
     * @return {module:model/HistoricalOriginsResponse} The populated <code>HistoricalOriginsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HistoricalOriginsResponse();
            OriginInspectorHistorical.constructFromObject(data, obj);
            HistoricalOriginsResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = OriginInspectorHistoricalMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('msg')) {
                obj['msg'] = ApiClient.convertToType(data['msg'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [OriginInspectorEntry]);
            }
        }
        return obj;
    }


}

/**
 * Whether or not we were able to successfully execute the query.
 * @member {String} status
 */
HistoricalOriginsResponse.prototype['status'] = undefined;

/**
 * @member {module:model/OriginInspectorHistoricalMeta} meta
 */
HistoricalOriginsResponse.prototype['meta'] = undefined;

/**
 * If the query was not successful, this will provide a string that explains why.
 * @member {String} msg
 */
HistoricalOriginsResponse.prototype['msg'] = undefined;

/**
 * A list of timeseries. Each individual timeseries represents a unique combination of dimensions, such as origin host, region or POP.
 * @member {Array.<module:model/OriginInspectorEntry>} data
 */
HistoricalOriginsResponse.prototype['data'] = undefined;


// Implement OriginInspectorHistorical interface:
/**
 * Whether or not we were able to successfully execute the query.
 * @member {String} status
 */
OriginInspectorHistorical.prototype['status'] = undefined;
/**
 * @member {module:model/OriginInspectorHistoricalMeta} meta
 */
OriginInspectorHistorical.prototype['meta'] = undefined;
/**
 * If the query was not successful, this will provide a string that explains why.
 * @member {String} msg
 */
OriginInspectorHistorical.prototype['msg'] = undefined;
/**
 * A list of [entries](#entry-data-model), each representing one unique combination of dimensions, such as origin host, region or POP.
 * @member {Array.<module:model/OriginInspectorHistoricalData>} data
 */
OriginInspectorHistorical.prototype['data'] = undefined;
// Implement HistoricalOriginsResponseAllOf interface:
/**
 * A list of timeseries. Each individual timeseries represents a unique combination of dimensions, such as origin host, region or POP.
 * @member {Array.<module:model/OriginInspectorEntry>} data
 */
HistoricalOriginsResponseAllOf.prototype['data'] = undefined;




export default HistoricalOriginsResponse;

