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
import OriginInspectorHistoricalData from './OriginInspectorHistoricalData';
import OriginInspectorHistoricalMeta from './OriginInspectorHistoricalMeta';

/**
 * The OriginInspectorHistorical model module.
 * @module model/OriginInspectorHistorical
 * @version 7.3.0
 */
class OriginInspectorHistorical {
    /**
     * Constructs a new <code>OriginInspectorHistorical</code>.
     * @alias module:model/OriginInspectorHistorical
     */
    constructor() { 
        
        OriginInspectorHistorical.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OriginInspectorHistorical</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OriginInspectorHistorical} obj Optional instance to populate.
     * @return {module:model/OriginInspectorHistorical} The populated <code>OriginInspectorHistorical</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OriginInspectorHistorical();

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
                obj['data'] = ApiClient.convertToType(data['data'], [OriginInspectorHistoricalData]);
            }
        }
        return obj;
    }


}

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






export default OriginInspectorHistorical;

