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
import RealtimeEntry from './RealtimeEntry';

/**
 * The Realtime model module.
 * @module model/Realtime
 * @version 12.1.0
 */
class Realtime {
    /**
     * Constructs a new <code>Realtime</code>.
     * @alias module:model/Realtime
     */
    constructor() { 
        
        Realtime.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Realtime</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Realtime} obj Optional instance to populate.
     * @return {module:model/Realtime} The populated <code>Realtime</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Realtime();

            if (data.hasOwnProperty('Timestamp')) {
                obj['Timestamp'] = ApiClient.convertToType(data['Timestamp'], 'Number');
            }
            if (data.hasOwnProperty('AggregateDelay')) {
                obj['AggregateDelay'] = ApiClient.convertToType(data['AggregateDelay'], 'Number');
            }
            if (data.hasOwnProperty('Data')) {
                obj['Data'] = ApiClient.convertToType(data['Data'], [RealtimeEntry]);
            }
        }
        return obj;
    }


}

/**
 * Value to use for subsequent requests.
 * @member {Number} Timestamp
 */
Realtime.prototype['Timestamp'] = undefined;

/**
 * How long the system will wait before aggregating messages for each second. The most recent data returned will have happened at the moment of the request, minus the aggregation delay.
 * @member {Number} AggregateDelay
 */
Realtime.prototype['AggregateDelay'] = undefined;

/**
 * A list of [records](#record-data-model), each representing one second of time.
 * @member {Array.<module:model/RealtimeEntry>} Data
 */
Realtime.prototype['Data'] = undefined;






export default Realtime;

