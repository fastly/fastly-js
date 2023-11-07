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
import RealtimeEntryAggregated from './RealtimeEntryAggregated';
import RealtimeEntryRecorded from './RealtimeEntryRecorded';
import RealtimeMeasurements from './RealtimeMeasurements';

/**
 * The RealtimeEntry model module.
 * @module model/RealtimeEntry
 * @version 6.2.2
 */
class RealtimeEntry {
    /**
     * Constructs a new <code>RealtimeEntry</code>.
     * A list of records, each representing one second of time. The &#x60;Data&#x60; property provides access to [measurement data](#measurements-data-model) for that time period, grouped in various ways.
     * @alias module:model/RealtimeEntry
     */
    constructor() { 
        
        RealtimeEntry.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RealtimeEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RealtimeEntry} obj Optional instance to populate.
     * @return {module:model/RealtimeEntry} The populated <code>RealtimeEntry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RealtimeEntry();

            if (data.hasOwnProperty('recorded')) {
                obj['recorded'] = RealtimeEntryRecorded.constructFromObject(data['recorded']);
            }
            if (data.hasOwnProperty('aggregated')) {
                obj['aggregated'] = RealtimeEntryAggregated.constructFromObject(data['aggregated']);
            }
            if (data.hasOwnProperty('datacenter')) {
                obj['datacenter'] = ApiClient.convertToType(data['datacenter'], {'String': RealtimeMeasurements});
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/RealtimeEntryRecorded} recorded
 */
RealtimeEntry.prototype['recorded'] = undefined;

/**
 * @member {module:model/RealtimeEntryAggregated} aggregated
 */
RealtimeEntry.prototype['aggregated'] = undefined;

/**
 * Groups [measurements](#measurements-data-model) by POP. See the [POPs API](/reference/api/utils/pops/) for details of POP identifiers.
 * @member {Object.<String, module:model/RealtimeMeasurements>} datacenter
 */
RealtimeEntry.prototype['datacenter'] = undefined;






export default RealtimeEntry;

